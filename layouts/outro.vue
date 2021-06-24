<script lang="ts">
import { defineComponent, computed } from 'vue'

const urlRE = /^https?:\/\//
const urlify = (url: string) => {
  return urlRE.test(url) ? url : `https://${url}`
}

export default defineComponent({
  props: {
    title: String,
    showTitle: Boolean,
    repository: String,
    twitter: String,
    linkedin: String,
    polywork: String,
    website: String,
    hostedSlides: String,
  },
  setup(props) {
    const twitterUrl = computed(() =>
      props.twitter?.startsWith('@')
        ? `https://www.twitter.com/${props.twitter.slice(1)}`
        : props.twitter?.startsWith('http') ||
          props.twitter?.startsWith('www') ||
          props.twitter?.startsWith('twitter.com')
        ? props.twitter
        : `https://www.twitter.com/${props.twitter}`
    )

    return {
      twitterUrl,
      urlify,
    }
  },
})
</script>
<template>
  <div class="slidev-layout outro">
    <div class="absolute inset-0 -z-1">
      <transition appear name="outro">
        <img
          src="/bg-outro.svg"
          alt=""
          v-if="$slidev.nav.currentLayout === 'outro'"
          class="opacity-80"
        />
      </transition>
    </div>
    <h1 v-if="$props.showTitle !== false" class="text-center !text-5xl">
      {{ $props.title }}
    </h1>
    <div class="absolute left-12 top-[200px] right-12 text-center text-5xl">
      <slot></slot>
    </div>
    <div
      data-x="links"
      class="text-white absolute bottom-8 left-4 flex flex-col gap-2"
    >
      <div v-if="$props.twitter" data-x="twitter">
        <logos-twitter class="inline-block mr-3" />
        <a :href="twitterUrl" target="_blank" ref="noopener noreferrer">{{
          $props.twitter
        }}</a>
      </div>
      <div v-if="$props.website" data-x="site">
        <uim-house-user class="inline-block mr-3" />
        <a
          :href="urlify($props.website)"
          target="_blank"
          ref="noopener noreferrer"
          >{{ $props.website }}</a
        >
      </div>
      <div v-if="$props.repository" data-x="repo">
        <logos-github-icon class="inline-block mr-3" />
        <a
          :href="urlify($props.repository)"
          target="_blank"
          ref="noopener noreferrer"
          >{{ $props.repository }}</a
        >
      </div>
      <div v-if="$props.hostedSlides" data-x="slides">
        <ri-slideshow-line class="inline-block mr-3" />
        <a
          :href="urlify($props.hostedSlides)"
          target="_blank"
          ref="noopener noreferrer"
        >
          Slides: {{ $props.hostedSlides }}
        </a>
      </div>

      <div v-if="$props.linkedin" data-x="linkedin">
        <uim-linkedin-alt class="inline-block mr-3 text-blue-600" /><a
          :href="urlify($props.linkedin)"
          target="_blank"
          ref="noopener noreferrer"
          >{{ $props.linkedin }}</a
        >
      </div>

      <div
        v-if="$props.polywork"
        data-x="polywork"
        target="_blank"
        ref="noopener noreferrer"
      >
        Polywork <a :href="urlify($props.polywork)">{{ $props.polywork }}</a>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.outro-enter-from {
  transform: translate(-20px, 20px);
}
.outro-enter-active {
  transition: all 0.5s ease-in-out;
}
.outro-enter-to {
  transform: translate(0, 0);
}

.slidev-layout.outro {
  @apply bg-bottom bg-right;
}
</style>
