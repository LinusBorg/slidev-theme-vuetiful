<script setup>
  import { defineProps } from 'vue'
  import defProps from '../utils/props';
  
  const props = defineProps({
    heading: String,
    ...defProps,
  })
</script>
<template>
  <div class="slidev-layout default big-bullet">
    <h1 v-if="props.heading">{{ props.heading }}</h1>
    <div class="flex items-center justify-center h-full -m-12">
      <div class="text-2xl">
        <slot/>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.big-bullet ul {
  @apply !list-disc;
}
.big-bullet li::marker {
  @apply inline-block text-vgreen;
}
</style>