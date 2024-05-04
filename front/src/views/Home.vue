<script lang="ts" setup>
import SearchBar from '@/components/SearchBar.vue'
import Popular from "@/components/Popular.vue";
import Navbar from "@/components/Navbar.vue";
import EllipseTop from "@/assets/ellipse/top_home.svg";
import Tag from "@/components/Tag.vue";
import Categories from "@/components/New.vue";
import Notice from "@/components/Notice.vue";
import Footer from '@/components/Footer.vue';
import EllipseRight from "@/assets/ellipse/style.svg";
import EllipseRond from "@/assets/ellipse/rond.svg";
</script>

<template>
  <main>
    <EllipseTop id="ellipseTop"/>
    <EllipseRight id="ellipseSide"/>
    <EllipseRond id="ellipseRond" />
    <Navbar />
    <SearchBar />
    <Tag />
    <Popular />
    <Categories title="Emerging"/>
    <Notice />
    <Footer />
  </main>
</template>

<style scoped>

#ellipseRond {
position: absolute;
  bottom: -80vh;
  z-index: -1;
}

#ellipseSide {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  rotate: 180deg;
  background-repeat: repeat-y;
}

#ellipseBottom {
  position: absolute;
  bottom: 0;
  right: 0;
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
  padding-inline: 2vw;
}
</style>