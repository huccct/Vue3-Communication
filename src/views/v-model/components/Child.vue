<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineProps<{
  msg: string
  counter: number
}>()
const emit = defineEmits<{
  'update:msg': [value: string]
  'update:counter': [value: number]
}>()
const { t } = useI18n()
</script>

<template>
  <div class="child">
    <h3>{{ t('common.child') }}：</h3>
    <input
      :value="msg"
      class="input"
      @input="emit('update:msg', ($event.target as HTMLInputElement).value)"
    >
    <button
      class="btn"
      @click="emit('update:counter', counter + 1)"
    >
      {{ t('common.increment') }}
    </button>
  </div>
</template>

<style scoped>
.child {
  border: 1px solid #42b983;
  padding: 15px;
  border-radius: 4px;
}
.input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 14px;
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
</style>
