<template>
  <section class="about">
      <Content v-animate-css="bounceFour" />
      <Socials v-animate-css="bounceThree" />
      <Nav name="Return Home" path="/"  v-animate-css="bounceTwo"/>
      <Copyright v-animate-css="bounceOne" />
  </section>
</template>

<script>
import Nav from '../components/layout/Nav';
import Content from '../components/Content';
import Socials from '../components/Socials';
import Copyright from '../components/layout/Copyright';

export default {
    name: 'About',
    components: {
        Nav,
        Content,
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