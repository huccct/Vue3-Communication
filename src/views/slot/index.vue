<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SlotChild from './components/Child.vue'

const { t } = useI18n()
</script>

<template>
  <div class="slot-demo">
    <h2>{{ t('pages.slot.title') }}</h2>
    <SlotChild>
      <template #default>
        {{ t('pages.slot.defaultContent') }}
      </template>
      <template #header>
        {{ t('pages.slot.namedSlot') }}
      </template>
      <template #content="{ item }">
        <div class="item">
          {{ item.name }}
        </div>
      </template>
      <template #footer>
        {{ t('pages.slot.footerSlot') }}
      </template>
    </SlotChild>
  </div>
</template>

<style scoped>
.slot-demo {
  padding: 20px;
}
.parent {
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 4px;
}
.item {
  padding: 8px;
  border-bottom: 1px solid #eee;
}
.item:last-child {
  border-bottom: none;
}
</style>
