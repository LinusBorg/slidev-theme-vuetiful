import { defineShikiSetup } from '@slidev/types'
import * as path from 'path'

export default defineShikiSetup(async({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme(path.join(__dirname, './Night Owl-color-theme.json')),
      light: await loadTheme(path.join(__dirname, './Night Owl-Light-color-theme.json')),
    },
  }
})
