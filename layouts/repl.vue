<script setup>
/**
 * THIS CURRENTLY DOESNT WORK RIGHT!!1 Don't use!
 */
import { inject, getCurrentInstance } from 'vue'
import { Repl, ReplStore } from '@vue/repl'
import '@vue/repl/style.css'

/**
 * @typedef {import('vue').PropType<import('@vue/repl').OutputModes>} OutputModesProp
 */

const vm = getCurrentInstance().proxy
const props = defineProps({
  contentName: {
    type: String,
    required: true,
  },
  outputMode: {
    type: /** @type OutputModesProp*/ (String),
    default: 'preview',
  },
  hideCompileOutput: {
    type: Boolean,
    default: false,
  },
  vueVersion: String,
  mainFileName: {
    type: String,
    default: 'App.vue',
  },
})
const replContents = inject('repl-content')

const content = replContents[props.contentName]
console.log('content:', content)
if (!content) {
  throw new Error(
    `[slidev-vuetiful]: Error on Slide #${vm.$slidev.nav.currentPage}: REPL Layout failed to load repl content for key "${props.contentName}".
     Are you sure you provided it under the 'repl-content' key?
    `
  )
}
const store = new ReplStore({
  // initialize repl with previously serialized state
  // serializedState: location.hash.slice(1),

  // starts on the output pane (mobile only) if the URL has a showOutput query
  // showOutput: query.has('showOutput'),

  // starts on a different tab on the output pane if the URL has a outputMode query
  // and default to the "preview" tab
  outputMode: props.outputMode,

  // specify the default URL to import Vue runtime from in the sandbox
  // default is the CDN link from unpkg.com with version matching Vue's version
  // from peerDependency
  // defaultVueRuntimeURL: 'cdn link to vue.runtime.esm-browser.js'
})

store.setFiles(content, props.mainFileName)

// use a specific version of Vue
props.vueVersion && store.setVueVersion(props.vueVersion)
</script>

<template>
  <div class="slidev-layout default">
    <!-- <div class="grid justify-items-stretch items-center w-full"> -->
    <div class="w-full">
      <slot />

      <div class="w-full h-[430px]">
        <Repl
          :store="store"
          :showCompileOutput="!hideCompileOutput"
          class="h-[430px]"
        />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.editor .CodeMirror {
  overflow: hidden;
}
</style>
