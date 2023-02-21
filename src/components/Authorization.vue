<template>
  <section class="authorization authorization-main">
    <div class="authorization-main__container">
      <div class="authorization-main__wrapper">
        <div class="authorization-main__body">
          <div class="authorization__title">Welcome back!</div>
          <div class="authorization__subtitle">
            Enter your credentials to access your account
          </div>

          <Form />

        </div>
        <div class="authorization__image">
          <img src="@/assets/img/main-image.svg" alt="men" />
        </div>

        <div class="authorization__dots authorization__dots_1">
          <img src="@/assets/img/dots.svg" alt="dots" />
        </div>
        <div class="authorization__dots authorization__dots_2">
          <img src="@/assets/img/dots.svg" alt="dots" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Form from "./Form.vue"

export default {
  name: "Authorization",
  components: { Form }
};
</script>

<style>
</style>
