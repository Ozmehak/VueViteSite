<script>
import { mapGetters } from 'vuex'
  export default {
    name: 'HelloWorld',
    props: {
      msg: {
        type: String,
        default: 'Hello'
      }
    },

    computed: {
      ...mapGetters(['message']),
    }
  }
</script>

<style>
  p {
    font-weight: bold;
  }
</style>

<template>
  <img alt="" src="/assets/fox.jpeg" />
  <p>{{ msg }}</p>
  <p>{{ message }}</p>

</template>
