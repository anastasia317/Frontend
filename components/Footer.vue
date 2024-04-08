<script setup>
    import SendRequestButton from './SendRequestButton.vue';
    import LogoLight from '~/assets/icons/logo_light.svg';
    import PhoneIcon from '~/assets/icons/phone.svg';
    import EmailIcon from '~/assets/icons/email.svg';
    import TagIcon from '~/assets/icons/tag.svg';

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
    <footer class="main-footer">
        <div class="container">
            <div class="top-part">
                <LogoLight class="logo-light" filled />
                <nav class="navigation">
                    <ul class="menu">
                        <li class="menu-item" v-for="item in nav">
                            <a class="item-link" :href="item.url">
                                {{  item.label }}
                            </a>
                        </li>
                    </ul>
                </nav>
                <ul class="contact-info">
                    <li class="contact-info-item" v-for="item in contacts">
                        <PhoneIcon v-if="item.icon === 1" filled />
                        <EmailIcon v-else-if="item.icon === 2" filled />
                        <TagIcon v-else filled />
                        <a class="contact-info-item-link" :href="item.url">
                            {{  item.label }}
                        </a>
                    </li>
                </ul>
                <SendRequestButton />
            </div>
            
            <div class="bottom-part">
                <p class="copyright">© Загдом, 2021</p>
                <a class="privacy" href="/privacy">Политика конфиденциальности</a>
                <a class="users" href="/users">Пользовательское соглашение</a>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
$gap-inside-blocks: 24px;

@mixin link($link-font-size: 16px, $link-color:white) {
    text-decoration: none;
    color: $link-color;
    font-size: $link-font-size;
}

.main-footer {
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    height: 246px;
    background-color: #254741;
}

.container {
    max-width: 1264px;
    width: 100%;
    padding-inline: 1rem;
    display: flex;
    flex-direction: column;
    margin-top: 37px;
    margin-bottom: 33px;
}

.top-part,
.bottom-part
{
    display: flex;
}

.logo-light {
    height: 39px;
    width: 160px;
    margin-right: 154px;
}

.menu,
.contact-info {
    list-style-type: none;
    gap: $gap-inside-blocks;
    display: flex;
    flex-direction: column;
    padding-left: 0px;
}

.item-link {
    @include link();
}

.contact-info-item-link {
    @include link(14px);
    font-family: var(--font-title);
}

.menu {
    width: 195px;
    margin-right: 122px;
}

.contact-info {
    width: 202px;
    margin-right: 228px;
}

.contact-info-item {
    display: flex;
    gap: 8px;
}

.bottom-part {
    align-items: center;
}

.privacy,
.users {
    @include link(14px);
    opacity: 60%;
}

.privacy {
    margin-right: 99px;
}

.copyright {
    color: white;
    opacity: 60%;
    font-size: 14px;
    width: 148px;
    margin-right: 172px;
}

</style>