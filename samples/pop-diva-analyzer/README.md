# Pop Diva Analyzer

A personal little project for scoring **chart momentum**, **vocal runs**, and **stage presence**
for whoever's dominating rotation this quarter. Currently tracking a small, very online roster.

## Why

Mostly an excuse to build something with real-ish data while the girls are eating.

## Modules

- `analyzers/chartMomentumAnalyzer.ts` — weekly chart delta scoring
- `analyzers/vocalRangeAnalyzer.ts` — _not started_
- `analyzers/stagePresenceScorer.ts` — _not started_
- `analyzers/hyperpopEnergyIndex.ts` — _not started_
- `data/artistProfiles.json` — seed data for the current roster

## Notes

> Scores are vibes-based, not scientific. Handle with glitter gloves.

See the [Charli XCX](https://en.wikipedia.org/wiki/Charli_XCX) *brat* rollout for why
`isLowercaseEraTitle` exists.
