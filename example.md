---
theme: ./
clicks: 1
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

- Increased font size...
- ...and centered content
- help stressing a few points

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

### Keyboard Shortcuts

|     |     |
| --- | --- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide |
| <kbd>left</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | next slide |

---

# Code

Use code snippets and get the highlighting directly!

```ts
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = {...user, ...update}  
  saveUser(id, newUser)
}
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
layout: gridbase
title: This is a flexible grid layout
# hideTitleRow: true
cols: '2-1'
---

```html
<template>
  <div v-if="show">{{ message }}</div>
</template>
```

::right::

## Subheading

* Flexible column width
* Here, more weight on the left
* Leaves room for short notes

And a paragraph needs to be in there, as well.

---
layout: outro
twitter: '@LinusBorg'
website: 'https://www.linusb.org'
repository: 'linusborg/slidev-theme-vuetiful'
---

Thank you for listening!

Questions?
