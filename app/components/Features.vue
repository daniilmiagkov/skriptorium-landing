<template>
  <div :class="$style.container">
    <h1 :class="$style.title">Систематизируйте знания в удобных шаблонах</h1>

    <div :class="$style.wrapper">
      <div :class="$style.imageContainer">
        <img
          :src="ScreensImg"
          alt="Иллюстрация"
        >
      </div>
      <Messages :class="$style.messagesContainer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ScreensImg from '@/assets/screens.png';
import Messages from './Messages.vue';
</script>

<style module lang="scss">
.container {
  margin-top: 500px;
}

.title {
  margin: auto;
  text-align: center;
  color: $primary-color;
  max-width: 992px;
  font-size: 4rem;
  font-weight: $font-weight-bold;
  line-height: 1.2;

  @media (max-width: 1600px) {
    font-size: $font-size-4xl;
    max-width: 700px;
  }

  @media (max-width: 1100px) {
    font-size: $font-size-3xl;
    // max-width: 500px;
  }

  @media (max-width: 900px) {
    font-size: $font-size-2xl;
    max-width: 500px;
  }
}

.wrapper {
  display: flex;
  align-items: flex-start;
  gap: $spacing-16;
  width: fit-content;
  margin: 0 auto;

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
  padding-top: $spacing-10;
  max-width: 666px;
}
</style>
