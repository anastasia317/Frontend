<script lang="ts" setup>
import {
  YandexMap,
  YandexMapControlButton,
  YandexMapControls,
  YandexMapDefaultFeaturesLayer,
  YandexMapMarker,
  YandexMapDefaultSchemeLayer,
  YandexMapZoomControl,
  YandexMapOpenMapsButton,
  YandexMapGeolocationControl,
} from "vue-yandex-maps";

import LocationMark from "~/assets/icons/location_mark.svg";
import type { YMapLocationRequest } from '@yandex/ymaps3-types/imperative/YMap';
import type { YMap } from '@yandex/ymaps3-types';

const isFullscreen = ref(false);
const timedCounter = ref(1);

const map = shallowRef<YMap | null>(null);

const LOCATION: YMapLocationRequest = {
  center: [131.952463, 43.149011], 
  zoom: 11, 
};

const toggleFullscreen = () => {
  if (isFullscreen.value) {
    document.exitFullscreen();
  } else {
    map.value!.container.requestFullscreen();
  }
};

onMounted(() => {
  const handleFullscreenChange = async () => {
    isFullscreen.value = !!document.fullscreenElement;
  };

  document.addEventListener('fullscreenchange', handleFullscreenChange);

  const interval = setInterval(() => {
    timedCounter.value++;
    if (timedCounter.value > 99) timedCounter.value = 0;
  }, 1000);

  onBeforeUnmount(() => {
    clearInterval(interval);
    document.removeEventListener('fullscreenchange', handleFullscreenChange);
  });
});
</script>

<template>
  <yandex-map
    :settings="{
      location: LOCATION,
      showScaleInCopyrights: true,
    }"
    :width="width"
    :height="isFullscreen ? '100dvh' : height"
  >
    <yandex-map-default-scheme-layer />
    <yandex-map-default-features-layer />
    <yandex-map-marker :settings="{ coordinates: [131.953129, 43.153141] }">
      <LocationMark class="marker" filled />
    </yandex-map-marker>
    
    <yandex-map-controls
      :settings="{ position: 'top right', orientation: 'vertical' }"
    >
      <yandex-map-control-button :settings="{ onClick: toggleFullscreen }">
        <div class="fullscreen" :class="{ 'exit-fullscreen': isFullscreen }" />
      </yandex-map-control-button>
    </yandex-map-controls>
    <yandex-map-controls :settings="{ position: 'top left' }">
      <yandex-map-geolocation-control />
    </yandex-map-controls>
    <yandex-map-controls :settings="{ position: 'left' }">
      <yandex-map-zoom-control />
    </yandex-map-controls>
    <yandex-map-controls
      :settings="{ position: 'bottom left', orientation: 'vertical' }"
    >
      <yandex-map-open-maps-button />
    </yandex-map-controls>
  </yandex-map>
</template>

<style lang="scss" scoped>
.marker {
  width: 42px;
  height: 56px;
}

.fullscreen {
  width: 26px;
  height: 26px;

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26'%3E%3Cg fill='%236B6B6B'%3E%3Cpath d='M16.14 7.86L14.27 6H20v5.7l-1.83-1.82L15.04 13 13 10.98l3.13-3.13zm0 0M9.86 18.14L11.73 20H6v-5.7l1.83 1.82L10.96 13 13 15.02l-3.13 3.13zm0 0'/%3E%3C/g%3E%3C/svg%3E");
}

.exit-fullscreen {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26'%3E%3Cg fill='%236B6B6B'%3E%3Cpath d='M8.14 15.86L6.27 14H12v5.7l-1.83-1.83-3.13 3.14L5 18.98l3.13-3.13zm0 0M17.86 10.14L19.73 12H14V6.3l1.83 1.83 3.13-3.14L21 7.02l-3.13 3.13zm0 0'/%3E%3C/g%3E%3C/svg%3E");
}
</style>