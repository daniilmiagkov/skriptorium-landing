<template>
  <div :class="$style.contact">
    <div class="container">
      <h1 :class="$style.pageTitle">Контакты</h1>

      <div :class="$style.contactContent">
        <section :class="$style.contactSection">
          <h2>Свяжитесь с нами</h2>
          <p>
            Если у вас есть вопросы о проекте Skriptorium или вы хотите узнать больше о возможностях платформы, 
            мы будем рады помочь вам.
          </p>
        </section>

        <section :class="$style.contactSection">
          <h2>Информация о проекте</h2>
          <div :class="$style.infoList">
            <div :class="$style.infoItem">
              <strong>Веб-сайт:</strong>
              <a
                href="https://skriptorium.ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                skriptorium.ru
              </a>
            </div>
            <div :class="$style.infoItem">
              <strong>Статус проекта:</strong>
              <span>В активной разработке</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Contact page component
</script>

<style module lang="scss">
.contact {
  min-height: 60vh;
}

.pageTitle {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: $spacing-8;
  text-align: center;
  color: $text-color;
}

.contactContent {
  max-width: 800px;
  margin: 0 auto;
}

.contactSection {
  margin-bottom: $spacing-8;

  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: $spacing-4;
    color: $text-color;
  }

  p {
    color: $text-light;
    line-height: 1.8;
    margin-bottom: $spacing-4;
  }
}

.infoList {
  display: flex;
  flex-direction: column;
  gap: $spacing-4;
}

.infoItem {
  display: flex;
  flex-direction: column;
  gap: $spacing-1;
  padding: $spacing-4;
  background: $bg-light;
  border-radius: 8px;
  border: 1px solid $border-color;

  strong {
    color: $text-color;
    font-weight: 600;
  }

  a {
    color: $primary-color;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: darken($primary-color, 10%);
      text-decoration: underline;
    }
  }

  span {
    color: $text-light;
  }
}

@media (max-width: $breakpoint-md) {
  .pageTitle {
    font-size: 2rem;
  }

  .contactSection h2 {
    font-size: 1.5rem;
  }
}
</style>

