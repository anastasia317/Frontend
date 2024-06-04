<script setup>
import Slider from '~/components/main-page/Slider.vue'
import CompanyDescription from '~/components/main-page/CompanyDescription.vue'
import Projects from '~/components/main-page/Projects.vue'
import News from '~/components/main-page/News.vue'
</script>

<template>
    <main class="main-content">
        <section class="slider">
            <div class="container">
                <Slider />
            </div>
        </section>
        <section class="company-description">
            <div class="container">
                <CompanyDescription />
            </div>
        </section>
        <section class="projects">
            <div class="container">
                <Projects />
            </div>
        </section>
        <section class="news">
            <div class="container">
                <News />
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@mixin for-tablet-landscape-up {
    @media (max-width: 1046px) { @content; }
}

.main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    width: 100%;
}

.container {
    display: flex;
    justify-content: center;
    max-width: 1264px;
    width: 100%;
    padding-inline: 1rem;
    padding-left: 0px;
    padding-right: 0px;
    margin: 40px 80px;

    @include for-tablet-landscape-up {
        margin-left: 0px;
        margin-right: 0px;
    }
}

.slider,
.company-description,
.projects,
.news {
    display: flex;
    justify-content: center;
    width: 100%;
}

.company-description {
    margin-top: 80px;
}

.projects {
    background-color: #F5F7F3;
    padding-block: 80px;
    margin-top: 80px;
}
</style>