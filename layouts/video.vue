<script>
export default {
  inheritAttrs: false,
  name: 'VideoSlide',
}
</script>
<script setup>
import { computed, useAttrs } from 'vue'
import omit from 'lodash-es/omit'
import _props from '../utils/props'
import Default from './default.vue'

const props = defineProps({
  ..._props,
  video: String,
})
const defaultProps = computed(() => ({
  ...omit(props, 'video'),
  ...useAttrs(),
}))
</script>
<template>
  <Default v-bind="defaultProps">
    <div class="w-full h-[440px]">
      <slot />
      <iframe
        v-if="props.video.startsWith('http')"
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
