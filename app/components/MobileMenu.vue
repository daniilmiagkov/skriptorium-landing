<template>
  <Dialog :variant="'fullscreen'">
    <template #trigger>
      <Icon
        icon="lucide:text-align-justify"
        :class="$style.menuIcon"
      />
    </template>
    <nav :class="$style.nav">
      <DialogClose
        v-for="menuItem in menuItems"
        :key="menuItem.label"
      >
        <NavElement :menu-item="menuItem" />
      </DialogClose>
    </nav>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from './Dialog.vue';
import type { MenuItem } from './Header.vue';
import { Icon } from '@iconify/vue';
import { DialogClose } from 'reka-ui';

defineProps<{
  title?: string
  menuItems: MenuItem[]
}>()
</script>

<style module lang="scss">
.nav {
  display: flex;
  flex-direction: column;
  gap: $spacing-4;
  align-items: center;
  justify-content: center;
  height: 100%;;
}

.menuIcon {
  width: 24px;
  height: 24px;
}
</style>