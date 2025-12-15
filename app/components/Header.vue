<template>
  <header :class="$style.header">
    <div
      v-if="isMounted && menuCollapsed"
      :class="$style.headerContent"
    >
      <DropdownMenu :items="dropdownItems" />
      <router-link
        to="/"
        :class="$style.logo"
      >
        <Logo />
      </router-link>

      <nav :class="$style.nav">
        <ButtonCTA
          size="medium"
          @click="() => router.push({path: '/', hash: '#contact-form'})"
        />
      </nav>
    </div>
    <div
      v-else-if="!isMounted || !menuCollapsed"
      :class="$style.headerContent"
    >
      <router-link
        to="/"
        :class="$style.logo"
      >
        <Logo />
      </router-link>
      <nav :class="$style.nav">
        <router-link
          v-for="link in menuItems"
          :key="link.label"
          :to="link.to"
          :class="$style.navLink"
        >
          {{ link.label }}
        </router-link>

        <ButtonCTA
          size="medium"
          @click="() => router.push({path: '/', hash: '#contact-form'})"
        />
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import ButtonCTA from './ButtonCTA.vue';
import { useRouter } from 'vue-router'
import Logo from '@/assets/icons/logo.svg'
import { computed, ref, onMounted } from 'vue';
// import BurgerClassic from "@/assets/icons/burger-classic.svg"
import DropdownMenu from './DropdownMenu.vue';
import { useWindowSize } from '@vueuse/core';
const router = useRouter()
const {width} = useWindowSize()
const isMounted = ref(false)
onMounted(() => {
  isMounted.value = true
})
const menuCollapsed = computed(() => isMounted.value && width.value <= 1200)

const menuItems = [
  { label: 'Главная', to: '/' },
  { label: 'О проекте', to: '/about' },
  { label: 'Тарифы', to: '/pricing' },
  { label: 'Контакты', to: '/contact' }
]

const dropdownItems = computed(() =>
  menuItems.map(item => ({
    label: item.label,
    action: () => router.push(item.to)
  }))
)
</script>

<style module lang="scss">
.header {
  background-color: $bg-soft;
  padding: $spacing-4 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.headerContent {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  text-decoration: none;
  color: $text-color;

  h1 {
    font-size: $font-size-xl;
    font-weight: $font-weight-bold;
    color: $primary-color;
  }
}

.nav {
  display: flex;
  gap: $spacing-8;
  align-items: center;
}

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

.button {
  padding: $spacing-2 $spacing-4;
  border-radius: $border-radius-full;
  color: white;
  background-color: $primary-color;
  transition: transform 0.25s ease;
  &:hover {
    transform: translate(3px, 3px);
    color: white;
  }
}

@media (max-width: $breakpoint-md) {
  .nav {
    gap: $spacing-4;
    flex-wrap: wrap;
  }

  .headerContent {
    flex-direction: column;
    gap: $spacing-4;
  }
}
</style>