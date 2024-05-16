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
    <article class='project'>
      <div class="pic">
         <picture>
            <source :srcset='`${image.x2} 2x, ${image.x1}`'>
            <img :src='image.x1' :alt='title' class='image' />
         </picture>
         <div class="information">
            <h4 class="title">{{title}}</h4>
            <p class="discription" v-html='description' />
         </div>
      </div>
   </article>
 </template>

<style lang="scss" scoped>
@mixin for-tablet-landscape-up {
    @media (max-width: 1046px) { @content; }
}

@mixin for-phone-landscape-up {
    @media (max-width: 820px) { @content; }
}

.project {
   background-color: white;
   border-radius: 20px;
   overflow: hidden;
   min-width: 200px;
   
   @include for-tablet-landscape-up {
      height: 100%;
      width: 100%;
   }
   
   @include for-phone-landscape-up {
      max-height: 453px;
      max-width: 304px;
      width: 100%;
   }
}

.pic {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   height: 100%;
   width: 100%;

   @include for-phone-landscape-up {
      grid-template-columns: repeat(1, 1fr); 
      grid-template-rows: 35% 65%;
   }
}

.image {
   height: 100%;
   width: 100%;
   object-fit: cover;
}

.information {
   order: -1;
   margin: 32px;

   @include for-phone-landscape-up {
      order: 0;
      margin: 0px 24px 24px 24px;
   }
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