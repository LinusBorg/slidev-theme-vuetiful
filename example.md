---
theme: ./
clicks: 1
altCover: false 
---

# Vuetiful Theme

A Vue-inspired theme for my talks about Vue

---

# This is the default page

it can have a heading, and then you add whatever content your want beneath that.

It can also have two columns, we demo that later in these slides.

* Classic item lists look like this.
* We have a slide variant with bigger list points to stress them, see later.

---
layout: section
---

# This is a section

---
layout: quote
author: Linus Borg (2021)
---

# Big quotes make your talk look fancy

---
layout: big-points
title: Need to make a few big points?
titleRow: true
---

- Increased font size... <Badge type="warn">Test</Badge>
- ...and centered content
- help stressing a few points

--- 

# Code

Use code snippets and get the highlighting directly!

```html
<template>
  <h1>Hello World"</h1>
  <div class="message">{{ message }}</div>
</template>
<script>
  export default {
    data:() => ({
      message: 'Great to be here!',
    })
  }
</script>
<style scoped>
  .message {
    color: red;
  }
</style>
```

---
layout: video
video: https://player.vimeo.com/video/455611549
---

# You can include Video!

---
layout: sfc
example: simple
---

# Firing up a Vue SFC playground

---
title: Default Slide can show flexible grids
titleRow: true
cols: '2-1'
---

```html
<template>
  <h1>Hello World"</h1>
  <div class="message">{{ message }}</div>
</template>
<script>
  export default {
    data:() => ({
      message: 'Great to be here!',
    })
  }
</script>
<style scoped>
  .message {
    color: red;
  }
</style>
```

::right::

## Features

* Flexible column width via windicss
* Here, more weight on the left
* Leaves room for short notes

---
layout: full-image
image: canyon.jpeg
---

# You can use a full-screen image without the default decoration

---
layout: outro 
title: Outro
twitter: '@Linus_Borg'
website: 'https://www.linusb.org'
repository: 'github.com/linusborg/slidev-theme-vuetiful'
hostedSlides: 'https://slidev-theme-vuetiful.netlify.app/'
---

<div class="absolute left-12 top-[200px] right-12 text-center text-light-600">
  <p class="text-4xl !leading-[1.5em]">Thank you for listening!</p>
  <!-- <p class="text-4xl !leading-[1.5em]">Questions?</p> -->
</div>
