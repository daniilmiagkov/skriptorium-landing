<template>
  <button
    :class="[
      $style.button,
      { 
        [$style.small]: size === 'small',
        [$style.medium]: size === 'medium',
        [$style.large]: size === 'large',
        [$style.fullWidth]: fullWidth,
        [$style.loading]: isLoading
      }
    ]"
    :disabled="isLoading || disabled"
    type="button"
    @click="handleClick"
  >
    <span
      v-if="isLoading"
      :class="$style.loader"
    />
    <span :class="$style.content">
      <slot>
        {{ text }}
      </slot>
    </span>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    text?: string
    size?: 'small' | 'medium' | 'large'
    fullWidth?: boolean
    isLoading?: boolean
    disabled?: boolean
  }>(), {
    text: 'Оставить заявку',
    size: 'medium',
    fullWidth: false,
    isLoading: false,
    disabled: false
  }
)

const emit = defineEmits<{  
  (e: 'click'): void
}>()

const handleClick = () => {
  if (!props.disabled && !props.isLoading) {
    emit('click')
  }
}
</script>

<style module lang="scss">
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: $font-weight-medium;
  color: white;
  background-color: $accent-color;
  border: none;
  border-radius: $border-radius-full;
  cursor: pointer;
  font-size: $font-size-base;
  transition: all 0.25s ease;
  position: relative;
  padding: $spacing-4 $spacing-8;
}

.content {
  display: flex;
  align-items: center;
}

/* Полная ширина */
.fullWidth {
  width: 100%;
}

/* Состояние загрузки */
.loading {
  .content {
    opacity: 0;
  }
}

.loader {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes spin {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>