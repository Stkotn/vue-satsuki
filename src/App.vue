<template>
  <div id="app">
    <!-- ナビゲーションバー -->
    <header class="header">
      <div class="logo">S</div>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </header>

    <!-- ルーターの表示 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
}
.logo {
  font-size: 2rem;
  font-weight: bold;
}
nav {
  display: flex;
  gap: 15px;
}
</style>
