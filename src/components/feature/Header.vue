<template>
  <header class="head">
    <!-- <img class="head__avi" src="assets/avi.jpg" alt="Thomas McKyer" /> -->
    <h1 class="head__title">{{ name }}</h1>
    <p class="head__subtitle">
        {{ title }}
      <span class="label"><a class="label--link" rel="noopener noreferrer" href="https://www.roadtohire.org/" target="_blank">{{ job }}</a></span>
    </p>
  </header>
</template>

<script>

export default {
    name: "Head",
    data () {
        return {
            name: 'Thomas McKyer',
            title: 'Apprentice Software Engineer at',
            job: 'Road To Hire'
        }
    }
}

</script>

<style lang="scss" scoped>

.head {
    text-align: center;
    
    @media only screen and (max-width: 1500px) and (max-height: 850px) {
        margin-top: 50px;
    }

    &__avi {
        height: 200px;
        border-radius: 5px;

        @media only screen and (max-width: 550px){
            height: 180px;
        }
    }

    &__title {
        font-size: 2.5rem;
        letter-spacing: -1px;
        font-weight: 700;
        margin: 15px 0;

        @media only screen and (max-width: 550px){
            font-size: 2.5em;
        }

        @media only screen and (max-width: 350px){
            font-size: 2em;
        }
    }

    &__subtitle {
        font-size: 20px;
        font-weight: 300;
        margin: 0 auto 30px;

        @media only screen and (max-width: 550px){
            display: flex;
            flex-direction: column;
            margin: 0;
        }
    }
}

.label {
   
    &--link {
        color: #9370DB;;
        font-weight: 400;
        text-decoration: none;
        transition: ease 0.7s;

        &:hover {
            color: rgb(190, 156, 252);
        }   
    }
}

</style>