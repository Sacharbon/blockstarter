<template>
  <div id="container">
    <div id="title">
      <h1>{{ title }}</h1>
    </div>
    <div id="content">
      <div id="card" v-for="project in projects" :key="project.id" :style="{ width: getRandomWidth() + 'vw' }">
        {{ project.name }}
      </div>
    </div>
  </div>
</template>

<style scoped>
  #container {
    margin-top: 30vh;
  }
  h1 {
    font-weight: bold;
    font-size: 3rem;
  }
  #title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2vh;
  }
  #content {
    flex-wrap: wrap;
    align-items: start;
    justify-content: center;
    display: flex;
    overflow: hidden;
  }
  #card {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-background-soft);
    height: 20vh;
    border-radius: 10px;
    margin: 0.5rem;
  }
</style>

<script>
export default {
  props: ['title'],
}
</script>

<script setup>
import { ref } from 'vue'
const getRandomWidth = () => {
  return Math.floor(Math.random() * (30 - 20 + 1)) + 20;
}

const projects = ref([
  {id: 1, name: 'Project 1' },
  { id: 2, name: 'Project 2' },
  { id: 3, name: 'Project 3'},
  { id: 4, name: 'Project 4'},
  { id: 5, name: 'Project 5'},
  { id: 6, name: 'Project 6'},
])
</script>