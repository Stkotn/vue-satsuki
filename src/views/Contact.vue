<template>
  <section class="py-20 md:py-32 bg-base">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <!-- 左側 -->
      <div>
        <h2 class="text-3xl font-title text-text-primary mb-4">Contact</h2>
        <p class="text-text-secondary mb-6">お気軽にお問い合わせください</p>
        <p class="text-text-primary mb-6">sacyam.ooo@gmail.com</p>

        <!-- SNS アイコン -->
        <div class="flex space-x-6 text-2xl">
          <a href="https://www.instagram.com/world_view95?igsh=NGd3MHp5MzRkMTEy&utm_source=qr" target="_blank" class="text-pink-500 hover:text-pink-600">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/satsuki-o-72b40928a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" class="text-blue-500 hover:text-blue-600">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/share/1FRGvv8Jqw/?mibextid=wwXIfr" target="_blank" class="text-blue-600 hover:text-blue-700">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://note.com/europe_balkan" target="_blank" class="text-green-600 hover:text-green-700">
            <i class="fas fa-pen-nib"></i> <!-- Noteは専用アイコンがないのでペンで代用 -->
          </a>
        </div>
      </div>

      <!-- 右側 画像 -->
      <div>
        <img src="@/assets/images/contact.jpg" alt="Contact" class="rounded-xl shadow-md" />
      </div>
    </div>
  </section>
</template>
