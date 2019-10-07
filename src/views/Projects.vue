<template>
  <section class="project-content">
      <ProjectContent v-animate-css="bounceOne" />
      <Socials v-animate-css="bounceTwo" />
      <Nav v-animate-css="bounceThree"/>
      <Copyright v-animate-css="bounceFour" />
  </section>
</template>

<script>
import ProjectContent from '../components/feature/ProjectContent';
import Nav from '../components/core/Nav';
import Socials from '../components/feature/Socials';
import Copyright from '../components/core/Copyright';

export default {
    name: "projects",
    components: {
        ProjectContent,
        Nav,
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
.project-content {
    font: 16px "Helvetica Neue", Helvetica, Arial, sans-serif;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-height: 1350px) and (max-width: 850px) {
        display: initial;
        top: 5%;
    }

     @media only screen and (max-height: 900px) and (max-width: 3450px) {
        top: 8%;
    }

    @media only screen and (min-height: 1600px) and (min-width: 2500px) {
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 100%;
    }

    @media only screen and (min-height: 2500px) and (min-width: 1200px) {
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 100%;
    }

    @media only screen and (max-height: 850px) and (max-width: 1500px) {
       top: 3%;
    }

    @media only screen and (max-height: 850px) and (max-width: 1400px) {
        display: initial;
       top: 0;
    }
}
</style>