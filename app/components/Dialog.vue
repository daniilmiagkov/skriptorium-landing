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
/* reset */
button,
fieldset,
input {
  all: unset;
}

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

.DialogDescription {
  margin: 10px 0 20px;
  color: #6f6c6d;
  font-size: 15px;
  line-height: 1.5;
}

.Button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  height: 35px;
  cursor: pointer;
}

.Button.trigger {
  background-color: white;
  color: $text-color;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16);
}

.Button.trigger:hover {
  background-color: #fbfafb;
}

.Button.trigger:focus {
  box-shadow: 0 0 0 2px black;
}

.Button.save {
  background-color: #edf9ee;
  color: $text-color;
}

.Button.save:hover {
  background-color: #e2f7e5;
}

.Button.save:focus {
  box-shadow: 0 0 0 2px #30a14e;
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

.Fieldset {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 15px;
}

.Label {
  font-size: 15px;
  color: #46a758;
  width: 90px;
  text-align: right;
}

.Input {
  width: 100%;
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 15px;
  line-height: 1;
  color: #46a758;
  box-shadow: 0 0 0 1px #68cf7d;
  height: 35px;
}

.Input:focus {
  box-shadow: 0 0 0 2px #7fe29a;
}

@keyframes overlayShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes contentShow {
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>