<template>
  <section class="resume-content">
      <ResumeContent />
      <Socials v-animate-css="bounceFive" />
      <Nav v-animate-css="bounceSix"/>
      <Copyright v-animate-css="bounceSeven" />
  </section>
</template>

<script>
import ResumeContent from '../components/feature/ResumeContent';
import Nav from '../components/core/Nav';
import Socials from '../components/feature/Socials';
import Copyright from '../components/core/Copyright';

export default {
    name: "resume",
    components: {
        ResumeContent,
        Nav,
        Socials,
        Copyright
    },
    data() {
        return {
            bounceFive: {
                classes: 'bounceInUp',
                duration: 800,
                delay: 800
            },
            bounceSix: {
                classes: 'bounceInUp',
                duration: 900,
                delay: 1000
            },
            bounceSeven: {
                classes: 'bounceInUp',
                duration: 900,
                delay: 1200
            },
        }
    }
}

</script>

<style lang="scss" scoped>

// With Career Goals
// .resume-content {
//     font: 16px "Helvetica Neue", Helvetica, Arial, sans-serif;
//     position: absolute;
//     top: 5%;
//     width: 100%;

//     @media only screen and (min-height: 1600px) and (min-width: 2500px) {
//         top: 0;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         height: 100%;
//         width: 100%;
//     }

//     @media only screen and (min-height: 2500px) and (min-width: 1600px) {
//         top: 0;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         height: 100%;
//         width: 100%;
//     }

//     @media only screen and (max-height: 850px) and (max-width: 1500px) {
//        top: 9%;
//     }
// }

.resume-content {
    font: 16px "Helvetica Neue", Helvetica, Arial, sans-serif;
    position: absolute;
    top: 10%;
    width: 100%;

    @media only screen and (max-height: 1350px) and (max-width: 2000px) {
        top: 5%;
    }

    @media only screen and (max-height: 1350px) and (max-width: 1600px) {
        top: 10%;
    }

    @media only screen and (max-height: 1350px) and (max-width: 1275px) {
        top: 6.5%;
    }

    @media only screen and (max-height: 1350px) and (max-width: 1175px) {
        top: 4.5%;
    }

    @media only screen and (max-height: 1350px) and (max-width: 1025px) {
        top: 10%;
    }

    @media only screen and (max-height: 1350px) and (max-width: 850px) {
        top: 5.5%;
    }

    @media only screen and (max-height: 1350px) and (max-width: 600px) {
        top: 3.5%;
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
       top: 11%;
    }
}

</style>