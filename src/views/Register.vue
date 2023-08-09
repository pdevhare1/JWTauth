<template>
  <form @submit.prevent="submit">
    <h1
      class="h3 mb-3 fw-normal text-center text-uppercase fw-bolder fst-italic text-decoration-underline"
    >
      Please Register
    </h1>

    <div class="form-floating mb-3">
      <input
        v-model="data.name"
        type="name"
        class="form-control border-success"
        id="floatingName"
        placeholder="Name"
      />
      <label for="floatingName">Name</label>
    </div>
    <div class="form-floating mb-3">
      <input
        v-model="data.email"
        type="email"
        class="form-control border-success"
        id="floatingEmail"
        placeholder="name@example.com"
      />
      <label for="floatingEmail">Email address</label>
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
    <button class="btn btn-primary w-100 py-2" type="submit">Register</button>
  </form>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Register",
  data() {
    return {
      data: {
        name: "",
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
          "http://localhost:3000/api/auth/register",
          this.data
        );
        console.log(response.data.message);

        const { token, user } = response.data;

        // Store token and user name in local storage
        localStorage.setItem("token", token);
        localStorage.setItem("userName", user.name);

        this.$router.push("/"); // Redirect to home page

        // Show a success toast
        toast.success("Registration successful!");
      } catch (error) {
        console.error("Registration failed:", error.response.data.message);

        // Show an error toast
        toast.error(
          "Registration failed. Please check your inputs else User already exists!"
        );
      }
    },
  },
};
</script>
