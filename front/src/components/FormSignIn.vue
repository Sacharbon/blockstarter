<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const address = ref([])
const password = ref([])

const SignUp = () => {
  router.push('/dashboard')
}

</script>

<template>
  <main>
    <h1>Welcome back.</h1>
    <form>
      <div id="input">
        <input type="username" name="username" placeholder="Username" required>
      </div>
      <div id="input">
        <input type="email" name="email" placeholder="Email" required>
      </div>
      <div id="input">
        <input type="password" name="password" placeholder="Password" required>
      </div>
      <div id="input">
        <input type="password" name="password" placeholder="Confirm Password" required>
      </div>
    </form>
    <div id="bottom">
      <button @click="SignUp">Sign Up</button>
    </div>
  </main>
</template>

<style scoped>

.get-started:hover {
  cursor: pointer;
  text-decoration: underline;
}

.get-started {
  color: #86C7F6;
}

#bottom {
  color: #9DB2BF;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1vh;
}

button {
  width: 100%;
  padding: 1vh;
  border: none;
  border-radius: 15px;
  background-color: #9DB2BF;
  color: #27374D;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 1vh;
}

#forgot:hover {
  cursor: pointer;
  text-decoration: underline;
}

input {
  width: 100%;
  padding: 1vh;
  border: none;
  outline: none;
  background-color: #DDE6ED;
  color: #27374D;
}

#input {
  width: 100%;
  padding: 1vh;
  border: none;
  border-radius: 15px;
  background-color: #DDE6ED;
}

h1 {
  color: #9DB2BF;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 5vh;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1vh;
}

main {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  width: 30vw;
  background-color: #526D82;
  border-radius: 3%;
  padding: 1.5vw;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 4px 50px 5px rgba(0, 0, 0, 0.2);
}

#terms {
  align-self: left;
  margin-top: 1vh;
  flex-direction: row;
}
</style>