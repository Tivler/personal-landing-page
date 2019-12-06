<template>
    <header>
        <p class="tag">&lt;<span>body</span>&gt;</p>
        
        <div class="heading--wrapper">
            <p class="tag">&lt;h1 class="<span>heading</span>"&gt;</p>
            <h1 class="heading">Thomas McKyer</h1>
            <p class="tag">&lt;/h1&gt;</p>
        </div>
    </header>
</template>

<script>

export default {
    name: "Head"
}

</script>

<style lang="scss" scoped>

.heading {
    color: #f4f4f4;
    font-size: 4em;
    font-weight: 500;
    margin-left: 20px;
    font-style: normal;
    line-height: 105px;

    @media only screen and (max-width: 1440px) and (max-height: 800px) {
        font-size: 2.5em;
        line-height: 62px;
    }

    @media only screen and (max-width: 950px) {
        font-size: 2.4em; 
        line-height: 62px;
    }

    @media only screen and (max-width: 700px) {
        font-size: 2.2em;
    }

    @media only screen and (max-width: 500px) {
        font-size: 1.5em; 
        line-height: 50px;
        margin-bottom: 10px;
        margin-right: 0;
        width: 250px;
    }

    @media only screen and (max-width: 400px) {
        font-size: 1.2em; 
        line-height: 40px;
    }

    &--wrapper {
        margin: 25px 0 0 30px;
        margin-bottom: 25px;
        font-family: 'Helvetica Neue';  

        @media only screen and (max-width: 1440px) and (max-height: 800px) {
            margin-bottom: 10px;
            margin-top: 15px;
        }

        @media only screen and (max-width: 500px) {
            margin-bottom: 0;
        }
    }
}
</style>