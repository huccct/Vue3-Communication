<!-- Parent -->
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Child from './components/Child.vue'

const { t } = useI18n()
const msg = ref(t('pages.props.fromParent'))
const count = ref(0)
const userInfo = ref({
  name: 'Zhang San',
  age: 18,
})

const showCode = ref(false)
const activeTab = ref('parent')

function increment() {
  count.value++
}

const codeSnippets = computed(() => ({
  parent: `
// Parent Component
const msg = ref('${msg.value}')
const count = ref(${count.value})
const userInfo = ref({
  name: '${userInfo.value.name}',
  age: ${userInfo.value.age}
})

<Child 
  :msg="msg"
  :count="count" 
  :user-info="userInfo" 
/>`,
  child: `
// Child Component
defineProps<{
  msg: string
  count: number
  userInfo: {
    name: string
    age: number
  }
}>()

<template>
  <div class="child">
    <p>Message: {{ msg }}</p>
    <p>Count: {{ count }}</p>
    <p>User: {{ userInfo.name }} {{ userInfo.age }}</p>
  </div>
</template>`,
}))
</script>

<template>
  <div class="props-demo">
    <h2>{{ t('pages.props.title') }}</h2>
    <button class="code-toggle" @click="showCode = !showCode">
      {{ showCode ? '隐藏代码' : '显示代码' }}
    </button>
    <div class="parent">
      <h3>{{ t('common.parent') }}：</h3>
      <p>{{ t('common.message') }}：{{ msg }}</p>
      <p>{{ t('common.count') }}：{{ count }}</p>
      <p>{{ t('common.user') }}：{{ userInfo.name }} {{ userInfo.age }}{{ t('common.age') }}</p>
      <button class="btn" @click="increment">
        {{ t('common.increment') }}
      </button>
    </div>
    <Child :msg="msg" :count="count" :user-info="userInfo" />

    <div v-if="showCode" class="code-preview">
      <div class="code-tabs">
        <button
          v-for="tab in ['parent', 'child']"
          :key="tab"
          class="tab-btn" :class="[{ active: activeTab === tab }]"
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
.props-demo {
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
  padding: 4px 12px;
  border-radius: 4px;
  cursor: pointer;
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

.code-toggle {
  background: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
}

.code-toggle:hover {
  background: #3aa876;
}
</style>
