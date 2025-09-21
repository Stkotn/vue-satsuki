<script setup>
import { ref, onMounted } from 'vue'

const articles = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    // NoteのRSSフィードを取得
    const res = await fetch('/note-rss/europe_balkan/rss')
    const text = await res.text()

    // XMLをパース
    const parser = new DOMParser()
    const xml = parser.parseFromString(text, 'application/xml')
    const items = xml.querySelectorAll('item')

    articles.value = Array.from(items).map((item) => ({
      title: item.querySelector('title')?.textContent,
      link: item.querySelector('link')?.textContent,
      pubDate: item.querySelector('pubDate')?.textContent,
      description: item.querySelector('description')?.textContent,
    }))
  } catch (err) {
    console.error('RSS取得エラー:', err)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="max-w-4xl mx-auto py-12">
    <h2 class="text-2xl font-bold mb-6">最新のNote記事</h2>
    <div v-if="loading">読み込み中...</div>
    <ul v-else class="space-y-4">
      <li v-for="(article, i) in articles" :key="i" class="p-4 border rounded-lg hover:bg-gray-50">
        <a :href="article.link" target="_blank" class="text-lg font-semibold text-blue-600 hover:underline">
          {{ article.title }}
        </a>
        <p class="text-sm text-gray-500">{{ new Date(article.pubDate).toLocaleDateString() }}</p>
        <p class="text-gray-700 mt-2 line-clamp-3" v-html="article.description"></p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
