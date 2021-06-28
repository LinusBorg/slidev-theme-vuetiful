---
theme: ./
clicks: 1
altCover: true 
---

# Vuetiful Theme

A Vue-inspired theme for my talks about Vue

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
example: Test
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
layout: outro
twitter: '@Linus_Borg'
website: 'https://www.linusb.org'
repository: 'github.com/linusborg/slidev-theme-vuetiful'
---

Thank you for listening!

Questions?
