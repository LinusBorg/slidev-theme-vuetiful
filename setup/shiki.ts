import { defineShikiSetup } from '@slidev/types'
import * as path from 'path'

export default defineShikiSetup(async ({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme(path.join(__dirname, './night-owl/default.json')),
      light: await loadTheme(path.join(__dirname, './night-owl/light.json')),
    },
  }
})
