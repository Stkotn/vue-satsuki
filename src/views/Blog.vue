<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-6">Blog</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- BlogCard を router-link でラップ -->
      <router-link
        v-for="b in blogs"
        :key="b.id"
        :to="{ name: 'blog-detail', params: { id: b.id } }"
        class="block"
      >
        <BlogCard :blog="b" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/firebase";
import BlogCard from "@/components/BlogCard.vue";

const blogs = ref([]);

onMounted(async () => {
  const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);
  blogs.value = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
});
</script>
