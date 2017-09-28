# Skeleton-Webpack-React

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

<summary><strong>Issue</strong></summary>
<p>- https://github.com/sass/node-sass/issues/1527</p>
<p>- https://github.com/tcoopman/image-webpack-loader#libpng-issues</p>

<summary><strong>Install-Requirements</strong></summary>
<p>Editorconfig</p>
<p>SublimeLinter</p>
<p>SublimeLinter-contrib-eslint</p>
<p>SublimeLinter-contrib-stylelint</p>
<p>Theme-Scheme for ES6</p>

<summary><strong>Sadly</strong></summary>

<p>Lacks Code-Splitting</p>
<p>CSSNext</p>
<p>BrowserSync [https://www.npmjs.com/package/browser-sync-webpack-plugin]</p>
<p>Code-Splitting to React-Router (React-Router-Dom)</p>
<p>Only pass methods used from babel-polyfill</p>
<p>Condition the images optimization</p>
<p>Research about gzipped</p>
<p>Fix Paths [../../]</p>
<p>Fix localhost/ip at OSX. (at Android good)</p>

#### A little help
* https://github.com/velopert/react-webpack2-skeleton

#### OMG!
* https://www.reactenlightenment.com/

<p>¡To code 💩! [\u{1f4a9}]</p>
