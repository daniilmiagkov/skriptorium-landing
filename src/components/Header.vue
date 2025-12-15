<template>
  <header :class="$style.header">
    <div
      v-if="menuCollapsed"
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
      v-else
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
import { computed, onMounted, onUnmounted, ref } from 'vue';
// import BurgerClassic from "@/assets/icons/burger-classic.svg"
import DropdownMenu from './DropdownMenu.vue';
const router = useRouter()

const menuCollapsed = ref(window.innerWidth <= 1200)

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

function onResize() {
  menuCollapsed.value = window.innerWidth <= 800
}

onMounted(() => {
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})
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