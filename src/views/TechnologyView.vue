<template>
  <div :class="$style.technology">
    <div class="container">
      <h1 :class="$style.pageTitle">Технологический стек</h1>

      <div :class="$style.techSections">
        <section
          v-for="section in techSections"
          :key="section.id"
          :class="$style.techSection"
        >
          <h2 :class="$style.techSectionTitle">{{ section.title }}</h2>
          <div :class="$style.techList">
            <div
              v-for="tech in section.technologies"
              :key="tech.name"
              :class="$style.techItem"
            >
              <h3 :class="$style.techItemName">{{ tech.name }}</h3>
              <p :class="$style.techItemDescription">{{ tech.description }}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Technology {
  name: string
  description: string
}

interface TechSection {
  id: number
  title: string
  technologies: Technology[]
}

const techSections = ref<TechSection[]>([
  {
    id: 1,
    title: 'Frontend',
    technologies: [
      {
        name: 'Flutter',
        description: 'Кроссплатформенный фреймворк для разработки пользовательского интерфейса'
      },
      {
        name: 'Dart',
        description: 'Язык программирования для разработки Flutter приложений'
      }
    ]
  },
  {
    id: 2,
    title: 'Backend',
    technologies: [
      {
        name: 'Node.js',
        description: 'Серверная платформа на базе JavaScript для создания масштабируемых приложений'
      },
      {
        name: 'Express',
        description: 'Веб-фреймворк для Node.js, упрощающий создание API и веб-серверов'
      },
      {
        name: 'TypeScript',
        description: 'Типизированная надстройка над JavaScript для повышения надежности кода'
      }
    ]
  },
  {
    id: 3,
    title: 'База данных',
    technologies: [
      {
        name: 'PostgreSQL',
        description: 'Мощная реляционная база данных с открытым исходным кодом'
      },
      {
        name: 'Prisma',
        description: 'ORM для работы с базой данных, обеспечивающая типобезопасность'
      }
    ]
  },
  {
    id: 4,
    title: 'Инфраструктура',
    technologies: [
      {
        name: 'Docker',
        description: 'Контейнеризация приложений для упрощения развертывания'
      },
      {
        name: 'Traefik',
        description: 'Обратный прокси и балансировщик нагрузки с автоматическим SSL'
      },
      {
        name: 'Nginx',
        description: 'Веб-сервер для статического контента и проксирования'
      }
    ]
  },
  {
    id: 5,
    title: 'Безопасность',
    technologies: [
      {
        name: 'JWT',
        description: 'JSON Web Tokens для аутентификации и авторизации пользователей'
      },
      {
        name: 'RBAC',
        description: 'Role-Based Access Control - система управления доступом на основе ролей'
      },
      {
        name: 'Rate Limiting',
        description: 'Ограничение частоты запросов для защиты от злоупотреблений'
      }
    ]
  }
])
</script>

<style module lang="scss">
.technology {
  min-height: 60vh;
}

.pageTitle {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: $spacing-xl;
  text-align: center;
  color: $text-color;
}

.techSections {
  display: flex;
  flex-direction: column;
  gap: $spacing-xl;
}

.techSectionTitle {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: $spacing-lg;
  color: $primary-color;
  border-bottom: 2px solid $border-color;
  padding-bottom: $spacing-sm;
}

.techList {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-md;
}

.techItem {
  background: $bg-light;
  border: 1px solid $border-color;
  border-radius: 8px;
  padding: $spacing-md;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
}

.techItemName {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: $spacing-xs;
  color: $text-color;
}

.techItemDescription {
  color: $text-light;
  line-height: 1.6;
}

@media (max-width: $breakpoint-md) {
  .pageTitle {
    font-size: 2rem;
  }

  .techSectionTitle {
    font-size: 1.5rem;
  }

  .techList {
    grid-template-columns: 1fr;
  }
}
</style>

