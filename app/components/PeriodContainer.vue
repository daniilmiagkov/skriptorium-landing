<template>
  <div :class="$style.periodContainer">
    <div :class="$style.periodButtons">
      <button
        v-for="(period, idx) in periods"
        :key="period.label"
        :class="[ 
          $style.periodButton, 
          selectedIndex === idx && $style.active,
        ]"
        :disabled="!period.enabled"
        @click="selectedIndex = idx"
      >
        {{ period.label }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Period = {
  label: string
  months: number
  enabled: boolean
}

const periods: Period[] = [
  { label: '6 мес', months: 6, enabled: false },
  { label: '9 мес', months: 9, enabled: false },
  { label: '1 год', months: 12, enabled: true },
  { label: '2 года', months: 24, enabled: false }
]

const selectedIndex = ref(2)
</script>

<style lang="scss" module>
.periodContainer {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: $bg-color;
  border-radius: $border-radius-full;
  max-width: 390px;
  padding: 0 0px;
  box-shadow: $shadow-md; 
}

.periodButtons {
  display: flex;
  align-items: center;
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
  -webkit-tap-highlight-color: transparent;
  text-wrap: nowrap;

  &.active {
    background: $accent-color;
    color: $text-inverse;
    box-shadow: 0 6px 18px rgba(17, 24, 39, 0.08);
  }

  &:disabled {
    color: $text-muted;
    cursor: default;
  }

  @media (max-width: 400px) {
    font-size: $font-size-base;
    padding: $spacing-2 $spacing-4;
  }
}
</style>