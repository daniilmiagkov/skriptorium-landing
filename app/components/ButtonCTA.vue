<template>
  <button
    :class="[
      $style.button,
      size === 'small' && $style.small,
      size === 'medium' && $style.medium,
      size === 'large' && $style.large,
      fullWidth && $style.fullWidth,
      isLoading && $style.loading
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

  font-family: $font-family-base;
  font-weight: $font-weight-medium;
  font-size: 1em;

  color: white;
  background-color: $accent-color;
  border: none;
  border-radius: $border-radius-full;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  position: relative;
  transition: all 0.25s ease;

  padding: 0.8em 1.6em; 
}

.small {
  font-size: 0.875em; 
}

.medium {
  font-size: 1em; 
}

.large {
  font-size: 1.125em; 
}

.content {
  display: flex;
  align-items: center;
  line-height: 1;
}

.fullWidth {
  width: 100%;
}

.loading {
  cursor: default;

  .content {
    opacity: 0;
  }
}

.loader {
  width: 1.25em;      
  height: 1.25em;
  border: 0.125em solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;

  animation: spin 0.8s linear infinite;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>