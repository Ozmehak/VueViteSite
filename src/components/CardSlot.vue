<template>
<div class="CardSlot">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "CardSlot"
};
</script>

<style scoped lang="sass">
.CardSlot
  background: #f8f8f8
  border: solid 1px #ccc
  border-radius: 8px
  padding: 12px
</style>
