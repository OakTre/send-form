<template>
  <div class="wrapper">
    <div class="wrapper__inner">
      <div class="wrapper__inner-content">
        <Header />
        <main class="page">
          <Authorization/>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Authorization from './components/Authorization.vue';
import Header from './components/Header.vue';

export default {
  name: "App",
  components: {
    Header,
    Authorization,
  },
};
</script>

<style>
</style>
