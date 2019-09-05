<template>
  <footer class="footer">
    <p class="footer__copyright">Thomas McKyer © 2019</p>
  </footer>
</template>

<script>
export default {
  name: "Copyright"
};
</script>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid hsla(0,0%,100%,.25);
  padding: 40px 0 0 0;
  text-align: center;
  width: 25%;
  margin: 0 auto;

    &__copyright {
      color: #fff;
      text-align: center;
      font-size: 75%;
      opacity: .6;
    }
}
</style>