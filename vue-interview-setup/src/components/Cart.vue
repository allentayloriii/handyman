<script setup lang="ts">
  import Item from '../components/Item.vue';
  import { ref } from 'vue';

  const grandCount = ref<number>(0);
  const items = ref<{id: number}[]>([{id: 1}]);

  const handleIncreaseTotal = (amt: number) => grandCount.value += amt;

  const handleDecreaseTotal = (amt: number) => {
    const value = grandCount.value - amt;
    value < 0 ? grandCount.value = 0 : grandCount.value -= amt;
  }

  const handleAddItem = () => {
    const lastId = items.value[items.value.length - 1].id;
    items.value = [...items.value, {id: lastId + 1}]
  }

  const handleRemoveItem = (id: number, amt: number) => {
    handleDecreaseTotal(amt);
    items.value = [...items.value.filter(item => item.id !== id)];
    // console.log(`${JSON.stringify([...items.value.filter(item => item.id !== id)])}`)
  }

</script>

<template>
  <div>
    <div>Grand Total: {{ grandCount }}</div>
    <div class="list">
      <Item
        v-for="{id} in items" :key="id" 
        :id="id"
        @increase-count="handleIncreaseTotal"
        @decrease-count="handleDecreaseTotal"
        @add-clicked="handleAddItem"
        @remove-clicked="handleRemoveItem"
        :remove-btn-disabled="items.length < 2"
      />
    </div>
  </div>
</template>


<style scoped>
  .list {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
</style>