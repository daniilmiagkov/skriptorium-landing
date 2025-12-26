<template>
  <router-link
    :to="menuItem.to"
    :class="$style.navLink"
  >
    {{ menuItem.label }}
  </router-link>
</template>

<script lang="ts" setup>
import type { MenuItem } from './Header.vue';

defineProps<{
  menuItem: MenuItem
}>()
</script>

<style lang="scss" module>
.navLink {
  text-decoration: none;
  color: $text-color;
  font-weight: $font-weight-medium;
  transition: color 0.2s;
  position: relative;

  &:hover {
    color: $primary-color;
  }

  &.router-link-active {
    color: $primary-color;

    &::after {
      content: '';
      position: absolute;
      bottom: -$spacing-1;
      left: 0;
      right: 0;
      height: 2px;
      background-color: $primary-color;
    }
  }
}
</style>