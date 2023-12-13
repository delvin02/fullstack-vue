<template>
  <div class="flex flex-col justify-between h-screen">
    <div>
      <NavBar></NavBar>
    </div>

    <router-view></router-view>
    <div>
      <p class="bg-violet-300 p-2 text-center"> Supercharged with <span class="text-[#194D33]">VueJS</span>, Tailwind and
        Vite. </p>

    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';


export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style scoped></style>
