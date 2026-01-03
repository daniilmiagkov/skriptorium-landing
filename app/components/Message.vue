<template>
  <div
    :class="[
      $style.messageCard, 
      isAccent && $style.accent
    ]"
  >
    <div :class="$style.badge">{{ number }}</div>
    <div :class="[$style.text]">
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  number: number | string
  text?: string
  variant?: 'default' | 'accent'
}>()

const isAccent = computed(() => props.variant === 'accent' )
</script>

<style module lang="scss">
.messageCard {
  position: relative;
  padding: $spacing-5 $spacing-5 $spacing-5 $spacing-8;
  background: $bg-color;
  border-radius: 32px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
  width: fit-content;
  display: inline-block;
  height: fit-content;
}

.accent {
  background-color: $accent-color;

  .text {
    font-size: $font-size-base;
    color: $text-color;
    line-height: 1.5;
    font-weight: $font-weight-medium;
    width: fit-content;
    color: $text-inverse;
  }
}

.badge {
  position: absolute;
  top: -12px;
  left: -12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: $primary-color;
  color: white;
  font-weight: $font-weight-semibold;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: $font-size-base;
}

.text {
  font-size: $font-size-base;
  color: $text-color;
  line-height: 1.5;
  font-weight: $font-weight-medium;
  width: fit-content;
}
</style>
