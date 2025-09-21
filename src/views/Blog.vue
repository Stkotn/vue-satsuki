<template>
  <div>
    <h1>最新記事</h1>
    <ul>
      <li v-for="article in articles" :key="article.link">
        <a :href="article.link" target="_blank">{{ article.title }}</a>
        <p>{{ article.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      articles: [],  // 記事データを格納する配列
    };
  },
  mounted() {
    this.fetchArticles();
  },
  methods: {
    async fetchArticles() {
      try {
        // Firebase FunctionsのURLを指定してデータを取得
        const response = await axios.get('https://us-central1-vue-satsuki-project.cloudfunctions.net/getNoteArticles');
        this.articles = response.data;  // 記事データを格納
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    }
  }
};
</script>

<style scoped>
/* スタイルを適宜追加 */
</style>
