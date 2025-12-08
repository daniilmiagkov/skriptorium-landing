<template>
  <div id="app">
    <header :class="$style.header">
      <div class="container">
        <div :class="$style.headerContent">
          <router-link
            to="/"
            :class="$style.logo"
          >
            <h1>Skriptorium</h1>
          </router-link>
          <nav :class="$style.nav">
            <router-link
              to="/"
              :class="$style.navLink"
            >
              Главная
            </router-link>
            <router-link
              to="/about"
              :class="$style.navLink"
            >
              О проекте
            </router-link>
            <router-link
              to="/features"
              :class="$style.navLink"
            >
              Возможности
            </router-link>
            <router-link
              to="/technology"
              :class="$style.navLink"
            >
              Технологии
            </router-link>
            <router-link
              to="/contact"
              :class="$style.navLink"
            >
              Контакты
            </router-link>
          </nav>
        </div>
      </div>
    </header>
    <main :class="$style.main">
      <router-view />
    </main>
    <footer :class="$style.footer">
      <div class="container">
        <p>&copy; 2025 Skriptorium. Блог</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// App component
</script>

<style module lang="scss">
.header {
  background-color: $bg-color;
  border-bottom: 1px solid $border-color;
  padding: $spacing-md 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.headerContent {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  text-decoration: none;
  color: $text-color;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: $primary-color;
  }
}

.nav {
  display: flex;
  gap: $spacing-lg;
}

.navLink {
  text-decoration: none;
  color: $text-color;
  font-weight: 500;
  transition: color 0.2s;
  position: relative;

  &:hover {
    color: $primary-color;
  }

  &.router-link-active {
    color: $primary-color;

    &::after {
      content: '';
      position: absolute;
      bottom: -$spacing-xs;
      left: 0;
      right: 0;
      height: 2px;
      background-color: $primary-color;
    }
  }
}

.main {
  flex: 1;
  padding: $spacing-xl 0;
}

.footer {
  background-color: $bg-light;
  border-top: 1px solid $border-color;
  padding: $spacing-lg 0;
  margin-top: auto;
  text-align: center;
  color: $text-light;
}

@media (max-width: $breakpoint-md) {
  .nav {
    gap: $spacing-md;
    flex-wrap: wrap;
  }

  .headerContent {
    flex-direction: column;
    gap: $spacing-md;
  }
}
</style>

