<script>
  import Header from '~/components/Header.vue';
  import Main from '~/components/Main.vue';
  import Footer from '~/components/Footer.vue';
</script>

<template>
  <Header />
  <Main />
  <Footer />
</template>
  
<style lang="scss">
@import '@csstools/normalize.css/opinionated.css';

:root {
   --font-title: Montserrat, sans-serif;
   --font-text: Open Sans, sans-serif;

   font-family: var(--font-text);
}

.root {
  display: flex;
  flex-flow: column;
}

html, body, #__nuxt, .root {
  height: 100%;
}
</style>
