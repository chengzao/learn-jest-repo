<template>
  <div class="ml-4">
    <div class="mt-2">
      <button @click="increment" class="mr-2">-</button>
      <button @click="decrement" class="ml-2">+</button>
      <p class="sum">{{ count }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    count: 0,
  }),
  methods: {
    increment() {
      this.count = this.count + 1;
    },

    decrement() {
      this.count = this.count - 1;
    },
  },
};
</script>