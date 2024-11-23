import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const message = ref('Hello from Pinia')

  function increment() {
    count.value++
  }

  function updateMessage(newMsg: string) {
    message.value = newMsg
  }

  return {
    count,
    message,
    increment,
    updateMessage,
  }
})
