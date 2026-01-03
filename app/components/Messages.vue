<template>
  <div :class="$style.messagesWrapper">
    <Message
      v-for="(msg, index) in messages"
      :key="index"
      :number="`0${index + 1}`"
      :variant="index === messages.length - 1 ? 'accent' : 'default'"
      :text="msg"
    />
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
  display: grid;
  flex-direction: column;
  row-gap: 32px;
  grid-template-columns: repeat(8, 1fr);
  height: fit-content;

  & > :nth-child(1) {
    grid-column: 1 / span 4;
  }

  & > :nth-child(2) {
    grid-column: 4 / span 5;
  }

  & > :nth-child(3) {
    grid-column: 1 / span 5;
  }

  & > :nth-child(4) {
    grid-column: 5 / span 3;
  }
}
</style>
