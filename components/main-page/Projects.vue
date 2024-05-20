<script setup>
import Project from "~/components/layouts/Project.vue";
import { projects } from '~/scripts/mock/projects';
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
