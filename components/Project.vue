<script setup>
defineProps({
   image: {
      x1: String,
      x2: String,
   },
   title: String,
   description: String,
})
</script>

<template>
    <div class='project'>
      <div class="pic">
         <picture>
            <source :srcset='`${image.x2} 2x, ${image.x1}`'>
            <img :src='image.x1' :alt='title' class='image' />
         </picture>
         <h4>{{title}}</h4>
         <p v-html='description' />
      </div>
    </div>
 </template>

<style lang="scss" scoped>

</style>