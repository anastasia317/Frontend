<script setup>
import Slider from './Slider.vue'
import AboutCompany from './AboutCompany.vue'
import Projects from './Projects.vue'
</script>

<template>
    <main class="main-content">
        <section class="slider">
            <div class="container">
                <Slider />
            </div>
        </section>
        <section class="about-company">
            <div class="container">
                <AboutCompany />
            </div>
        </section>
        <section class="projects">
            <div class="containter">
                <!-- <Projects /> -->
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
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
    margin: 0px 88px;
}

.about-company {
    margin-top: 80px;
}

.projects {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #F5F7F3;
    padding-block: 80px;
    margin-top: 120px;
}
</style>