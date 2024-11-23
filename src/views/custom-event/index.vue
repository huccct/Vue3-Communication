<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Child from './components/Child.vue'

const { t } = useI18n()
const count = ref(0)
const message = ref('')

function handleIncrement(step: number) {
  count.value += step
}

function handleSendMsg(msg: string) {
  message.value = msg
}
</script>

<template>
  <div class="custom-event-demo">
    <h2>{{ t('pages.customEvent.title') }}</h2>
    <div class="parent">
      <h3>{{ t('common.parentData') }}：</h3>
      <p>{{ t('common.count') }}：{{ count }}</p>
      <p>{{ t('common.receivedMessage') }}：{{ message }}</p>
    </div>
    <Child @increment="handleIncrement" @send-message="handleSendMsg" />
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
</style>
