<script>
import props from '../utils/props'
import Default from './default.vue'
export default {
  props: {
    ...props,
    video: String,
  },
  components: {
    Default,
  },
}
</script>
<template>
  <Default>
    <div class="grid justify-items-stretch items-center w-full h-full">
      <div class="">
        <slot />
      </div>
      <div class="w-full h-[440px]">
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
    </div>
  </Default>
</template>
