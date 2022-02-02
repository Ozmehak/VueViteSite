<template>
  <div v-if="loading" class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <CardSlot v-else-if="dog && !error" class="doggo">
    <img width="400" :src="dog.message" :alt="dog.message" />
    <p>Denna Hoond Kosta {{ value }} Kronors</p>
  </CardSlot>
  <div v-if="error">
    <AlertComponent :message="error.message" type="error" />
  </div>
  <CardSlot class="excuses">
    <h3>Need excuses to meet doggos?</h3>
    <input
      v-if="!loadingExcuses"
      :disabled="loadingExcuses"
      value="Gief Excuses Plz"
      type="button"
      class="btn btn-light"
      @click="this.generateExcuses()"
    />
    <div v-else class="spinner-border" role="status" />
    <ol>
      <li v-for="excuse in excuses" :key="excuse.id">{{ excuse.excuse }}</li>
    </ol>
  </CardSlot>
  <EventDemo :total-time="10" @done="handleDoneEvent" ref="timerComp" />
</template>

<script>
  import wretch from 'wretch'
  import AlertComponent from '../AlertComponent.vue'
  import CardSlot from '../CardSlot.vue'
  import EventDemo from '../EventDemo.vue'

  export default {
    name: 'DogComponent',
    components: { EventDemo, CardSlot, AlertComponent },
    data() {
      return {
        dog: null,
        value: null,
        error: null,
        excuses: null,
        loading: true,
        loadingExcuses: false
      }
    },
    methods: {
      generateExcuses() {
        this.loadingExcuses = true
        this.excuses = []
        wretch('https://excuser.herokuapp.com/v1/excuse/10')
          .get()
          .json()
          .then((excuses) => {
            this.excuses = excuses
            /*
          Tilldelning: let a = 7
          Jämförelse: a === 7
          objekt: { a: 7 }
          Indexering: a[7]
          */
          })
          /*
          .then(() => {
            return new Promise(resolve => setTimeout(resolve, 5000))
          })
           */
          .finally(() => {
            this.loadingExcuses = false
          })
      },

      handleDoneEvent(data) {
        console.log('done', data)
        // this.$refs.timerComp.reset()
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
            return wretch('https://avancera.app/cities/')
              .get()
              .json()
              .then((russiaResponse) => {
                let donKeeh =
                  Math.round(Math.random() * 1000) *
                  russiaResponse[0].population
                let fileName = this.getFileNameFromUrl(this.dog.message)
                window.localStorage.setItem(fileName, donKeeh)
                this.value = donKeeh
              })
              .catch(() => {
                throw new Error('fick inget svar från russland')
              })
          }
        })
        .catch((err) => {
          this.error = err
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
</script>

<style scoped lang="sass">
  .doggo, .excuses
    width: 430px
</style>
