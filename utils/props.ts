declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $slidev: {
      nav: {
        currentLayout: string
        currentPage: number
        clicks: number
        go: (n: number) => void
        next: () => void
        nextSlide: () => void
      }
    }
  }
}
export default {
  highlighter: String,
  fonts: Object,
  layout: String,
  title: String,
  titleRow: Boolean,
}
