# Source Pug Sass Basic

## Overview

This project provides a basic setup for working with Pug and Sass. It includes scripts to compile Pug templates, compile and watch Sass files, delete CSS files, and start a development server with live reloading.

## Features

-   Compile Pug templates automatically
-   Compile Sass to CSS with source maps
-   Watch Sass files for changes
-   Delete generated CSS files
-   Start a local development server with live reloading

## Installation

Ensure you have [Node.js](https://nodejs.org/) installed. This project is currently using **Node.js v16.15.0**. You can check your Node.js version by running:

```sh
node -v
```

Then, install dependencies:

```sh
npm install
```

## Scripts

Run the following scripts using `npm run`:

-   `compile:pug` – Compiles Pug templates from `./views/screens` to the root directory.
-   `compile:sass` – Compiles Sass files from `./assets/scss` to `./assets/css`.
-   `watch:sass` – Watches and compiles Sass files on changes.
-   `delete:css` – Deletes all CSS files from `./assets/css`.
-   `build:sass` – Compiles Sass files with compressed output.
-   `server` – Starts a local development server using `live-server`.
-   `dev` – Runs `delete:css`, `compile:pug`, `compile:sass`, `watch:sass`, and `server` in parallel.
-   `build` – Runs `delete:css`, `compile:pug`, and `build:sass` in parallel.

## Repository

This project is hosted on GitHub:
[GitHub Repository](https://github.com/hoangviethung/source-pug-sass-basic)

## Author

**hoangviethung**

## License

This project is licensed under the ISC License.
