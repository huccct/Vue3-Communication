<script setup lang="ts">
import { provide, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Son from './components/Son.vue'

const { t } = useI18n()
const count = ref(0)
const message = ref(t('pages.provideInject.fromParent'))

function increment() {
  count.value++
}

provide('count', count)
provide('message', message)
provide('increment', increment)
</script>

<template>
  <div class="provide-demo">
    <h2>{{ $t('pages.provideInject.title') }}</h2>
    <div class="parent">
      <h3>{{ $t('common.parent') }}：</h3>
      <p>{{ $t('common.count') }}：{{ count }}</p>
      <p>{{ $t('common.message') }}：{{ message }}</p>
      <button class="btn" @click="increment">
        {{ $t('common.increment') }}
      </button>
    </div>
    <Son />
  </div>
</template>

<style scoped>
.provide-demo {
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
}
.btn:hover {
  background: #3aa876;
}
.btn:active {
  transform: scale(0.98);
}
</style>
