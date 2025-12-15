<template>
  <header :class="$style.header">
    <div :class="$style.headerContent">
      <ClientOnly>
        <DropdownMenu
          v-if="isMobile"
          :items="dropdownItems"
        />
      </ClientOnly>

      <router-link
        to="/"
        :class="$style.logo"
      >
        <Logo />
      </router-link>

      <nav
        v-if="!isMobile"
        :class="$style.nav"
      >
        <router-link
          v-for="link in menuItems"
          :key="link.label"
          :to="link.to"
          :class="$style.navLink"
        >
          {{ link.label }}
        </router-link>
      </nav>

      <ButtonCTA
        size="medium"
        class="$style.ctaButton"
        @click="goContact"
      />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import ButtonCTA from './ButtonCTA.vue'
import DropdownMenu from './DropdownMenu.vue'
import Logo from '@/assets/icons/logo.svg'
import { useWindowSize } from '@vueuse/core'

const router = useRouter()
const {width} = useWindowSize()
const isMounted = ref(false)
onMounted(() => {
  isMounted.value = true
})
const isMobile = computed(() => isMounted.value && width.value <= 1200)

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

function goContact() {
  router.push({ path: '/', hash: '#contact-form' })
}
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

.ctaButton {
  margin-left: auto; /* справа */
}
</style>
