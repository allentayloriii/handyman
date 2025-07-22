<script setup lang="ts">
import { ref } from "vue";

const { id, removeBtnDisabled } = defineProps<{
  id: number
  removeBtnDisabled: boolean
}>();

const emit = defineEmits<{
  increaseCount: [amt: number],
  decreaseCount: [amt: number],
  addClicked: []
  removeClicked: [id: number, amt: number]
}>()
const count = ref<number>(0);

const handleClickPlus = () => {
  count.value += 1;
  emit('increaseCount', 1)
}

const handleClickMinus = () => {
  const value = count.value - 1;
  value < 0 ? count.value = 0 : count.value -= 1;
  emit('decreaseCount', 1);
}

const handleClickRemove = () => {
  emit('removeClicked', id, count.value);
}

const handleClickAdd = () => {
 emit('addClicked')
}
</script>

<template>
  <div class="item">
    <button @click="handleClickMinus" :disabled="count <= 0">-</button>
    {{ count }}
    <button @click="handleClickPlus">+</button>
    <button class="add" @click="handleClickAdd">Add</button>
    <button class="remove" @click="handleClickRemove" :disabled="removeBtnDisabled">Remove</button>
  </div>
</template>

<style scoped>
  .item {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }
  .remove {
    background-color: red;
  }
  .add {
    background-color: green
  }
  
</style>
