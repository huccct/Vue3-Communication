<script setup lang="ts">
import { constantRoute } from '@/router'
import { Close, Menu } from '@element-plus/icons-vue'
import { ElIcon } from 'element-plus'
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isMenuOpen = ref(false)
const routes = constantRoute[0].children
const bodyClass = computed(() => ({
  'overflow-hidden': isMenuOpen.value,
}))

function toggleLocale() {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

watch(isMenuOpen, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  }
  else {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <div class="layout" :class="bodyClass">
    <header class="header">
      <div class="left">
        <h1>{{ $t('title') }}</h1>
      </div>
      <div class="right">
        <button class="icon-btn" @click="toggleLocale">
          {{ locale === 'zh' ? 'EN' : '中' }}
        </button>
        <a href="https://github.com/huccct/vue3-communication" target="_blank" class="github">
          <svg class="github-icon" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
        <button class="menu-btn" @click="toggleMenu">
          <ElIcon size="20">
            <Menu />
          </ElIcon>
        </button>
      </div>
    </header>

    <!-- 移动端导航菜单 -->
    <div class="mobile-nav" :class="{ active: isMenuOpen }">
      <nav>
        <router-link
          v-for="route in routes"
          :key="route.path"
          :to="route.path"
          class="nav-link"
          @click="isMenuOpen = false"
        >
          {{ $t(route.meta?.titleKey as string) }}
        </router-link>
      </nav>
      <button class="close-btn" @click="isMenuOpen = false">
        <ElIcon><Close /></ElIcon>
      </button>
    </div>

    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  background: #fafafa;
  color: #2c3e50;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
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

/* 添加移动端菜单按钮样式 */
.menu-btn {
  display: none;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background: transparent;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  color: #2c3e50;
  transition: all 0.2s ease;
}

.menu-btn:hover {
  background: #f5f5f5;
}

@media (max-width: 768px) {
  .menu-btn {
    display: flex;
  }
}

/* 移动端导航菜单 */
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.98);
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 1000;
  display: none;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.mobile-nav.active {
  transform: translateX(0);
}

.mobile-nav nav {
  height: 100%;
  padding: 2rem 2rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.nav-link {
  font-size: 1.25rem;
  color: #2c3e50;
  text-decoration: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background: #f0fdf4;
  color: var(--primary-color);
}

.nav-link.router-link-active {
  color: var(--primary-color);
  font-weight: 500;
}

.close-btn {
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  background: var(--primary-color);
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(66, 185, 131, 0.2);
}

.close-btn:hover {
  background: var(--hover-color);
  transform: translateX(-50%) scale(1.05);
}

.close-btn:active {
  transform: translateX(-50%) scale(0.95);
}

@media (max-width: 768px) {
  .mobile-nav {
    display: block;
  }
}

.overflow-hidden {
  overflow: hidden;
  height: 100vh;
}
</style>
