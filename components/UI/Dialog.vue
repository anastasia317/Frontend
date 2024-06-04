<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
} from 'radix-vue'
import { Icon } from '@iconify/vue'

defineProps({
   open: Boolean
})
const emit = defineEmits(['close'])
</script>

<template>
  <DialogRoot :open='open'>
    <DialogPortal>
      <DialogOverlay class="DialogOverlay" />
      <DialogContent class="DialogContent">
          <DialogClose class="IconButton" aria-label="Close" @click="emit('close')">
              <Icon icon="lucide:x" />
            </DialogClose>
        <DialogTitle class="DialogTitle">
          Оставить заявку
        </DialogTitle>
        <fieldset class="Fieldset">
          <input id="name" class="Input" placeholder="Имя">
        </fieldset>
        <fieldset class="Fieldset">
          <input id="telephone" class="Input" placeholder="Телефон">
        </fieldset>
        <fieldset class="Fieldset">
          <input id="message" class="Input Message" placeholder="Сообщение">
        </fieldset>
        <div class="application-form">
          <DialogClose as-child>
            <button class="Button green" type="submit"> Оставить заявку </button>
          </DialogClose>
          <p class="terms-text">
            Нажимая на кнопку «Отправить», вы <br/> принимаете <span class="text-green">пользовательское соглашение</span><br/> 
            и <span class="text-green">политику конфиденциальности</span>
          </p>
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style lang="scss" scoped>
@import '@radix-ui/colors/black-alpha.css';
@import '@radix-ui/colors/green.css';
@import '@radix-ui/colors/mauve.css';
@import '@radix-ui/colors/grass.css';

/* reset */
button,
fieldset,
input {
  all: unset;
}

@mixin for-phone {
  @media (max-width: 790px) {
    @content;
  }
}

.DialogOverlay {
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1;
}

.DialogContent {
  background-color: #F5F7F3;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 353px;
  min-height: 499px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 2;
  padding: 48px 47px 56px 48px;

  @include for-phone {
    padding-bottom: 32px;
  }
}
.DialogContent:focus {
  outline: none;
}

.DialogTitle {
  margin-bottom: 0px;
  font-weight: 700;
  font-size: 32px;
  font-family: var(--font-title);
  color: #2B2F34;

  @include for-phone {
    font-size: 24px;
  }
}

.Button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 16px 40px;
  font-size: 14px;
  font-family: var(--font-title);
  line-height: 17.07px;
  font-weight: 500; 
  width: 124px;
  margin-top: 32px;
}
.Button.green {
  background-color: #029F59;
  color: white;
}

.IconButton {
  font-family: inherit;
  border-radius: 6px;
  height: 32px;
  width: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #029F59;
  background-color: rgba(70, 157, 96, .2);
  position: absolute;
  top: 24px;
  right: 24px;
}

.Fieldset {
  display: flex;
  align-items: center;
}

.Label {
  font-size: 15px;
  color: var(--grass-11);
  width: 90px;
  text-align: right;
}

.Input {
  background-color: #FFFFFF;
  width: 100%;
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 16px;
  font-size: 14px;
  font-family: var(--font-title);
  line-height: 1;
  color: #9D9C9C;
  height: 25px;
  line-height: 25.2px;
  margin-top: 24px;
}

.Input.Message {
  padding-bottom: 58px;
}

@keyframes overlayShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes contentShow {
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

.application-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

.terms-text {
  color: #757E8D;
  font-size: 14px;
  text-align: center;
  margin-top: 16px;
  line-height: 21px;
}

.text-green {
  color: #029F59;
}
</style>