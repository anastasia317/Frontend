<script setup lang="ts">
const dialogOpened = ref(false)
</script>

<template>
  <Dialog :open='dialogOpened' @close='dialogOpened = false' />
   <button class="Button" @click='dialogOpened = true'>Оставить заявку</button>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/button.scss';

.Button {
  width: 204px;
  height: 49px;
  border-radius: 10px;
  font-size: 14px;
  font-family: var(--font-title);
  color: white;
}

</style>