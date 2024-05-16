<script setup>
import article1_image_1x from '~/assets/images/article-1.jpg'
import article1_image_2x from '~/assets/images/article-1@2x.jpg'
import article2_image_1x from '~/assets/images/article-2.jpg'
import article2_image_2x from '~/assets/images/article-2@2x.jpg'
import article3_image_1x from '~/assets/images/article-3.jpg'
import article3_image_2x from '~/assets/images/article-3@2x.jpg'
import article4_image_1x from '~/assets/images/article-4.jpg'
import article4_image_2x from '~/assets/images/article-4@2x.jpg'
import NewsArticlePreview from '~/components/NewsArticlePreview.vue'
import Pagination from '~/components/Pagination.vue'

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
    },

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
    },

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
    <section class="news-wrapper">
    <ul class="path">
      <li><NuxtLink to="/" class="link-home-page">Главная</NuxtLink></li>
      <li class="active">&nbsp;/ Новости</li>
    </ul>
    <h1 class='news-list-title'>Новости</h1>
    <ul class='news-list-list'>
        <li v-for='article in articles' class='news-list-article'>
            <NewsArticlePreview 
            :date='article.date'
            :title='article.title'
            :text='article.text'
            :image='article.image' />
       </li>
   </ul>
   <Pagination class="pagination" />
    </section>
</template>

<style lang="scss" scoped>

@mixin for-tablet-landscape-up {
    @media (max-width: 1046px) { @content; }
}

ul, h1 {
    margin: 0;
    padding: 0;
}

.news-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
}

.path {
    display: flex;
    font-size: 20px;
    list-style-type: none;
    margin-left: 88px;
    margin-top: 40px;

    @include for-tablet-landscape-up {
        margin-left: 16px;
    }
}

.link-home-page {
    text-decoration: none;
    color: #029F59;
}

.news-list-title {
    margin-top: 48px;
    margin-left: 88px;

    @include for-tablet-landscape-up {
        margin-left: 16px;
    }
}

.news-list-list {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    gap: 16px;
    margin-left: 88px;
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