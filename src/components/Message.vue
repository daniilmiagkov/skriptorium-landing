<template>
  <div :class="$style.messageCard">
    <div :class="$style.badge">{{ number }}</div>
    <div :class="$style.text">
      <slot>{{ text }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  number: number | string
  text?: string
}

defineProps<Props>()
</script>

<style module lang="scss">
.messageCard {
  position: relative;
  padding: 24px 20px 20px 20px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.badge {
  position: absolute;
  top: -12px;
  left: -12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #667eea; /* основной цвет */
  color: white;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.text {
  font-size: 16px;
  color: #333;
  line-height: 1.5;
}
</style>
