<!-- This is the page where you can see all the breeds that are fetched from the internet, displayed in a grid.
    Each breed is displayed in it's own container. With that comes a random image of the dogs breed and its name.

    File is devided into three parts: the template, script and the style. 
    Script part contains code that fetches the data from the internet.
    Style part is responsible for styling of the page.
-->

<template>
  <div class="album">
    <h1 class="title">Dog Breeds</h1>
    <div class="grid-container">
      <div v-if="store.breeds.length" class="card" v-for="breed in store.breeds" :key="breed.breed">
        <div class="card-img" :style="{ backgroundImage: 'url(' + breedImages[breed.breed] + ')' }"></div>
        <div class="card-body">
          <h5 class="card-title">{{ breed.breed.toUpperCase() }}</h5>
          <router-link :to="{ name: 'Breed', params: { breed: breed.breed }}" class="btn btn-primary">View images</router-link>
        </div>
      </div>
      <p v-else>{{ store.error || 'Loading breeds...' }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useDogStore } from '../store';

const store = useDogStore();
const breedImages = ref({});

onMounted(async () => {
  await store.fetchBreeds();
  if (store.breeds.length) {
    const imagePromises = store.breeds.map(async (breed) => {
      breedImages.value[breed.breed] = await store.fetchRandomImageForBreed(breed.breed);
    });
    await Promise.all(imagePromises);
    console.log("Breed images:", breedImages.value);
  }
});
</script>

<style scoped>
.album {
  padding: 20px;
  max-width: 1200px;
  margin: auto;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 0.5rem;
}

.card-img {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
}

.card-body {
  padding: 10px;
}

.card-title {
  margin-bottom: 10px;
  font-size: 1.2em;
  text-align: center;
}

.btn-primary {
  background-color: #007bff;
  border: none;
  padding: 10px 20px;
  color: white;
  text-align: center;
  display: block;
  margin-top: 10px;
}
</style>
