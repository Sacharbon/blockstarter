<template>
    <div class="project-page">
      <div class="project-card" v-for="project in projects" :key="project.ProjectName">
        <ProjectVideo :video-source="getVideoUrl(project.Media)" :title="project.ProjectName" />
        <h1 class="project-title">{{ project.ProjectName }}</h1>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import ProjectVideo from '@/components/Video.vue';
  
  export default {
    components: {
      ProjectVideo
    },
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
      }
    }
  };
  </script>
  
  <style scoped>
    /* Center project title  */
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
  </style>
  