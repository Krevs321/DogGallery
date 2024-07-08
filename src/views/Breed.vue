<!-- This is the page where all the images are display of the clicked breed.
    File is devided into three parts: the template, script and the style. 
    Script part contains code that fetches the data from the internet.
    Style part is responsible for styling of the page.
-->
<template>
  <div>
    <h1 class="title">Images of {{ breed }} dogs</h1>
    <div v-if="images.length" class="grid">
      <div v-for="(image, index) in images" :key="image" class="grid-item" @click="openModal(index)">
        <img :src="image" :alt="`${breed} image`"/>
      </div>
    </div>
    <p v-else>No images found.</p>
    <ImageModal :images="images" :index="modalIndex" :visible="modalVisible" @close="closeModal" @update:index="modalIndex = $event"/>
  
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useDogStore } from '../store';
import ImageModal from '../components/ImageModel.vue';

const route = useRoute();
const store = useDogStore();
const breed = route.params.breed;

const modalVisible = ref(false);
const modalIndex = ref(0);

const openModal = (index) => {
  modalIndex.value = index;
  modalVisible.value = true;
};

const closeModal = () => {
  modalVisible.value = false;
};

onMounted(() => {
  store.fetchBreedImages(breed);
});

const images = computed(() => store.images);
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.grid-item {
  overflow: hidden; /* Ensures that image does not go over the container */
  position: relative;
  border: 4px solid transparent; /* Smoother border transition*/
}

.grid-item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out, border-color 0.3s ease; 
}

.grid-item:hover img {
  transform: scale(1.1); /* Scales up the image for 10% */
  border-color: #25231f; 
}

.grid-item:hover {
  border-color: #25231f; /* Highlights the border of the grid item */
  cursor: pointer; /* Changes the cursor to indicate clickable */
}
</style>
