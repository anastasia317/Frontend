import article1_image_1x from '~/assets/images/article-1.jpg';
import article1_image_2x from '~/assets/images/article-1@2x.jpg';
import article2_image_1x from '~/assets/images/article-2.jpg';
import article2_image_2x from '~/assets/images/article-2@2x.jpg';
import article3_image_1x from '~/assets/images/article-3.jpg';
import article3_image_2x from '~/assets/images/article-3@2x.jpg';
import article4_image_1x from '~/assets/images/article-4.jpg';
import article4_image_2x from '~/assets/images/article-4@2x.jpg';

export const articles = [
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

let allArticles = new Array();

for (let i = 0; i < 3; i++) allArticles.push(...articles);

export { allArticles };
