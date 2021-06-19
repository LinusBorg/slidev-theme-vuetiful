<script lang="ts">
import { defineComponent, computed } from 'vue'
import props from '../utils/props'

export default defineComponent({
  props: {
    ...props,
    class: String,
    mode: String, // '2cols'
    weight: String, // 1-1 1-2 2-1
  },
  setup(props) {
    const gridColsSize = computed(() => {
      if (props.mode !== '2cols') return null
      switch (props.weight) {
        case '1-1':
          return 'grid-cols-2'
        case '1-2':
          return 'grid-cols-[1fr, 2fr]'
        case '2-1':
          return 'grid-cols-[2fr, 1fr]'
        default:
          return 'grid-cols-2'
      }
    })

    return {
      gridColsSize,
    }
  },
})
</script>

<template>
  <div
    class="slidev-layout grid gap-3"
    :class="[showTitle ? 'grid-rows-[60px,1fr]' : null, gridColsSize]"
  >
    <div v-if="showTitle" :class="mode === '2cols' ? 'col-span-2' : null">
      <h1>{{ title }}</h1>
    </div>
    <div>
      <slot />
    </div>
    <div v-if="mode === '2cols'">
      <slot name="right" />
    </div>
  </div>
</template>

<style lang="postcss"></style>
