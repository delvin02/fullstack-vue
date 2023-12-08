
<template>
  <div>
    <h2>Form Handling from Vue</h2>
    <InputForm></InputForm>
  </div>
</template>

<script>
import InputForm from './components/InputForm.vue'

export default {
  name: 'App',
  components: {
    InputForm
  }
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
