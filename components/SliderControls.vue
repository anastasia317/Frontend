<script setup>
import Arrow from '~/assets/icons/arrow.svg'

const swiper = useSwiper()
</script>

<template>
   <button @click="swiper.slideNext()" class='next'>
    <Arrow class="arrow-next" filled />
   </button>
   <button @click="swiper.slidePrev()" class='prev'>
    <Arrow class="arrow-prev" filled />
   </button>
   <div class='pagination'>
      <button
         class="pagination-button"
         :class="{ active: index === swiper.activeIndex }"
         v-for='(slide, index) in swiper.slides'
         @click='swiper.slideTo(index)'
         :title='`Открыть ${index + 1} слайд`'
         :disabled='swiper.activeIndex === index'
      ></button>
   </div>
</template>

<style lang="scss" scoped>
@mixin hide-slider-controls {
    @media (max-width: 767px) { @content; }
}

.next, 
.prev {
    position: absolute;
    z-index: 1;
    border: none;
    width: 48px;
    height: 48px;
    padding: 0;
    top: 50%;
    border-radius: 10px;
    background-color: #029F59;
    cursor: pointer;

    @include hide-slider-controls {
        display: none;
    }
}

.prev {
    margin-left: 16px;
}

.next {
    right: 0;
    margin-right: 16px;
}

.arrow-next {
    transform: scaleX(-1);
}

.pagination {
    left: 50%;
    bottom: 0;
    margin-bottom: 40px;
    position: absolute;
    z-index: 1;
    display: flex;
    gap: 16px;

    @include hide-slider-controls {
        display: none;
    }
}

.pagination-button {
    height: 12px;
    width: 12px;
    border-radius: 100%;
    background-color: #C6C6C6;
    border: none;
  }
  .active {
    background-color: #03B766;
  }
</style>