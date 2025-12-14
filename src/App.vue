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
  background-color: $bg-soft;
  font-family: $font-family-base;
}

.footer {
  background-color: $bg-soft;
  padding: $spacing-6 0;
  margin-top: auto;
  text-align: center;
  color: $text-muted;
}
</style>

