<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SlotChild from './components/Child.vue'

const { t } = useI18n()
const showCode = ref(false)
const activeTab = ref('parent')

const codeSnippets = computed(() => ({
  parent: `
// Parent Component
<SlotChild>
  <template #default>
    Default slot content
  </template>
  <template #header>
    Named slot (header)
  </template>
  <template #content="{ item }">
    <div class="item">
      {{ item.name }}
    </div>
  </template>
  <template #footer>
    Footer slot content
  </template>
</SlotChild>`,
  child: `
// Child Component
<template>
  <div class="child">
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot />
      <slot 
        name="content" 
        v-for="item in items" 
        :item="item" 
      />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>`,
}))
</script>

<template>
  <div class="slot-demo">
    <h2>{{ t('pages.slot.title') }}</h2>
    <button class="btn code-toggle" @click="showCode = !showCode">
      {{ showCode ? t('common.hideCode') : t('common.showCode') }}
    </button>
    <SlotChild>
      <template #default>
        {{ t('pages.slot.defaultContent') }}
      </template>
      <template #header>
        {{ t('pages.slot.namedSlot') }}
      </template>
      <template #content="{ item }">
        <div class="item">
          {{ item.name }}
        </div>
      </template>
      <template #footer>
        {{ t('pages.slot.footerSlot') }}
      </template>
    </SlotChild>

    <div v-if="showCode" class="code-preview">
      <div class="code-tabs">
        <button
          v-for="tab in ['parent', 'child']"
          :key="tab"
          class="btn tab-btn"
          :class="[{ active: activeTab === tab }]"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </div>
      <pre class="code-block"><code>{{ codeSnippets[activeTab as keyof typeof codeSnippets] }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.slot-demo {
  padding: 20px;
}

.item {
  padding: 8px;
  border-bottom: 1px solid #eee;
}

.item:last-child {
  border-bottom: none;
}

.btn {
  background: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
  margin-right: 10px;
  margin-bottom: 10px;
  min-width: 120px;
}

.btn:hover {
  background: #3aa876;
}

.btn:active {
  transform: scale(0.98);
}

.code-preview {
  margin-top: 20px;
  background: #1e1e1e;
  border-radius: 8px;
  padding: 16px;
}

.code-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.tab-btn {
  background: transparent;
  border: 1px solid #666;
  color: #fff;
  margin: 0;
}

.tab-btn.active {
  background: #42b983;
  border-color: #42b983;
}

.code-block {
  margin: 0;
  color: #fff;
  font-family: monospace;
  white-space: pre-wrap;
}

@media (max-width: 768px) {
  .slot-demo {
    padding: 12px;
  }

  .btn {
    width: 100%;
    margin-right: 0;
  }

  .code-tabs {
    flex-direction: column;
  }
}
</style>
