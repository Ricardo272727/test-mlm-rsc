# Test MELI :D
- Ricardo Segura Cuanalo, Frontend developer

# Installation and setup
- Install dependencies:
```
$ yarn
```
- Create env file:
```
$ cp .env.example .env
```

# Development lifecycle
- To run the project in development mode:
```
$ yarn dev
```

# Run express api
- Run example api (nodejs 18+)
```
$ yarn run:api
```

# Environment variables
- .env file contains all environment variables (remember vite just inject VITE_ variables in compilation build)
```
API_URL=http://localhost:5400 # example url, (don't include final slash)
```

# Production build
- To compile project in production mode:
```
$ yarn build
```
- Above command will create dist/ folder with production code and html

# Project structure
```
src/
├── assets (images, icons and fonts)
├── components (reusable components)
│   ├── Example 
│       ├── Example.jsx
│       └── Example.scss
├── hooks (business logic)
│   ├── useHttpClient.js
│   └── useSearchResult.js
├── index.scss (reset style sheet)
├── layouts (page fragments, common components between pages)
├── main.jsx (react entry point)
├── pages (pages shown to the end user)
│   ├── ProductDetailPage.jsx
│   ├── SearchBoxPage.jsx
│   └── SearchResultPage.jsx
├── routes
│   └── index.jsx (react-router-dom route definition)
└── theme (common styles)
```
