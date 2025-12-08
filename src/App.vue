<template>
  <div id="app">
    <Header />
    <main :class="$style.main">
      <router-view />
    </main>
    <footer :class="$style.footer">
      <div class="container">
        <p>&copy; 2025 Skriptorium. Блог</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
</script>

<style module lang="scss">
.main {
  flex: 1;
  padding: $spacing-xl 0;
}

.footer {
  background-color: $bg-light;
  border-top: 1px solid $border-color;
  padding: $spacing-lg 0;
  margin-top: auto;
  text-align: center;
  color: $text-light;
}
</style>

