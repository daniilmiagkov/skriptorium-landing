<template>
  <div :class="$style.outerContainer">
    <span :class="$style.title">Skriptorium</span>
    <svg
      height="10"
      width="136"
      viewBox="0 0 136 10"
      xmlns="http://www.w3.org/2000/svg"
      :class="$style.hyphen"
    >
      <line
        x1="5"
        y1="5"
        x2="131"
        y2="5"
        stroke-linecap="round"
      />
    </svg>
    <span :class="$style.description">платформа для управления базой медицинских знаний и создания рабочих шаблонов в лечебных учреждениях</span>
  </div>
</template>

<script setup lang="ts">
</script>

<style module lang="scss">
.outerContainer {
  position: relative;
  padding-top: 25rem;
  display: flex;
  align-items: center;
  color: $primary-color;
  width: fit-content;
  margin: 0 auto;

  @media (max-width: 1600px) {
    padding-top: 20rem;
  }

  @media (max-width: 1100px) {
    padding-top: 16rem;
  }

  @media (max-width: 900px) {
    padding-top: 12rem;
    flex-direction: column;
    gap: 1.25rem;
    text-align: center;
  }
}

.title {
  font-size: 9.375rem;
  font-family: $font-family-accent;
  font-weight: $font-weight-bold;
  line-height: 1.05;

  @media (max-width: 1600px) {
    font-size: 6rem;
  }

  @media (max-width: 1100px) {
    font-size: 4.5rem;
  }

  @media (max-width: 900px) {
    font-size: 3rem;
  }
}

.description {
  width: 380px;
  text-align: justify;
  font-size: 1.125rem;
  line-height: 1.45;

  @media (max-width: 1600px) {
    width: 20rem;
    font-size: 1rem;
  }

  @media (max-width: 1100px) {
    width: 18rem;
    font-size: 0.95rem;
  }

  @media (max-width: 900px) {
    width: 100%;
    max-width: 20rem;
    font-size: 0.9rem;
    text-align: center;
  }
}

.hyphen {
  stroke: $primary-color;
  stroke-width: 0.625rem;
  flex: 1 0;
  width: 8.5rem;
  margin: 0 3.125rem;

  @media (max-width: 1600px) {
    width: 6rem;
    stroke-width: 0.4rem;
    margin: 0 2.5rem;
  }

  @media (max-width: 1100px) {
    width: 4.5rem;
    stroke-width: 0.3rem;
    margin: 0 2rem;
  }

  @media (max-width: 900px) {
    display: none;
  }
}
</style>