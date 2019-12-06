<template>
  <section class="about">
     <p class="tag">&lt;<span>body</span>&gt;</p>
        
      <div class="about--wrapper">
          <p class="tag">&lt;p class="<span>about__me</span>"&gt;</p>
          <p class="about__text">Hey, I’m Thomas! I am a Software Developer - I was born and raised here in Charlotte, 
            I’m currently studying and working with Road To Hire as an Apprentice Software Developer. 
            I grew up like most people from my generation with a controller in one hand and an iPhone in the other, 
            so without saying I’ve always had an interest in technology and a strong passion for creating. 
            Over the past few years I’ve been developing my skills as a Front End Developer learning all the ins and outs of 
            web development specifically building unique and intuitive user experiences via Front End Frameworks like Vue and React. 
            I keep myself busy building interactive web applications with friends and helping others find a passion for technology 
            as well as the time I spend with Road To Hire learning more about the industry.</p>
          <p class="tag">&lt;/p&gt;</p>
      </div>
  </section>
</template>

<script>
export default {
    name: 'AboutMe'
};
</script>

<style lang="scss" scoped>
  .about {
    color: #dcdcdc;

    &__text {
      font-family: 'Helvetica Neue' , sans-serif;
      line-height: 1.6;
      font-size: 1.1em;
      font-weight: 300;
      letter-spacing: .4px;
      margin: 15px 0 15px 20px;

       @media only screen and (max-width: 1440px) and (max-height: 800px) {
        font-size: .85em;
        line-height: 1.6;
        margin: 10px 0 10px 15px;
      }
    }

    &--wrapper {
        margin: 25px 0 0 30px;
        margin-bottom: 25px;

        @media only screen and (max-width: 1440px) and (max-height: 800px) {
            margin-bottom: 10px;
            margin-top: 15px;
        }
    }
}
</style>