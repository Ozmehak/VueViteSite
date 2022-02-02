<script>
  import { mapGetters } from 'vuex'
  import CardSlot from './CardSlot.vue'

  export default {
    name: 'HelloWorld',
    components: { CardSlot },
    props: {
      msg: {
        type: String,
        default: 'Hello'
      }
    },

    computed: {
      ...mapGetters(['message'])
    }
  }
</script>

<style scoped lang="sass">
  .lion
    width: 430px

  p
    font-weight: bold
</style>

<template>
  <CardSlot class="lion">
    <img alt="lion getting bitten by lioness" src="/assets/lion.png" />
    <p>{{ msg }}</p>
    <p>{{ message }}</p>
  </CardSlot>
</template>
