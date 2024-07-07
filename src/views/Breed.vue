<template>
  <div>
    <h1>Images for {{ breed }}</h1>
    <div v-if="images.length">
      <img v-for="image in images" :src="image" :key="image" :alt="`${breed} image`"/>
    </div>
    <p v-else>No images found.</p>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useDogStore } from '../store';

const route = useRoute();
const store = useDogStore();
const breed = route.params.breed;

onMounted(() => {
  store.fetchBreedImages(breed);
});

const images = computed(() => store.images);
</script>
