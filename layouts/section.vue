<script>
export default {
  name: 'SectionSlide',
}
</script>
<script setup>
import props from '../utils/props'
defineProps(props)
</script>
<template>
  <div class="slidev-layout section">
    <div class="absolute inset-0 z-1">
      <transition appear name="section">
        <img
          src="../assets/bg-section.svg"
          alt=""
          v-if="$slidev.nav.currentLayout === 'section'"
          class="opacity-80"
        />
      </transition>
    </div>

    <div class="flex flex-col justify-center h-full z-2">
      <hr class="w-48 border-t-5 border-vgreen" />
      <div class="mt-4">
        <slot />
      </div>
    </div>
  </div>
</template>
<style lang="postcss">
.section-enter-from {
  transform: rotate(1deg);
  /* opacity: .2; */
}
.section-enter-active {
  transition: all 0.3s ease-out;
  transform-origin: bottom right;
}
.section-enter-to {
  transform: rotate(0);
}

.slidev-layout.section {
  h1 {
    @apply text-5xl light:text-vblue font-light;
  }
}
</style>
