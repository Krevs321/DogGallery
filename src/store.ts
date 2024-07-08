/* 
  This file is responsible for fetchinf data from the internet and storing that data into variables.
*/
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
        console.log("Images fetched", this.images);
      } catch (error) {
        console.error('Error fetching breed images:', error);
        this.error = 'Failed to load images';
      }
    },
    async fetchRandomImageForBreed(breed: string) {
      try {
        console.log(`Fetching image for ${breed}`);
        const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
        console.log(`Image URL for ${breed}:`, response.data.message);
        return response.data.message;
      } catch (error) {
        console.error('Error fetching random image for breed:', breed, error);
        this.error = 'Error fetching image for ' + breed;
        return '';  // Return empty string if there's an error
      }
    },
  }
});


const pinia = createPinia();
export default pinia;
