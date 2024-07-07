<template>
  <div>
    <h1>Dog Breeds</h1>
    <div class ="grid-container">
      <ul v-if="store.breeds.length">
      <li v-for="{ breed } in store.breeds" :key="breed">
        <!-- Ensure that the router-link is correctly set up -->
        <router-link :to="{ name: 'Breed', params: { breed: breed }}">{{ breed }}</router-link>
      </li>
    </ul>
    <p v-else>{{ store.error || 'Loading breeds...' }}</p>
    </div>
  </div>
</template>


<script setup>
import { onMounted } from 'vue';
import { useDogStore } from '../store';

const store = useDogStore();
onMounted(store.fetchBreeds);

// Use the store directly in your template to maintain reactivity
</script>

