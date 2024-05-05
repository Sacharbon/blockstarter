<script setup lang="ts">
import { ref, onMounted } from 'vue';
import People from '../assets/people.svg';
import Verify from '../assets/verify.svg';
import Ranking from '../assets/ranking.svg';
import axios from "axios";

const project = JSON.parse(localStorage.getItem('project'));

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
};

const startDate = new Date(project.StartDate);
const endDate = new Date(project.EndDate);
const now = ref(new Date());

const totalDuration = endDate.getTime() - startDate.getTime();
const elapsed = () => now.value.getTime() - startDate.getTime();
const progress = () => (elapsed() / totalDuration) * 100;

onMounted(() => {
  const interval = setInterval(() => {
    now.value = new Date();
    if (now.value >= endDate) {
      clearInterval(interval);
    }
  }, 1000);
});

const timeLeft = () => {
  const millisecondsLeft = endDate.getTime() - now.value.getTime();
  const secondsLeft = Math.floor(millisecondsLeft / 1000);
  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  return `${hours}h ${minutes}m ${seconds}s`;
};

const donation = ref(10);

const investing = () => {
  axios.post('api/invest', {
    projectName: project.ProjectName,
    amount: donation,
    date: (new Date()).toDateString()
  }, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }})
    .then(response => {
      console.log(response);
    })
    .catch(response => {
      console.log(response);
    });
}
</script>

<template>
  <div id="container">
    <div id="header">
      <h1>{{ project.ProjectName }}</h1>
    </div>
    <div id="time">
      <div :style="{display:'flex', justifyContent:'flex-end'}">
      <p :style="{fontWeight:'bold'}">{{ timeLeft() }}</p>
      </div>
      <div id="progress-bar-container">
        <div id="progress-bar" :style="{ width: `${progress()}%` }"></div>
      </div>
    </div>
    <div id="content">
      <div id="image" :style="{ backgroundImage: `url(${project.Media.find(media => media.Type === 'Image').Url})`, backgroundSize: 'cover' }" />
      <div id="desc">
        <div id="fund">
          <p :style="{ fontWeight:'Bold', color:'#2c3e50', fontSize:'2rem' }">{{ formatCurrency(project.AmountRaised) }}<span :style="{fontSize:'1.3rem'}"> / {{formatCurrency(project.AmountGoal)}}</span></p>
          <div id="progress-bar-container">
            <div id="progress-bar" />
          </div>
          <div id="investors">
            <People />
            <p :style="{marginLeft:'3px', fontSize:'1.2rem'}">{{ project.NbInvestissors }} investors</p>
          </div>
        </div>
        <div id="description">
          <p>{{ project.Description }}</p>
        </div>
        <div id="step">
          <div></div>
          <div :style="{display:'flex', flexDirection:'column', alignItems:'center'}">
            <Verify />
            <p :style="{fontWeight:'bold', fontSize:'1.5rem'}">{{ project?.Steps[0]?.Title }}</p>
          </div>
          <div :style="{width:'1px', height: '100%', backgroundColor:'#2c3e50'}"/>
          <div :style="{display:'flex', flexDirection:'column', alignItems:'center'}">
            <Ranking />
            <p :style="{fontWeight:'bold', fontSize:'1.5rem'}">{{ project?.Steps[1]?.Title }}</p>
          </div>
          <div></div>
        </div>
        <div id="invest">
          <button @click="investing">Invest</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #step {
    display: flex;
    justify-content: space-between;
    margin-top: 5vh;
    height: 20vh;
  }
  #investors {
    margin-top: 1rem;
    display: flex;
    align-items: center;
  }
  #description {
    margin-top: 1rem;
  }
  #time {
    width: 60%;
    margin-bottom: 1rem;
  }
  #content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  #desc {
    height: 60vh;
    background-color: var(--color-background-soft);
    width: 35%;
    border-radius: 15px;
    box-shadow: 4px 4px 20px 7px rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }
  #image {
    background-size: cover;
    background-position: center;
    background-color: var(--color-background-soft);
    height: 60vh;
    width: 60%;
    border-radius: 10px;
  }
  #container {
    padding: 5rem;
    height: 100vh;
  }
  #header {
    display: flex;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
  }
  #progress-bar-container {
    width: 100%;
    background-color: #f3f3f3;
    padding: 2px;
    border-radius: 25px;
  }
  #progress-bar {
    width: 50%;
    height: 10px;
    background: linear-gradient(to right, #003078 0%, #5ea0ff 50%, #3a8bff 100%);
    border-radius: 25px;
  }
</style>