<script setup lang="ts">
import { ref, computed } from 'vue';

const username = ref(localStorage.getItem('username'));

const isLoggedIn = computed(() => {
  const token = localStorage.getItem('token');
  return token !== null && token !== undefined && token !== '';
});
</script>

<template>
  <div id="container">
    <p v-if="isLoggedIn">{{ username }}</p>
    <a v-else href="/login">Se connecter</a>
  </div>
</template>

<style scoped>

a {
  text-decoration: none;
  font-weight: normal;
  font-size: 1.3rem;
  margin: 1vh;
  color: #2c3e50;
}

p {
  font-weight: normal;
  font-size: 1.3rem;
  margin: 10px;
  color: #2c3e50;
}

p:hover {
  cursor: pointer;
}

#container {
  height: 7vh;
  display: flex;
  justify-content: flex-end;
}
</style>