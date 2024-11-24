<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Child from './components/Child.vue'

const { t } = useI18n()
const childRef = ref()
const count = ref(0)
const showCode = ref(false)
const activeTab = ref('parent')

function increment() {
  count.value++
}

function callChildMethod() {
  childRef.value?.showMessage(t('pages.ref.fromParent'))
}

const codeSnippets = computed(() => ({
  parent: `
// Parent Component
const childRef = ref()
const count = ref(${count.value})

function increment() {
  count.value++
}

function callChildMethod() {
  childRef.value?.showMessage('Message from parent')
}

<Child
  ref="childRef"
  :counter="count"
/>`,
  child: `
// Child Component
defineProps<{ counter: number }>()

function showMessage(msg: string) {
  ElMessage.success(msg)
}

function handleParentIncrement($parent: any) {
  $parent.increment()
  ElMessage.info('Called parent method')
}

defineExpose({ showMessage })

<template>
  <div class="child">
    <p>Received count: {{ counter }}</p>
    <button @click="handleParentIncrement($parent)">
      Call Parent Method
    </button>
  </div>
</template>`,
}))

defineExpose({
  increment,
})
</script>

<template>
  <div class="ref-demo">
    <h2>{{ $t('pages.ref.title') }}</h2>
    <button class="btn code-toggle" @click="showCode = !showCode">
      {{ showCode ? t('common.hideCode') : t('common.showCode') }}
    </button>
    <div class="parent">
      <h3>{{ $t('common.parent') }}：</h3>
      <p>{{ $t('common.count') }}：{{ count }}</p>
      <button class="btn" @click="increment">
        {{ $t('common.increment') }}
      </button>
      <button class="btn" @click="callChildMethod">
        {{ $t('pages.ref.callChild') }}
      </button>
    </div>

    <Child
      ref="childRef"
      :counter="count"
    />

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
.ref-demo {
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
  .ref-demo {
    padding: 12px;
  }

  .parent {
    padding: 12px;
  }

  .btn {
    width: 100%;
    margin-right: 0;
    margin-bottom: 12px;
    padding: 12px;
    font-size: 16px;
  }

  .code-tabs {
    flex-direction: column;
  }
}
</style>
