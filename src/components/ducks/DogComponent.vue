<template>
  <div v-if="dog && !error">
    <img :src="dog.message" :alt="dog.message" />
    <p>{{ value }}</p>
  </div>
  <div v-if="error">
    <p>{{ error }}</p>
  </div>
</template>

<script>
  import wretch from 'wretch'

  export default {
    name: 'DuckComponent',
    data() {
      return {
        dog: null,
        value: null,
        error: null
      }
    },
    methods: {
      getFileNameFromUrl(url) {
        //url split
        let splitted = url.split('/')
        //arraylenght
        let lastBit = splitted[splitted.length - 1]
        console.log(lastBit)
        return lastBit
      }
    },

    created() {
      wretch(`https://dog.ceo/api/breeds/image/random`)
        .get()
        .json()
        .then((dog) => {
          // spara värdet i komponenten
          this.dog = dog
          //hämta valutavärdet från LS, använder filnamn som key
          let value = window.localStorage.getItem(
            this.getFileNameFromUrl(dog.message)
          )
          //om value finns spara value i komponentens value
          if (value) {
            this.value = value

            //annars hämta value från russland och lägg till i LS
          } else {
            //russland
            return wretch('https://kjdflkdfjldksfjsldfkjsdlk.se')
              .get()
              .json()
              .then((russiaResponse) => {
                let fileName = this.getFileNameFromUrl(this.dog.message)
                window.localStorage.setItem(fileName, russiaResponse)
                this.value = russiaResponse
              })
              .catch(() => {
                throw new Error('fick inget svar från russland')
              })
          }
        })
        .catch((err) => {
          this.error = err
        })
    }
  }
</script>

<style scoped></style>
