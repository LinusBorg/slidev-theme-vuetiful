<script>
import props from '../utils/props'
export default {
  props: {
    ...props,
    author: String,
  },
  setup() {},
}
</script>
<template>
  <div class="slidev-layout section">
    <div class="absolute inset-0 z-1">
      <transition appear name="section">
        <img
          src="/bg-quote.svg"
          alt=""
          v-if="$slidev.nav.currentLayout === 'quote'"
          class="opacity-80"
        />
      </transition>
    </div>

    <div class="flex flex-col justify-center h-full z-2 w-[750px]">
      <div data-quote-container class="mb-4 text-5xl">
        <slot />
      </div>
      <hr class="w-48 border-t-5 border-vgreen mb-2" />
      <p v-if="author" class="italic text-xl">{{ author }}</p>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
.section-enter-from {
  transform: rotate(1deg);
  /* opacity: .2; */
}
.section-enter-active {
  transition: all 0.3s ease-out;
  transform-origin: bottom left;
}
.section-enter-to {
  transform: rotate(0);
}

.slidev-layout.section {
  & ::v-deep(h1) {
    @apply text-5xl light:text-vblue;
  }
}

[data-quote-container]::before {
  content: '"';
}
</style>
