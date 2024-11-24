<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Child from './components/Child.vue'

const { t } = useI18n()
const msg = ref('Hello')
const counter = ref(0)
const showCode = ref(false)
const activeTab = ref('parent')

const codeSnippets = computed(() => ({
  parent: `
// Parent Component
const msg = ref('${msg.value}')
const counter = ref(${counter.value})

<Child
  v-model:msg="msg"
  v-model:counter="counter"
/>`,
  child: `
// Child Component
defineProps<{
  msg: string
  counter: number
}>()

const emit = defineEmits<{
  'update:msg': [value: string]
  'update:counter': [value: number]
}>()

function updateMessage(value: string) {
  emit('update:msg', value)
}

function increment() {
  emit('update:counter', counter + 1)
}

<template>
  <input v-model="msg" @input="updateMessage" />
  <button @click="increment">
    Increment
  </button>
</template>`,
}))
</script>

<template>
  <div class="v-model-demo">
    <h2>{{ t('pages.vModel.title') }}</h2>
    <button class="btn code-toggle" @click="showCode = !showCode">
      {{ showCode ? t('common.hideCode') : t('common.showCode') }}
    </button>
    <div class="parent">
      <h3>{{ t('common.parentData') }}：</h3>
      <p>{{ t('common.message') }}：{{ msg }}</p>
      <p>{{ t('common.count') }}：{{ counter }}</p>
    </div>

    <Child v-model:msg="msg" v-model:counter="counter" />

    <div v-if="showCode" class="code-preview">
      <div class="code-tabs">
        <button
          v-for="tab in ['parent', 'child']"
          :key="tab"
          class="btn tab-btn" :class="[{ active: activeTab === tab }]"
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
.v-model-demo {
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
  .v-model-demo {
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
