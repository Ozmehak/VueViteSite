<template>
  <div class="AlertComponent" :class="`AlertComponent--${type}`">
    <slot name="icon">
      <AlertCircleOutline v-if="type === 'error'" class="AlertComponent__icon" />
      <AlertOutline v-else-if="type === 'warning'" class="AlertComponent__icon" />
      <InformationOutline v-else class="AlertComponent__icon" />
    </slot>
    <slot>
      <span class="AlertComponent__message">{{ message }}</span>
    </slot>
  </div>
</template>

<script>
  import { AlertCircleOutline, AlertOutline, InformationOutline } from 'mdue'

  export default {
    props: {
      message: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'info',
        validator: (value) => ['info', 'warning', 'error'].includes(value)
      }
    },
    name: 'AlertComponent',
    components: { AlertCircleOutline, AlertOutline, InformationOutline }
  }
</script>

<style scoped lang="sass">
  .AlertComponent
    background: #458bbb
    border-radius: 4px
    padding: 10px
    display: inline-flex
    justify-content: center
    align-items: center


    &__icon
      color: #ffffffdd


    &__message
      color: #ffffffdd
      padding: 0 10px


    &--error
      background: #ff3030


    &--warning
      background: #ef7a1a
</style>
