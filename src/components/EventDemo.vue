<template>
  <div class="EventDemo">
    <span class="EventDemo__text"
      >Counting down:
      <span class="EventDemo__text__timer">{{ time }}</span></span
    >
  </div>
</template>

<script>
  export default {
    name: 'EventDemo',
    props: {
      totalTime: {
        type: Number,
        required: true
      }
    },
    emits: ['done'],
    data() {
      return {
        time: 0
      }
    },
    methods: {
      countDown() {
        this.time -= 1
        if (this.time > 0) {
          setTimeout(this.countDown, 1000)
        } else {
          this.$emit('done', this.totalTime)
        }
      },
      reset() {
        this.time = this.totalTime
        setTimeout(this.countDown, 1000)
      }
    },
    created() {
      this.reset()
    }
  }
</script>

<style scoped lang="sass">
  .EventDemo
    display: block
    border: solid thin gray
    border-radius: 4px
    padding: 10px

    &__text
      &__timer
        color: red
</style>
