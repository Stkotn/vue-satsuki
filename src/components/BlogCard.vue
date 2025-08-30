<template>
  <div
    class="bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
  >
    <img
      :src="thumbnail"
      :alt="title"
      class="w-full h-48 object-cover rounded-t-xl"
    />
    <div class="p-4">
      <h3 class="text-xl font-title text-text-primary mb-2">{{ title }}</h3>
      <p class="text-sm text-text-secondary">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  thumbnail: String,
});
</script>
