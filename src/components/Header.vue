<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-colors duration-300',
      scrolled ? 'bg-white shadow-md' : 'bg-white/30 backdrop-blur-md'
    ]"
  >
    <nav class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
      <!-- ロゴ -->
      <h1 class="text-lg font-bold text-gray-800">Satsuki Portfolio</h1>

      <!-- メニュー -->
      <ul class="flex gap-6 text-gray-700 font-medium">
        <li><RouterLink to="/" class="hover:text-blue-500">Blog</RouterLink></li>
        <li><RouterLink to="/about" class="hover:text-blue-500">About</RouterLink></li>
        <li><RouterLink to="/contact" class="hover:text-blue-500">Contact</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
