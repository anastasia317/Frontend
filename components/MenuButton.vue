<script setup>

</script>

<template>
  <button class="burger"></button>
</template>

<style>
.burger {
  position: relative;
  border-radius: 10px;
  border-color: #029f58;
  width: 56px;
  height: 46px;
  background-color: #029f58;
}
.burger::before,
.burger::after {
  content: '';
  position: absolute;
  display: block;
  width: 24px;
  height: 2px;
  background: white;
  margin-left: 8px;
}
.burger::before {
  top: 16px;
  box-shadow: 0 4px 0 white;
}
.burger::after {
  bottom: 16px;
}

/* .Button {
  width: 204px;
  height: 49px;
  border-radius: 10px;
  border-color: #029f58;
  font-size: 14px;
  font-family: var(--font-title);
  color: white;
  background-color: #029f58;
} */
</style>