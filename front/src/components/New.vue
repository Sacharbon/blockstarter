<template>
  <div id="container">
    <div id="title">
      <h1>{{ title }}</h1>
    </div>
    <div id="content">
      <div id="card" v-for="project in projects" :key="project.id"  @click="goToProject(project.id, project)" :style="{ width: getRandomWidth() + 'vw', backgroundImage: `url(${project.Media.find(media => media.Type === 'Image').Url})`, backgroundSize:'cover' }">
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
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const route = useRouter()
const getRandomWidth = () => {
  return Math.floor(Math.random() * (30 - 20 + 1)) + 20;
}

const goToProject = (index, project) => {
  localStorage.setItem('project', JSON.stringify(project));
  route.push('/project')
}

const projects = ref([])
axios.get('api/projects')
  .then((response) => {
    projects.value = response.data
  })
  .catch((error) => {
    console.error(error)
  })
</script>