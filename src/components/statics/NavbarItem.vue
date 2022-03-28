<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">Vue3 Movies</a>
      <div class="navbar-burger" data-target="navMenuColorprimary-example">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navMenuColorprimary-example" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          <router-link to="/">Home</router-link>
        </a>

        <a class="navbar-item">
          <router-link to="/movies">Movies</router-link>
        </a>
      </div>
    </div>
  </nav>
</template>
