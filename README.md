# es6-bundle-splitter

`es6-bundle-splitter` is a boilerplate for bundle splitting, transpiling and testing es6 modules using babel and webpack

Use it as a template for your es6 app.

## Naming Conventions

Tests are expected to end in `.spec.js` and live in the `tests` directory.

##Installation

This is just a template module so you wouldn't install it from npm. However it's fully configured for you to make an npm module from your fork of the repo.

```
npm install <your fork of es6-bundle-splitter>
```

When installed it will transpile and bundle your source according to the bundles defined in you webpack.config. Bundles will be dropped into `dist`.

##Testing

```
// single run
npm test
// auto-watch
npm run testc
```
