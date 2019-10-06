<template>
  <div class="home">
    <Header v-animate-css="bounceOne" />
    <Socials v-animate-css="bounceTwo" />
    <Nav v-animate-css="bounceThree" />
    <Copyright v-animate-css="bounceFour" />
  </div>
</template>

<script>
import Header from "../components/feature/Header";
import Socials from "../components/feature/Socials";
import Nav from "../components/core/Nav";
import Copyright from "../components/core/Copyright";

export default {
  name: "home",
  components: {
    Header,
    Socials,
    Nav,
    Copyright
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home {
  font: 16px "Helvetica Neue", Helvetica, Arial, sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background-color: #333;

  @media only screen and (max-width: 900px) and (max-height: 550px) {
    height: 100%;
  }
}
</style>