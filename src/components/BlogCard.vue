<template>
  <div class="rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition">
    <img v-if="blog.thumbnail" :src="blog.thumbnail" alt="thumbnail" class="rounded-md mb-2 w-full h-48 object-cover" />
    <h2 class="text-xl font-semibold mb-2">{{ blog.title }}</h2>
    <p class="text-gray-600 text-sm mb-2">
      {{ blog.content.length > 100 ? blog.content.substring(0, 100) + '...' : blog.content }}
    </p>
    <p class="text-xs text-gray-400">投稿日: {{ formatDate(blog.createdAt) }}</p>
  </div>
</template>

<script setup>
import { format } from "date-fns";

defineProps({
  blog: {
    type: Object,
    required: true,
  },
});

const formatDate = (date) => {
  if (!date) return "";
  try {
    return format(date.toDate(), "yyyy/MM/dd");
  } catch {
    return "";
  }
};
</script>
