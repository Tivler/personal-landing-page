<template>
  <li class="nav__list--item">
      <router-link class="nav__list--link" :to="{ path }">{{ name }}</router-link>
  </li>
</template>

<script>
export default {
  name: "Nav",
  props: [
    'name',
    'path'
  ]
};
</script>

<style lang="scss" scoped>
.nav__list--item {
  display: inline-block;

  @media only screen and (max-width: 450px) {
    margin: 7px 0;
  }
}

.nav__list--link {
  position:relative;
  z-index: 1;
  transition: all .5s;
  padding: 12px;
  text-decoration: none;
  color: #333;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0 10px;

  @media only screen and (max-width: 1500px) and (max-height: 850px) {
    font-size: 1.2em;
  }

&:hover {
  color: #fff;
  transition: all .4s;
  @media only screen and (max-width: 1366px) {
      color: #333;
  }

  &::after {
    opacity: 1;
    visibility: visible;
    height: 100%;
    transition: all .4s;

    @media only screen and (max-width: 1366px) {
      display: none;
    }
  }
}

  &::after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 1px;
    content: '.';
    color: transparent;
    background: red;
    visibility: none;
    border-radius: 3px;
    opacity: 0;
    z-index: -1;
    transition: all .4s;

    @media only screen and (max-width: 1366px) {
      display: none;
    }
  }
}

</style>