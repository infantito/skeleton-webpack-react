# React-webpack2-skeleton

React-webpack2-skeleton is a lightweight React boilerplate that uses Webpack2. url-loader, sass-loader, image-webpack-loader, babel-preset-env and react-hot-loader have been configured to this project by default.

## Requirement

- Node `^6.0.0`
- yarn `^0.2x.x` or npm `^3.x.x` 

## Getting started

First, clone the project:

```bash
$ git clone git@github.com:infantito/skeleton-react-webpack.git <project-name>
$ cd <project-name>
```

If you do not need react-hot-loader feature, you can checkout the `light` branch.
```bash
$ git checkout light
```

Then, install the dependencies. It is recommended to use Yarn, (because it is blazing fast). You can still use npm as well.

```bash
$ yarn install # or npm install
```

## Script usage

You can execute the scripts below by `yarn run <script>` or `npm run <script>`.

| Command | Description                                                   |
|---------|---------------------------------------------------------------|
| start   | Starts webpack development server; served at `localhost:3000` |
| build   | Bundles the source in `~/build` directory                     |

## Directory structure

```
- config               # webpack configuration files
- public               # directory for index.html and favicon
- src                  # application source code 
----- components       # directory for presentational components
----- containers       # directory for container components
----- images           # directory for images
----- styles           # directory for appliaction styles (in scss format)
--------- base         # global styles
--------- components   # styles for each components
--------- utils        # styles for variables
--------- vendor       # styles for vendors
```

# Issue
https://github.com/sass/node-sass/issues/1527
https://github.com/tcoopman/image-webpack-loader#libpng-issues

Install-Requirements
  Editorconfig
  SublimeLinter
  SublimeLinter-contrib-eslint
  SublimeLinter-contrib-stylelint
  Theme-Scheme for ES6

# Sadly
Lacks Code-Splitting
CSSNext
BrowserSync [https://www.npmjs.com/package/browser-sync-webpack-plugin]
Code-Splitting to React-Router (React-Router-Dom)
Pass fonts to production
Only pass methods used from babel-polyfill
Condition the images optimization
Research about gzipped

# A little help
https://github.com/velopert/react-webpack2-skeleton

# OMG!
https://www.reactenlightenment.com/

¡To code 💩! [\u{1f4a9}]
