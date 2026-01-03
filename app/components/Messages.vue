<template>
  <div :class="$style.messagesWrapper">
    <Message
      :class="$style.card1"
      number="01"
      text="Унификация и систематизация информации организации"
    />
    <Message
      :class="$style.card2"
      number="02"
      text="Сокращается время на поиск информации сотрудником, улучшается выполнение поставленных задач"
    />
    <Message
      :class="$style.card3"
      number="03"
      text="Повышается скорость адаптации и эффективность труда, сокращается число ошибок и время приёма"
    />
    <Message
      :class="$style.card4"
      number="04"
      variant="accent"
      text="Больница теряет меньше сотрудников и средств"
    />
  </div>
</template>

<script setup lang="ts">
import Message from './Message.vue'
</script>

<style module lang="scss">
.messagesWrapper {
  display: grid;
  row-gap: 32px;
  grid-template-columns: repeat(8, 1fr);
  height: fit-content;
  width: 100%;
  padding: 0 $spacing-5;
  grid-template-areas:  
    "a a a a . . . ."
    ". . . b b b b b"
    "c c c c c . . ."
    ". . . . d d d .";


  @media (max-width: 1350px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-areas: 
      "a a a a a . . ."
      ". . b b b b b b"
      "c c c c c . . ."
      ". . . d d d d .";
  }

  @media (max-width: 610px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-areas: 
      "a a a a a a . ."
      ". b b b b b b b"
      "c c c c c c c ."
      ". . d d d d d .";
  }
}

.card1 {
  grid-area: a;
}

.card2 {
  grid-area: b;
}

.card3 {
  grid-area: c;
}

.card4 {
  grid-area: d;
}
</style>
