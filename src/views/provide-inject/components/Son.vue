<script setup lang="ts">
import { inject } from 'vue'
import { useI18n } from 'vue-i18n'
import Grandson from './GrandSon.vue'

const { t } = useI18n()
const count = inject('count')
const message = inject('message')
</script>

<template>
  <div class="child">
    <h3>{{ t('common.child') }}：</h3>
    <p>{{ t('common.count') }}：{{ count }}</p>
    <p>{{ t('common.message') }}：{{ message }}</p>
    <Grandson />
  </div>
</template>

<style scoped>
.child {
  border: 1px solid #42b983;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
}
</style>
