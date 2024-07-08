<template>
    <div v-if="visible" class="modal" @click.self="close">
      <div class="modal-content">
        <span class="close" @click="close">&times;</span>
        <img :src="images[index]" class="full-image">
        <a class="prev" @click.stop="navigate(-1)">&#10094;</a>
        <a class="next" @click.stop="navigate(1)">&#10095;</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      images: Array,
      index: Number,
      visible: Boolean
    },
    methods: {
      close() {
        this.$emit('close');
      },
      navigate(direction) {
        const newIndex = (this.index + direction + this.images.length) % this.images.length;
        this.$emit('update:index', newIndex); // Emitting an update to the index
      }
    }
  }
  </script>
  
  <style scoped>
.modal {
  display: flex;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6); /* Slightly darkened background */
}

.modal-content {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%; /* Makes use of more screen space */
}

.full-image {
  max-width: 100%; /* Ensures image does not exceed the container width */
  max-height: 80vh; /* Makes the image large but within a reasonable part of the screen */
  width: auto; 
  height: auto; 
  min-width: 300px; /* Ensures minimum size so you can see the image properly */
  min-height: 300px; /* Ensures minimum size so you can see the image properly */
  object-fit: contain; /* Ensures the image is scaled properly within dimensions */
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  font-size: 35px;
  cursor: pointer;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: auto;
  padding: 10px;
  color: white;
  font-weight: bold;
  font-size: 24px;
  user-select: none;
  background-color: rgba(0, 0, 0, 0.5); /* Slight background for visibility */
}

.prev:hover, .next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}
</style>
