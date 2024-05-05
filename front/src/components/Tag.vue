<template>
  <div id="container">
    <p>Technology</p>
    <p>Science</p>
    <p>Health</p>
    <p>Environment</p>
    <p>Education</p>
    <p>Art</p>
    <p>Music</p>
    <p>Food</p>
    <p>Travel</p>
    <p>History</p>
    <p>Politics</p>
    <p>Business</p>
    <p>Finance</p>
  </div>
</template>

<style scoped>
  #container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 2rem;
  }

  p {
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    background-color: #DDE6ED;
    color: #27374D;
    cursor: pointer;
  }

  p:hover {
    background-color: #86C7F6;
    color: #fff;
  }
</style>