<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

function toggleLocale() {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
}
</script>

<template>
  <div class="layout">
    <header class="header">
      <div class="left">
        <h1>{{ $t('title') }}</h1>
      </div>
      <div class="right">
        <button class="icon-btn" @click="toggleLocale">
          {{ locale === 'zh' ? 'EN' : '中' }}
        </button>

        <a
          href="https://github.com/huccct/vue3-communication"
          target="_blank"
          class="github"
        >
          <svg class="github-icon" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </div>
    </header>
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  background: #fff;
  color: #213547;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid #ddd;
}

.right {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: transparent;
  color: #213547;
  cursor: pointer;
  transition: all 0.3s;
}

.icon-btn:hover {
  background: #f5f5f5;
}

.theme-icon {
  font-size: 18px;
}

.github {
  color: #213547;
}

.github-icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
}

.main {
  padding: 2rem;
}

/* Dark Mode */
.layout.dark {
  background: #1a1a1a;
  color: #fff;
}

.layout.dark .header {
  border-color: #333;
}

.layout.dark .icon-btn {
  border-color: #333;
  color: #fff;
}

.layout.dark .icon-btn:hover {
  background: #2a2a2a;
}

.layout.dark .github {
  color: #fff;
}
</style>
