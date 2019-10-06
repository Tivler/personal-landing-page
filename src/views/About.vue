<template>
  <section class="aboutme">
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
}

</script>

<style lang="scss" scoped>
.aboutme {
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #333;
}
</style>