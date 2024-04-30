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
    <Swiper class="swiper">
        <SwiperSlide class="swiper-slide" v-for="slide in slides">
            <figure class='slide-frame'>
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

@mixin for-tablet-landscape-up {
    @media (max-width: 1046px) { @content; }
}

@mixin for-phone-portrait {
    @media (max-width: 767px) { @content; }
}

.swiper {
    max-width: 1264px;
    width: 100%;
    min-height: 450px;
    margin: 40px 88px;
    border-radius: 30px;
    background-color: #394959;

    @include for-tablet-landscape-up {
        margin: 40px 15px;
    }

    @include for-phone-portrait {
        max-width: 391px;
    }
}

.slide-frame {
    position: relative;
    margin: 0;
    width: 100%;
    height: 100%;
}

.slider-image {
    object-fit: cover;
    object-position: center;
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
    padding-bottom: 115px;

    @include for-phone-portrait {
        max-width: 296px;
        padding-inline: 24px;
        padding-bottom: 30px;
    }
}

.title-slide {
    font-family: var(--font-title);
    font-size: 46px;
    margin-bottom: 0px;

    @include for-phone-portrait {
        font-size: 30px;
    }
}
</style>