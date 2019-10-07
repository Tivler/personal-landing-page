<template>
  <section class="about-content">
      <AboutMe v-animate-css="bounceOne" />
      <Socials v-animate-css="bounceTwo" />
      <Nav name="Return Home" path="/"  v-animate-css="bounceThree"/>
      <Copyright v-animate-css="bounceFour" />
  </section>
</template>

<script>
import Nav from '../components/core/Nav';
import AboutMe from '../components/feature/AboutMe';
import Socials from '../components/feature/Socials';
import Copyright from '../components/core/Copyright';

export default {
    name: 'About',
    components: {
        Nav,
        AboutMe,
        Socials,
        Copyright
    },
    data() {
        return {
            bounceFour: {
                classes: 'bounceInDown',
                duration: 800
            },
            bounceThree: {
                classes: 'bounceInDown',
                duration: 900,
                delay: 200
            },
            bounceTwo: {
                classes: 'bounceInDown',
                duration: 900,
                delay: 400
            },
            bounceOne: {
                classes: 'bounceInDown',
                duration: 900,
                delay: 600
            },
        }
    }
}

</script>

<style lang="scss" scoped>
.about-content {
    font: 16px "Helvetica Neue", Helvetica, Arial, sans-serif;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-height: 820px) and (max-width: 825px) {
        display: initial;
        top: 5%;
    }
}
</style>