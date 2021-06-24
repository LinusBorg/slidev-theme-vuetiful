<script>
import props from '../utils/props'
export default {
  props: {
    ...props,
    showHint: Boolean,
    altCover: Boolean,
  },
}
</script>
<template>
  <div class="slidev-layout cover flex items-center justify-center">
    <div class="absolute inset-0 z-1">
      <img
        :src="altCover ? '/bg-cover-alt.svg' : '/bg-cover.svg'"
        alt=""
        :class="$slidev.nav.clicks ? 'opacity-50' : 'opacity-80'"
      />
    </div>
    <div v-click class="w-full absolute z-2">
      <transition
        appear
        enter-from-class="transform scale-85 opacity-0 translate-y-8"
        enter-active-class="transition-all duration-200 origin-bottom ease-in"
        enter-to-class="transform scale-100"
      >
        <div
          v-if="$slidev.nav.clicks === 1"
          class="
            bg-white
            dark:bg-vblue
            py-12
            border-t-4 border-b-4 border-vgreen
            text-center
            shadow-xl shadow-light-500
          "
        >
          <slot />
        </div>
      </transition>
    </div>
    <div class="absolute bottom-4 text-center w-full">
      <span
        v-if="showHint"
        @click="$slidev.nav.next"
        class="
          px-2
          p-1
          rounded
          cursor-pointer
          text-white
          bg-white bg-opacity-10
          hover:bg-opacity-20
        "
      >
        Press Space to continue <carbon:arrow-right class="inline" />
      </span>
    </div>
  </div>
</template>
<style scoped lang="postcss">
.l-cover {
  /* background-image: url('/bg-cover.svg'); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
::v-deep(h1) {
  @apply !text-5xl;
}
::v-deep(p) {
  @apply text-3xl;
}
</style>
