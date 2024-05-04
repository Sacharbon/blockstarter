<template>
  <div id="container">
    <h1>BlockStarter</h1>
    <h2>Invest in the future.</h2>
    <div id="bar">
      <input placeholder="search projects"/>
    </div>
  </div>
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
  padding: 1vh;
  background-color: #DDE6ED;
  border-radius: 5px;
  margin-bottom: 2vh;
}

h1 {
  height: 6vh;
  font-weight: bold;
  font-size: 4rem;
  padding-bottom: 0;
}

h2 {
  font-weight: bold;
  font-size: 4rem;
  background-image: linear-gradient(to right, #003078 0%, #5ea0ff 50%, #3a8bff 100%);  -webkit-background-clip: text; /* Safari */
  background-clip: text;
  color: transparent;
  margin-bottom: 5vh;
}

#container {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

</style>
<script setup>
</script>