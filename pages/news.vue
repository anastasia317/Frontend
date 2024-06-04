<script setup>
import { allArticles } from "~/scripts/mock/articles";
import Pagination from "~/components/UI/Pagination.vue";
import NewsArticlePreview from "~/components/layouts/NewsArticlePreview.vue";
import Breadcrumbs from "~/components/UI/Breadcrumbs.vue";
</script>

<template>
  <div class="page-wrapper">
    <section class="main">
      <Breadcrumbs activeLink="Новости" />
      <h1 class="title">Новости</h1>
      <ul class="news-list-list">
        <li v-for="article in allArticles" class="news-list-article">
          <NewsArticlePreview
            :date="article.date"
            :title="article.title"
            :text="article.text"
            :image="article.image"
          />
        </li>
      </ul>
      <Pagination class="pagination" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/pages-common.scss';

@mixin for-tablet-landscape-up {
  @media (max-width: 1046px) {
    @content;
  }
}

.news-list-list {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  gap: 16px;
  margin-top: 32px;

  @include for-tablet-landscape-up {
    margin-left: 16px;
  }
}

.pagination {
  align-self: center;
  margin-top: 40px;
  margin-bottom: 80px;
}
</style>
