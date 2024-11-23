<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const emit = defineEmits<{
  increment: [step: number]
  sendMessage: [msg: string]
}>()
const { t } = useI18n()
function sendMsg() {
  emit('sendMessage', t('pages.customEvent.fromChild'))
}
</script>

<template>
  <div class="child">
    <h3>{{ $t('common.child') }}：</h3>
    <button class="btn" @click="emit('increment', 1)">
      {{ $t('pages.customEvent.notifyParent') }}+1
    </button>
    <button class="btn" @click="emit('increment', 2)">
      {{ $t('pages.customEvent.notifyParent') }}+2
    </button>
    <button class="btn" @click="sendMsg">
      {{ $t('pages.customEvent.sendMessage') }}
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
  margin-right: 10px;
}
.btn:hover {
  background: #3aa876;
}
.btn:active {
  transform: scale(0.98);
}
</style>
