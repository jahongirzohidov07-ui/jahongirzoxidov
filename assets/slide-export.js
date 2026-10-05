/* Export the authenticated, rendered deck locally. No PIN, notes or scripts leave the page. */
(function () {
  'use strict';
  const libraries = new Map();
  function library(src) {
    if (!libraries.has(src)) libraries.set(src, new Promise((resolve, reject) => {
      const s = document.createElement('script'); s.src = src;
      s.onload = resolve; s.onerror = () => { s.remove(); libraries.delete(src); reject(new Error('Yuklash kutubxonasi ochilmadi. Qayta urinib ko‘ring.')); };
      document.head.appendChild(s);
    }));
    return libraries.get(src);
  }
  window.installSlideExport = function (getDeck, prepare) {
    const buttons = ['exportPdf', 'exportPptx'].map(id => document.getElementById(id));
    const panel = document.getElementById('exportPanel'), status = document.getElementById('exportStatus');
    const cancel = document.getElementById('exportCancel');
    let busy = false, stopped = false, fileUrl;
    const download = document.createElement('a');
    download.textContent = 'Faylni yuklab olish'; download.hidden = true;
    download.style.cssText = 'margin:16px 0;color:inherit;font-weight:700';
    panel.insertBefore(download,cancel);
    cancel.addEventListener('click', () => { stopped = true; if (!busy) panel.hidden = true; });
    async function run(format) {
      if (busy) return;
      const deck = getDeck();
      if (!deck || !deck.slides.length) return;
      if (fileUrl) URL.revokeObjectURL(fileUrl);
      download.hidden = true; download.removeAttribute('href');
      busy = true; stopped = false; buttons.forEach(b => b.disabled = true);
      panel.hidden = false; cancel.textContent = 'Bekor qilish';
      status.textContent = 'Fayl tayyorlanmoqda…';
      let host;
      try {
        await library('/assets/vendor/html-to-image-1.11.13.js');
        await library(format === 'pdf' ? '/assets/vendor/jspdf-3.0.3.umd.min.js' : '/assets/vendor/pptxgen-4.0.1.bundle.js');
        await document.fonts.ready;
        if (stopped) return;
        const fontEmbedCSS = await htmlToImage.getFontEmbedCSS(document.getElementById('stage'));
        let output;
        if (format === 'pdf') {
          output = new jspdf.jsPDF({orientation:'landscape',unit:'pt',format:[1200,675],compress:true});
          output.setProperties({title:deck.lesson.title,author:'Jahongir Zoxidov'});
        } else {
          output = new PptxGenJS(); output.layout = 'LAYOUT_WIDE';
          output.title = deck.lesson.title; output.author = 'Jahongir Zoxidov'; output.subject = 'Dars slaydlari';
        }
        host = document.createElement('div');
        host.setAttribute('aria-hidden','true');
        host.style.cssText = 'position:fixed;left:-20000px;top:0;width:1600px;height:900px;overflow:hidden;pointer-events:none;';
        document.body.appendChild(host);
        const sourceSlides = Array.from(document.querySelectorAll('#stage > .slide'));
        for (let i = 0; i < sourceSlides.length; i++) {
          if (stopped) return;
          status.textContent = format.toUpperCase() + ' tayyorlanmoqda: ' + (i + 1) + ' / ' + sourceSlides.length;
          const slide = sourceSlides[i].cloneNode(true);
          slide.removeAttribute('data-notes'); slide.classList.remove('in','back'); slide.classList.add('active');
          slide.style.cssText = 'position:absolute;inset:0;width:1600px;height:900px;display:flex;';
          slide.querySelectorAll('.frag').forEach(f => f.classList.add('on'));
          slide.querySelectorAll('[data-count]').forEach(v => v.textContent = v.getAttribute('data-count'));
          host.replaceChildren(slide); prepare(slide);
          await Promise.all(Array.from(slide.querySelectorAll('img')).map(img => img.decode()));
          // Freeze all entrance and diagram animations at their final state, including delayed SVG nodes.
          slide.getAnimations({subtree:true}).forEach(a => {
            const timing = a.effect.getComputedTiming();
            if (Number.isFinite(timing.endTime)) a.finish();
            else { a.currentTime = 10000; a.pause(); }
          });
          await new Promise(resolve => requestAnimationFrame(resolve));
          const canvas = await htmlToImage.toCanvas(slide, {width:1600,height:900,pixelRatio:1.5,fontEmbedCSS,backgroundColor:getComputedStyle(slide).backgroundColor});
          if (stopped) return;
          const data = canvas.toDataURL('image/jpeg',0.92);
          if (format === 'pdf') {
            if (i) output.addPage([1200,675],'landscape');
            output.addImage(data,'JPEG',0,0,1200,675,undefined,'FAST');
          } else output.addSlide().addImage({data,x:0,y:0,w:13.333333,h:7.5,altText:slide.innerText});
          canvas.width = canvas.height = 0;
        }
        if (stopped) return;
        status.textContent = 'Fayl saqlanmoqda…';
        const fileName = deck.program.id + '-' + deck.lesson.n + '-' + deck.lesson.title.replace(/[^\p{L}\p{N}-]+/gu,'-') + '.' + format;
        const blob = format === 'pdf' ? output.output('blob') : await output.write({outputType:'blob',compression:true});
        if (stopped) return;
        fileUrl = URL.createObjectURL(blob);
        download.href = fileUrl; download.download = fileName; download.hidden = false; download.click();
        status.textContent = 'Tayyor. ' + format.toUpperCase() + ' tayyor. Yuklash boshlanmasa, quyidagi havolani bosing.';
      } catch (error) {
        status.textContent = 'Fayl tayyorlanmadi. ' + (error.message || 'Qayta urinib ko‘ring.');
      } finally {
        if (host) host.remove();
        if (stopped) status.textContent = 'Yuklab olish bekor qilindi.';
        busy = false; buttons.forEach(b => b.disabled = false); cancel.textContent = 'Yopish';
      }
    }
    buttons[0].addEventListener('click', () => run('pdf'));
    buttons[1].addEventListener('click', () => run('pptx'));
  };
})();
