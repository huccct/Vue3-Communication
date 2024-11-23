<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Child from './components/Child.vue'

const { t } = useI18n()
const msg = ref('Hello')
const counter = ref(0)
</script>

<template>
  <div class="v-model-demo">
    <h2>{{ t('pages.vModel.title') }}</h2>
    <div class="parent">
      <h3>{{ t('common.parentData') }}：</h3>
      <p>{{ t('common.message') }}：{{ msg }}</p>
      <p>{{ t('common.count') }}：{{ counter }}</p>
    </div>

    <Child
      v-model:msg="msg"
      v-model:counter="counter"
    />
  </div>
</template>

<style scoped>
.v-model-demo {
  padding: 20px;
}
.parent {
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 4px;
}
</style>
