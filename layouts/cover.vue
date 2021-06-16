<script>
import props from '../utils/props'
export default {
  props,
  setup() {
    
  },
}
</script>
<template>
  <div class="slidev-layout l-cover flex items-center justify-center">
    <div class="absolute w-full bg-white py-12 border-t-4 border-b-4 border-vgreen text-center">
      <slot />
    </div>
  </div>
</template>
<style scoped lang="postcss">
.l-cover {
  background-image: url('/bg-cover.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

}
::v-deep(h1) {
  @apply !text-5xl text-vblue;
}
::v-deep(p) {
  @apply text-3xl;
}
</style>