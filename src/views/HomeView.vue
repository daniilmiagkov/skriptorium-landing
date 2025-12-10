<template>
  <div :class="$style.home">
    <div class="container">
      <!-- <section :class="$style.hero">
        <h1 :class="$style.heroTitle">Добро пожаловать в Skriptorium</h1>
        <p :class="$style.heroSubtitle">
          Современная платформа для управления медицинскими документами и верификацией персонала
        </p>
      </section> -->
      <!-- <section :class="$style.hero">
        <h1> -- Здесь будет главная информация о проекте -- + оставить заявку</h1>
        <p :class="$style.heroSubtitle">
          Современная платформа для управления медицинскими документами и верификацией персонала
        </p>
      </section>
      <section :class="$style.sections">
        <Card
          v-for="section in sections" 
          :key="section.id"
          :title="section.title"
          :link="section.link"
          :description="section.description"
        />
      </section> -->
      <p>здесь будет главная информация о проекте. посадочная страница</p>
      <p>
        + оставить заявку
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from "@/components/Card.vue"
interface Section {
  id: number
  title: string
  description: string
  link: string
}

const sections = ref<Section[]>([
  {
    id: 1,
    title: 'О проекте',
    description: 'Узнайте больше о Skriptorium, его целях и миссии',
    link: '/about'
  },
  {
    id: 2,
    title: 'Возможности',
    description: 'Изучите все функции и возможности платформы',
    link: '/features'
  },
  {
    id: 3,
    title: 'Технологии',
    description: 'Познакомьтесь с технологическим стеком проекта',
    link: '/technology'
  }
])
</script>

<style module lang="scss">
.home {
  min-height: 60vh;
}

.hero {
  text-align: center;
  margin-bottom: $spacing-8;
  padding: $spacing-8 0;
}

.heroTitle {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: $spacing-4;
  color: $text-color;
}

.heroSubtitle {
  font-size: 1.25rem;
  color: $text-light;
  max-width: 800px;
  margin: 0 auto;
}

.sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-6;
  margin-top: $spacing-8;
}

@media (max-width: $breakpoint-md) {
  .heroTitle {
    font-size: 2rem;
  }

  .sections {
    grid-template-columns: 1fr;
  }
}
</style>

