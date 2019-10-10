<template>
    <section class="project">
        <h2 class="project__title">Projects</h2>
        <section class="project-grid">
            <div class="project-grid__wrapper">
                <a class="project-grid--link project-one" rel="noopener noreferrer" href="https://github.com/Tivler/roadtohire-clone" target="_blank">
                    <div class="project-grid--overlay">
                        <h3 class="project-grid__title">Road To Hire Clone</h3>
                    </div>
                </a>

                <a class="project-grid--link project-two" rel="noopener noreferrer" href="https://github.com/Tivler/soundclout" target="_blank">
                    <div class="project-grid--overlay">
                        <h3 class="project-grid__title">Soundclout</h3>
                    </div>
                </a>
            </div>
        </section>
    </section>
</template>

<script>
export default {
    name: 'ProjectContent',
};
</script>

<style lang="scss" scoped>
.project {
    width: 35%;
    max-width: 800px;
    margin: 0 auto 25px auto;

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

    @media only screen and (max-width: 750px){
        width: 85%;
        margin-bottom: 50px;
    }

     @media only screen and (max-width: 550px){
        width: 85%;
        margin-bottom: 0;
    }


    &__title {
        font-size: 2.5em;
        letter-spacing: -1px;
        color:#9370DB;
        font-weight: 700;
        margin: 0 0 15px 0;
        text-align: center;

        @media only screen and (max-width: 1500px) and (max-height: 850px) {
            margin-top: 50px;
            font-size: 2em;
        }
    }
}

.project-grid {
    text-align: center;
    font-family: 'Montserrat' , sans-serif;

    &__wrapper {
        display: grid;
        grid-template-columns: repeat(2, 320px);
        grid-gap: 10px;
        justify-content: center;
        margin: 0 0 35px 0;

        @media only screen and (max-width: 1400px) {
            grid-template-columns: 320px 320px;
        }

        @media only screen and (max-width: 750px) {
            grid-template-columns: 400px;
        }

        @media only screen and (max-width: 700px) {
            grid-template-columns: 400px;
        }

        @media only screen and (max-width: 550px) {
            margin: 0;
        }

        @media only screen and (max-width: 500px) {
            grid-template-columns: 300px;
        }

    }

    &--link {
        height: 200px;
        width: inherit;
        min-width: 200px;
        margin: 0.500em;
        box-shadow: -2px 2px 40px 0 rgba(0, 0, 0, 0.18);
        border-radius: 3px;
        transition: .2s ease-in-out;
        color: #fff;
        text-decoration: none;

        @media only screen and (min-width: 2000px) {
            max-width: 400px;
        }

        @media only screen and (max-width: 450px) {
            min-width: 200px;
        }

        &:hover {
            transform: scale(1.02);
            transition: .2s ease-in-out;

            @media only screen and (max-width: 1330px) {
                transform: none;
                transition: none;
            }
        }
    }

    &--overlay {
        color: #fff;
        text-shadow: -1px 1px 1px #555;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(179, 145, 242, 0.6) 100%);
        display: flex;
        flex-direction: column;
        height: inherit;
        text-align: center;
        justify-content: center;

        @media only screen and (max-width: 1330px) {    
            display: block;
            display: flex;
            flex-direction: column;
            height: inherit;
            text-align: center;
            justify-content: center;
        }
    }

    &__title {
        font-size: 1.2em;
        align-self: center;
        margin-bottom: 0.438em;

        @media only screen and (max-width: 1440px) and (max-height: 1400px) {
            font-size: 1em;
        }

        @media only screen and (max-width: 1330px) {  
            text-align: center;
        }

        @media only screen and (max-width: 900px) {
            font-size: 1.2em;
        }

        @media only screen and (max-width: 630px) {
            font-size: 1em;
        }

        @media only screen and (max-width: 350px) {
            font-size: .9em;
        }
        
        @media only screen and (max-width: 280px) {
            font-size: .9em;
        }
    }
}

.project-one {
    background: url('/assets/images/project3.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.project-two {
    background: url('/assets/images/project5.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>