import { defineAppSetup } from '@slidev/types'
import Examples from '../examples'

export default defineAppSetup(({ app }) => {
  app.provide('repl-content', Examples)
})
