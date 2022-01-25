<template>
  <div>
    <img src="this.duck">
  </div>
</template>

<script>
  import wretch from 'wretch'

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Ducko',
    data() {
      return {
        duck: null
      }
    },
    methods: {
      getDemDucks() {
        wretch(`https://random-d.uk/api`)
          .get()
          .json()
          .then((duck) => {
            this.duck = duck
          })
      }
    }
  }
</script>

<style scoped></style>
