<template>
  <div :class="$style.outerContainer">
    <Title />
    <img
      :src="lineImage"
      alt="Decorative line"
      :class="$style.line"
    >
  </div>
</template>

<script setup lang="ts">
import Title from '@/assets/icons/title.svg'
import lineImage from '@/assets/line.png'
</script>

<style module lang="scss">
.outerContainer {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 500px;
}

.line {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100vw;
  max-height: 1px;
  object-fit: cover;
  z-index: 1;
  pointer-events: none;
  filter: opacity(0.8);
}
</style>