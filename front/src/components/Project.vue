<template>
    <div class="project-page">
      <div class="project-card" v-for="project in projects" :key="project.ProjectName">
        <div class="project-card-content">
          <div class="video-container">
            <h1 class="project-title">{{ project.Title }}</h1>
            <video :src="getVideoUrl(project.Media)" controls :poster="getPosterUrl(project.Media)"></video>
          </div>
          <div class="info-container">
            <h1 :style="{ color: project.AmountRaisedColor }" class="AmountRaised">{{ project.AmountRaised }} XRP</h1>
            <h2 id="SubtitleAmountRaised"> raised of {{ project.AmountGoal }} XRP Goal</h2>
            <div class="progress-bar">
              <div class="progress" :style="{ width: (project.AmountRaised / project.AmountGoal) * 100 + '%' }"></div>
            </div>
            <h1 id="NbInvestissors">{{ project.NbInvestissors }} Backers</h1>
            <h1 id="DaysToGo">{{ project.NbDaysLeft }} Days to go</h1>
            <h1>{{ project.ProjectName }}:</h1>
            <p>{{ project.Description }}</p>
            <button @click="backProject(project)" class="back-project-button">Back this project</button>
            <div class="button-container">
              <button class="remind-me-button">Remind Me</button>
              <button class="share-button">Share</button>
            </div>
          </div>
        </div>
      </div>
      <!-- <h1> Logo Time ... Days left              51347 XRP • 51% funded</h1> -->
    </div>
    <!-- <progress :value="project.AmountRaised" :max="project.AmountGoal"></progress> -->
  </template>

  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        projects: []
      };
    },
    mounted() {
      this.fetchProjects();
    },
    methods: {
      fetchProjects() {
        axios.get('/db.json')
          .then(response => {
            this.projects = response.data;
          })
          .catch(error => {
            console.error('Error fetching projects:', error);
          });
      },
      getVideoUrl(media) {
        const video = media.find(item => item.Type === 'Video');
        return video ? video.Url : '';
      },
      getPosterUrl(media) {
        const image = media.find(item => item.Type === 'Image');
        return image ? image.Url : '';
      },
      backProject(project) {
        // Implement your logic for backing the project here
        console.log('Backing project:', project);
      }
    }
  };
  </script>


  <style scoped>
  .AmountRaised {
    font-size: 3rem;
    color: #2A7118;
    font-weight: bold;
  }
  #NbInvestissors {
    padding-top: 10px;
    font-size: 3rem;
    color: #2A7118;
    font-weight: bold;
  }

  #SubtitleAmountRaised {
    color: #9DB2BF;
  }

  #DaysToGo {
    color: #2A7118;
    font-size: 3rem;
    font-weight: bold;
  }

  .info-container { /* Lets some space at the top */
    margin-top: 48px;
    background-color: #DDE6ED;
  }

  .project-title {
        text-align: center;
    }
  .project-card {
    border: 1px solid #ccc;
    margin-bottom: 20px;
    display: flex;
  }

  .project-card-content {
    display: flex;
    width: 100%;
  }

  .video-container {
    width: 50%;
  }

  .video-container video {
    width: 100%;
  }

  .info-container {
    width: 50%;
    padding: 20px;
  }

  .steps {
    margin-top: 10px;
  }

  .progress-bar {
      width: 100%;
      height: 15px;
      background-color: #9DB2BF;
      border-radius: 15px;
      margin-top: 10px;
      overflow: hidden;
    }

    .progress {
        height: 100%;
        background-color: #2A7118;
    }

    .button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.back-project-button,
.remind-me-button,
.share-button {
  padding: 10px 20px;
  background-color: #2A7118;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.back-project-button {
  margin-bottom: 10px; /* Adjust the margin as needed */
}

.remind-me-button:hover,
.share-button:hover,
.back-project-button:hover {
  background-color: #1E5311;
}
</style>