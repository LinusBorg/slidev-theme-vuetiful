<template>
  <h1 v-if="$props.showTitle !== false">{{ $props.title }}</h1>
  <div class="mt-12">
    <slot></slot>
  </div>
  <div data-x="links" class="absolute bottom-0 left-0 right-0 flex items-center justify-around">
    <div v-if="$props.repository" data-x="repo" class="">
      <logos-github-icon /> <a :href="$props.repository">{{ $props.repository }}</a>
    </div>
    <div v-if="$props.hostedSlides" data-x="repo" class="">
      <ri-slideshow-line /> <a :href="$props.repository">Slides: {{ $props.repository }}</a>
    <div v-if="$props.twitter" data-x="repo" class="">
      <logos-twitter /> <a :href="twitterUrl">{{ $props.twitter }}</a>
    </div>
    <div v-if="$props.linkedin" data-x="repo" class="">
      <uim-linkedin-alt class="text-blue-600" /> <a :href="$props.linkedin">{{ $props.linkedin }}</a>
    </div>
    <div v-if="$props.polywork" data-x="repo" class="">
      Polywork <a :href="$props.polywork">{{ $props.polywork }}</a>
    </div>
    <div v-if="$props.website" data-x="repo" class="">
      <uim-house-user /> <a :href="$props.website">{{ $props.website }}</a>
    </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent , computed } from 'vue'

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
    const twitterUrl = computed(() => props.twitter?.startsWith('@') 
      ? `https://www.twitter.com/${props.twitter.slice(1)}`
      : props.twitter?.startsWith('http') || props.twitter?.startsWith('www') || props.twitter?.startsWith('twitter.com')
      ? props.twitter
      : `https://www.twitter.com/${props.twitter}` 
    )

    return {
      twitterUrl,
    }
  },
})
</script>
