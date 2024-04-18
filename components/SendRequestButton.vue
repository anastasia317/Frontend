<script setup lang="ts">
import {
  Toggle
} from 'radix-vue'
</script>

<template>
  <Toggle
      class="Button"
    >
      Оставить заявку
  </Toggle>
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