<template>
  <div :class="$style.outerContainer">
    <div :class="$style.container">
      <div :class="$style.textBlock">
        <span :class="$style.title">Skriptorium</span>
        <span :class="$style.separator">—</span>
        <p :class="$style.description">
          Ваш текст абзаца здесь. Это пример текста, который может быть любой длины.
          Он располагается справа от заголовка SKRIPTORIUM и тире.
        </p>
      </div>
      <svg
        :class="$style.line"
        width="100%"
        height="1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1="0.5"
          x2="100%"
          y2="0.5"
          stroke="#e0e0e0"
          stroke-width="1"
          stroke-dasharray="5, 3"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style module lang="scss">
.outerContainer {
  position: relative;
  width: 100%;
  overflow: hidden; // Чтобы SVG линия не создавала горизонтальный скролл
}

.container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

.textBlock {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
}

.title {
  font-size: 48px;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #000;
  white-space: nowrap;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    font-size: 36px;
    white-space: normal;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
  }
}

.separator {
  font-size: 48px;
  font-weight: 300;
  color: #000;
  flex-shrink: 0;
  line-height: 1;
  
  @media (max-width: 768px) {
    display: none;
  }
}

.description {
  font-size: 18px;
  line-height: 1.6;
  color: #333;
  margin: 0;
  max-width: 800px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
}

.line {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200vw; // Увеличиваем ширину до 200% от viewport
  height: 1px;
  z-index: 1;
  pointer-events: none; // Чтобы линия не мешала взаимодействию
  
  line {
    // Можно настроить различные стили линии:
    // stroke: #e0e0e0; // Цвет уже задан в шаблоне
    // stroke-width: 1;
    // stroke-dasharray: none; // Сплошная линия
    // stroke-dasharray: 5, 3; // Пунктирная линия
    // stroke-dasharray: 1, 0; // Точечная линия
  }
  
  // Альтернативный вариант с градиентом
  &.gradient {
    line {
      stroke: url(#lineGradient);
    }
    
    // Добавляем градиентную заливку
    defs {
      linearGradient#lineGradient {
        x1: 0%;
        y1: 0%;
        x2: 100%;
        y2: 0%;
        
        stop {
          offset: 0%;
          stop-color: rgba(224, 224, 224, 0);
        }
        
        stop {
          offset: 10%;
          stop-color: #e0e0e0;
        }
        
        stop {
          offset: 90%;
          stop-color: #e0e0e0;
        }
        
        stop {
          offset: 100%;
          stop-color: rgba(224, 224, 224, 0);
        }
      }
    }
  }
}

// Вариант с анимацией линии (опционально)
.line.animated {
  line {
    animation: dash 20s linear infinite;
  }
  
  @keyframes dash {
    to {
      stroke-dashoffset: -1000;
    }
  }
}

// Стили из оригинального компонента
.featureCardCosts {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-top: $spacing-4;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>