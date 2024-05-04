<script setup lang="ts">
import 'vuesax/dist/vuesax.css'

</script>

<template>
  <div id="container">
    <div id="panel">
      <p>Investments</p>
      <p>|</p>
      <p>Likes</p>
      <p>|</p>
      <p>Account</p>
    </div>
  </div>
</template>

<style scoped>

#panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
}

p {
  font-weight: normal;
  font-size: 1rem;
  color: #2c3e50;
  margin: 0;
  padding: 1vh;
  transition: background-color 0.5s;
}

p:hover {
  cursor: pointer;
}

#container {
  height: 7vh;
  display: flex;
  justify-content: center;
}
</style>