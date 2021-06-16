<script>
import { computed } from 'vue'
import props from '../utils/props'
import Default from './default.vue'

export default {
  props: {
    ...props,
    position: String,
  },
  components: {
    Default,
  },

  setup(props) {
    const positionClass = computed(() =>
      props.position === 'top ' ? 'justify-center pt-8' : 'place-content-center'
    )

    return {
      positionClass,
    }
  },
}
</script>

<template>
  <Default>
    <h1 v-if="title && showTitle">{{ title }}</h1>
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
