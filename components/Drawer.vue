<script setup>
  import Bars from '~/assets/icons/bars.svg'

  const phone = '+7 (900) 900-90-90';
  const email = 'info@gmail.com';
  const address = 'г. Владивосток ул. Выселковая 49, стр. 3'

  const nav = [
        { 
            url: '/projects',
            label: 'Реализованные проекты',
        },
        {
            url: '/news',
            label: 'Новости',
        },
        {
            url: '/contacts',
            label: 'Контакты',
        },
    ];

    const contacts = [
        {
            icon: 1,
            url: '`tel:${ phone }`',
            label: phone,
        },
        {
            icon: 2,
            url: '`mailto:${ email }`',
            label: email,
        },
        {
            icon: 3,
            url: 'https://www.google.ru/maps/place/%D0%92%D1%8B%D1%81%D0%B5%D0%BB%D0%BA%D0%BE%D0%B2%D0%B0%D1%8F+%D1%83%D0%BB.,+49+%D1%81%D1%82+3,+%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%B2%D0%BE%D1%81%D1%82%D0%BE%D0%BA,+%D0%9F%D1%80%D0%B8%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D1%80%D0%B0%D0%B9,+690048/@43.1500857,131.9497781,17z/data=!3m1!4b1!4m6!3m5!1s0x5fb393c3fadc088f:0x38857a129a931394!8m2!3d43.1500857!4d131.952353!16s%2Fg%2F11ryhgpr4t?entry=ttu',
            label: address,
        },
    ];
</script>

<template>
  <div class="burger-menu">
    <button class="burger">
      <Bars class="bars" filled/>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.burger {
  display: inline-block;
  position: relative;
  width: 56px;
  height: 46px;
  cursor: pointer;
  
  border: none;
  background-color:#029F59;
  border-radius: 10px;
  border-color: #029f58;
}

.bars {
  width: 24px;
  height: 14px;
}


</style>