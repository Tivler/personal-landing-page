<template>
  <main>
      <Header v-animate-css="bounceOne" />
      <Description v-animate-css="bounceTwo" />
      <Socials v-animate-css="bounceThree" />
      <Nav v-animate-css="bounceFour" />
  </main>
</template>

<script>
import Header from "../components/feature/Header";
import Description from '../components/feature/Description';
import Socials from "../components/feature/Socials";
import Nav from "../components/core/Nav";

export default {
  name: "home",
  components: {
    Header,
    Socials,
    Nav,
    Description
  },
  data() {
    return {
      bounceOne: {
          classes: 'bounceInUp',
          duration: 800
      },
      bounceTwo: {
          classes: 'bounceInUp',
          duration: 900,
          delay: 200
      },
      bounceThree: {
          classes: 'bounceInUp',
          duration: 900,
          delay: 400
      },
      bounceFour: {
          classes: 'bounceInUp',
          duration: 900,
          delay: 600
      },
    }
  }
};
</script>

<style lang="scss" scoped>

main {
    max-width: 1100px;
    min-width: 400px;
    width: fit-content;
    margin: 0 auto;
}

header {
  @media only screen and (max-width: 420px) {
    margin-left: 35px;
  }

  @media only screen and (max-width: 825px) and (max-height: 420px) {
    margin-top: 50px;
  }

  @media only screen and (max-width: 823px) and (max-height: 411px) {
    margin-top: 250px;
  }

  @media only screen and (max-width: 812px) and (max-height: 375px) {
    margin-top: 50px;
  }

  @media only screen and (max-width: 736px) and (max-height: 414px) {
    margin-top: 250px;
  }

  @media only screen and (max-width: 705px) and (max-height: 400px) {
    margin-top: 50px;
  }
}

section {
  @media only screen and (max-width: 420px) {
    margin-left: 35px;
  }
}

nav {
  @media only screen and (max-width: 420px) {
    margin-left: 35px;
  }
}
</style>