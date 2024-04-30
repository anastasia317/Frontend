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
         <picture class="picture-frame">
            <source :srcset='`${image.x2} 2x, ${image.x1}`'>
            <img :src='image.x1' :alt='title' class='image' />
         </picture>
         <div class="information">
            <h4 class="title">{{title}}</h4>
            <p class="discription" v-html='description' />
         </div>
      </div>
    </div>
 </template>

<style lang="scss" scoped>
.project {
   min-width: 200px;
}

.pic {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   background-color: white;
   border-radius: 20px;
   height: 100%;
}

.image {
   height: 100%;
   max-width: 100%;
   object-fit: cover;
}

.information {
   order: -1;
   margin: 32px;
}

.title {
   font-family: var(--font-title);
   font-weight: 500;
   font-size: 20px;
}

.discription {
   color: #666666;
   line-height: 21.6px;
}

</style>