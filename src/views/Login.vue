<template>
  <form @submit.prevent="submit">
    <h1
      class="h3 mb-3 fw-normal text-center text-uppercase fw-bolder fst-italic text-decoration-underline"
    >
      Please Login
    </h1>

    <div class="form-floating mb-3">
      <input
        v-model="data.email"
        type="email"
        class="form-control border-success"
        id="floatingInput"
        placeholder="name@example.com"
      />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating mb-3">
      <input
        v-model="data.password"
        type="password"
        class="form-control border-success"
        id="floatingPassword"
        placeholder="Password"
      />
      <label for="floatingPassword">Password</label>
    </div>
    <button class="btn btn-primary w-100 py-2" type="submit">Login</button>
  </form>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      data: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async submit() {
      const toast = useToast();

      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/login",
          this.data
        );
        console.log("Login Response:", response.data);

        const token = response.data.token;
        localStorage.setItem("token", token);
        console.log("Token stored in localStorage:", token);

        this.$router.push("/");

        // Show a success toast
        toast.success("Login successful!");
      } catch (error) {
        console.warn("Login failed:", error.response.data.message);

        // Show an error toast
        toast.error("Login failed. Please check your credentials.");
      }
    },
  },
};
</script>
