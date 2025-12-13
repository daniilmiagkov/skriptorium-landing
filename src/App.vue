<template>
  <Header />
  <main :class="$style.main">
    <router-view />
  </main>
  <footer :class="$style.footer">
    <div class="container">
      <p>&copy; 2025 Skriptorium</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
</script>

<style module lang="scss">
.main {
  // flex: 1;
  padding: $spacing-8 0;
  background-color: $bg-soft;
  font-family: $font-family-accent;
  display: grid;
  grid-template-columns: repeat(12, 96px);
  gap: 32px;
  padding: 0 auto;
  margin: 0 auto;
}



.footer {
  background-color: $bg-soft;
  padding: $spacing-6 0;
  margin-top: auto;
  text-align: center;
  color: $text-muted;
}
</style>

