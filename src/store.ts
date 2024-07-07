// src/store.js
import { createPinia, defineStore } from 'pinia';
import axios from 'axios';

export const useDogStore = defineStore('dogs', {
  state: () => ({
    breeds: [] as { breed: string; subBreeds: string[] }[],
    images: [] as string[],  // If you have a similar setup for images
    error: null as string | null  // Ensuring error is either a string or null
  }),
  actions: {
    async fetchBreeds() {
      try {
        console.log("Fetching breeds");
        const response = await axios.get('https://dog.ceo/api/breeds/list/all');
        this.breeds = Object.entries(response.data.message).map(([breed, subBreeds]) => {
          return { breed, subBreeds: subBreeds as string[] };
        });
        console.log("Breeds fetched", this.breeds);
      } catch (error) {
        console.error('Error fetching breeds:', error);
        this.error = 'Failed to load breeds';
      }
    },    
    async fetchBreedImages(breed: string) {
      try {
        const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images`);
        this.images = response.data.message;  // Again, explicitly stated as string[]
      } catch (error) {
        console.error('Error fetching breed images:', error);
        this.error = 'Failed to load images';
      }
    }
  }
});


const pinia = createPinia();
export default pinia;
