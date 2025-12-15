<template>
  <DropdownMenuRoot v-model:open="open">
    <DropdownMenuTrigger
      class="IconButton"
      aria-label="Открыть меню"
    >
      <Icon icon="radix-icons:hamburger-menu" />
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent
        class="DropdownMenuContent"
        :side-offset="5"
      >
        <DropdownMenuItem
          v-for="(item, index) in items"
          :key="index"
          class="DropdownMenuItem"
          :disabled="item.disabled"
          @select="() => {item.action(); open = false}"
        >
          {{ item.label }}
          <div
            v-if="item.shortcut"
            class="RightSlot"
          >
            {{ item.shortcut }}
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from 'reka-ui'
import { ref } from 'vue'

export type MenuItem = {
  label: string
  action: () => void
  shortcut?: string
  disabled?: boolean
}

// Принимаем элементы меню через props
defineProps<{
  items: MenuItem[]
}>()

const open = ref(false)
</script>

<style>
/* Убраны импорты цветов Radix */

/* Сброс стилей для кнопки */
.IconButton {
  all: unset;
  font-family: inherit;
  border-radius: 100%;
  height: 35px;
  width: 35px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #2E7D32; /* Зеленый цвет для иконки */
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;
}

.IconButton:hover {
  background-color: #E8F5E9; /* Светло-зеленый при наведении */
  transform: scale(1.05);
}

.IconButton:focus {
  outline: 2px solid #4CAF50;
  outline-offset: 2px;
}

/* Стили для контента меню */
.DropdownMenuContent {
  min-width: 220px;
  background-color: white;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  animation-duration: 200ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  border: 1px solid #E0E0E0;
}

.DropdownMenuContent[data-side='top'] {
  animation-name: slideDownAndFade;
}

.DropdownMenuContent[data-side='right'] {
  animation-name: slideLeftAndFade;
}

.DropdownMenuContent[data-side='bottom'] {
  animation-name: slideUpAndFade;
}

.DropdownMenuContent[data-side='left'] {
  animation-name: slideRightAndFade;
}

/* Стили для элементов меню */
.DropdownMenuItem {
  font-size: 14px;
  line-height: 1.4;
  color: #333;
  border-radius: 6px;
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 12px;
  position: relative;
  user-select: none;
  outline: none;
  cursor: pointer;
  margin: 2px 0;
  transition: all 0.15s ease;
}

.DropdownMenuItem:hover {
  background-color: #F5F5F5;
}

.DropdownMenuItem[data-disabled] {
  color: #BDBDBD;
  pointer-events: none;
  cursor: not-allowed;
}

.DropdownMenuItem[data-highlighted] {
  background-color: #4CAF50; /* Зеленый фон */
  color: white;
}

/* Стили для шорткатов */
.RightSlot {
  margin-left: auto;
  padding-left: 16px;
  color: #757575;
  font-size: 12px;
  font-weight: 500;
}

[data-highlighted] > .RightSlot {
  color: rgba(255, 255, 255, 0.9);
}

[data-disabled] .RightSlot {
  color: #BDBDBD;
}

/* Анимации */
@keyframes slideUpAndFade {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideRightAndFade {
  from {
    opacity: 0;
    transform: translateX(-4px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideDownAndFade {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideLeftAndFade {
  from {
    opacity: 0;
    transform: translateX(4px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>