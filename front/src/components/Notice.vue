<script setup>
import BuyCrypto from '@/assets/buy-crypto.svg'
import TickCircle from '@/assets/tick-circle.svg'
import Cake from '@/assets/cake.svg'
</script>

<template>
  <div id="container">
    <h1>About BlockStarter</h1>
    <div id="cards">
      <div id="card">
        <BuyCrypto />
        <h2>Contribute in Crypto, Fuel Innovation.</h2>
        <p>Fuel groundbreaking projects with cryptocurrency donations. Shape the future by supporting innovation through blockchain technology.</p>
      </div>
      <div id="card">
        <TickCircle />
        <h2>Unlock the Power of SBT...</h2>
        <p>Contribute and earn Supporter Benefit Tokens (SBT) for exclusive rewards. From early updates to limited-edition perks, your generosity unlocks a world of benefits.</p>
      </div>
      <div id="card">
        <Cake />
        <h2>Celebrate Success, Together!</h2>
        <p>Join a vibrant community of creators and supporters. Celebrate success together as projects thrive, powered by your contributions and creator rewards for contributors</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#container {
  margin-top: 30vh;
}

h2 {
  font-weight: bold;
}

p {
  text-align: center;
}

h1 {
  margin-left: 10vw;
  font-weight: bold;
  margin-bottom: 3vh;
  font-size: 3rem;
}

#cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5vw;
}

#card {
  width: 20vw;
  height: 30vh;
  background-color: var(--color-background-soft)  ;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>