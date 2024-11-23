<script setup lang="ts">
import type { Ref } from 'vue'
import { inject } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const count = inject<Ref<number>>('count')
const message = inject<Ref<string>>('message')
const increment = inject<() => void>('increment')
</script>

<template>
  <div class="grandson">
    <h3>{{ t('common.grandChild') }}：</h3>
    <p>{{ t('common.count') }}：{{ count }}</p>
    <p>{{ t('common.message') }}：{{ message }}</p>

    <button class="btn" @click="increment">
      {{ t('common.increment') }}
    </button>
  </div>
</template>

<style scoped>
.grandson {
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
</style>
