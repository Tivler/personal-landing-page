<template>
<section>
   <div class="description--wrapper">
        <p class="tag">&lt;p class="<span>description</span>"&gt;</p>
        <p class="description">JavaScript / Vue.js / React.js</p>
        <p class="tag">&lt;/p&gt;</p>
    </div> 
</section>
</template>

<script>

export default {
    name: "Description"
}

</script>

<style lang="scss" scoped>

.description {
    color: #fff;
    font-family: 'Merriweather Sans';
    font-size: 1.5em;
    margin: 15px 0 15px 20px;

    @media only screen and (max-width: 1440px) and (max-height: 800px) {
        font-size: 1.1em;
        margin: 8px 0 8px 20px;
    }

    @media only screen and (max-width: 800px) {
        font-size: 1em; 
    }

    @media only screen and (max-width: 500px) {
        font-size: .9em; 
        margin-bottom: 10px;
    }

     &--wrapper {
        margin: 25px 0 0 30px;
        margin-bottom: 25px;

        @media only screen and (max-width: 1440px) and (max-height: 800px) {
            margin-bottom: 10px;
            margin-top: 15px;
        }

        @media only screen and (max-width: 500px) {
            margin-top: 15px;
            margin-bottom: 0;
        }
    }
}

</style>