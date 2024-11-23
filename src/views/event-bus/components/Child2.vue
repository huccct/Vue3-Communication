<script setup lang="ts">
import emitter from '@/utils'
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const message = ref('')

function handleMessage(msg: string) {
  message.value = msg
}

onMounted(() => {
  emitter.on('sendMsg', (msg: unknown) => {
    if (typeof msg === 'string') {
      handleMessage(msg)
    }
  })
})
onUnmounted(() => {
  emitter.off('sendMsg', (msg: unknown) => {
    if (typeof msg === 'string') {
      handleMessage(msg)
    }
  })
})
</script>

<template>
  <div class="child">
    <h3>{{ t('pages.eventBus.child2') }}：</h3>
    <p>{{ t('common.receivedMessage') }}：{{ message }}</p>
  </div>
</template>

<style scoped>
.child {
  flex: 1;
  border: 1px solid #42b983;
  padding: 15px;
  border-radius: 4px;
}
</style>
