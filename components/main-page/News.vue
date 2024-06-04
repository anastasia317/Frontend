<script setup>
import NewsArticlePreview from '~/components/layouts/NewsArticlePreview.vue'
import { articles } from '~/scripts/mock/articles';
</script>

<template>
    <section class="news-list">
        <header class='news-list-header'>
           <h1 class='news-list-title'>Новости</h1>
           <NuxtLink to='/news' class='Button'>Все новости</NuxtLink>
       </header>
       <ul class='news-list-list'>
           <li v-for='article in articles' class='news-list-article'>
               <NewsArticlePreview 
                :date='article.date'
                :title='article.title'
                :text='article.text'
                :image='article.image' />
           </li>
       </ul>
    </section>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/button.scss';

h1 {
    margin: 0;
}

.news-list {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    margin-top: 40px;
}

.news-list-header {
    display: flex;
    justify-content: space-between;
    padding-right: 16px;
    padding-left: 16px;
}

.news-list-title {
    font-size: 38px;
    font-family: var(--font-title);
}

.Button {
    display: inline-block;
    border-radius: 10px;
    max-height: 17px;
    max-width: 93px;
    padding: 16px 24px;
    text-decoration: none;
    color: white;
    font-size: 14px;
    font-family: var(--font-title);
}

.news-list-list {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;
    overflow: auto;
    width: 100%;
    padding: 0;
}
</style>