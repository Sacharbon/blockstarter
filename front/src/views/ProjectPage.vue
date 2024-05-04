<script setup lang="ts">
import Project from '@/components/Project.vue';
import Navbar from '@/components/Navbar.vue';
import EllipseTop from '@/assets/ellipse/top_home.svg';
import EllipseSide from '@/assets/ellipse/side.svg';
import Tag from '@/components/Tag.vue';
import SearchBar from '@/components/SearchBar.vue';
import Popular from '@/components/Popular.vue';

</script>

<template>
    <main>
      <EllipseTop id="ellipseTop"/>
      <EllipseTop id="ellipseSide"/>
      <SearchBar />
      <Tag />
      <Project />
    </main>
</template>
  
<style scoped>
    #ellipseSide {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: -1;
        rotate: 180deg;
    }
    
    #ellipseTop {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
    
    main {
        height: 100vh;
        padding-inline: 5vw;
    }
</style>