<template>
  <div :class="$style.featureCard">
    <div
      v-if="icon"
      :class="$style.featureCardIcon"
    >
      {{ icon }}
    </div>
    <h2 :class="$style.featureCardTitle">{{ title }}</h2>
    <p :class="$style.featureCardDescription">{{ description }}</p>
    <router-link
      v-if="link"
      :to="link"
      :class="$style.sectionCardLink"
    >
      Узнать больше →
    </router-link>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  icon?:string
  description: string
  link?: string
}>()
</script>

<style module lang="scss">
.featureCard {
  background: $bg-light;
  border: 1px solid $border-color;
  border-radius: $border-radius-sm;
  padding: $spacing-4;
  text-align: center;
  gap: $spacing-2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.featureCardIcon {
  font-size: $font-size-4xl;
  margin-bottom: $spacing-4;
}

.featureCardTitle {
  font-size: $font-size-lg;
  font-weight: $font-weight-semibold;
  color: $text-color;
}

.featureCardDescription {
  color: $text-light;
  line-height: 1.6;
}

.sectionCardLink {
  color: $primary-color;
  text-decoration: none;
  font-weight: $font-weight-medium;
  transition: color 0.2s;

  &:hover {
    color: darken($primary-color, 10%);
  }
}
</style>