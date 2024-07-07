// src/router/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BreedView from "../views/Breed.vue";
import AboutView from '../views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView,
  },
  {
    path: '/breed/:breed',  // Make sure the parameter name matches what you use in links
    name: 'Breed',
    component: BreedView,
    props: true  // This will pass route params as props to the component
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
