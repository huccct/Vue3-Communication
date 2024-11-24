<script setup lang="ts">
import Child1 from './components/Child1.vue'
import Child2 from './components/Child2.vue'
</script>

<template>
  <div class="event-bus-demo">
    <h2>{{ $t('pages.eventBus.title') }}</h2>
    <div class="children">
      <Child1 />
      <Child2 />
    </div>
  </div>
</template>

<style scoped>
.event-bus-demo {
  padding: 20px;
}

.children {
  display: flex;
  gap: 20px;
}

@media (max-width: 768px) {
  .event-bus-demo {
    padding: 12px;
  }
  
  .children {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
