<template>
  <main>
      <AboutMe v-animate-css="bounceOne" />
      <Socials v-animate-css="bounceTwo" />
      <AboutNav class="nav-component" v-animate-css="bounceThree"/>
  </main>
</template>

<script>
import AboutNav from '../components/core/AboutNav';
import AboutMe from '../components/feature/AboutMe';
import Socials from '../components/feature/Socials';

export default {
    name: 'About',
    components: {
        AboutNav,
        AboutMe,
        Socials
    },
    data() {
        return {
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
main {
    max-width: 1100px;
    min-width: 400px;
    width: 775px;
    margin: 0 auto;
}

.nav-component {
     @media only screen and (max-width: 800px) {
        margin-left: 35px;
    }
}
</style>