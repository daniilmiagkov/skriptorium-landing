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
.featureCard {
  background: $bg-color;
  border-radius: $border-radius-md;
  padding: $spacing-12 $spacing-16;
  gap: $spacing-2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: $font-size-lg;
    box-shadow: $shadow-md;

}

.featureCardTitle {
  font-size: $font-size-3xl;
  font-weight: $font-weight-bold;
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
  font-weight: $font-weight-bold;
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
  border-radius: $border-radius-lg;
  padding: $spacing-4 $spacing-12;
  font-weight: $font-weight-semibold;
  font-size: $font-size-lg;
  font-family: $font-family-base;
}

.featureCardItems {
  margin-top: $spacing-4;
  display: flex;
  flex-direction: column;
  gap: $spacing-3;
  color: $primary-color;
}

.featureCardItem {
  display: flex;
  align-items: center;
  gap: $spacing-3;
  font-size: $font-size-lg;
  color: $text-color;
    color: $primary-color;

}

.featureCardItem--accent {
  color: $primary-color;
}

.featureCardItem--muted {
  color: $text-muted;
}

.featureCardItemIcon {
  width: 20px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: inherit;
}

.featureCardItemIcon path {
  stroke: currentColor !important;
}

.featureCardItemIcon svg {
  stroke: currentColor;
}

.featureCardItemText {
  color: inherit;
}
</style>
