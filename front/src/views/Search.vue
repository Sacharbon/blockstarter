<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import DisplayProjects from '@/components/DisplayProjects.vue';

const route = useRoute();
const router = useRouter();
const query = route.query.research as string;
const research = ref('');

const search = () => {
  router.push({ name: 'search', query: { research: research.value } });
}
</script>

<template>
  <main>
    <div id="bar">
      <input v-model="research" @keyup.enter="search" placeholder="search projects"/>
    </div>
    <display-projects :research="query" />
  </main>
</template>

<style scoped>
input {
  padding: 1vh;
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  color: #2c3e50;
  font-size: 0.9rem;
}

#bar {
  width: 100%;
  margin-top: 5vh;
  padding: 1vh;
  background-color: #DDE6ED;
  border-radius: 5px;
  margin-bottom: 2vh;
}

main {
  height: 100vh;
  padding-inline: 2vw;
}
</style>