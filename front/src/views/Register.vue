<template>
  <div id="container">
    <div id="form">
      <h1>Register</h1>
      <div id="input">
        <input type="text" placeholder="Enter your username" v-model="username" />
      </div>
      <div id="input">
        <input type="text" placeholder="Enter your address" v-model="seed" />
      </div>
      <div id="input">
        <input type="password" placeholder="Enter your password" v-model="password" />
      </div>
      <div id="input">
        <input type="password" placeholder="Confirm your password" v-model="confirmPassword" />
        <p v-if="password !== confirmPassword && confirmPassword !== ''">Passwords do not match</p>
      </div>
      <div id="bottom">
        <button @click="SignUp">Sign Up</button>
      </div>
    </div>
  </div>
</template>

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

<style scoped>
#form {
  background-color: white;
}
#input {
  margin-bottom: 20px;
}

input {
  transition: all 0.3s ease;
}

input:focus {
  border-color: #86C7F6;
}

p {
  color: red;
  margin-top: 5px;
}
</style>