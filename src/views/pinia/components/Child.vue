<script setup lang="ts">
import { useCounterStore } from '@/store/module/counter'

const store = useCounterStore()
</script>

<template>
  <div class="child">
    <h3>{{ $t('common.child') }}：</h3>
    <p>{{ $t('common.count') }}：{{ store.count }}</p>
    <p>{{ $t('common.message') }}：{{ store.message }}</p>
    <button class="btn" @click="store.increment">
      {{ $t('common.increment') }}
    </button>
    <button
      class="btn"
      @click="store.updateMessage($t('pages.pinia.childUpdate'))"
    >
      {{ $t('common.updateMessage') }}
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
