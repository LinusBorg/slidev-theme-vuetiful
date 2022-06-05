<script setup>
import { computed } from 'vue'

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
})
const imageUrl = computed(() => {
  const base = import.meta.env.BASE_URL ?? '/'
  return `url("${base}${props.image}")`
})
</script>
<template>
  <div class="slidev-layout bg-image h-full dark:text-dark-600 relative">
    <slot />
  </div>
</template>
<style scoped lang="postcss">
.bg-image {
  background-image: v-bind(imageUrl);
  background-position: center center;
  background-size: cover;
}
</style>
