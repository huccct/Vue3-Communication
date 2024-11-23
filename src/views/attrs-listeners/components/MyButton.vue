<script setup lang="ts">
import { ElButton } from 'element-plus'
import { useAttrs } from 'vue'
import { useI18n } from 'vue-i18n'

const attrs = useAttrs()
const { t } = useI18n()
</script>

<template>
  <div class="child">
    <h3>{{ t('pages.attrs.child') }}：</h3>
    <div class="attrs-display">
      {{ t('pages.attrs.attrsDisplay') }} {{ attrs }}
    </div>
    <div class="button-wrapper" @click.stop>
      <ElButton v-bind="attrs">
        <slot />
      </ElButton>
    </div>
  </div>
</template>

<style scoped>
.child {
  border: 1px solid #42b983;
  padding: 15px;
  border-radius: 4px;
}
.attrs-display {
  margin-bottom: 10px;
}
</style>
