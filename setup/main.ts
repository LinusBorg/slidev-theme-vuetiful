import { defineAppSetup } from '@slidev/types'
import Test from '../examples/Test.vue?raw'

// const examples = import.meta.globEager('../examples/*.vue?raw')
const examples = {
  Test,
}
console.log(examples)
export default defineAppSetup(({ app }) => {
  app.provide('sfc-examples', examples)
})
