<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
  <v-app-bar :elevation="10">
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title></v-app-bar-title>
</v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
  },
});
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
