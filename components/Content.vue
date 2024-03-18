<script>

</script>

<template>
    <div class="main">
        <div class="banner">
            <p class="banner-text">Banner</p>
        </div>

        <h1 class="title">Hello, World!</h1>

        <p class="main-content">Look at my website</p>

        <div class="cards">
            <div class="card">
                <p class="card-text">Here</p>
            </div>
            <div class="card">
                <p class="card-text">And here</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@mixin card($fill: #D6FDD1, $width: 150px, $height: 40px) {
    background: $fill;
    width: $width;
    height: $height;
    font-family: var(--font-title);
}

.card {
    @include card();
    margin-right: 30px;
}

.card-text {
    padding-left: 10px; 
    margin-top: 10px;

}

.banner {
    @include card(#059902, 400px, 30px);
}

.banner-text {  
    color: white;
    padding-top: 5px;
    padding-left: 10px; 
}

.main {
    margin: 100px 0px 0px 50px;
}

.cards {
    display: flex;
}

.title {
    font-family: var(--font-title);
}

</style>