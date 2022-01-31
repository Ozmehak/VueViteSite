<template>
  <div>
    {{ message }} <input type="text" v-model="inputText" />
    <button class="btn btn-primary" @click="changeText()">Change</button>
    <button class="btn btn-danger" @click="resetText()">Reset</button>
    <br />
    {{ largeMessage }}
  </div>
</template>

<script>
  export default {
    name: 'MyComponent',
    data() {
      return {
        message: 'Hello',
        inputText: ''
      }
    },

    computed: {
      largeMessage() {
        return this.message.toUpperCase()
      }
    },

    methods: {
      changeText() {
        /* this.$store.commit('setMessage', this.inputText)*/
        this.message = this.inputText
      },
      resetText() {
        this.inputText = ''
      }
    },

    watch: {
      largeMessage(newValue, oldValue) {
        console.log(oldValue, newValue)
      }
    }
  }
</script>

<style scoped></style>
