<template>
  <div :class="$style.container">
    <h1 :class="$style.title">
      Систематизируйте знания 
      в удобных шаблонах
    </h1>

    <div :class="$style.wrapper">
      <div :class="$style.imageContainer">
        <img
          :src="screensImg"
          alt="Иллюстрация"
        >
      </div>

      <div :class="$style.messagesContainer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import screensImg from '@/assets/screens.png'   // PNG
</script>

<style module lang="scss">
// .container {
//   display: flex;

// }

.title {
  margin: 0 auto;
  text-align: center;
  color: $primary-color;
  max-width: 992px;
  font-size: 4rem;
  font-weight: $font-weight-bold;
  line-height: 1.2;

  @media (max-width: 1600px) {
    font-size: $font-size-4xl;
  }

  @media (max-width: 1100px) {
    font-size: $font-size-3xl;
  }

  @media (max-width: 900px) {
    font-size: $font-size-2xl;
  }
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
  max-width: 1071px;
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
