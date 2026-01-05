<template>
  <DialogRoot>
    <DialogTrigger as-child>
      <slot name="trigger" />
    </DialogTrigger>

    <DialogPortal>
      <DialogOverlay :class="$style.DialogOverlay" />
      <DialogContent
        :class="[
          $style.DialogContent, 
          variant === 'fullscreen' && $style.DialogContentFullscreen
        ]"
      >
        <DialogTitle :class="$style.DialogTitle">
          {{ title }}
        </DialogTitle>

        <slot />

        <DialogClose aria-label="Close">
          <Icon
            icon="lucide:x"
            :class="$style.IconButton"
          />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'reka-ui'

defineProps<{
  title?: string
  variant?: 'default' | 'fullscreen'
}>()
</script>

<style module lang="scss">
.DialogOverlay {
  background-color: rgba(0, 0, 0, 0.44);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.DialogContent {
  background-color: white;
  border-radius: 6px;
  box-shadow: rgba(22, 23, 24, 0.35) 0px 10px 38px -10px, rgba(22, 23, 24, 0.2) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
}

.DialogContentFullscreen {
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  max-width:100vw;
  max-height: 100vh;
}

.DialogContent:focus {
  outline: none;
}

.DialogTitle {
  margin: 0;
  font-weight: 500;
  color: #1c1518;
  font-size: 17px;
}

.IconButton {
  font-family: inherit;
  border-radius: 100%;
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: $text-color;
  position: absolute;
  top: $spacing-4;
  right: $spacing-4;
  cursor: pointer;
}

.IconButton:hover {
  background-color: #e9f6ea;
}

.IconButton:focus {
  box-shadow: 0 0 0 2px #68cf7d;
}

@keyframes overlayShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>