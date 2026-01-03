<template>
  <div :class="$style.featureCard">
    <h1 :class="$style.title">Тарифы</h1>

    <header :class="$style.header">
      <div :class="$style.periodContainer">
        <div :class="$style.periodButtons">
          <button
            v-for="(p, idx) in periods"
            :key="p.label"
            type="button"
            :class="[ $style.periodButton, selectedIndex === idx ? $style.periodButtonActive : '' ]"
            :aria-pressed="selectedIndex === idx"
            @click="selectedIndex = idx"
          >
            {{ p.label }}
          </button>
        </div>
      </div>
    </header>

    <div :class="$style.featureCardCosts">
      <CostCard
        title="Базовый"
        description="Быстрый старт для отделения с хорошей базой и шаблонами"
        :price="319"
        :features="basicFeatures"
      />

      <CostCard
        title="Pro"
        description="Масимум возможностей с ИИ и персональной поддержкой"
        :price="549"
        :features="proFeatures"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CostCard, { type FeatureItem } from './CostCard.vue'

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

const periods = [
  { label: '6 мес', months: 6 },
  { label: '9 мес', months: 9 },
  { label: '1 год', months: 12 },
  { label: '2 года', months: 24 }
]

const selectedIndex = ref(2)
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

.periodContainer {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: $bg-color;
  border-radius: $border-radius-full;
  max-width: 420px;
  padding: 0 0px;
  box-shadow: $shadow-md; 
}
.periodButtons {
  display: flex;
  align-items: center;
  width: 480px;
  justify-content: space-between
}

.periodButton {
  padding: $spacing-2 $spacing-5;
  border-radius: $border-radius-full;
  border: none;
  background: transparent;
  font-weight: $font-weight-semibold;
  font-size: $font-size-lg;
  cursor: pointer;
  user-select: none;
  box-shadow: none;
  color: $primary-color;
  font-family: $font-family-base;
}

.periodButtonActive {
  background: $accent-color;
  color: $text-inverse;
  box-shadow: 0 6px 18px rgba(17, 24, 39, 0.08);
}

.featureCardCosts {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: $spacing-8;
  margin-top: $spacing-6;
  
}

@media (max-width: 920px) {
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
