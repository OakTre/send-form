<template>
  <form @submit.prevent="send" class="authorization__form form-authorization">
    <label for="authorization-email">
      <div class="form-authorization__label">Email</div>
      <input
        type="text"
        class="form-authorization__input"
        :class="v$.form.email.$error ? 'form-authorization__input_error' : ''"
        id="authorization-email"
        name="email"
        placeholder="name@company.com"
        autocomplete="off"
        v-model="form.email"
      />
      <div class="form-authorization__error-text" v-for="error of v$.form.email.$errors" :key="error.$uid">
        {{ error.$message }}
      </div>
    </label>
    <label for="authorization-password">
      <div class="form-authorization__label">Password</div>
      <input
        type="password"
        class="form-authorization__input"
        :class="v$.form.password.$error ? 'form-authorization__input_error' : ''"
        id="authorization-password"
        name="password"
        placeholder="Input your password"
        autocomplete="off"
        v-model="form.password"
      />
      <div class="form-authorization__error-text" v-for="error of v$.form.password.$errors" :key="error.$uid">
        {{ error.$message }}
      </div>
    </label>
    <a href="#" class="form-authorization__link">Forgot password?</a>
    <button type="submit" class="form-authorization__button">
        <div class="upload-messanger__icon" v-if="loading">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1.5C13.1422 1.5 16.5 4.85787 16.5 9C16.5 13.1422 13.1422 16.5 9 16.5C4.85787 16.5 1.5 13.1422 1.5 9C1.5 4.85787 4.85787 1.5 9 1.5Z" stroke="#fff" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round"/>
                <path d="M9 1.5C13.1422 1.5 16.5 4.85787 16.5 9" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </div>
        Sign in
    </button>
  </form>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength, email, helpers } from "@vuelidate/validators";

export default {
  name: "Form",
  data: () => ({
    form: {
      email: "",
      password: "",
    },
    loading: false
  }),
  setup: () => ({ v$: useVuelidate() }),
  validations() {
    return {
      form: {
        email: {
          required,
          email,
        },
        password: {
          required,
          minLength: minLength(8),
          maxLength: maxLength(20),
        },
      },
    };
  },
  mounted() {},
  methods: {
    send() {
      this.v$.form.$touch();

      if (!this.v$.form.$error) {
        this.loading = true;
        
        this.axios
          .post("https://api.corecruiter.org/api/user/auth", this.form, {
            headers: { "Content-Type": "application/json" },
          })
          .then((resp) => {
            alert(resp.response.data);
            this.loading = false;
          })
          .catch((resp) => {
            alert(resp.response.data.errors[0])
            this.loading = false;
          });
      }
    },
  },
};
</script>

<style scoped >
    .form-authorization__button {
        flex-direction: row;
    }

    .upload-messanger__icon {
        width: 18px;
        height: 18px;
        margin-right: 10px;
    }

</style>