<script setup>
import SliderControls from './SliderControls.vue'

import slide1_portrait_1x from '~/assets/images/slide-1-portrait.jpg'
import slide1_portrait_2x from '~/assets/images/slide-1-portrait@2x.jpg'
import slide1_landscape_1x from '~/assets/images/slide-1-landscape.jpg'
import slide1_landscape_2x from '~/assets/images/slide-1-landscape@2x.jpg'
import slide2_portrait_1x from '~/assets/images/slide-2-portrait.jpg'
import slide2_portrait_2x from '~/assets/images/slide-2-portrait@2x.jpg'
import slide2_landscape_1x from '~/assets/images/slide-2-landscape.jpg'
import slide2_landscape_2x from '~/assets/images/slide-2-landscape@2x.jpg'
import slide3_portrait_1x from '~/assets/images/slide-3-portrait.jpg'
import slide3_portrait_2x from '~/assets/images/slide-3-portrait@2x.jpg'
import slide3_landscape_1x from '~/assets/images/slide-3-landscape.jpg'
import slide3_landscape_2x from '~/assets/images/slide-3-landscape@2x.jpg'

const slides = [
   {
      image_portrait: {
         x1: slide1_portrait_1x,
         x2: slide1_portrait_2x,
      },
      image_landscape: {
         x1: slide1_landscape_1x,
         x2: slide1_landscape_2x,
      },
      title: 'Проектируем и строим загородные дома',
      text: 'Строим дома «под ключ»: от этапа проектирования и до финишной отделки помещений',
   },
   {
      image_portrait: {
         x1: slide2_portrait_1x,
         x2: slide2_portrait_2x,
      },
      image_landscape: {
         x1: slide2_landscape_1x,
         x2: slide2_landscape_2x,
      },
      title: 'Проектируем и строим загородные дома',
      text: 'Строим дома «под ключ»: от этапа проектирования и до финишной отделки помещений',
   },
   {
      image_portrait: {
         x1: slide3_portrait_1x,
         x2: slide3_portrait_2x,
      },
      image_landscape: {
         x1: slide3_landscape_1x,
         x2: slide3_landscape_2x,
      },
      title: 'Проектируем и строим загородные дома',
      text: 'Строим дома «под ключ»: от этапа проектирования и до финишной отделки помещений',
   },
]
</script>

<template>
    <Swiper>
        <SwiperSlide v-for="slide in slides">
            <figure class='swiper'>
                <picture>
                    <source
                        :srcset='`${slide.image_landscape.x2} 2x, ${slide.image_landscape.x1}`'
                        media='(min-width: 768px)'
                    >
                    <source
                        :srcset='`${slide.image_portrait.x2} 2x, ${slide.image_portrait.x1}`'
                        media='(max-width: 767px)'
                    >
                    <img :src='slide.image_landscape.x1' :alt='slide.title' class="slider-image"/>
                </picture>
                <figcaption class="slide-text">
                    <h3 class="title-slide">{{slide.title}}</h3>
                    <p class="text-slide">{{slide.text}}</p>
                </figcaption>
            </figure>
        </SwiperSlide>
        <SliderControls />
    </Swiper>
</template>

<style lang="scss" scoped>
@import 'sanitize.css/assets.css';

.swiper {
    position: relative;
    background-color: #394959;
    width: 100%;
    display: flex;
    border-radius: 30px;
    margin: 0;
}

.slider-image {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
}

.slide-text {
    position: absolute;
    bottom: 0;
    left: 0;
    max-width: 460px;
    width: 100%;
    color: white;
    padding-inline: 144px;
    padding-bottom: 113px;
}

.title-slide {
    font-family: var(--font-title);
    font-size: 46px;
    margin-bottom: 0px;
    line-height: 55.2px;
}

.text-slide {
    font-size: 16px;
    line-height: 21.6px;
}
</style>