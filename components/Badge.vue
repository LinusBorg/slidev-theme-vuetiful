<script setup>
import { computed } from 'vue'
const colormap = {
  info: 'border-blue-500 text-blue-500',
  success: 'border-green-500 text-green-500',
  warn: 'border-orange-500 text-orange-500',
  error: 'border-red-500 text-red-500',
  default: 'border-grey-700 text-grey-700',
}

const props = defineProps({
  type: {
    type: String,
    default: 'default',
  },
})
const style = computed(() => colormap[props.type])
</script>
<template>
  <span
    class="inline-block px-1 text-sm border rounded-sm font-bold"
    :class="style"
  >
    <slot />
  </span>
</template>
