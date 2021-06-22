<script>
import { computed } from 'vue'
import omit from 'lodash-es/omit'
import props from '../utils/props'
import Default from './default.vue'

export default {
  inheritAttrs: false,
  props: {
    ...props,
    position: String,
  },
  components: {
    Default,
  },

  setup(props, { attrs }) {
    const positionClass = computed(() =>
      props.position === 'top' ? 'justify-center pt-8' : 'place-content-center'
    )
    const defaultProps = computed(() => ({
      ...omit(props, 'position'),
      ...attrs,
    }))

    return {
      positionClass,
      defaultProps,
    }
  },
}
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
    @apply text-3xl;
  }
}
</style>
