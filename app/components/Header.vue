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
    </nav>

    <ButtonCTA
      v-if="!isMobile"
      size="medium"
      class="$style.ctaButton"
      @click="goContact"
    />
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: stretch;
  padding: $spacing-4;
}

.logo {
  text-decoration: none;
  color: $text-color;
  display: flex;
  justify-content: center;
}

.nav {
  display: flex;
  gap: $spacing-8;
  align-items: center;
}

.ctaButton {
  margin-left: auto; /* справа */
}
</style>
