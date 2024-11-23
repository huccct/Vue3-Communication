<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { constantRoute } from './router'

const { t } = useI18n()

const routes = constantRoute[0].children
</script>

<template>
  <div class="container">
    <nav class="desktop-nav">
      <ul>
        <li v-for="route in routes" :key="route.path">
          <router-link :to="route.path">
            {{ t(route.meta?.titleKey as string) }}
          </router-link>
        </li>
      </ul>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  min-height: 100vh;
  background: #fafafa;
}

.desktop-nav {
  width: 240px;
  padding: 2rem 1rem;
  background: white;
  border-right: 1px solid #e5e7eb;
  position: fixed;
  height: 100%;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin: 0.5rem 0;
}

li a {
  display: block;
  padding: 0.75rem 1rem;
  color: #4b5563;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

li a:hover {
  background: #f3f4f6;
  color: var(--primary-color);
}

.router-link-active {
  background: #ecfdf5;
  color: var(--primary-color) !important;
  font-weight: 500;
}

main {
  flex: 1;
  padding: 2rem;
  margin-left: 240px;
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .container {
    flex-direction: column;
  }

  main {
    margin-left: 0;
    padding: 1rem;
  }
}
</style>
