# QA Automation Demo (Cypress) 🚀

Projet démo pour montrer des compétences SDET/QA :
- E2E UI (login, recherche)
- Tests API
- Page Object Model (POM) léger
- Retries & exécution en parallèle
- Reporting Allure

## Prérequis
- Node.js 18+
- npm

## Installation
```bash
npm install
```

## Lancer les tests en mode headless
```bash
npm test
```

## Ouvrir l'UI Cypress
```bash
npm run cy:open
```

## Générer et ouvrir un rapport Allure
```bash
npm run report:allure
```

## Structure
```
qa-automation-demo-cypress/
├── cypress/
│   ├── e2e/
│   │   ├── login.spec.js
│   │   ├── search.spec.js
│   │   └── api_tests.spec.js
│   ├── fixtures/
│   │   └── users.json
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── reports/                 # Résultats & rapports
├── cypress.config.js
├── package.json
└── README.md
```
