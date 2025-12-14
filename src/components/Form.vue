<template>
  <div
    id="contact-form"
    :class="$style.formSection"
  >
    <div :class="$style.container">
      <div :class="$style.content">
        <h2 :class="$style.headline">
          Начните использовать наш сервис!
        </h2>
        
        <form
          :class="$style.form"
          @submit.prevent="handleSubmit"
        >
          <div :class="$style.formGroup">
            <input
              v-model="phone"
              :class="$style.input"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              required
              pattern="[\+\d\s\(\)\-]+"
              @input="formatPhone"
            >

            <!-- Просто визуальная замена на buttonCTA -->
            <ButtonCTA :class="$style.button" />
          </div>

          
          <div
            v-if="successMessage"
            :class="$style.success"
          >
            {{ successMessage }}
          </div>
          
          <div
            v-if="errorMessage"
            :class="$style.error"
          >
            {{ errorMessage }}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ButtonCTA from './ButtonCTa.vue'

const emit = defineEmits<{
  submit: [phone: string]
}>()

const phone = ref('')
const isLoading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const handleSubmit = async () => {
  // Базовая валидация номера
  const cleanedPhone = phone.value.replace(/\D/g, '')
  
  if (cleanedPhone.length < 11) {
    errorMessage.value = 'Пожалуйста, введите корректный номер телефона'
    setTimeout(() => {
      errorMessage.value = ''
    }, 3000)
    return
  }
  
  isLoading.value = true
  errorMessage.value = ''
  
  try {
    // Здесь может быть API вызов
    await new Promise(resolve => setTimeout(resolve, 1000)) // Имитация запроса
    
    emit('submit', phone.value)
    
    // Показываем сообщение об успехе
    successMessage.value = 'Спасибо! Мы скоро вам перезвоним.'
    phone.value = ''
    
    // Скрываем сообщение через 5 секунд
    setTimeout(() => {
      successMessage.value = ''
    }, 5000)
    
  } catch (error) {
    console.error('Ошибка отправки формы:', error)
    errorMessage.value = 'Произошла ошибка при отправке. Попробуйте еще раз.'
    
    setTimeout(() => {
      errorMessage.value = ''
    }, 3000)
    
  } finally {
    isLoading.value = false
  }
}

const formatPhone = (event: Event) => {
  const input = event.target as HTMLInputElement
  let value = input.value.replace(/\D/g, '')
  
  if (value.startsWith('7') || value.startsWith('8')) {
    value = '7' + value.slice(1)
  }
  
  let formatted = '+7'
  
  if (value.length > 1) {
    formatted += ' (' + value.slice(1, 4)
  }
  
  if (value.length >= 5) {
    formatted += ') ' + value.slice(4, 7)
  }
  
  if (value.length >= 8) {
    formatted += '-' + value.slice(7, 9)
  }
  
  if (value.length >= 10) {
    formatted += '-' + value.slice(9, 11)
  }
  
  phone.value = formatted
}
</script>
<style module lang="scss">
.formSection {
  background: $primary-color;
  color: white;
  padding: $spacing-20 $spacing-5;
  position: relative;
  overflow: hidden;
  border-radius: 64px;
}

.container {
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.headline {
  font-size: 2.25rem;
  font-weight: $font-weight-semibold;
  color: white;
  margin-bottom: 52px;
  
  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
  
  @media (max-width: 480px) {
    font-size: 24px;
  }
}

.form {
  width: 100%;
}

.formGroup {
  display: flex;
  gap: $spacing-4;          // расстояние между input и кнопкой
  align-items: center;
justify-content: center;


  @media (max-width: 768px) {
    flex-direction: column;
    gap: $spacing-3;
  }
}

.input {
  width: fit-content;     
  min-width: unset;       
  flex: 0 0 auto;         
  padding: $spacing-3 $spacing-8;
  font-size: 1.25rem;
  border-radius: $border-radius-full;
  box-sizing: border-box;
  width: 18ch;

  &::placeholder {
    color: $text-muted;
  }
  
  &:focus {
    outline: none;
  }
}

.button {
    font-size: $font-size-lg;

}

/* Альтернативный вариант с display: inline-block */
/* .input {
  display: inline-block;
  min-width: 280px;
  padding: 12px 32px;
  font-size: 20px;
  border-radius: 9999px;
  background: $bg-color;
  color: $text-muted;
  font-family: $font-family-base;
} */

.loader {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(102, 126, 234, 0.3);
  border-top-color: #667eea;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.success,
.error {
  padding: $spacing-3 $spacing-5;
  border-radius: $border-radius-sm;
  font-size: $font-size-base;
  margin-top: $spacing-4;
  animation: fadeIn 0.3s ease;
}

.success {
  background: rgba(46, 204, 113, 0.2);
  color: #2ecc71;
  border: 1px solid rgba(46, 204, 113, 0.3);
}

.error {
  background: rgba(231, 76, 60, 0.2);
  color: #e74c3c;
  border: 1px solid rgba(231, 76, 60, 0.3);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>