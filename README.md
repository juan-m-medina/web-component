# SAMPLE WEB COMPONENT

## Notes

This example aims to specifically target IE11. Thus, it does include the 
necessary pollyfill library in the main component so it can be bundled.
All tools (Babel, Prettier) should be working from the development dependencies.

## Setup

```shell
npm install
```

## Build

```shell
npm run rollup
```

## Execution

Open the `test-consumer.html` file in your browser.

## Issues

There is a minification/babel warning, that so far has proven to cause no
issues:
```
test-component.js → output...
(!) `this` has been rewritten to `undefined`
https://rollupjs.org/guide/en/#error-this-is-undefined
node_modules\@webcomponents\webcomponentsjs\webcomponents-bundle.js
50: furnished to do so, subject to the following conditions:
51:
52: The above copyright notice and this permission notice shall be included in
      ^
53: all copies or substantial portions of the Software.
```