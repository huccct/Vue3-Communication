<!-- Parent -->
<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Child from './components/Child.vue'

const { t } = useI18n()
const msg = ref(t('pages.props.fromParent'))
const count = ref(0)
const userInfo = ref({
  name: 'Zhang San',
  age: 18,
})

function increment() {
  count.value++
}
</script>

<template>
  <div class="props-demo">
    <h2>{{ t('pages.props.title') }}</h2>
    <div class="parent">
      <h3>{{ t('common.parent') }}：</h3>
      <p>{{ t('common.message') }}：{{ msg }}</p>
      <p>{{ t('common.count') }}：{{ count }}</p>
      <p>{{ t('common.user') }}：{{ userInfo.name }} {{ userInfo.age }}{{ t('common.age') }}</p>
      <button class="btn" @click="increment">
        {{ t('common.increment') }}
      </button>
    </div>
    <Child :msg="msg" :count="count" :user-info="userInfo" />
  </div>
</template>

<style scoped>
.props-demo {
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
