<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'radix-vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <DialogRoot>
    <DialogTrigger
      class="Button grass"
    >
      Оставить заявку
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="DialogOverlay" />
      <DialogContent
        class="DialogContent"
      >
        <DialogTitle class="DialogTitle">
          Оставить заявку
        </DialogTitle>
        <DialogDescription class="DialogDescription">
          Пожалуйста, введите свои данные.
        </DialogDescription>
        <fieldset class="Fieldset">
          <label class="Label" for="name"> ФИО </label>
          <input
            id="name"
            class="Input"
            defaultValue="Pedro Duarte"
          >
        </fieldset>
        <fieldset class="Fieldset">
          <label class="Label" for="username"> Email </label>
          <input
            id="username"
            class="Input"
            defaultValue="@peduarte"
          >
        </fieldset>
        <div :style="{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }">
          <DialogClose as-child>
            <button
              class="Button green"
            >
              Отправить
            </button>
          </DialogClose>
        </div>
        <DialogClose
          class="IconButton"
          aria-label="Close"
        >
          <Icon icon="lucide:x" />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style scoped>
@import '@radix-ui/colors/black-alpha.css';
@import '@radix-ui/colors/green.css';
@import '@radix-ui/colors/mauve.css';
@import '@radix-ui/colors/grass.css';

/* reset */
fieldset,
input {
  all: unset;
}

.DialogContent {
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
}

.DialogTitle {
  margin: 0;
  font-weight: 500;
  font-size: 17px;
}

.DialogDescription {
  margin: 10px 0 20px;
  font-size: 15px;
  line-height: 1.5;
}

.Button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 204px;
  height: 49px;
  border-radius: 10px;
  padding: 16px 40px 16px 40px;
  font-size: 14px;
  font-family: var(--font-title);
  color: white;
  border-color: #029f58;
  background-color: #029f58;
}

.IconButton {
  font-family: inherit;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  right: 10px;
}

.Fieldset {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 15px;
}

.Label {
  font-size: 15px;
  width: 90px;
  text-align: right;
}

.Input {
  width: 100%;
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 15px;
  line-height: 1;
  height: 35px;
}
</style>