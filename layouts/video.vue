<script>
import { computed } from 'vue'
import omit from 'lodash-es/omit'
import props from '../utils/props'
import Default from './default.vue'
export default {
  inheritAttrs: false,
  props: {
    ...props,
    video: String,
  },
  components: {
    Default,
  },
  setup(props, { attrs }) {
    const defaultProps = computed(() => ({
      ...omit(props, 'video'),
      ...attrs,
    }))

    return {
      defaultProps,
    }
  },
}
</script>
<template>
  <Default v-bind="defaultProps">
    <div class="w-full h-[440px]">
      <slot />
      <iframe
        v-if="video.startsWith('http')"
        :src="`${video}?rel=0`"
        class="w-full h-[420px]"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
      <video v-else class="w-full min-h-[420px]">
        <source :src="video" />
      </video>
    </div>
  </Default>
</template>
