# orbit

Flagship repository for the full intelligent cloud SaaS ecosystem.

## Mission

`orbit` is the center of gravity for the ecosystem: product, backend, AI, data, infrastructure, security, observability, and developer tooling all connect here.

## Why this repo exists

The surrounding repos each focus on one slice. This repo is where they converge into a realistic end-to-end platform.

## Role in the ecosystem

- Flagship downstream consumer of nearly every repo
- Architecture anchor for `summit`
- Connected to `synapse`, `flux`, `nimbus`, `aegis`, and `beacon`

## Current status

Level 3 flagship starter with architecture docs and a small executable TypeScript service shell.

## Tech stack

- TypeScript
- Node.js
- Markdown

## Structure

```text
orbit/
├── docs/
│   ├── architecture.md
│   └── ecosystem-map.md
├── src/
│   ├── index.ts
│   └── platform.ts
├── .editorconfig
├── .gitignore
├── README.md
├── ROADMAP.md
├── package.json
└── tsconfig.json
```

## Getting started

```bash
npm install
npm run build
node dist/index.js
```

## Related repositories

- upstream: `synapse`, `flux`, `nimbus`, `aegis`, `beacon`
- neighboring: `summit`, `cosmos`
- tooling: `forge`, `relay`

## Future direction

This should become the strongest portfolio repo in the set: architecture-rich, implementation-led, and visibly connected to the others.
