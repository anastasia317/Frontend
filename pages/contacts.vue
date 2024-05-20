<script setup>
import PhoneIcon from "~/assets/icons/phone.svg";
import EmailIcon from "~/assets/icons/email.svg";
import TagIcon from "~/assets/icons/tag.svg";
import Breadcrumbs from "~/components/UI/Breadcrumbs.vue";
import YandexMap from "~/components/UI/YandexMap.vue";
import { mockContacts } from "@/scripts/mock/contacts";
const { phone, email, address } = mockContacts;
</script>

<template>
  <div class="page-wrapper">
    <section class="main">
      <Breadcrumbs activeLink="Контакты" />
      <div class="container">
        <div class="contact-info">
          <h1 class="title">Контакты</h1>
          <ul class="contacts">
            <li class="contacts-item">
              <PhoneIcon class="contacts-icon" filled />
              <a class="phone" :href="`tel:${phone.value}`">{{
                phone.label
              }}</a>
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
        </div>
        <div class="map">
          <YandexMap width="100%" height="100%" />
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/pages-common.scss";
@import "~/assets/styles/contacts.scss";

@mixin remove-margin {
  @media (max-width: 1046px) {
    @content;
  }
}

@mixin for-tablet {
  @media (max-width: 990px) {
    @content;
  }
}

@mixin for-phone {
  @media (max-width: 910px) {
    @content;
  }
}

.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 80px;
  margin-right: 80px;

  @include remove-margin {
    margin-left: 0;
    margin-right: 0;
    padding-left: 16px;
    padding-right: 16px;
  }

}

.container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 48px;

  @include for-phone {
    margin-top: 32px;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 80px;
  }
}

.contacts {
  gap: 40px;
  margin-top: 32px;
  margin-right: 106px;
  max-width: 294px;
}

.phone,
.email,
.address {
  @include contacts(20px, black);

  @include for-phone {
    font-size: 18px;
  }
}

.phone {
  font-weight: bold;
}

.contacts-icon {
  @include icons(24px);
}

.map {
  max-width: 544px;
  min-height: 496px;
  width: 100%;
  height: 100%;

  @include for-phone {
    max-width: 344px;
    max-height: 496px;
  }
}

.title {
  @include for-phone {
    font-size: 32px;
  }
}
</style>
