<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Child from './components/Child.vue'

const { t } = useI18n()
const count = ref(0)
const message = ref('')
const showCode = ref(false)
const activeTab = ref('parent')

function handleIncrement(step: number) {
  count.value += step
}

function handleSendMsg(msg: string) {
  message.value = msg
}

const codeSnippets = computed(() => ({
  parent: `
// Parent Component
const count = ref(${count.value})
const message = ref('${message.value}')

function handleIncrement(step: number) {
  count.value += step
}

function handleSendMsg(msg: string) {
  message.value = msg
}

<Child 
  @increment="handleIncrement"
  @send-message="handleSendMsg" 
/>`,
  child: `
// Child Component
const emit = defineEmits<{
  increment: [step: number]
  'send-message': [msg: string]
}>()

function emitIncrement() {
  emit('increment', 1)
}

function emitMessage() {
  emit('send-message', 'Hello from child!')
}

<button @click="emitIncrement">
  Increment
</button>
<button @click="emitMessage">
  Send Message
</button>`,
}))
</script>

<template>
  <div class="custom-event-demo">
    <h2>{{ t('pages.customEvent.title') }}</h2>
    <button class="btn code-toggle" @click="showCode = !showCode">
      {{ showCode ? t('common.hideCode') : t('common.showCode') }}
    </button>
    <div class="parent">
      <h3>{{ t('common.parentData') }}：</h3>
      <p>{{ t('common.count') }}：{{ count }}</p>
      <p>{{ t('common.receivedMessage') }}：{{ message }}</p>
    </div>
    <Child @increment="handleIncrement" @send-message="handleSendMsg" />

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
.custom-event-demo {
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
  .custom-event-demo {
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
