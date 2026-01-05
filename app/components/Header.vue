<template>
  <header :class="$style.header">
    <ClientOnly>
      <MobileMenu
        v-if="isMobile"
        :menu-items="menuItems"
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
      <NavElement
        v-for="menuItem in menuItems"
        :key="menuItem.label"
        :menu-item="menuItem"
      />
      <ButtonCTA
        v-if="!isMobile"
        class="$style.ctaButton"
        @click="goContact"
      />
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import ButtonCTA from './ButtonCTA.vue'
import Logo from '@/assets/icons/logo.svg'
import { useWindowSize } from '@vueuse/core'
import MobileMenu from './MobileMenu.vue'
import NavElement from './NavElement.vue'

const router = useRouter()
const {width} = useWindowSize()
const isMounted = ref(false)

export type MenuItem = {
  to: string
  label: string
}

onMounted(() => {
  isMounted.value = true
})
const isMobile = computed(() => isMounted.value && width.value <= 900)

const menuItems = [
  { label: 'Главная', to: '/' },
  { label: 'О проекте', to: '/about' },
  { label: 'Тарифы', to: '/pricing' },
  { label: 'Контакты', to: '/contact' }
]

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
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $spacing-4;
  max-width: 1400px;
  margin: 0 auto;
  @media (max-width: 900px) {
    display: grid;
      grid-template-columns: 1fr 1fr 1fr;
  }
}

.logo {
  text-decoration: none;
  color: $text-color;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 900px) {
    justify-content: center;
  }
}

.nav {
  display: flex;
  gap: $spacing-8;
  align-items: center;
  justify-content: flex-end;
}

.ctaButton {
  margin-left: auto; /* справа */
}
</style>
