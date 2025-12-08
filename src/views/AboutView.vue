<template>
  <div :class="$style.about">
    <div class="container">
      <article :class="$style.article">
        <h1 :class="$style.articleTitle">О проекте Skriptorium</h1>
        
        <section :class="$style.articleSection">
          <h2>Что такое Skriptorium?</h2>
          <p>
            Skriptorium — это современная веб-платформа, разработанная для управления медицинскими документами 
            и верификации персонала в медицинских учреждениях. Проект создан с целью упрощения и автоматизации 
            процессов работы с документацией в сфере здравоохранения.
          </p>
        </section>

        <section :class="$style.articleSection">
          <h2>Наша миссия</h2>
          <p>
            Мы стремимся сделать работу с медицинскими документами максимально простой, безопасной и эффективной. 
            Наша платформа помогает медицинским учреждениям организовать работу с документацией, обеспечивая при 
            этом высокий уровень безопасности и соответствие всем требованиям.
          </p>
        </section>

        <section :class="$style.articleSection">
          <h2>Основные цели</h2>
          <ul>
            <li>Цифровизация процессов управления медицинскими документами</li>
            <li>Упрощение процедуры верификации медицинского персонала</li>
            <li>Повышение эффективности работы медицинских учреждений</li>
            <li>Обеспечение безопасности и конфиденциальности данных</li>
            <li>Создание удобного и интуитивного интерфейса</li>
          </ul>
        </section>

        <section :class="$style.articleSection">
          <h2>Для кого предназначен проект?</h2>
          <p>
            Skriptorium разработан для медицинских учреждений различного масштаба: от небольших клиник до крупных 
            больничных комплексов. Платформа будет полезна административному персоналу, HR-отделам и руководству 
            медицинских учреждений.
          </p>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
// About page component
</script>

<style module lang="scss">
.about {
  min-height: 60vh;
}

.article {
  max-width: 800px;
  margin: 0 auto;
}

.articleTitle {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: $spacing-xl;
  color: $text-color;
}

.articleSection {
  margin-bottom: $spacing-xl;

  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: $spacing-md;
    color: $text-color;
  }

  p {
    color: $text-light;
    line-height: 1.8;
    margin-bottom: $spacing-md;
  }

  ul {
    color: $text-light;
    line-height: 1.8;
    padding-left: $spacing-lg;
    margin-top: $spacing-sm;

    li {
      margin-bottom: $spacing-xs;
    }
  }
}

@media (max-width: $breakpoint-md) {
  .articleTitle {
    font-size: 2rem;
  }

  .articleSection h2 {
    font-size: 1.5rem;
  }
}
</style>

