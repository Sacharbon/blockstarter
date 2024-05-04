<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logged = () => {
  router.push('/')
}
</script>

<template>
  <main>
    <h1>Welcome back.</h1>
    <form>
      <div id="input">
        <input type="email" name="email" placeholder="Email" required>
      </div>
      <div id="input">
        <input type="password" name="password" placeholder="Password" required>
      </div>
    </form>
    <p id="forgot">Forgot password ?</p>
    <div id="bottom">
      <button @click="logged">Log in</button>
      <p>Haven’t signed up yet ? <span class="get-started">Get Started</span></p>
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

#forgot {
  color: #86C7F6;
  font-size: 0.8rem;
  margin-bottom: 5vh;
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
</style>