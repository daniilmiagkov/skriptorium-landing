<template>
  <div :class="$style.home">
    <div class="container" />
  </div>
</template>

<script setup lang="ts">

</script>

<style module lang="scss">
.home {
  min-height: 60vh;
}

.hero {
  text-align: center;
  margin-bottom: $spacing-8;
  padding: $spacing-8 0;
}

.heroTitle {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: $spacing-4;
  color: $text-color;
}

.heroSubtitle {
  font-size: 1.25rem;
  color: $text-muted;
  max-width: 800px;
  margin: 0 auto;
}

.sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-6;
  margin-top: $spacing-8;
}

@media (max-width: $breakpoint-md) {
  .heroTitle {
    font-size: 2rem;
  }

  .sections {
    grid-template-columns: 1fr;
  }
}
</style>

