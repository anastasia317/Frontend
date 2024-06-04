<script setup>
import SliderControls from "~/components/UI/SliderControls.vue";
import { slides } from "~/scripts/mock/slides";
</script>

<template>
  <Swiper class="swiper">
    <SwiperSlide class="swiper-slide" v-for="slide in slides">
      <figure class="slide-frame">
        <picture>
          <source
            :srcset="`${slide.image_landscape.x2} 2x, ${slide.image_landscape.x1}`"
            media="(min-width: 768px)"
          />
          <source
            :srcset="`${slide.image_portrait.x2} 2x, ${slide.image_portrait.x1}`"
            media="(max-width: 767px)"
          />
          <img
            :src="slide.image_landscape.x1"
            :alt="slide.title"
            class="slider-image"
          />
        </picture>
        <figcaption class="slide-text">
          <h3 class="title-slide">{{ slide.title }}</h3>
          <p class="text-slide">{{ slide.text }}</p>
        </figcaption>
      </figure>
    </SwiperSlide>
    <SliderControls />
  </Swiper>
</template>

<style lang="scss" scoped>
@import "sanitize.css/assets.css";

@mixin add-margin {
  @media (max-width: 1264px) {
    @content;
  }
}

@mixin for-tablet-landscape-up {
  @media (max-width: 1046px) {
    @content;
  }
}

@mixin for-phone-portrait {
  @media (max-width: 767px) {
    @content;
  }
}

.swiper {
  width: 100%;
  min-height: 450px;
  border-radius: 30px;
  background-color: #394959;

  @include add-margin {
    margin-left: 80px;
    margin-right: 80px;
  }

  @include for-tablet-landscape-up {
    margin-left: 16px;
    margin-right: 16px;
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
