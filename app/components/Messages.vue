<template>
  <div :class="$style.messagesWrapper">
    <Message
      v-for="(msg, index) in messages"
      :key="index"
      :number="index + 1"
    >
      {{ msg }}
    </Message>
  </div>
</template>

<script setup lang="ts">
import Message from './Message.vue'

const messages = [
  'Унификация и систематизация информации организации',
  'Сокращается время на поиск информации сотрудником, улучшается выполнение поставленных задач',
  'Повышается скорость адаптации и эффективность труда, сокращается число ошибок и время приёма',
  'Больница теряет меньше сотрудников и средств'
]
</script>

<style module lang="scss">
.messagesWrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 колонки на планшет и выше */
    gap: 32px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr); /* 4 колонки на больших экранах */
    gap: 40px;
  }
}
</style>
