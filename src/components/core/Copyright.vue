<template>
  <footer class="footer">
    <p class="footer__copyright">Thomas McKyer © 2022</p>
  </footer>
</template>

<script>
export default {
  name: "Copyright"
};
</script>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid rgba(55, 55, 55, 0.25);
  padding: 40px 0 0 0;
  text-align: center;
  width: 15%;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 100px;

  @media only screen and (max-width: 1500px) and (max-height: 850px) {
    margin-bottom: 75px;
  }

  @media only screen and (max-width: 875px){
     width: 50%;
     margin-top: 50px;
  }
    
    &__copyright {
      text-align: center;
      font-size: 75%;
      opacity: .6;
    }
}
</style>