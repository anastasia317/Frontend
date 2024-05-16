<script setup>
import Project from "./Project.vue";
import project1_image_1x from "~/assets/images/project-1-image.jpg";
import project1_image_2x from "~/assets/images/project-1-image@2x.jpg";
import project2_image_1x from "~/assets/images/project-2-image.jpg";
import project2_image_2x from "~/assets/images/project-2-image@2x.jpg";

const projects = [
  {
    image: {
      x1: project1_image_1x,
      x2: project1_image_2x,
    },
    title: "Дом в скандинавском стиле",
    description:
      "Одноэтажный дом из газобетона габаритными размерами 10.73 х 10.73 м. и жилой площадью 101 кв. м. с вальмовой кровлей<br>Построен по индивидуальному проекту.",
  },
  {
    image: {
      x1: project2_image_1x,
      x2: project2_image_2x,
    },
    title: "Дом из газобетона",
    description:
      "Одноэтажный дом габаритными размерами 15.2 х 9.7м. Приведенная площадь – 127.7 м.кв.<br>Три спальные комнаты, два сан.узла, большая кухня-гостиная с выходом на террасу.",
  },
];
</script>

<template>
  <div class="projects-wrapper">
    <h1 class="title">Реализованные проекты</h1>
    <div class="list">
      <Project
        v-for="project in projects"
        :title="project.title"
        :description="project.description"
        :image="project.image"
      />
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

@mixin for-phone {
    @media (max-width: 480px) { @content; }
}

.projects-wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  @include for-tablet-landscape-up {
    margin-left: 16px;
    margin-right: 16px;
  }
}

.title {
  font-family: var(--font-title);
  font-size: 38px;
  font-weight: 700;
  margin-top: 0px;
  margin-bottom: 0px;

  @include for-phone-landscape-up {
    margin-left: 16px;
    margin-right: 16px;
  }
}

.list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow: auto;
  grid-gap: 16px;

  @include for-phone {
    padding: 16px;
  }
}
</style>
