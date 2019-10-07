<template>
  <section class="resume">

    <div v-animate-css="bounceOne" class="resume--wrapper">
        <h2 class="resume__title">Resume</h2>
        <!-- <h3 class="resume__subtitle">Career Goals</h3>
        <p class="resume__text">
        Innovative Software Developer with a passion for learning new and useful technologies to benefit client side users and user experiences. I have experience in building clean responsive web applications using React and Vue.
        </p> -->
    </div>

    <div v-animate-css="bounceTwo" class="resume--wrapper">
        <h4 class="resume__subtitle">Skills & Technologies</h4>
        <p class="resume__text">
            <span>HTML5, CSS3, JavaScript, Node.js, React.js, Vue.js, Vuex, Express, SASS, SCSS, MongoDB,  MySQL,
            Webpack, bash scripting, Git, Github, Babel</span>
        </p>
    </div>

    <div class="resume--wrapper">
        <div v-animate-css="bounceThree" >
            <h4 class="resume__subtitle">Experience</h4>
            <p class="resume__text">
                <span>Road To Hire</span> - Charlotte, NC June 2019 - Present
            </p>
            <p class="resume__position">
            Apprentice Software Engineer 
            </p>
            <ul class="resume__list">
                <li class="resume__list--item">Worked on developing a unique Front End portfolio using front end technologies.</li>
                <li class="resume__list--item">Built an e-commerce web application using React.js and MongoDB.</li>
                <li class="resume__list--item">Collaborated with other developers to build a Road to Hire clone via React.</li>
                <li class="resume__list--item">Used Express.js to setup API endpoints for the front-end of the e-commerce web app to consume.</li>
                <li class="resume__list--item">Implemented use of state and props to make reusable components across e-commerce app and road to hire clone.</li>
            </ul>
        </div>
       
        <div v-animate-css="bounceFour">
            <p class="resume__text">
                <span>Tone</span> - Remote, Washington, DC Jan 2016 – November 2016 
            </p>
            <p class="resume__position">
            Front End Engineer 
            </p>
            <ul class="resume__list">
                <li class="resume__list--item">Worked on developing responsive front-end following material design guidelines using HTML5 and CSS3.</li>
                <li class="resume__list--item">Collaborated with a team of developers to build a responsive single page application to consume our Node.js REST API.</li>
                <li class="resume__list--item">Worked with a team of developers to scale, refactor and maintain our Node.js Rest API.</li>
                <li class="resume__list--item">Used Express.js to setup API endpoints for the front-end of the application to consume.</li>
                <li class="resume__list--item">Implemented use of AngularJS to make reusable directives used throughout the application.</li>
            </ul>
           <a href="/assets/ThomasMcKyerResume.pdf" download="ThomasMcKyerResume.pdf" class="resume__download">Click To Download My Resume</a>

        </div>
    </div>

  </section>
</template>

<script>
export default {
    name: 'Resume',
    data() {
        return {
            bounceOne: {
                classes: 'bounceInUp',
                duration: 800
            },
            bounceTwo: {
                classes: 'bounceInUp',
                duration: 900,
                delay: 200
            },
            bounceThree: {
                classes: 'bounceInUp',
                duration: 900,
                delay: 400
            },
            bounceFour: {
                classes: 'bounceInUp',
                duration: 900,
                delay: 600
            },
        }
    }
};
</script>

<style lang="scss" scoped>
    .resume {
        width: 35%;
        max-width: 800px;
        margin: 0 auto;

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

        &--wrapper {
            margin-bottom: 2em;
        }


        &__title {
            font-size: 2.5em;
            letter-spacing: -1px;
            color: #f80;
            font-weight: 700;
            margin: 0 0 35px 0;
            text-align: center;

            @media only screen and (max-width: 1500px) and (max-height: 850px) {
              font-size: 2em;
            }
        }

         &__subtitle {
            font-size: 1.4em;
            letter-spacing: -1px;
            color: #fff;
            font-weight: 700;
            margin: 0 0 15px 0;

            @media only screen and (max-width: 1500px) and (max-height: 850px) {
              margin-top: 50px;
            }
        }

        &__text {
            line-height: 1.7;
            color: #e1e1e1;
            font-size: 1.2em;
            font-weight: 300;
            letter-spacing: .4px;

             @media only screen and (max-width: 1500px) and (max-height: 850px) {
              font-size: 1.1em;
            }

            @media only screen and (max-width: 800px){
              font-size: 1.08em;
              line-height: 1.5;
              letter-spacing: 0;
            }
        }

        &__position {
            line-height: 1.7;
            color: #e1e1e1;
            font-size: 1.3em;
            font-weight: 300;
            letter-spacing: .4px;
            margin-bottom: 1em;

             @media only screen and (max-width: 1500px) and (max-height: 850px) {
              font-size: 1.22em;
            }

            @media only screen and (max-width: 800px){
              font-size: 1.08em;
              line-height: 1.5;
              letter-spacing: 0;
            }
        }

        &__list {
            list-style: none;
            margin-left: 2.5%;
            margin-bottom: 2em;

            &--item {
                font-size: 1.1em;
                color:#e1e1e1;
                font-weight: 300;
                letter-spacing: .4px;

                &::before {
                    content: "\2022";
                    color: #f80;
                    font-weight: bold;
                    display: inline-block;
                    width: 1em;
                    margin-left: -1em;
                }
            }
        }


        &__download {
            line-height: 1.7;
            color: #e1e1e1;
            font-size: 1em;
            font-weight: 300;
            letter-spacing: .4px;
            text-decoration: none;
            transition: ease-in-out .3s;

            &:hover {
                color: #f80;
            }

            @media only screen and (max-width: 800px){
              line-height: 1.5;
              letter-spacing: 0;
            }
        }
    }
    
    span {
        color: #f80;
    }
</style>