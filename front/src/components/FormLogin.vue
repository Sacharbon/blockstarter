<template>
  <h1 :style="{fontSize:'3vw', marginBottom:'3vh'}">Welcome back.</h1>
  <div id="form">
    <label>Username</label>
    <input type="text" placeholder="Enter your username" v-model="username" />
    <label :style="{marginTop:'2vh'}">Password</label>
    <input type="password" placeholder="Enter your password" v-model="password" />
    <a id="forgot" href="https://google.com">Forgot password ?</a>
    <button @click="logged">Log in</button>
    <p>Haven’t signed up yet ? <a href="/register">Get Started</a></p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'

const router = useRouter()

const username = ref('')
const password = ref('')
const logged = () => {
    axios.post('api/signin', {
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
</script>

<style scoped>
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

a {
  color: var(--color-text);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
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