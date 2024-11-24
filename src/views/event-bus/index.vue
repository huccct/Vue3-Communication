<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Child1 from './components/Child1.vue'
import Child2 from './components/Child2.vue'

const { t } = useI18n()
const showCode = ref(false)
const activeTab = ref('child1')

const codeSnippets = computed(() => ({
  child1: `
// Child1 Component
import { emitter } from '@/utils/eventBus'

function sendMessage() {
  emitter.emit('message', 'Hello from Child1')
}

<button @click="sendMessage">
  Send Message
</button>`,
  child2: `
// Child2 Component
import { emitter } from '@/utils/eventBus'
import { onMounted, onUnmounted } from 'vue'

const message = ref('')

function handleMessage(msg: string) {
  message.value = msg
}

onMounted(() => {
  emitter.on('message', handleMessage)
})

onUnmounted(() => {
  emitter.off('message', handleMessage)
})

<div>
  <p>Received: {{ message }}</p>
</div>`,
}))
</script>

<template>
  <div class="event-bus-demo">
    <h2>{{ $t('pages.eventBus.title') }}</h2>
    <button class="btn code-toggle" @click="showCode = !showCode">
      {{ showCode ? t('common.hideCode') : t('common.showCode') }}
    </button>
    <div class="children">
      <Child1 />
      <Child2 />
    </div>

    <div v-if="showCode" class="code-preview">
      <div class="code-tabs">
        <button
          v-for="tab in ['child1', 'child2']"
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
.event-bus-demo {
  padding: 20px;
}

.children {
  display: flex;
  gap: 20px;
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
  .event-bus-demo {
    padding: 12px;
  }

  .children {
    flex-direction: column;
    gap: 12px;
  }

  .btn {
    width: 100%;
    min-width: unset;
    margin-right: 0;
  }

  .code-tabs {
    flex-direction: column;
  }
}
</style>
