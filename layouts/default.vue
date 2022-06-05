<script setup>
import { computed } from 'vue'
import _props from '../utils/props'

const props = defineProps({
  ..._props,
  class: String,
  cols: String, // '2cols'
})
const gridColsSize = computed(() => {
  if (!props.cols) return null
  switch (props.cols) {
    case '1-1':
      return 'grid-cols-2'
    case '1-2':
      return 'grid-cols-[1fr,2fr]'
    case '2-1':
      return 'grid-cols-[2fr,1fr]'
    default:
      return props.cols
  }
})
</script>

<template>
  <div
    class="slidev-layout grid gap-y-3 gap-x-5 default"
    :class="[titleRow ? 'grid-rows-[60px,1fr]' : null, gridColsSize]"
  >
    <div v-if="titleRow" :class="cols ? 'col-span-2' : null">
      <h1 class="customTitleRow">{{ $slidev.nav.currentRoute.meta.title }}</h1>
    </div>
    <div>
      <slot />
    </div>
    <div v-if="cols">
      <slot name="right" />
    </div>
  </div>
</template>

<style lang="postcss">
.slidev-layout h1:not(.customTitleRow) {
  @apply block mb-10;
}
</style>
