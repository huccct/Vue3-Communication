<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'

defineProps<{ counter: number }>()
const { t } = useI18n()
function showMessage(msg: string) {
  ElMessage.success(msg)
}

function handleParentIncrement($parent: any) {
  $parent.increment()
  ElMessage.info(t('pages.ref.calledParent'))
}

defineExpose({ showMessage })
</script>

<template>
  <div class="child">
    <h3>{{ $t('common.child') }}：</h3>
    <p>{{ $t('pages.ref.receivedCount') }}：{{ counter }}</p>
    <button class="btn" @click="handleParentIncrement($parent)">
      {{ $t('pages.ref.callParent') }}
    </button>
  </div>
</template>

<style scoped>
.child {
  border: 1px solid #42b983;
  padding: 15px;
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

@media (max-width: 768px) {
  .child {
    padding: 12px;
  }
  
  .btn {
    width: 100%;
    padding: 12px;
    font-size: 16px;
  }
}
</style>
