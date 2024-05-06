<script setup>
import article1_image_1x from '~/assets/images/article-1.jpg'
import article1_image_2x from '~/assets/images/article-1@2x.jpg'
import article2_image_1x from '~/assets/images/article-2.jpg'
import article2_image_2x from '~/assets/images/article-2@2x.jpg'
import article3_image_1x from '~/assets/images/article-3.jpg'
import article3_image_2x from '~/assets/images/article-3@2x.jpg'
import article4_image_1x from '~/assets/images/article-4.jpg'
import article4_image_2x from '~/assets/images/article-4@2x.jpg'

const articles = [
    {
        image: {
            x1: article1_image_1x,
            x2: article1_image_2x,
        },
        date: new Date('2021-08-20'), 
        title: 'Как сделать строительство дешевле?',
        text: 'Строительство дома можно сделать дешевле — выбрав проект...', 
    },
    
    {
        image: {
            x1: article2_image_1x,
            x2: article2_image_2x,
        },
        date: new Date('2021-08-20'), 
        title: 'Почему Гуд Вилл строит лучшие дома?',
        text: 'Хотим обрадовать тех, кто планирует переезд из квартиры в дом...', 
    },
    
    {
        image: {
            x1: article3_image_1x,
            x2: article3_image_2x,
        },
        date: new Date('2021-08-20'), 
        title: 'Преимущества и недостатки частного дома',
        text: 'Первое и главное: строим дом индивидуально для вас, по вашим...',
    },
    
    {
        image: {
            x1: article4_image_1x,
            x2: article4_image_2x,
        },
        date: new Date('2021-08-20'), 
        title: 'Из чего мы строим дома в ипотеку?',
        text: 'Самый популярный вопрос наших клиентов касается материалов, которы...',
    }
]
</script>

<template>
    <section class="news-list">
        <header class='news-list-header'>
           <h2 class='news-list-title'>Новости</h2>
           <a href='/news' class='Button'>Все новости</a>
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

h2 {
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