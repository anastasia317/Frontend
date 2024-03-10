<script>
  import Header from '~/components/Header.vue';
  import Content from '~/components/Content.vue';
  import Footer from '~/components/Footer.vue';
</script>

<template>
  <Header />
  <Content />
  <Footer />
</template>
  
<style lang="scss">
:root {
   --font-title: Montserrat, sans-serif;
   --font-text: Open Sans, sans-serif;

   font-family: var(--font-text);
}
</style>
