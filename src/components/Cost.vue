<template>
  <div :class="$style.featureCard">
    <h2 :class="$style.featureCardTitle">{{ title }}</h2>
    <p :class="$style.featureCardDescription">{{ description }}</p>

    <div :class="$style.featureCardCostContainer">
      <p :class="$style.featureCardCost">{{ price }} Р</p>
      <p :class="$style.featureCardCostPeriod">за пользователя/месяц</p>
    </div>

    <button :class="$style.featureCardButton">2 месяца бесплатно</button>

    <div :class="$style.featureCardItems">
      <div
        v-for="item in features"
        :key="item.text"
        :class="[
          $style.featureCardItem,
          item.tone && $style[`featureCardItem--${item.tone}`]
        ]"
      >
        <CheckIcon :class="$style.featureCardItemIcon" />
        <span :class="$style.featureCardItemText">
          {{ item.text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CheckIcon from '@/assets/icons/check.svg'

export type FeatureItem = {
  text: string
  tone?: 'default' | 'accent' | 'muted'
}

defineProps<{
  title: string
  description: string
  features: FeatureItem[]
  price: number
}>()
</script>

<style module lang="scss">
/* --- стили компонента --- */
.featureCard {
  background: $bg-color;
  border-radius: 32px;
  padding: 32px 64px;
  gap: $spacing-2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.25rem;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.25); /* ← тень */

}

.featureCardTitle {
  font-size: 2.5rem;
  font-weight: 700;
  color: $primary-color;
  margin: 0 0 $spacing-2 0;
}

.featureCardDescription {
  color: $text-muted;
  margin: 0 0 $spacing-3 0;
}

.featureCardCostContainer {
  margin: $spacing-3 0;
}

.featureCardCost {
  font-size: 2.25rem;
  font-weight: 700;
  color: $primary-color;
  margin: 0;
}

.featureCardCostPeriod {
  color: $text-muted;
  margin: $spacing-1 0 0 0;
}

.featureCardButton {
  background: $accent-color;
  color: white;
  border: none;
  border-radius: 54px;
  padding: 16px 48px;
  font-weight: 600;
  font-size: 1.25rem;
  font-family: $font-family-base;
}

.featureCardItems {
  margin-top: $spacing-4;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: $primary-color;
}

.featureCardItem {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.25rem;
  color: $text-color;
    color: $primary-color;

}

.featureCardItem--accent {
  color: $primary-color;
}

.featureCardItem--muted {
  color: $text-muted;
}

/* Иконка */
.featureCardItemIcon {
  width: 20px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: inherit;
}

/* ❗ КРИТИЧНО:
   ТРОГАЕМ ТОЛЬКО STROKE
   FILL НЕ ТРОГАЕМ — иначе ломается форма */
.featureCardItemIcon path {
  stroke: currentColor !important;
}

/* если вдруг stroke задан не на path, а выше */
.featureCardItemIcon svg {
  stroke: currentColor;
}

.featureCardItemText {
  color: inherit;
}
</style>
