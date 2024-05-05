<template>
  <div id="container">
    <h1>Create a new project</h1>
    <div id="form">
      <div :style="{display:'flex', flexDirection:'row', justifyContent:'space-between'}">
        <div :style="{display:'flex', flexDirection:'column', width:'24vw'}">
          <label>Project Name</label>
          <input type="text" v-model="projectName" />

          <label>Title</label>
          <input type="text" v-model="title" />

          <label>End Date</label>
          <input type="date" v-model="endDate" />
        </div>
        <div :style="{display:'flex', flexDirection:'column', width:'24vw'}">
          <label>Description</label>
          <textarea v-model="description" :style="{height:'100%'}"></textarea>
        </div>
      </div>
      <div :style="{marginTop:'5vh'}">
        <label>Steps</label>
        <div v-for="(step, index) in steps" :key="index">
          <div :style="{display:'flex', flexDirection:'row', justifyContent:'space-between'}">
            <input type="text" v-model="step.title" placeholder="Title" :style="{width:'24vw'}"/>
            <div :style="{width:'24vw', display:'flex', justifyContent:'center'}">
              <input type="number" v-model="step.amount" placeholder="$" :style="{width:'10vw'}"/>
            </div>
          </div>
          <textarea v-model="step.description" placeholder="Description" :style="{width:'100%', marginTop:'1vh', height:'15vh'}"></textarea>
        </div>
        <button @click="addStep">Add Step</button>
      </div>

      <label :style="{marginTop:'4vh'}">Images</label>
      <div v-for="(image, index) in images" :key="index">
        <input type="text" v-model="image.url" placeholder="Image URL" :style="{width:'15vw'}"/>
      </div>
      <button @click="addImage">Add Image</button>

      <label>Tag</label>
      <input type="text" v-model="tag" :style="{width:'15vw'}"/>

      <button @click="submitForm">Submit</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const projectName = ref('')
const title = ref('')
const endDate = ref('')
const description = ref('')
const steps = ref([{ title: '', description: '', amount: 0 }])
const tag = ref('')
const images = ref([{ url: '' }])

const addStep = () => {
  steps.value.push({ title: '', description: '', amount: 0 })
}

const addImage = () => {
  images.value.push({ url: '' })
}

const submitForm = () => {
  // Submit the form data
  // This could involve making a POST request to a server, for example
}
</script>

<style scoped>
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#form {
  display: flex;
  flex-direction: column;
  width: 50vw;
}

input {
  transition: all 0.3s ease;
  padding: 1rem;
  background: transparent;
  border: 1px solid rgba(128, 128, 128, 0.5);
}

input:focus {
  border: 1px solid rgba(128, 128, 128, 1);
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