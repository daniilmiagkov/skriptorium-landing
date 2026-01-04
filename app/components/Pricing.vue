<template>
  <div :class="$style.featureCard">
    <h1 :class="$style.title">Тарифы</h1>

    <header :class="$style.header">
      <PeriodContainer />
    </header>

    <div :class="$style.featureCardCosts">
      <FeatureCard
        title="Базовый"
        description="Быстрый старт для отделения с хорошей базой и шаблонами"
        :price="319"
        :features="basicFeatures"
      />

      <FeatureCard
        title="Pro"
        description="Масимум возможностей с ИИ и персональной поддержкой"
        :price="549"
        :features="proFeatures"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import FeatureCard, { type FeatureItem } from './FeatureCard.vue'
import PeriodContainer from './PeriodContainer.vue';

const basicFeatures: FeatureItem[] = [
  { text: 'Базовый набор шаблонов' },
  { text: '15 доступных разделов' },
  { text: 'Персональная настройка при подключении' },
  { text: 'ИИ агент GigaChat', tone: 'muted' },
  { text: 'Постоянная поддержка', tone: 'muted' }
]

const proFeatures: FeatureItem[] = [
  { text: 'Продвинутые шаблоны' },
  { text: 'Безлимитные разделы' },
  { text: 'Персональная настройка с закреплением менеджера' },
  { text: 'ИИ агент GigaChat' },
  { text: 'Постоянная поддержка' }
]
</script>

<style module lang="scss">
.header {
  display: grid;
  flex-direction: column;
  align-items: flex-start;
  gap: $spacing-4;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-8;}

.title {
  margin: 0;
  font-size: 4rem;
  font-weight: $font-weight-bold;
  text-align: center;
  color: $primary-color;
  margin-bottom: 60px;
}

.featureCardCosts {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: $spacing-8;
  margin-top: $spacing-6;
  
}

@media (max-width: 760px) {
  .featureCardCosts {
    grid-template-columns: 1fr;
    gap: $spacing-5;
  }

  .periodButtons {
    flex-wrap: wrap;
  }

  .periodContainer {
    margin-bottom: 10px;
  }
}
</style>
