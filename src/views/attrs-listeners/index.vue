<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'
import MyButton from './components/MyButton.vue'

const { t } = useI18n()

function showMessage(type: 'success' | 'warning' | 'info') {
  ElMessage({
    type,
    message: t('pages.attrs.message', { type }),
  })
}
</script>

<template>
  <div class="attrs-demo">
    <h2>{{ t('pages.attrs.title') }}</h2>
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
</style>
