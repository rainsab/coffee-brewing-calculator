# Coffee brewing calculator

Web application for making coffee including stopwatch and information getting from API. Whole project was created using JavaScript, HTML, Sass, Bootstrap and Nunjucks.

See in action https://rainsab-cbc.surge.sh/

Includes:

-   **Bootstrap 5**: build responsive, mobile-first projects on the web with the world's most popular front-end component library
-   **Gulp 4**: task runner for running all of the following
-   **Sass compilation**: leverage the power of the most popular CSS extension language
-   **Sourcemaps** generation for easier Sass debugging
-   **Browsersync**: automatically reloads (or injects in case of CSS), browsers when you change files
-   **Autoprefixer**: parses CSS and adds vendor prefixes according to [caniuse.com]()
-   **UnCSS**: removes unused styles from CSS
-   **CSSO**: CSS minifier with structural optimizations
-   **Nunjucks**: templating language by Mozilla
-   **Surge.sh**: deploy static websites easily and for free

## First time installation

### Install all packages from `package.json` locally (Needs latest [node.js](https://nodejs.org/))

```shell
npm ci
```

_If you’re having errors with `node-gyp`, try [installing it globally](https://github.com/nodejs/node-gyp#installation)._

## Development

To develop with automatic compilation and browser refreshing run

```shell
npm start
```

And see the result on `http://localhost:3000/`

## Build

To build everything once for production deploy (in `/dist/` folder)

```shell
npm run build
```

This build uses all generated HTML files for _UnCSS_. If it removes something you need to keep, add and array to `ignore` option in `gulpfile.esm.js`.

## CSS (Sass preprocessor)

`index.css` is compiled from `src/scss/index.scss` by [Sass](http://sass-lang.com/).

## HTML (Nunjucks templates)

HTML is generated from [Nunjucks](https://mozilla.github.io/nunjucks/) templates in `src/templates`.

[Documentation for Nunjucks](https://mozilla.github.io/nunjucks/templating.html).

You don't need to leverage the power of templates. You can just create plain HTML files with `*.njk` extension.

If you need some data to be available in all templates, use `templates/data.json` for that.

## Static files (JavaScript, images, …)

Folders and files from `/src/static/` are simply copied directly to `/dist/` folder.

### Bootstrap

You can comment out Bootstrap components you don't need in `/src/index.scss`.

`/src/_customized-bootstrap-variables.scss` contains only customized Bootstrap variables.

See `browserslist` in `package.json` for supported browsers.

### Deployment

Upload everything in `/dist/` folder to the server.

#### Surge.sh

I use surge.sh for this project.

1. You need surge account. If you don’t have one, then run surge client with `npx surge` in `/dist` folder to create it.
1. From now on run `npm run deploy` whenever you want to publish a new version.

If you want acces to https://rainsab-cbc.surge.sh/, fell free to can contact me.

