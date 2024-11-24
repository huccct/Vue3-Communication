<script setup lang="ts">
import emitter from '@/utils'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

function sendMessage() {
  emitter.emit('sendMsg', t('pages.eventBus.fromChild1'))
}
</script>

<template>
  <div class="child">
    <h3>{{ $t('pages.eventBus.child1') }}：</h3>
    <button class="btn" @click="sendMessage">
      {{ $t('pages.eventBus.sendToChild2') }}
    </button>
  </div>
</template>

<style scoped>
.child {
  flex: 1;
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
