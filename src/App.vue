<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { constantRoute } from './router'

const { t } = useI18n()

const routes = constantRoute[0].children
</script>

<template>
  <div class="container">
    <nav>
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
}

nav {
  width: 200px;
  padding: 20px;
  border-right: 1px solid #eee;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

.router-link-active {
  color: #42b983;
  font-weight: bold;
}

main {
  flex: 1;
  padding: 20px;
}
</style>
