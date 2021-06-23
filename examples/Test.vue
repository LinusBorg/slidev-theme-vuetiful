<template>
  <h1>Hello World"</h1>
  <button @click="show = !show">Toggle Message</button>
  <div v-if="show" class="message">{{ message }}</div>
</template>
<script>
export default {
  data: () => ({
    show: false,
    message: 'Great to be here!',
  }),
}
</script>
<style scoped>
.message {
  color: red;
}
</style>
