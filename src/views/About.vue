<script setup>
import profileImg from '@/assets/images/profile.jpg'
</script>

<template>
  <section class="max-w-4xl mx-auto px-6 py-32 text-left">
    <img 
      :src="profileImg" 
      alt="Profile" 
      class="w-full max-w-2xl mx-auto rounded-xl shadow-lg object-cover mb-8"
    />
    <h2 class="text-3xl font-title text-text-primary mb-4">Satsuki Ohtani</h2>
    <p class="text-text-primary mb-2">愛知県豊橋市生まれ。北マケドニア在住。</p>
    <p class="text-text-primary mb-2">愛知大学を卒業後、地元の信用金庫で窓口業務を2年間担当。その後マルタ島へ語学留学し、現地企業でカスタマーサポートとして勤務。</p>
    <p class="text-text-primary mb-2">そのまま海外でキャリアチェンジをし、Webライターとして2年半にわたりコンテンツマーケティングに従事。Webコンテンツ制作、SEO記事、SNS運用、バナーやLPのライティングなどを担当する。</p>
    <p class="text-text-primary mb-2">現在は夫の母国である北マケドニア・オフリドを拠点に、ブリッジSEとしてWeb開発チームに携わっている。</p>
  </section>
</template>
