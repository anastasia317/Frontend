<script>
    import SendRequestButton from './SendRequestButton.vue';
</script>

<template>
    <header>
        <div class="left-part">
            <img src="~/assets/images/Group.png" class="logo">
            <nav class="navigation">
                <ul class="menu">
                    <li class="menu-item"><a class="item-link" href="#">Реализованные проекты</a></li>
                    <li class="menu-item"><a class="item-link" href="#">Новости</a></li>
                    <li class="menu-item"><a class="item-link" href="#">Контакты</a></li>
                </ul>
            </nav>
        </div>
        <div class="right-part">
            <div class="phone-number">
                <img class="telephone-icon" src="~/assets/images/telephone.png">
                <a class="number" href="#">+7 (900) 900-90-90</a>
            </div>
            <SendRequestButton />
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

header {
    width: 100%;
    height: 97px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.left-part,
.menu,
.right-part,
.phone-number {
    display: flex;
    align-items: center;
}

.left-part {
    height: 39px;
    gap: 80px;
    padding: 29px 0px 29px 88px;
}

.logo {
    height: 39px;
}

.menu {
    list-style-type: none;
    gap: $gap-inside-blocks;
    height: 19px;
}

.item-link {
    @include link();
}

.right-part {
    height: 49px;
    left: 878px;
    gap: $gap-inside-blocks;
    padding: 24px 88px 24px 254px;
}

.telephone-icon {
    width: 16px;
    height: 16px;
}

.phone-number {
    height: 17px;
    gap: 8px;
}

.number {
    @include link(14px);
    font-family: var(--font-title);
}
</style>