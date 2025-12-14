<template>
  <div :class="$style.featureCard">
    <h1 :class="$style.title">Тарифы</h1>

    <!-- Заголовок и выбор периода -->
    <header :class="$style.header">
      <!-- Выбор периода слева -->
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

      <!-- Заголовок по центру -->
    </header>

    <!-- Сами карточки тарифов -->
    <div :class="$style.featureCardCosts">
      <Cost
        title="Базовый"
        description="Быстрый старт для отделения с хорошей базой и шаблонами"
        :price="319"
        :features="basicFeatures"
      />

      <Cost
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
import Cost, { FeatureItem } from './Cost.vue'

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
  align-items: flex-start; /* title по центру */
  gap: 16px;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 32px;}

/* оставляем title как есть */
.title {
  margin: 0;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  color: $primary-color;
  margin-bottom: 60px;
}

.periodContainer {
  
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
  border-radius: 999px;
  max-width: 420px;
  padding: 0 0px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.25); /* ← тень */
}
/* Кнопки периода — без border */
.periodButtons {
  display: flex;
  align-items: center;
  width: 480px;
justify-content: space-between


}

.periodButton {
  padding: 8px 20px;
  border-radius: 999px;
  border: none;
  background: transparent;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  box-shadow: none;
  color: $primary-color;
  font-family: $font-family-base;
}

.periodButtonActive {
  background: $accent-color;
  color: #ffffff;
  box-shadow: 0 6px 18px rgba(17, 24, 39, 0.08);
}

/* --- Карточки тарифов (сетку оставил как было, адаптив) --- */
.featureCardCosts {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-top: 24px;
  
}

@media (max-width: 920px) {
  .featureCardCosts {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .periodButtons {
    flex-wrap: wrap;
  }

  .periodContainer {
    margin-bottom: 10px;
  }
}
</style>
