<template>
  <section class="about">
    <h2 class="about__title">About Me</h2>
    <p class="about__text">
      Hey, I’m Thomas! I am a Software Developer - I was born and raised here in Charlotte, I’m currently studying and working with Road To Hire as an Apprentice Software Developer. 
      I grew up like most people from my generation with a controller in one hand and an iPhone in the other, so without saying I’ve always had an interest in technology and a strong passion for creating. 
      Over the past few years I’ve been developing my skills as a Front End Developer learning all the ins and outs of web development specifically building unique and intuitive user experiences via Front End Frameworks like Vue and React. 
      I keep myself busy building interactive web applications with friends and helping others find a passion for technology as well as the time I spend with Road To Hire learning more about the industry. 
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
            color: #f80;
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
            color: #e1e1e1;
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