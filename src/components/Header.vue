<template>
  <header :class="$style.header">
    <div class="container">
      <div :class="$style.headerContent">
        <router-link
          to="/"
          :class="$style.logo"
        >
          <h1>Skriptorium</h1>
        </router-link>
        <nav :class="$style.nav">
          <router-link
            v-for="link in routes"
            :key="link.route"
            :to="link.route"
            :class="$style.navLink"
          >
            {{ link.text }}
          </router-link>
          <ButtonCTA
            size="medium"
            @click="scrollToForm"
          />
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import ButtonCTA from './ButtonCTa.vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const routes = [
  {
    route: '/',
    text: 'Главная'
  },
  {
    route: '/about',
    text: 'О проекте'
  },
  // {
  //   route: '/features',
  //   text: 'Возможности'
  // },
  {
    route: '/technology',
    text: 'Тарифы'
  },
  {
    route: '/contact',
    text: 'Контакты'
  }
]

const scrollToForm = () => {
  // Переходим на главную страницу с хэшем
  router.push('/#contact-form')
  
  // Если уже на главной, скроллим к форме
  if (router.currentRoute.value.path === '/') {
    setTimeout(() => {
      const formSection = document.getElementById('contact-form')
      if (formSection) {
        formSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 100)
  }
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
    font-size: 1.5rem;
    font-weight: 700;
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
  font-weight: 500;
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
  border-radius: 9999px;
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