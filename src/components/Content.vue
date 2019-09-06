<template>
  <section class="content">
    <p class="content__text">
      Hey, I’m Thomas! I am a Software Developer - I was born and raised here in Charlotte, North Carolina and I’m currently studying and working with Road To Hire as an Apprentice Software Developer. I grew up like most people from my generation with a controller in one hand and an iPhone in the other, so without saying I’ve always had an interest in technology and a strong passion for creating. Looking back on the journey to get to where I am today honestly I wouldn’t change a thing everything happens for a reason and that’s why I’m here learning and thriving in the space that I found for myself.  Over the past few years I’ve been developing my skills as a Front End Developer learning all the ins and outs of web development specifically building unique and intuitive user experiences via Front End Frameworks like Vue and React. I keep myself busy these days building interactive web applications with friends and helping others find a passion for technology as well as  my time spent with Road To Hire learning more and more about the industry. 
    </p>
    <span>- Thomas McKyer</span>
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
        margin: 50px auto;

        &__text {
            line-height: 1.7;
            color: #e1e1e1;
            font-size: 1.3em;
            font-weight: 300;
            text-align: justify;
            margin-bottom: 20px;
            letter-spacing: .4px;
        }
    }

    span {
        display: block;
        font-style: italic;
        opacity: .6;
        line-height: 1.7;
        color: #e1e1e1;
        font-size: 1.3em;
        font-weight: 300;
        text-align: center;
        margin-bottom: 50px;
        letter-spacing: .4px;
    }
</style>