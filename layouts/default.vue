<script>
import props from '../utils/props'
export default {
  props,
  setup() {
  },
}
</script>
<template>
  <div class="slidev-layout default">
    <slot/>
  </div>
</template>
<style lang="postcss">
.slidev-layout.default {
  background-image: url('/bg-default.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>