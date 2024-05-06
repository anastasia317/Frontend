<script setup>
import House from "~/assets/icons/house.svg";
import Calendar from "~/assets/icons/calendar.svg";

const statistic_information = [
  {
    icon: 1,
    info: "57 домов",
    text: "спроектировали и построили “под ключ”",
  },
  {
    icon: 2,
    info: "14 лет",
    text: "мы на рынке загородного строительства",
  },
];
</script>

<template>
  <div class="information-block">
    <div class="company-description">
      <p class="title">Каждый проект для нас — важный</p>
      <p class="text">Мы строительная компания полного цикла.</p>
      <p class="text">
        Вникаем во все детали, разрабатываем планировку будущего дома,
        продумываем конструктивные решения и общую архитектурную концепцию
      </p>
    </div>
    <div class="blocks">
      <div class="info-block" v-for="statistic in statistic_information">
        <House class="info-block-icon" v-if="statistic.icon === 1" filled />
        <Calendar class="info-block-icon" v-else filled />
        <p class="numerical-information">{{ statistic.info }}</p>
        <p class="info-block-text">{{ statistic.text }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin for-tablet-landscape-up {
  @media (max-width: 1046px) {
    @content;
  }
}

@mixin for-phone-landscape-up {
    @media (max-width: 820px) { @content; }
}

.information-block {
  display: flex;
  gap: 16px;
  align-items: flex-end;

  @include for-tablet-landscape-up {
    margin-left: 16px;
  }

  @include for-phone-landscape-up {
    flex-direction: column;
  }
}

.company-description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  width: 50%;

  @include for-phone-landscape-up {
    width: 100%;
  }
}

.blocks {
  display: flex;
  gap: 16px;
  width: 50%;

  @include for-tablet-landscape-up {
    margin-right: 16px;
  }

  @include for-phone-landscape-up {
    flex-direction: column;
    margin-top: 33px;
    gap: 12px;
    width: 100%;
  }
}

.title {
  font-family: var(--font-title);
  font-weight: 700;
  font-size: 38px;
  margin-top: 0px;
  margin-bottom: 0px;

  @include for-phone-landscape-up {
    font-size: 28px;
  }
}

.text {
  color: #666666;
  margin-top: 0px;
  margin-bottom: 0px;
  white-space: wrap;
  font-size: 20px;
}

.info-block {
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 24px;
  background-color: #f5f7f3;

  @include for-phone-landscape-up {
    margin-left: 16px;
  }
}

.info-block-icon {
  height: 24px;
  width: 24px;
}

.numerical-information {
  font-family: var(--font-title);
  font-size: 24px;
}

.info-block-text {
  margin-top: 0px;
  font-size: 20px;
  color: #666666;
}
</style>
