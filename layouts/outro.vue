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
    <h1 v-if="$props.showTitle !== false" class="text-center !text-5xl">
      {{ $props.title }}
    </h1>
    <div
      class="
        absolute
        left-12
        top-[200px]
        right-12
        text-white text-center text-5xl
      "
    >
      <slot></slot>
    </div>
    <div
      data-x="links"
      class="text-white absolute bottom-8 left-4 flex flex-col gap-2"
    >
      <div v-if="$props.twitter" data-x="twitter">
        <logos-twitter class="inline-block mr-3" />
        <a :href="twitterUrl">{{ $props.twitter }}</a>
      </div>
      <div v-if="$props.website" data-x="site" class="">
        <uim-house-user class="inline-block mr-3" />
        <a :href="urlify($props.website)">{{ $props.website }}</a>
      </div>
      <div v-if="$props.repository" data-x="repo" class="">
        <logos-github-icon class="inline-block mr-3" />
        <a :href="urlify($props.repository)">{{ $props.repository }}</a>
      </div>
      <div v-if="$props.hostedSlides" data-x="slides" class="">
        <ri-slideshow-line class="inline-block mr-3" />
        <a :href="urlify($props.hostedSlides)">
          Slides: {{ $props.hostedSlides }}
        </a>
      </div>

      <div v-if="$props.linkedin" data-x="linkedin" class="">
        <uim-linkedin-alt class="inline-block mr-3 text-blue-600" /><a
          :href="urlify($props.linkedin)"
          >{{ $props.linkedin }}</a
        >
      </div>

      <div v-if="$props.polywork" data-x="polywork" class="">
        Polywork <a :href="urlify($props.polywork)">{{ $props.polywork }}</a>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.slidev-layout.outro {
  background-image: url('/bg-outro.svg');
  @apply bg-bottom bg-right;
}
</style>
