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
import Screens from '@/components/Screens.vue'

const handleFormSubmit = (phone: string) => {
  console.log('Номер телефона отправлен:', phone)
}
</script>

<style module lang="scss">
/* =====================
   BASE LAYOUT (FLEX)
===================== */
.home {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

/* =====================
   COMMON CONTAINER
===================== */
.textBlockWrapper,
.pricingWrapper,
.formWrapper {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: $spacing-6;
  padding-right: $spacing-6;
}

/* =====================
   SECTIONS
===================== */

/* Title */
.textBlockWrapper {
  max-width: 1200px;
  margin-top: $spacing-20;
  margin-bottom: $spacing-20;
}

/* Screens — full width */
.imageMessagesWrapper {
  width: 100%;
  margin-top: $spacing-20;
  margin-bottom: $spacing-20;
  overflow: hidden;
}

/* Pricing */
.pricingWrapper {
  max-width: 1000px;
  margin-bottom: $spacing-20;
}

/* Form */
.formWrapper {
  max-width: 720px;
  margin-bottom: $spacing-20;
}

/* =====================
   ≤ 1024px (tablet)
===================== */
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

/* =====================
   ≤ 768px (mobile)
===================== */
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

/* =====================
   ≤ 480px
===================== */
@media (max-width: 480px) {
  .textBlockWrapper,
  .pricingWrapper,
  .formWrapper {
    padding-left: $spacing-3;
    padding-right: $spacing-3;
  }
}
</style>

