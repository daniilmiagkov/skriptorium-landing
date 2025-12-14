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
   BASE GRID — 18 COLUMNS
===================== */
.home {
  min-height: 60vh;
  display: grid;

  grid-template-columns: repeat(18, 96px);
  gap: 32px;

  justify-content: center;
  margin: 0 auto;
}

/* =====================
   SECTIONS LAYOUT + MARGINS
===================== */

/* Title */
.textBlockWrapper {
  grid-column: 3 / span 14;
  margin-bottom: 500px;
}

/* Screens */
.imageMessagesWrapper {
  grid-column: 1 / span 18;
  margin-top: 500px;
}

/* Pricing */
.pricingWrapper {
  grid-column: 5 / span 10;
  margin-top: 200px;

}

/* Form */
.formWrapper {
  margin-top: 200px;
  margin-bottom: 200px;

  grid-column: 6 / span 8;
}

/* =====================
   ≥ 1200px
===================== */
@media (min-width: 1200px) {
  .home {
    grid-template-columns: repeat(18, 80px);
    column-gap: 32px;
    max-width: calc(80px * 18 + 32px * 17);
  }

  .textBlockWrapper {
    margin-bottom: 200px;
  }

  .imageMessagesWrapper {
    margin-bottom: 200px;
  }
}

/* =====================
   < 1200px
===================== */
@media (max-width: 1199px) {
  .home {
    grid-template-columns: repeat(18, 64px);
    column-gap: 24px;
    max-width: calc(64px * 18 + 24px * 17);
  }

  .textBlockWrapper {
    margin-bottom: 160px;
  }

  .imageMessagesWrapper {
    margin-bottom: 160px;
  }

  .pricingWrapper {
    margin-bottom: 120px;
  }
}

/* =====================
   ≤ 1024px (tablet)
===================== */
@media (max-width: 1024px) {
  .home {
    grid-template-columns: repeat(18, 56px);
    column-gap: 20px;
    max-width: calc(56px * 18 + 20px * 17);
  }

  .pricingWrapper,
  .formWrapper {
    grid-column: 5 / span 10;
  }

  .textBlockWrapper {
    margin-bottom: 140px;
  }

  .imageMessagesWrapper {
    margin-bottom: 140px;
  }
}

/* =====================
   ≤ 768px (mobile)
===================== */
@media (max-width: 768px) {
  .home {
    grid-template-columns: repeat(18, 1fr);
    column-gap: 16px;
    padding: 0 16px;
    max-width: 100%;
  }

  .textBlockWrapper,
  .imageMessagesWrapper,
  .pricingWrapper,
  .formWrapper {
    grid-column: 1 / span 18;
  }

  .textBlockWrapper {
    margin-bottom: 120px;
  }

  .imageMessagesWrapper {
    margin-bottom: 120px;
  }

  .pricingWrapper {
    margin-bottom: 100px;
  }
}

/* =====================
   ≤ 480px
===================== */
@media (max-width: 480px) {
  .home {
    padding: 0 12px;
  }

  .textBlockWrapper {
    margin-bottom: 96px;
  }

  .imageMessagesWrapper {
    margin-bottom: 96px;
  }

  .pricingWrapper {
    margin-bottom: 80px;
  }
}
</style>
