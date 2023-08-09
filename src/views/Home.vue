<template>
  <div>
    <h1>Home Page</h1>
    <div v-if="userName">
      <h1>Welcome, {{ userName }}!</h1>
      <button class="btn btn-primary w-100 py-2" type="submit" @click="logout">
        Logout
      </button>
    </div>
    <div v-else>
      <p>Loading user data...</p>
    </div>
  </div>
</template>

<script>
import jwtDecode from "jwt-decode";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  data() {
    return {
      userName: null,
    };
  },
  created() {
    this.preSetUserName();
    this.decodeToken();
  },
  methods: {
    preSetUserName() {
      const storedUserName = localStorage.getItem("userName");
      if (storedUserName) {
        this.userName = storedUserName;
      }
    },
    decodeToken() {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          this.userName = decodedToken.userName;
        } catch (error) {
          console.error("Error decoding token:", error);
        }
      }
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      this.userName = null;
      this.$router.push("/login");
    },
  },
};
</script>
