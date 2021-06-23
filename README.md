# slidev-theme-vuetiful

[![NPM version](https://img.shields.io/npm/v/slidev-theme-vuetiful?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-theme-vuetiful)

A Vue-inspired theme for [Slidev](https://github.com/slidevjs/slidev).

<!--
  Put some screenshots here to demonstrate your theme

  Live demo: [...]
-->

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

<pre><code>---
theme: <b>vuetiful</b>
---</code></pre>

Learn more about [how to use a theme](https://sli.dev/themes/use).

## Layouts

> Note: I'm still in the process of adding more slide variations.

This theme provides the following layouts:

 - Default (improved w/grid)
 - BigPoints
 - Cover
 - Section
 - Quote
 - SFC
 - Video

### Default

### Cover

A Cover slide for the Talk Title & Subtitle

```frontmatter
---
layout: cover
clicks: 1
---

# Vuetiful Theme
A Vue-inspired theme for my talks about Vue
```

> Note: the `clicks: 1` is necessary for the entry transition to work properly
#### Example
![Screenshot of Cover Slide](./screenshots/cover.png)


### Big Points

This slide type is much like the default slide, the main difference is that the content font-size is bigger and the content in centered.

Useful for slides that just contain a few points or sentences.

### Section

This slide can be used to split your talks into sections. It's meant to only have a single heading.

### Quote

Sometimes you want to drive home a point with a quote. This slide provides a nice way of doing that.

#### Example

### SFC (Single File Component Preview)

This template integrates the SF playground ([sfc.vuejs.org](https://sfc.vuejs.org)) which allows for live demos. It's usage requires a bit of preparation/config.

#### Config

```ts
// ./setup/main.ts
import { defineAppSetup } from '@slidev/types'

// use Vite's raw imports to get file content as string
// (see: https://vitejs.dev/guide/features.html#static-assets)
import Test from '../examples/Test.vue?raw'
import App from '../examples/App.vue?raw'
import Child from '../examples/Child.vue?raw'


interface Examples {
  [key: string]: string | {
    [key: string]: string
  }
}
const examples: Examples = {
  // for examples consisting of a single file, 
  // just pass its content as value
  // File will be named App.vue
  Test: Test,
  // to construct an example from multiple files,
  // or have a custom name for the file,
  // pass an object where each key is the filename 
  // and value is the file content string
  Multiple: {
    'App.vue': App,
    'Child.vue': Child,
  }
}

export default defineAppSetup(({ app }) => {
  // use app.provide to make all examples 
  // available to the SFC Slide implementation
  app.provide('sfc-examples', examples)
})
```

### Usage

```frontmatter
---
layout: sfc
example: Test 
---

# This will be the slide's title
```

#### Example

![Slide Example for SFC Playground](./screenshots/sfc.png)

### Video


## Components

This theme provides the following components:

### Badge

## Contributing

- `npm install`
- `npm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `npm run export` to generate the preview PDF
- `npm run screenshot` to generate the preview PNG
