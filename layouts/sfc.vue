<script setup>
import { inject } from 'vue'

const props = defineProps({
  example: {
    type: String,
    required: true,
  },
})

/**
 * @type { Record<string, Record<string, string>> }
 */
const examples = inject('repl-content', {})

const content = examples[props.example]

const encoded =
  typeof window !== 'undefined' &&
  content &&
  window.btoa(JSON.stringify(content))
// console.log(encoded)
</script>
<template>
  <div class="slidev-layout default">
    <div class="grid justify-items-stretch items-center w-full h-full">
      <slot />

      <div class="overflow-hidden text-center self-end">
        <iframe
          v-if="encoded"
          :src="`https://sfc.vuejs.org/#${encoded}`"
          frameborder="0"
          width="960"
          height="460"
          class="-mt-14 mb-2"
        ></iframe>
      </div>
    </div>
  </div>
</template>
