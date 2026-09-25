# Graph Report - jahongirzoxidov  (2026-09-23)

## Corpus Check
- 31 files · ~824,468 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 2 file(s) not represented in the graph (top: (none) 2)

## Summary
- 60 nodes · 60 edges · 28 communities (5 shown, 23 thin omitted)
- Extraction: 85% EXTRACTED · 15% INFERRED · 0% AMBIGUOUS · INFERRED: 9 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8a75bd17`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- stats.js
- util.js
- dastur.js
- view.js
- vercel.json
- ttp-02.js
- ttp-03.js
- CLAUDE.md

## God Nodes (most connected - your core abstractions)
1. `checkPin()` - 6 edges
2. `redis()` - 5 edges
3. `pipeline()` - 4 edges
4. `send()` - 4 edges
5. `configured()` - 3 edges
6. `call()` - 3 edges
7. `clientIp()` - 3 edges
8. `today()` - 3 edges
9. `programs` - 2 edges
10. `hashToObj()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `checkPin()` --calls--> `redis()`  [EXTRACTED]
  api/_lib/util.js → api/_lib/redis.js

## Import Cycles
- None detected.

## Communities (28 total, 23 thin omitted)

### Community 0 - "stats.js"
Cohesion: 0.31
Nodes (8): call(), configured(), hashToObj(), pipeline(), redis(), today(), { configured, pipeline, hashToObj }, { today, send, checkPin }

### Community 1 - "util.js"
Cohesion: 0.38
Nodes (6): checkPin(), clientIp(), crypto, readJson(), { redis }, safeEqual()

### Community 2 - "dastur.js"
Cohesion: 0.40
Nodes (4): { programs }, { send, checkPin }, programs, send()

### Community 3 - "view.js"
Cohesion: 0.40
Nodes (4): { clientIp, today, readJson, send }, { configured, redis, pipeline }, crypto, ref_crypto

### Community 4 - "vercel.json"
Cohesion: 0.50
Nodes (3): cleanUrls, headers, trailingSlash

## Knowledge Gaps
- **17 isolated node(s):** `POINTS`, `slides`, `POINTS`, `slides`, `crypto` (+12 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 38 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **23 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `checkPin()` connect `util.js` to `stats.js`, `dastur.js`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `send()` connect `dastur.js` to `stats.js`, `util.js`, `view.js`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Why does `redis()` connect `stats.js` to `util.js`, `view.js`?**
  _High betweenness centrality (0.007) - this node is a cross-community bridge._
- **What connects `POINTS`, `slides`, `POINTS` to the rest of the system?**
  _17 weakly-connected nodes found - possible documentation gaps or missing edges._