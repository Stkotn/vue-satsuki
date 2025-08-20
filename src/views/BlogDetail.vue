<template>
  <div class="max-w-3xl mx-auto p-6">
    <div v-if="loading" class="text-center text-gray-500">読み込み中...</div>
    <div v-else-if="blog">
      <!-- タイトル -->
      <h1 class="text-4xl font-bold mb-4">{{ blog.title }}</h1>

      <!-- 投稿日 -->
      <p class="text-gray-500 mb-6">
        投稿日: {{ formattedDate }}
      </p>

      <!-- 本文 -->
      <div class="prose max-w-none" v-html="blog.content"></div>
    </div>
    <div v-else class="text-center text-red-500">記事が見つかりませんでした。</div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { format } from "date-fns"; // 日付フォーマット

const route = useRoute();
const blog = ref(null);
const loading = ref(true);

onMounted(async () => {
  try {
    const docRef = doc(db, "blogs", route.params.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      blog.value = {
        id: docSnap.id,
        ...docSnap.data(),
      };
    } else {
      blog.value = null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
  } finally {
    loading.value = false;
  }
});

// 投稿日をフォーマット
const formattedDate = computed(() => {
  if (!blog.value?.createdAt) return "";
  const date =
    blog.value.createdAt.toDate?.() || blog.value.createdAt; // Firestore Timestamp対応
  return format(date, "yyyy/MM/dd");
});
</script>

<style>
/* Typography プラグインが未導入なのでシンプルにする */
.prose {
  @apply text-gray-800 leading-relaxed;
}
</style>
