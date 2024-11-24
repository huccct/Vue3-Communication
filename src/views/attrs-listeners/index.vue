<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import MyButton from './components/MyButton.vue'

const { t } = useI18n()
const showCode = ref(false)
const activeTab = ref('parent')

function showMessage(type: 'success' | 'warning' | 'info') {
  ElMessage({
    type,
    message: t('pages.attrs.message', { type }),
  })
}

const codeSnippets = computed(() => ({
  parent: `
// Parent Component
<MyButton
  type="primary"
  size="large"
  :disabled="false"
  @click="showMessage('info')"
>
  Primary Button
</MyButton>

<MyButton
  type="success"
  size="default"
  round
  @click="showMessage('success')"
>
  Success Button
</MyButton>`,
  child: `
// Child Component
// MyButton.vue
const attrs = useAttrs()

<template>
  <el-button v-bind="attrs">
    <slot></slot>
  </el-button>
</template>`,
}))
</script>

<template>
  <div class="attrs-demo">
    <h2>{{ t('pages.attrs.title') }}</h2>
    <button class="btn code-toggle" @click="showCode = !showCode">
      {{ showCode ? t('common.hideCode') : t('common.showCode') }}
    </button>
    <div class="parent">
      <h3>{{ t('common.parent') }}：</h3>
      <MyButton
        type="primary"
        size="large"
        :disabled="false"
        @click="showMessage('info')"
      >
        {{ t('pages.attrs.primaryBtn') }}
      </MyButton>

      <MyButton
        type="success"
        size="default"
        round
        @click="showMessage('success')"
      >
        {{ t('pages.attrs.successBtn') }}
      </MyButton>

      <MyButton
        type="warning"
        @click="showMessage('warning')"
      >
        {{ t('pages.attrs.warnBtn') }}
      </MyButton>
    </div>

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
.attrs-demo {
  padding: 20px;
}

.parent {
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 4px;
}

.parent :deep(.el-button) {
  margin-right: 10px;
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
  .attrs-demo {
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
