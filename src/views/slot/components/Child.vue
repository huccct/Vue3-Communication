<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const list = [
  { id: 1, name: 'Zhang San' },
  { id: 2, name: 'Li Si' },
  { id: 3, name: 'Wang Wu' },
]
</script>

<template>
  <div class="child">
    <h3>{{ t('common.child') }}：</h3>

    <!-- 具名插槽 -->
    <div class="header">
      <slot name="header" />
    </div>

    <!-- 默认插槽 -->
    <div class="default-slot">
      <slot />
    </div>

    <!-- 作用域插槽 -->
    <div class="content">
      <p>{{ t('pages.slot.scopedSlot') }}</p>
      <div v-for="item in list" :key="item.id">
        <slot name="content" :item="item" />
      </div>
    </div>

    <!-- 具名插槽 -->
    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.child {
  border: 1px solid #42b983;
  padding: 15px;
  border-radius: 4px;
}
.header {
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
.content {
  margin: 15px 0;
}
.footer {
  border-top: 1px solid #eee;
  padding-top: 10px;
  margin-top: 10px;
}
</style>
