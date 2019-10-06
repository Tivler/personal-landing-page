<template>
  <nav class="nav">
    <ul class="nav__list">
        <NavLink name="Home" path="/" />
        <!-- <NavLink name="Projects" path="/about" /> -->
        <NavLink name="About Me" path="/about" />
        <NavLink name="Resume" path="/resume" />
    </ul>
  </nav>
</template>

<script>
import NavLink from '../layout/NavLink';

export default {
  name: "Nav",
  components: {
      NavLink
  }
};
</script>

<style lang="scss" scoped>
.nav {
  padding: 50px 0 0 0;
  text-align: center;
}
</style>