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

# This is a quote, and it's quite long. It can even have multiple lines as it breaks fine. The tricky thing would be when it gets too long...

---
layout: big-points
title: This is for  bigger points
showTitle: true
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

# You can include video!

---
layout: sfc
example: Test
---

# Firing up a Vue SFC playground

---
layout: gridbase
title: This is a flexible grid layout
showTitle: true
mode: 2cols
weight: '2-1'
---

```html
<template>
  <div v-if="show">{{ message }}</div>
</template>
```

::right::

* Flexible column width
* Here, more weight on the left
* Leaves room for short notes

---
layout: outro
title: This is the end!
showTitle: true
twitter: '@LinusBorg'
repository: 'linusborg/vueday-enterjs-2021'
hostedSlides: 'vueday-2021.linusb.org'
website: 'https://www.linusb.org'
---

I hope you liked it!
