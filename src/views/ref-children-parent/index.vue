<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Child from './components/Child.vue'

const { t } = useI18n()
const childRef = ref()
const count = ref(0)

function increment() {
  count.value++
}

function callChildMethod() {
  childRef.value?.showMessage(t('pages.ref.fromParent'))
}

defineExpose({
  increment,
})
</script>

<template>
  <div class="ref-demo">
    <h2>{{ $t('pages.ref.title') }}</h2>
    <div class="parent">
      <h3>{{ $t('common.parent') }}：</h3>
      <p>{{ $t('common.count') }}：{{ count }}</p>
      <button class="btn" @click="increment">
        {{ $t('common.increment') }}
      </button>
      <button class="btn" @click="callChildMethod">
        {{ $t('pages.ref.callChild') }}
      </button>
    </div>

    <Child
      ref="childRef"
      :counter="count"
    />
  </div>
</template>

<style scoped>
.ref-demo {
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
}
.btn:hover {
  background: #3aa876;
}
.btn:active {
  transform: scale(0.98);
}
</style>
