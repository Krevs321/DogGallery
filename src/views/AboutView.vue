<template>
  <h1 class="title">About Me</h1>
  <div class="about-container">
    <div class="about-image">
      <img src="../assets/Logo.png" alt="Your Image">
    </div>
    <div class="about-text">
      <p>
        Hello! My name is Gašper Krevs and I am a beginner VueJS developer. Here's a list of things I now know about Vue:
      </p>
      <ul>
        <li>Vue 3, because why use Vue2?</li>
        <li>Vue Router, of course for routing</li>
        <li>Basics of Pinia for state management</li>
        <li>Component-based architecture</li>
        <li>Single File Components (SFCs)</li>
        <li>Vue CLI and Vite, but I used Vite</li>
        <li>S/CSS for styling this BEAUTIFUL website</li>
        <li>Basics of Axios for HTTP requests</li>
      </ul>
    </div>
  </div>
</template>

  
<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'AboutView',
  });
</script>
  
<style scoped>
.about-container {
  display: flex;
  align-items: center; /* Aligns items vertically in the center */
  justify-content: center; /* Center horizontally */
  padding: 20px;
}

.about-image {
  flex: 1; 
  padding-left: 10px;
}

.about-image img {
  width: 100%; /* Makes the image responsive */
  max-width: 400px; /* Limits how large the image can be */
  height: auto;
  padding-left: 25%;
}

.about-text {
  flex: 1.5;
  padding: 10px;
  text-align: left; /* Aligns the text to the left */
}

.about-text p, .about-text ul {
  font-size: 1.2em; 
  font-weight: bold;
}

.about-text li {
  margin-bottom: 20px; /* Adds space between list items */
}
</style>
