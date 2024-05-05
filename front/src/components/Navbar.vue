<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref(localStorage.getItem('username'));

const isLoggedIn = computed(() => {
  const token = localStorage.getItem('token');
  return token !== '';
});

const createProject = () => {
  router.push('/create');
};
</script>

<template>
  <div id="container">
    <button @click="createProject" id="btn">Create your project</button>
    <p v-if="isLoggedIn">{{ username }}</p>
    <a v-else href="/login">Connection</a>
  </div>
</template>

<style scoped>
#btn {
  background-color: lightgrey;
  border: none;
  height: 5vh;
  padding: 1rem;
  border-radius: 50px;
  margin-right: 10px;
  cursor: pointer;
}

a {
  text-decoration: none;
  font-weight: normal;
  font-size: 1.3rem;
  color: #2c3e50;
}

p {
  font-weight: normal;
  font-size: 1.3rem;
  color: #2c3e50;
}

p:hover {
  cursor: pointer;
}

#container {
  height: 7vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>