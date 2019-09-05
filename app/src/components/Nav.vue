<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__list--item">
        <a class="nav__list--link" href="./about.html">About Me</a>
      </li>
       <li class="nav__list--item">
        <a class="nav__list--link" href="https://www.slideshare.net/slideshow/embed_code/key/17KDm2WISLftaf" target="_blank">Resume</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>
.nav {
  padding: 50px 0;
  text-align: center;

  &__list {
    &--item {
      display: inline-block;
    }

    &--link {
      display: block;
      padding: 15px;
      text-decoration: none;
      color: #c1c1c1;
      font-size: 1.2rem;
      font-weight: 300;
      margin: 0 10px;
      position: relative;
      z-index: 1;
      transition: all 0.5s;

      &:hover {
        color:#f80;
        z-index: 1;

        &::after {
          width: 100%;
        }
      }

      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        content: ".";
        color: transparent;
        width: 0%;
        height: 1px;
        background: #aaa;
        transition: all 0.5s;
      }
    }
  }
}
</style>