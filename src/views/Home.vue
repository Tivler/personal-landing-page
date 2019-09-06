<template>
  <div class="home">
    <Head v-animate-css="bounceOne" />
    <Socials v-animate-css="bounceTwo" />
    <Nav name="About Me" path="/about" v-animate-css="bounceThree" />
    <Copyright v-animate-css="bounceFour" />
  </div>
</template>

<script>
import Head from "../components/Head";
import Socials from "../components/Socials";
import Nav from "../components/layout/Nav";
import Copyright from "../components/layout/Copyright";

export default {
  name: "home",
  components: {
    Head,
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

<style scoped>

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
}

</style>
