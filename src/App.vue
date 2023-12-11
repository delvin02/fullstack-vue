<template>
  <div>
    <!-- Use your custom router-link component instead of the default router-link -->
    <router-link to="/">Home</router-link>
    <router-link to="/dunkirk">Dunkirk</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import RouterLink from './components/RouterLink.vue';
import View from './components/View.vue';

export default {
  name: 'App',
  components: {
    'router-link': RouterLink,
    'router-view': View,
  },
};
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
