<template>
  <section class="about">
      <Nav name="Return Home" path="/"  v-animate-css="bounceFour"/>
      <Content v-animate-css="bounceThree" />
      <Socials v-animate-css="bounceTwo" />
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

</style>