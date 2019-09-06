<template>
  <header class="head">
    <img class="head__avi" src="assets/me4.jpg" alt="Thomas McKyer" />
    <h1 class="head__title">{{ name }}</h1>
    <p class="head__subtitle">
        {{ title }}
      <span class="label"><a class="label--link" href="https://www.roadtohire.org/" target="_blank">{{ job }}</a></span>
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

    &__avi {
        height: 200px;
        border-radius: 5px;
    }

    &__title {
        font-size: 2.5rem;
        letter-spacing: -1px;
        color: #fff;
        font-weight: 700;
        margin: 15px 0;
    }

    &__subtitle {
        font-size: 18px;
        font-weight: 300;
        color: rgb(193, 193, 193);
        margin: 0 auto 30px;
    }
}

.label {
   
    &--link {
        color: #f80;
        font-weight: 300;
        text-decoration: none;
        transition: ease 0.7s;

        &:hover {
            color: #f90;
        }   
    }
}

</style>