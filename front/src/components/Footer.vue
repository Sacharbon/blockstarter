<template>
  <footer>
    <div :style="{ backgroundColor:'#2c3e50', height:'1px', width:'100%', marginTop:'30vh' }"/>
    <div class="footer-content">
      <div class="footer-section">
        <h3>About Us</h3>
        <p>PoC is Epitech's student innovation center, which aims to promote Innovation and Open Source through its projects and events.</p>
      </div>
      <div class="footer-section">
        <h3>Contact Us</h3>
        <p>Email: contact@poc-innovation.com</p>
        <p>Phone: +33 6 62 43 00 03</p>
      </div>
      <div class="footer-section">
        <h3>Follow Us</h3>
        <p>
          <a href="https://www.facebook.com/PoCInnovation/">Facebook</a> |
          <a href="https://twitter.com/PoCInnovation">Twitter</a> |
          <a href="https://www.instagram.com/pocinnovation/">Instagram</a>
        </p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2024 BlockStarter. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  background: var(--color-background);
  color: var(--color-text);
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem;
}

.footer-section {
  flex: 1;
  padding: 1rem;
}

.footer-bottom {
  text-align: center;
  padding: 1rem 0;
  width: 100%;
}
</style>