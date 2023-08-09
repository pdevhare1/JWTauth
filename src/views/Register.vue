<template>
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal text-center">Please Register</h1>

    <div class="form-floating">
      <input
        v-model="data.name"
        type="name"
        class="form-control"
        id="floatingName"
        placeholder="Name"
      />
      <label for="floatingName">Name</label>
    </div>
    <div class="form-floating">
      <input
        v-model="data.email"
        type="email"
        class="form-control"
        id="floatingEmail"
        placeholder="name@example.com"
      />
      <label for="floatingEmail">Email address</label>
    </div>
    <div class="form-floating">
      <input
        v-model="data.password"
        type="password"
        class="form-control"
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
      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/register", // Update the URL here
          this.data
        );
        console.log(response.data.message);

        const { token, user } = response.data;

        // Store token and user name in local storage
        localStorage.setItem("token", token);
        localStorage.setItem("userName", user.name);

        this.$router.push("/"); // Redirect to home page
      } catch (error) {
        console.error("Registration failed:", error.response.data.message);
      }
    },
  },
};
</script>
