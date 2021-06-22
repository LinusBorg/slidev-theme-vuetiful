import { defineAppSetup } from '@slidev/types'
import Test from '../examples/Test.vue?raw'

const examples = {
  Test,
}

export default defineAppSetup(({ app }) => {
  app.provide('sfc-examples', examples)
})
