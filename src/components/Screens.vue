<template>
  <div>
    <h1 :class="$style.title">
      Систематизируйте знания 
      в удобных шаблонах
    </h1>

    <div :class="$style.wrapper">
      <!-- Слева PNG -->
      <div :class="$style.imageContainer">
        <img
          :src="screensImg"
          alt="Иллюстрация"
        >
      </div>

      <!-- Справа SVG -->
      <div :class="$style.messagesContainer">
        <MessagesSVG />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import screensImg from '@/assets/screens.png'   // PNG
import MessagesSVG from '@/assets/messages.svg' // SVG как компонент
</script>

<style module lang="scss">
/* ===== TITLE (1:1 как в тарифах) ===== */
.title {
  margin: 0 auto 60px;  // 🔥 центрируем блок
  font-size: 4rem;
  font-weight: $font-weight-bold;
  text-align: center;
  color: $primary-color;
  width: 992px;
  max-width: 100%;
}


/* ===== LAYOUT ===== */
.wrapper {
  display: flex;
  align-items: flex-start;
  gap: $spacing-16;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: $spacing-6;
  }
}

.imageContainer {
  flex: 1;
  min-width: 1071px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }
}

.messagesContainer {
  flex: 2;
  min-width: 200px;
  padding-top: $spacing-20;
  max-width: 666px;
  display: flex;
  flex-direction: column;
}
</style>
