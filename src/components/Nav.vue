<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <router-link
        to="/"
        class="navbar-brand text-uppercase fw-bolder text-white"
        >Home</router-link
      >
      <div>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link text-uppercase fw-bolder text-white"
              to="/login"
              >Login</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link text-uppercase fw-bolder text-white"
              to="/register"
              >Register</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Nav",
};
</script>
