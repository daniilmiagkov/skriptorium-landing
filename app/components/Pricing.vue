<template>
  <div :class="$style.pricing">
    <h1 :class="$style.title">Тарифы</h1>

    <header :class="$style.header">
      <PeriodContainer />
    </header>

    <div :class="$style.featureCardContainer">
      <PricingCard
        title="Базовый"
        description="Быстрый старт для отделения с хорошей базой и шаблонами"
        :price="319"
        :features="basicFeatures"
      />

      <PricingCard
        title="Pro"
        description="Масимум возможностей с ИИ и персональной поддержкой"
        :price="549"
        :features="proFeatures"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import PricingCard, { type FeatureItem } from './PricingCard.vue'
import PeriodContainer from './PeriodContainer.vue';

const basicFeatures: FeatureItem[] = [
  { text: 'Базовый набор шаблонов' },
  { text: '15 доступных разделов' },
  { text: 'Персональная настройка при подключении' },
  { text: 'ИИ агент GigaChat', variant: 'muted' },
  { text: 'Постоянная поддержка', variant: 'muted' }
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
.pricing {
  max-width: 1000px;
  margin: 0 auto;
}
  
.header {
  display: grid;
  flex-direction: column;
  align-items: flex-start;
  gap: $spacing-4;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-8;
}

.title {
  margin: 0 auto;
  font-size: 4rem;
  font-weight: $font-weight-bold;
  text-align: center;
  color: $primary-color;
  margin-bottom: 60px;

  @media (max-width: 1600px) {
    font-size: $font-size-4xl;
    max-width: 700px;
  }

  @media (max-width: 1100px) {
    font-size: $font-size-3xl;
  }

  @media (max-width: 900px) {
    font-size: $font-size-2xl;
    max-width: 500px;
  }
}

.featureCardContainer {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: $spacing-8;
  margin-top: $spacing-6;

  @media (max-width: 830px) {
    gap: $spacing-5;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: $spacing-5;
  }
}

@media (max-width: 600px) {
  .periodButtons {
    flex-wrap: wrap;
  }

  .periodContainer {
    margin-bottom: 10px;
  }
}
</style>
