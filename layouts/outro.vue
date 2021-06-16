<script lang="ts">
import { defineComponent, computed } from 'vue'

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
    }
  },
})
</script>
<template>
  <div class="slidev-layout">
    <h1 v-if="$props.showTitle !== false">{{ $props.title }}</h1>
    <div class="mt-12 bg-vgreen">
      <slot></slot>
    </div>
    <div
      data-x="links"
      class="
        bg-vblue
        fixed
        bottom-4
        left-0
        right-0
        flex
        text-sm
        justify-around
        text-center
      "
    >
      <div v-if="$props.repository" data-x="repo" class="">
        <logos-github-icon />
        <a :href="$props.repository">{{ $props.repository }}</a>
      </div>
      <div v-if="$props.hostedSlides" data-x="slides" class="">
        <ri-slideshow-line class="mx-auto" />
        <a :href="$props.repository"
          >Slides: <br />
          {{ $props.repository }}</a
        >
      </div>
      <div v-if="$props.twitter" data-x="twitter" class="text-center">
        <logos-twitter class="mx-auto" />
        <a :href="twitterUrl">{{ $props.twitter }}</a>
      </div>

      <div v-if="$props.linkedin" data-x="linkedin" class="">
        <uim-linkedin-alt class="text-blue-600 mx-auto" /><a
          :href="$props.linkedin"
          >{{ $props.linkedin }}</a
        >
      </div>

      <div v-if="$props.polywork" data-x="polywork" class="">
        Polywork <a :href="$props.polywork">{{ $props.polywork }}</a>
      </div>

      <div v-if="$props.website" data-x="site" class="">
        <uim-house-user class="mx-auto" />
        <a :href="$props.website">{{ $props.website }}</a>
      </div>
    </div>
  </div>
</template>
