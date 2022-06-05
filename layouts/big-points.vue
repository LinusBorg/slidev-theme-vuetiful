<script>
export default {
  inheritAttrs: false,
}
</script>
<script setup>
import { computed, useAttrs } from 'vue'
import omit from 'lodash-es/omit'
import _props from '../utils/props'
import Default from './default.vue'

const props = defineProps({
  ..._props,
  position: String,
})

const positionClass = computed(() =>
  props.position === 'top' ? 'justify-center pt-8' : 'place-content-center'
)
const defaultProps = computed(() => ({
  ...omit(props, 'position'),
  ...useAttrs(),
}))
</script>

<template>
  <Default v-bind="defaultProps">
    <div class="big-content w-full grid min-h-[400px]" :class="positionClass">
      <div>
        <slot />
      </div>
    </div>
  </Default>
</template>
<style lang="postcss">
.slidev-layout .big-content {
  p,
  li {
    @apply text-3xl pb-4;
  }
}
</style>
