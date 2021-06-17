---
theme: ./
clicks: 1
---

# Slidev Theme Starter

Presentation slides for developers

---

# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)


---
layout: section
---

# This is a section

---
layout: quote
author: Linus Borg (2021)
---

# This is a quote, and it's quite long. 

<!-- We have to see how line breaks are handled, because Im not quite sure. -->

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
layout: image-right
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
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
layout: outro
showTitle: true
title: This is the end!
twitter: '@LinusBorg'
repository: 'linusborg/vueday-enterjs-2021'
hostedSlides: 'vueday-2021.linusb.org'
website: 'https://www.linusb.org'
---

I hope you liked it!


---
layout: center
class: "text-center"
---

# Learn More

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
