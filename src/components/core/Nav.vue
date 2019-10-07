<template>
  <nav class="nav">
    <ul class="nav__list">
        <NavLink on:click="scroll" name="Home" path="/" />
        <NavLink name="Projects" path="/projects" />
        <NavLink on:click="scroll" name="About Me" path="/about" />
        <NavLink on:click="scroll" name="Resume" path="/resume" />
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

  @media only screen and (max-width: 400px) {
     padding: 20px 0 0 0;
  }

  &__list {
    @media only screen and (max-width: 400px) {
      align-content: center;
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
}
</style>