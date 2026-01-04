<template>
  <div :class="$style.home">
    <div :class="$style.textBlockWrapper">
      <Title />
    </div>

    <div :class="$style.imageMessagesWrapper">
      <Screens />
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
import Pricing from '@/components/Pricing.vue'
import Title from '@/components/Title.vue'
import Form from '@/components/Form.vue'
import Screens from '@/components/Features.vue'

const handleFormSubmit = (phone: string) => {
  console.log('Номер телефона отправлен:', phone)
}
</script>

<style module lang="scss">
.home {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: $spacing-20;
}

.textBlockWrapper,
.pricingWrapper,
.formWrapper {
  width: 100%;
  padding-left: $spacing-4;
  padding-right: $spacing-4;
  margin: 0 auto;
}

.textBlockWrapper {
  max-width: 1400px;
}

.formWrapper {
  max-width: 720px;
  margin: auto;
}

@media (max-width: 1024px) {
  .textBlockWrapper {
    margin-bottom: $spacing-16;
  }

  .pricingWrapper {
    margin-bottom: $spacing-16;
  }

  .formWrapper {
    margin-bottom: $spacing-16;
  }
}

@media (max-width: 768px) {
  .textBlockWrapper,
  .pricingWrapper,
  .formWrapper {
    padding-left: $spacing-4;
    padding-right: $spacing-4;
  }

  .textBlockWrapper {
    margin-bottom: $spacing-12;
  }

  .imageMessagesWrapper {
    margin-bottom: $spacing-12;
  }

  .pricingWrapper {
    margin-bottom: $spacing-10;
  }
}

@media (max-width: 480px) {
  .textBlockWrapper,
  .pricingWrapper,
  .formWrapper {
    padding-left: $spacing-3;
    padding-right: $spacing-3;
  }
}
</style>

