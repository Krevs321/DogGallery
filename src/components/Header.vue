<template>
    <nav class="navbar">
      <div class="navbar-container">
        <router-link to="/" class="nav-link">
          <font-awesome-icon :icon="['fas', 'home']" />
          <span>Home</span>
        </router-link>
        <router-link to="/about" class="nav-link">
          <font-awesome-icon :icon="['fas', 'info-circle']" />
          <span>About</span>
        </router-link>
      </div>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faHome, faInfoCircle, faClipboardList } from '@fortawesome/free-solid-svg-icons';
  
  library.add(faHome, faInfoCircle, faClipboardList);
  
  export default defineComponent({
    name: 'Header',
    components: {
      FontAwesomeIcon,
    },
  });
  </script>
  