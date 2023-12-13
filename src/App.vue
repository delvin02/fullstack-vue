<template>
  <div class="flex flex-col justify-between h-screen">
    <!-- Use your custom router-link component instead of the default router-link -->
    <div class="flex justify-center gap-3 font-mono font-bold text-lg">
      <router-link to="/" class="bg-slate-100 p-2 mt-3 rounded hover:shadow-sm hover:bg-slate-300">Home</router-link>
      <router-link to="/form" class="bg-slate-100 p-2 mt-3 rounded hover:shadow-sm hover:bg-slate-300">Form</router-link>
      <router-link to="/dunkirk"
        class="bg-slate-100 p-2 mt-3 rounded hover:shadow-sm hover:bg-slate-300">Dunkrik</router-link>
      <router-link to="/FeatureProcessV2"
        class="bg-slate-100 p-2 mt-3 rounded hover:shadow-sm hover:bg-slate-300">Form</router-link>

    </div>

    <router-view></router-view>
    <div>
      <p class="bg-violet-300 p-2 text-center"> Supercharged with <span class="text-[#194D33]">VueJS</span>, Tailwind and
        Vite. </p>

    </div>
  </div>
</template>

<script>
// import RouterLink from './components/RouterLink.vue';
// import View from './components/View.vue';

export default {
  name: 'App',
  // components: {
  //   'router-link': RouterLink,
  //   'router-view': View,
  // },
};
</script>

<style scoped></style>
