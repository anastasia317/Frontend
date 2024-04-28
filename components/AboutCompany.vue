<script setup>
import House from '~/assets/icons/house.svg'
import Calendar from '~/assets/icons/calendar.svg'

const statistic_information = [
    {
        icon: 1,
        info: '57 домов',
        text: 'спроектировали и построили “под ключ”'
    },
    {
        icon: 2,
        info: '14 лет',
        text: 'мы на рынке загородного строительства'
    }
]
</script>

<template>
    <div class="about-company">
        <p class="title">Каждый проект для нас — важный</p>
        <p class="text">Мы строительная компания полного цикла.</p>
        <p class="text"> Вникаем во все детали, разрабатываем планировку будущего дома, продумываем конструктивные решения и общую архитектурную концепцию</p>
    </div>
    <div class="blocks">
        <div class="info-block" v-for="statistic in statistic_information">
            <House class="info-block-icon" v-if="statistic.icon === 1" filled />
            <Calendar class="info-block-icon" v-else filled />
            <p class="numerical-information">{{ statistic.info }}</p>
            <p class="info-block-text">{{ statistic.text }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.about-company {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 624px;
    gap: 32px;
}

.blocks {
    display: flex;
    gap: 16px;
    margin-top: 92px;
}

.title {
    font-family: var(--font-title);
    font-weight: 700;
    font-size: 38px;
    line-height: 45.6px;
    margin-bottom: 0px;
}

.text {
    color: #666666;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: wrap;
}

.info-block {
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    padding-top: 24px;
    padding-left: 24px;
    background-color: #F5F7F3;
}

.info-block-icon {
    height: 24px;
    width: 24px;
}

.numerical-information {
    font-family: var(--font-title);
    font-size: 24px;
    margin-top: 24px;
    margin-bottom: 24px;
}

.info-block-text {
    margin-top: 0px;
    font-size: 20px;
    color: #666666;
    margin-bottom: 24px;
}

</style>