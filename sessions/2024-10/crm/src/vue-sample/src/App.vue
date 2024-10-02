<template>
  <div id="app">
    <CustomerList />
  </div>
</template>

<script>
import CustomerList from './components/CustomerList.vue';

export default {
  name: 'App',
  components: {
    CustomerList,
  },
};
</script>