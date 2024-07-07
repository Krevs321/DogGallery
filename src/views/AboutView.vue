<template>
    <div>
      <h2>About Me</h2>
      <p>
        Hello! I'm a Vue.js developer. Here's a list of things I know about Vue:
      </p>
      <ul>
        <li>Vue 3</li>
        <li>Vue Router</li>
        <li>Pinia for state management</li>
        <li>Component-based architecture</li>
        <li>Single File Components (SFCs)</li>
        <li>Vue CLI and Vite</li>
        <li>SCSS for styling</li>
        <li>Axios for HTTP requests</li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'AboutView',
  });
  </script>
  
  <style scoped>
  h2 {
    text-align: center;
  }
  </style>
  