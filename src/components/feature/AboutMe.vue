<template>
  <section class="about">
    <h2 class="about__title">About Me</h2>
    <p class="about__text">
      Hey, I’m Thomas! - I was born and raised here in Charlotte, I’m currently working at Lowe's as an Associate Software Engineer. 
      I grew up like most people my age with a controller in hand and a computer screen in front of me playing video games for hours on end, so without saying I’ve always had an interest in technology and a strong passion for creating. 
      Over the past few years I've been busy with my work with Lowe's as well as branching out on my own to work on some freelance opportunites to sharpen my skills with different technologies. if you want to keep up with me connect with me on linkedIn.
    </p>
  </section>
</template>

<script>
export default {
    name: 'AboutMe'
};
</script>

<style lang="scss" scoped>
    .about {
        width: 35%;
        max-width: 800px;
        margin: 0 auto 35px auto;

        @media only screen and (max-width: 1600px){
            width: 45%;
        }

        @media only screen and (max-width: 1500px){
            width: 50%;
        }

        @media only screen and (max-width: 1024px){
            width: 75%;
        }

        @media only screen and (max-width: 1500px) and (max-height: 850px) {
              width: 52%;
        }

         @media only screen and (max-width: 1024px) and (max-height: 850px) {
              width: 70%;
        }

        @media only screen and (max-width: 550px){
            width: 85%;
            margin-bottom: 0;
        }


        &__title {
            font-size: 2.5em;
            letter-spacing: -1px;
            color: mediumpurple;
            font-weight: 700;
            margin: 0 0 15px 0;
            text-align: center;

            @media only screen and (max-width: 1500px) and (max-height: 850px) {
              margin-top: 50px;
              font-size: 2em;
            }
        }

        &__text {
            line-height: 1.7;
            font-size: 1.3em;
            font-weight: 300;
            letter-spacing: .4px;

             @media only screen and (max-width: 1500px) and (max-height: 850px) {
              font-size: 1.22em;
            }

            @media only screen and (max-width: 800px){
              font-size: 1.08em;
              line-height: 1.5;
              letter-spacing: 0;
            }
        }
    }
    
</style>