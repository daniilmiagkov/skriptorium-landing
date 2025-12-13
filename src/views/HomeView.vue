<template>
  <div :class="$style.home">
    <div :class="$style.textBlockWrapper">
      <Title />
    </div>
    
    <div :class="$style.pricingWrapper">
      <Pricing />
    </div>
    
    <div :class="$style.formWrapper">
      <Form @submit="handleFormSubmit" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Pricing from '@/components/Pricing.vue';
import Title from '@/components/Title.vue';
import Form from '@/components/Form.vue';

const handleFormSubmit = (phone: string) => {
  console.log('Номер телефона отправлен:', phone);
  // Здесь можно добавить логику отправки данных на сервер
  // Например: api.sendPhoneNumber(phone)
}
</script>

<style module lang="scss">
.home {
  min-height: 60vh;
  display: grid;
  grid-template-columns: repeat(12, 96px);
  gap: 32px;
  justify-content: center;
  margin: 0 auto;
}

.textBlockWrapper {
  grid-column: 1 / span 12;
  margin-bottom: 60px;
}

.pricingWrapper {
  grid-column: 3 / span 8;
  margin-bottom: 80px;
}

.formWrapper {
  grid-column: 3 / span 8;
}

/* Адаптивность */
@media (max-width: 1440px) {
  .home {
    grid-template-columns: repeat(12, 72px);
    gap: 24px;
  }
}

@media (max-width: 1024px) {
  .home {
    grid-template-columns: repeat(12, 64px);
    gap: 20px;
  }
  
  .pricingWrapper {
    grid-column: 2 / span 10;
  }
}

@media (max-width: 768px) {
  .home {
    grid-template-columns: repeat(12, 1fr);
    gap: 16px;
    padding: 0 16px;
  }
  
  .textBlockWrapper {
    margin-bottom: 40px;
  }
  
  .pricingWrapper {
    grid-column: 1 / span 12;
    margin-bottom: 60px;
  }
}
</style>