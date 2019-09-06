<template>
  <section class="content">
    <h2 class="content__title">About Me</h2>
    <p class="content__text">
      Hey, I’m Thomas! I am a Software Developer - I was born and raised here in Charlotte, North Carolina and I’m currently studying and working with Road To Hire as an Apprentice Software Developer. I grew up like most people from my generation with a controller in one hand and an iPhone in the other, so without saying I’ve always had an interest in technology and a strong passion for creating. Looking back on the journey to get to where I am today honestly I wouldn’t change a thing everything happens for a reason and that’s why I’m here learning and thriving in the space that I found for myself.  Over the past few years I’ve been developing my skills as a Front End Developer learning all the ins and outs of web development specifically building unique and intuitive user experiences via Front End Frameworks like Vue and React. I keep myself busy these days building interactive web applications with friends and helping others find a passion for technology as well as  my time spent with Road To Hire learning more and more about the industry. 
    </p>
  </section>
</template>

<script>
export default {
    name: 'Content'
};
</script>

<style lang="scss" scoped>
    .content {
        width: 50%;
        max-width: 1200px;
        margin: 50px auto;

        @media only screen and (max-width: 1500px){
            width: 60%;
        }

        @media only screen and (max-width: 850px){
            width: 75%;
        }

        @media only screen and (max-width: 550px){
            width: 85%;
            margin-bottom: 0;
        }

        &__title {
            font-size: 2.5rem;
            letter-spacing: -1px;
            color: #f80;
            font-weight: 700;
            margin: 0 0 15px 0;
            text-align: center;

            @media only screen and (max-width: 1500px) and (max-height: 850px) {
              margin-top: 50px;
            }

            @media only screen and (max-width: 550px){
                font-size: 2.5em;
            }

            @media only screen and (max-width: 350px){
                font-size: 2em;
            }
        }

        &__text {
            line-height: 1.7;
            color: #e1e1e1;
            font-size: 1.3em;
            font-weight: 300;
            text-align: justify;
            margin-bottom: 20px;
            letter-spacing: .4px;

            @media only screen and (max-width: 800px){
              font-size: 1.2em;
              line-height: 1.5;
            }

            @media only screen and (max-width: 550px){
              font-size: 1.2em;
              line-height: 1.5;
            }

            @media only screen and (max-width: 400px){
              line-height: 1.2;
            }


            @media only screen and (max-width: 300px){
              line-height: 1.1;
            }
        }
    }
    
</style>