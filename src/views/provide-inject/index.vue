<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Son from './components/Son.vue'

const { t } = useI18n()
const count = ref(0)
const message = ref(t('pages.provideInject.fromParent'))
const showCode = ref(false)
const activeTab = ref('parent')

function increment() {
  count.value++
}

provide('count', count)
provide('message', message)
provide('increment', increment)

const codeSnippets = computed(() => ({
  parent: `
// Parent Component
const count = ref(${count.value})
const message = ref('${message.value}')

function increment() {
  count.value++
}

provide('count', count)
provide('message', message)
provide('increment', increment)`,
  child: `
// Child Component
const count = inject('count')
const message = inject('message')
const increment = inject('increment')

<template>
  <div class="child">
    <p>Injected count: {{ count }}</p>
    <p>Injected message: {{ message }}</p>
    <button @click="increment">
      Increment from child
    </button>
  </div>
</template>`,
}))
</script>

<template>
  <div class="provide-demo">
    <h2>{{ $t('pages.provideInject.title') }}</h2>
    <button class="btn code-toggle" @click="showCode = !showCode">
      {{ showCode ? t('common.hideCode') : t('common.showCode') }}
    </button>
    <div class="parent">
      <h3>{{ $t('common.parent') }}：</h3>
      <p>{{ $t('common.count') }}：{{ count }}</p>
      <p>{{ $t('common.message') }}：{{ message }}</p>
      <button class="btn" @click="increment">
        {{ $t('common.increment') }}
      </button>
    </div>
    <Son />

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
.provide-demo {
  padding: 20px;
}

.parent {
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 4px;
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
  .provide-demo {
    padding: 12px;
  }
}
</style>
