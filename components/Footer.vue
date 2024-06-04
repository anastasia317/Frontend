<script setup>
import SendRequestButton from "~/components/UI/SendRequestButton.vue";
import LogoLight from "~/assets/icons/logo_light.svg";
import PhoneIcon from "~/assets/icons/phone.svg";
import EmailIcon from "~/assets/icons/email.svg";
import TagIcon from "~/assets/icons/tag.svg";
import { nav } from "~/scripts/constants";
import { mockContacts } from "@/scripts/mock/contacts";
const { phone, email, address } = mockContacts;
</script>

<template>
  <footer class="main-footer">
    <div class="container-footer">
      <LogoLight class="logo" filled />
      <nav class="navigation">
        <ul class="menu">
          <li class="menu-item" v-for="item in nav">
            <NuxtLink class="item-link" :to="item.url">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <ul class="contacts">
        <li class="contacts-item">
          <PhoneIcon class="contacts-icon" filled />
          <a class="phone" :href="`tel:${phone.value}`">{{ phone.label }}</a>
        </li>
        <li class="contacts-item">
          <EmailIcon class="contacts-icon" filled />
          <a class="email" :href="`mailto:${email}`">{{ email }}</a>
        </li>
        <li class="contacts-item">
          <TagIcon class="contacts-icon" filled />
          <p class="address">{{ address }}</p>
        </li>
      </ul>
      <div class="button">
        <SendRequestButton />
      </div>
      <p class="copyright">© Загдом, 2021</p>
      <a class="privacy" href="/privacy">Политика конфиденциальности</a>
      <a class="users" href="/users">Пользовательское соглашение</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
$gap-inside-blocks: 24px;
@import "~/assets/styles/contacts.scss";
@mixin link($link-font-size: 16px, $link-color: white) {
  text-decoration: none;
  color: $link-color;
  font-size: $link-font-size;
}

@mixin remove-margin {
  @media (max-width: 1046px) {
    @content;
  }
}

@mixin for-phone-landscape-up {
  @media (max-width: 820px) {
    @content;
  }
}

@mixin for-tablet-landscape-up {
  @media (max-width: 1146px) {
    @content;
  }
}

@mixin add-margin-for-items-inside-top-part {
  @media (max-width: 1200px) {
    @content;
  }
}

p {
  margin: 0;
  padding: 0;
}

.main-footer {
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  min-height: 246px;
  background-color: #254741;
  width: 100%;
}

.container-footer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "logo navigation contacts button"
    "copyright privacy users .";
  grid-gap: 32px;
  max-width: 1264px;
  width: 100%;
  padding-inline: 1rem;
  margin: 37px 88px;
  padding-left: 0;
  padding-right: 0;

  @include remove-margin {
    margin-left: 0;
    margin-right: 0;
    padding-left: 16px;
    padding-right: 16px;
  }

  @include for-phone-landscape-up {
    grid-template-areas:
      "logo"
      "navigation"
      "contacts"
      "button"
      "copyright"
      "privacy"
      "users";
    grid-gap: 40px;
    margin: 40px;
  }
}

.logo {
  grid-area: logo;
  height: 39px;
  width: 100%;
  max-width: 160px;

  @include add-margin-for-items-inside-top-part {
    margin-right: 20px;
  }
}

.navigation {
  grid-area: navigation;
}

.contacts {
  grid-area: contacts;
}

.menu,
.contacts {
  list-style-type: none;
  gap: $gap-inside-blocks;
  display: flex;
  flex-direction: column;
  word-break: break-word;
  white-space: normal;
  padding: 0;

  @include add-margin-for-items-inside-top-part {
    margin-right: 20px;
  }

  @include for-phone-landscape-up {
    margin: 0;
  }
}

.item-link {
  @include link();
}

.phone,
.email,
.address {
    @include contacts();
}

.contacts-icon {
    @include icons();
}

.button {
  grid-area: button;
  width: 100%;
  max-width: 204px;
  justify-self: end;
}

.privacy {
  grid-area: privacy;
}

.users {
  grid-area: users;
}

.privacy,
.users {
  @include link(14px);
  color: rgba(white, 0.6);

  @include for-phone-landscape-up {
    margin-top: -24px;
  }
}

.copyright {
  grid-area: copyright;
  color: rgba(white, 0.6);
  font-size: 14px;
  white-space: nowrap;
  margin: 0;

  @include for-phone-landscape-up {
    margin-bottom: 0;
    margin-top: 0;
  }
}
</style>
