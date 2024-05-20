<script setup>
defineProps({
  activeLink: String,
});
</script>

<template>
  <ul class="path">
    <li><NuxtLink to="/" class="link-home-page">Главная&nbsp;</NuxtLink></li>
    <li class="active">/ {{ activeLink }}</li>
  </ul>
</template>

<style lang="scss" scoped>
@mixin for-tablet-landscape-up {
  @media (max-width: 1046px) {
    @content;
  }
}

ul {
  margin: 0;
  padding: 0;
}

.path {
  display: flex;
  font-size: 20px;
  list-style-type: none;
  margin-top: 40px;

  @include for-tablet-landscape-up {
    margin-left: 16px;
  }
}

.link-home-page {
  text-decoration: none;
  color: #029f59;
}
</style>
