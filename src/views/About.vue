<template>
  <main>
      <AboutMe v-animate-css="bounceOne" />
      <Socials v-animate-css="bounceTwo" />
      <Nav v-animate-css="bounceThree"/>
  </main>
</template>

<script>
import Nav from '../components/core/Nav';
import AboutMe from '../components/feature/AboutMe';
import Socials from '../components/feature/Socials';

export default {
    name: 'About',
    components: {
        Nav,
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
</style>