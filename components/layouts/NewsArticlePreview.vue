<script setup>
defineProps({
  image: {
    x1: String,
    x2: String,
  },
  date: Date,
  title: String,
  text: String,
});
</script>

<template>
  <article class="article-preview">
    <div class="pic">
      <picture>
        <source :srcset="`${image.x2} 2x, ${image.x1}`" />
        <img :src="image.x1" :alt="title" class="image" />
      </picture>
      <div class="article-information">
        <p class="date">
          {{
            date.toLocaleDateString("ru", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
          }}
        </p>
        <h4 class="title">{{ title }}</h4>
        <p class="text" v-html="text" />
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
p, h4 {
  margin: 0;
  padding: 0;
}

.article-preview {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
  background-color: white;
  max-height: 343px;
  max-width: 304px;
  height: 100%;
  width: 100%;
}

.pic {
   grid-template-columns: 200px 127px;
   grid-template-rows: 50% 50%;
   height: 100%;
   width: 100%;
}

.image {
   object-fit: cover;
}

.article-information {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
}

.date {
  font-size: 14px;
  font-family: var(--font-title);
}
</style>
