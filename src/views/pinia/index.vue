<script setup lang="ts">
import { useCounterStore } from '@/store/module/counter'
import StoreChild from './components/Child.vue'

const store = useCounterStore()
</script>

<template>
  <div class="pinia-demo">
    <h2>{{ $t('pages.pinia.title') }}</h2>
    <div class="parent">
      <h3>{{ $t('common.parent') }}：</h3>
      <p>{{ $t('common.count') }}：{{ store.count }}</p>
      <p>{{ $t('common.message') }}：{{ store.message }}</p>
      <button class="btn" @click="store.increment">
        {{ $t('common.increment') }}
      </button>
      <button class="btn" @click="store.updateMessage($t('pages.pinia.parentUpdate'))">
        {{ $t('common.updateMessage') }}
      </button>
    </div>
    <StoreChild />
  </div>
</template>

<style scoped>
.pinia-demo {
  padding: 20px;
}

.parent {
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 20px;
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
  margin-bottom: 10px;
  min-width: 120px;
}

.btn:hover {
  background: #3aa876;
}

.btn:active {
  transform: scale(0.98);
}

@media (max-width: 768px) {
  .btn {
    width: 100%;
    min-width: unset;
    margin-right: 0;
  }
}
</style>
