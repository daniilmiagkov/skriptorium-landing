<template>
  <div :class="$style.featureCard">
    <h2 :class="$style.featureCardTitle">{{ title }}</h2>
    <p :class="$style.featureCardDescription">{{ description }}</p>

    <div :class="$style.featureCardCostContainer">
      <p :class="$style.featureCardCost">{{ price }} Р</p>
      <p :class="$style.featureCardCostPeriod">за пользователя/месяц</p>
    </div>

    <ButtonCTA :class="$style.featureCardButton">
      2 месяца бесплатно
    </ButtonCTA>

    <div :class="$style.featureCardItems">
      <div
        v-for="item in features"
        :key="item.text"
        :class="[
          $style.featureCardItem,
          item.variant && $style[`featureCardItem--${item.variant}`]
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
import ButtonCTA from './ButtonCTA.vue';

export type FeatureItem = {
  text: string
  variant?: 'default' | 'accent' | 'muted'
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

  @media (max-width: 1000px) {
    font-size: $font-size-lg;
    padding: $spacing-10 $spacing-12;
  }

  @media (max-width: 830px) {
    font-size: $font-size-base;
    padding: $spacing-8 $spacing-12;
  }

  @media (max-width: 700px) {
    padding: $spacing-5 $spacing-8;
  }
}

.featureCardTitle {
  font-size: 2em;                 
  font-weight: $font-weight-bold;
  color: $primary-color;
  margin: 0 0 0.4em 0;             
}

.featureCardDescription {
  font-size: 1em;
  color: $text-muted;
  margin: 0 0 0.6em 0;             
}

.featureCardCostContainer {
  margin: 0.6em 0;                 
}

.featureCardCost {
  font-size: 1.8em;               
  font-weight: $font-weight-bold;
  color: $primary-color;
  margin: 0;
}

.featureCardCostPeriod {
  font-size: 0.8em;                
  color: $text-muted;
  margin: 0.2em 0 0 0;            
}

.featureCardItems {
  margin-top: 0.8em;              
  display: flex;
  flex-direction: column;
  gap: 0.6em;                     
  color: $primary-color;
}

.featureCardItem {
  display: flex;
  align-items: center;
  gap: 0.6em;                    
  font-size: 1em;
  color: $primary-color;
}

.featureCardItem--accent {
  color: $primary-color;
}

.featureCardItem--muted {
  color: $text-muted;
}

.featureCardItemIcon {
  width: 1em;                      
  height: 0.8em;
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
