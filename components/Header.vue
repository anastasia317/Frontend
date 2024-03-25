<script setup>
    import SendRequestButton from './SendRequestButton.vue';
    import PhoneIcon from '~/assets/icons/phone.svg';
    import LogoDark from '~/assets/icons/logo_dark.svg';

    const phone = '+7 (900) 900-90-90';

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
</script>

<template>
    <header class="main-header">
        <div class="container">
            <div class="left-part">
                <LogoDark class="logo-dark" filled />
                <nav class="navigation">
                    <ul class="menu">
                        <li class="menu-item" v-for="item in nav">
                            <a class="item-link" :href="item.url">
                                {{  item.label }}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        
            <div class="right-part">
                <div class="phone-number">
                    <PhoneIcon filled />
                    <a class="number" :href="`tel:${ phone }`">{{ phone }}</a>
                </div>
                <SendRequestButton />
            </div>
        </div>  
    </header>
</template>

<style lang="scss" scoped>
$gap-inside-blocks: 24px;

@mixin link($link-font-size: 16px, $link-color:#666666) {
    text-decoration: none;
    color: $link-color;
    font-size: $link-font-size;
}

.main-header {
    width: 100%;
    height: 97px;
    display: flex;
    justify-content: center;
    flex-shrink: 0;
}

.left-part,
.menu,
.right-part,
.phone-number,
.container {
    display: flex;
    align-items: center;
}

.container {
    max-width: 1264px;
    width: 100%;
    padding-inline: 1rem;
    gap: 254px;
}

.left-part {
    gap: 80px;
}

.logo-dark {
    height: 39px;
    width: 160px;
}

.menu {
    list-style-type: none;
    gap: $gap-inside-blocks;
    padding-left: 0px;
}

.item-link {
    @include link();
}

.right-part {
    gap: $gap-inside-blocks;
}

.phone-number {
    gap: 8px;
}

.number {
    @include link(14px);
    font-family: var(--font-title);
}
</style>