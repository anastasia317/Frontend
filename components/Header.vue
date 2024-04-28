<script setup>
    import SendRequestButton from './SendRequestButton.vue';
    import PhoneIcon from '~/assets/icons/phone.svg';
    import LogoDark from '~/assets/icons/logo_dark.svg';
    import Drawer from './Drawer.vue';

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
                <SendRequestButton class="send-request-button" />
                <Drawer class="drawer" />
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
    white-space: nowrap;
}

@mixin for-phone-portrait-up {
    @media (max-width: 500px) { @content; }
}

@mixin for-phone-landscape-up {
    @media (max-width: 820px) { @content; }
}

@mixin for-tablet-portrait-up {
  @media (max-width: 900px) { @content; }
}

@mixin for-tablet-landscape-up {
    @media (max-width: 1046px) { @content; }
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
    justify-content: space-between;
    max-width: 1264px;
    width: 100%;
    padding-inline: 1rem;
    margin: 24px 88px 24px 88px;

    @include for-tablet-landscape-up {
        margin-left: 0px;
        margin-right: 0px;
    }
}

.logo-dark {
    height: 39px;
    width: 100%;
    max-width: 160px;
    margin-right: 80px;

    @include for-tablet-portrait-up {
        margin-right: 24px;
    }

    @include for-phone-landscape-up {
        margin-right: 0px;
    }
}

.menu {
    list-style-type: none;
    padding-left: 0px;
    flex-wrap: wrap;

    @include for-phone-landscape-up {
        display: none;
    }
}

.menu-item {
    margin-right: $gap-inside-blocks;
}

.item-link {
    @include link;
}

.phone-number {
    gap: 8px;

    @include for-phone-portrait-up {
        display: none;
    }
}

.number {
    @include link(14px);
    font-family: var(--font-title);
    margin-right: $gap-inside-blocks;
}

.send-request-button {
    display: inline-block;

    @include for-phone-landscape-up {
        display: none;
    }
}

.drawer {
    display: none;

    @include for-phone-landscape-up {
        display: inline-block;
    }
}
</style>