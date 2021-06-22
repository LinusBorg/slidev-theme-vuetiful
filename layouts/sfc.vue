<script setup lang="ts">
import { defineProps, inject } from 'vue'

const props = defineProps({
  example: String,
})
const examples = inject('sfc-examples', {})

const exampleLink = () => {
  if (typeof window === 'undefined') return
  const src = examples[props.example]

  const content =
    typeof src === 'object'
      ? src
      : {
          'App.vue': src,
        }

  const encoded = window.btoa(JSON.stringify(content))
  console.log(encoded)
  return `https://sfc.vuejs.org/#${encoded}`
}
</script>
<template>
  <div class="slidev-layout default">
    <div class="grid justify-items-stretch items-center w-full h-full">
      <slot />

      <div class="overflow-hidden text-center self-end">
        <iframe
          :src="exampleLink()"
          frameborder="0"
          width="960"
          height="460"
          class="-mt-14 mb-2"
        ></iframe>
      </div>
    </div>
  </div>
</template>
