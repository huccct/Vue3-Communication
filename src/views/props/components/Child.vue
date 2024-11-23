<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Props {
  msg?: string
  count?: number
  userInfo?: {
    name: string
    age: number
  }
}

defineProps<Props>()
const { t } = useI18n()
</script>

<template>
  <div class="child">
    <h3>{{ t('common.child') }}：</h3>
    <p>{{ t('common.message') }}：{{ msg }}</p>
    <p>{{ t('common.count') }}：{{ count }}</p>
    <p>{{ t('common.user') }}：{{ userInfo?.name }} {{ userInfo?.age }}{{ t('common.age') }}</p>
  </div>
</template>

<style scoped>
.child {
  border: 1px solid #42b983;
  padding: 15px;
  border-radius: 4px;
}
</style>
