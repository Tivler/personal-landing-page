<template>
  <section class="about">
      <Socials v-animate-css="bounceOne" />
      <Nav v-animate-css="bounceTwo"/>
      <Copyright v-animate-css="bounceThree" />
  </section>
</template>

<script>
import Nav from '../components/core/Nav';
import Socials from '../components/feature/Socials';
import Copyright from '../components/core/Copyright';

export default {
    name: "resume",
    components: {
        Nav,
        Socials,
        Copyright
    },
    data() {
        return {
            bounceOne: {
                classes: 'bounceInDown',
                duration: 900
            },
            bounceTwo: {
                classes: 'bounceInDown',
                duration: 900,
                delay: 200
            },
            bounceThree: {
                classes: 'bounceInDown',
                duration: 900,
                delay: 400
            },
            bounceFour: {
                classes: 'bounceInDown',
                duration: 800,
                delay: 600
            },
        }
    }
}

</script>

<style lang="scss" scoped>
.about {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #333;

        @media only screen and (max-width: 1500px) and (max-height: 850px) {
           height: 100%;
        }

        @media only screen and (max-width: 550px) and (max-height: 850px) {
           height: 100%;
        }
    }
</style>