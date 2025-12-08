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
  border-radius: 8px;
  padding: $spacing-md;
  text-align: center;
  gap: $spacing-sm;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.featureCardIcon {
  font-size: 3rem;
  margin-bottom: $spacing-md;
}

.featureCardTitle {
  font-size: 1.25rem;
  font-weight: 600;
  color: $text-color;
}

.featureCardDescription {
  color: $text-light;
  line-height: 1.6;
}

.sectionCardLink {
  color: $primary-color;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: darken($primary-color, 10%);
  }
}
</style>