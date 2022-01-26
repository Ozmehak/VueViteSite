<template>
  <div v-if="dog /*&& !error*/">
    <img width="640" height="480" :src="dog.message" :alt="dog.message" />
    <p>{{ value }}</p>
  </div>
  <div v-if="error">
    <p>{{ error }}</p>
  </div>
  <div>
    <h3>Need excuses to meet doggos?</h3>
    <input
      value="Gief Excuses Plz"
      type="button"
      @click="this.generateExcuses()"
    />
    <ol>
      <li v-for="excuse in excuses">{{ excuse.excuse }}</li>
    </ol>
  </div>
</template>

<script>
  import wretch from 'wretch'

  export default {
    name: 'DogComponent',
    data() {
      return {
        dog: null,
        value: null,
        error: null,
        excuses: null
      }
    },
    methods: {
      generateExcuses() {
        wretch('https://excuser.herokuapp.com/v1/excuse/10')
          .get()
          .json()
          .then((excuses) => {
            this.excuses = excuses
          })
      },

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
            return wretch('https://api.isevenapi.xyz/api/iseven/6/')
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
