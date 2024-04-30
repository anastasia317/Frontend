<script setup>
defineProps({
   image: {
      x1: String,
      x2: String,
   },
   date: Date,
   title: String,
   text: String
})
</script>

<template>
    <div class='article-preview'>
      <div class="pic">
         <picture class="picture-frame">
            <source :srcset='`${image.x2} 2x, ${image.x1}`'>
            <img :src='image.x1' :alt='title' class='image' />
         </picture>
         <div class="article-information">
            <p>
                {{ date.toLocaleDateString('ru', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                }) }}
            </p>
            <h4 class="title">{{title}}</h4>
            <p class="text" v-html='text' />
         </div>
      </div>
    </div>
 </template>
