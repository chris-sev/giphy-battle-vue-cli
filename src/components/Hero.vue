<template>
  <section :class="['hero', size, color]">
    <div class="hero-body">
      <div class="container">

        <slot></slot>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      
    }
  },
  props: {
    color: { default: 'is-light' }, 
    size:  { default: 'is-fullheight' }
  }
}
</script>

<style>

</style>
