<script lang="ts">
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
})
</script>


<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const projects = ref([]);
const route = useRouter();

const goToProject = (index, project) => {
  localStorage.setItem('project', JSON.stringify(project));
  route.push('/project')
}

axios.get('api/projects')
  .then((response) => {
    projects.value = response.data;
    console.log(projects.value[0].ProjectName)
  })
  .catch((error) => {
    console.error(error);
  });
</script>

<template>
  <Carousel :style="{ marginTop:'10vh' }">
    <Slide v-for="(project, index) in projects" :key="index">
      <div class="carousel__item" :style="{ backgroundImage: `url(${project.Media.find(media => media.Type === 'Image').Url})`, backgroundSize:'cover' }" @click="goToProject(index, project)">
        <div id="infos">
          <p id="name">{{ project.ProjectName }}</p>
          <p id="desc">{{ project.Description }}</p>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<style scoped>
#infos {
  background: linear-gradient(0deg, rgba(0,0,0,0), rgba(0,0,0,0.5));
  padding: 1vw;
  border-radius: 8px 8px 0 0;
  height: 15vh;
}

#desc {
  font-size: 1rem;
  color: white;
  text-align: left;
}

#name {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-align: left;
}

.carousel__item {
  min-height: 40vh;
  width: 95%;
  color: black;
  font-size: 20px;
  border-radius: 8px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>