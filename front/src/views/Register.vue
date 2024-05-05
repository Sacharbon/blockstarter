<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const username = ref('')
const seed = ref('')
const password = ref('')
const confirmPassword = ref('')
const SignUp = () => {
  if (password.value === confirmPassword.value) {
    axios.post('api/signup', {
      seed: seed.value,
      username: username.value,
      password: password.value
    })
    .then (response => {
      localStorage.setItem('token', response.data.jwt);
      router.push('/')
    })
    .catch(response => {
      console.log(response)
    })
  }
}
</script>

<template>
  <div id="container">
    <h1 :style="{fontSize:'3vw', marginBottom:'3vh'}">Welcome to Blockstarter!</h1>
    <div id="form">
      <label>Address</label>
      <input type="text" placeholder="Enter your XRP Address" v-model="seed" />
      <label :style="{marginTop:'2vh'}">Username</label>
      <input type="text" placeholder="Enter your username" v-model="username" />
      <label :style="{marginTop:'2vh'}">Password</label>
      <input type="password" placeholder="Enter your password" v-model="password" />
      <input type="password" placeholder="Confirm your password" v-model="confirmPassword" :style="{marginTop:'1vh'}"/>
      <p v-if="password !== confirmPassword && confirmPassword !== ''">Passwords do not match</p>
      <button @click="SignUp">Sign Up</button>
    </div>
  </div>
</template>

<style scoped>
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}
#form {
  display: flex;
  flex-direction: column;
}

input {
  transition: all 0.3s ease;
  width: 30vw;
  padding: 1rem;
  background: transparent;
  border: 1px solid grey;
}

p {
  margin-top: 5px;
}

button {
  margin-top: 2vh;
  padding: 1rem;
  border: none;
  font-weight: bold;
  font-size: 1rem;
}
</style>