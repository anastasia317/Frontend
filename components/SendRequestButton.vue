<script setup lang="ts">
const dialogOpened = ref(false)
</script>

<template>
  <Dialog :open='dialogOpened' @close='dialogOpened = false' />
   <button class="Button" @click='dialogOpened = true'>Оставить заявку</button>
</template>

<style>
.Button {
  width: 204px;
  height: 49px;
  border: none;
  border-radius: 10px;
  border-color: #029f58;
  font-size: 14px;
  font-family: var(--font-title);
  color: white;
  background-color: #029f58;
}
</style>