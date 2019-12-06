<template>
    <nav>
        <div class="nav">
            <p class="tag">&lt;nav class="<span>navigation</span>"&gt;</p>
            <ul class="nav__list">
                <li class="nav__list--wrapper nav__list--divider">
                    <p class="tag">&lt;a href="/home"&gt;</p>
                    <router-link class="nav__list--link" to="/">Home</router-link>
                    <p class="tag">&lt;/a&gt;</p>
                </li>
                <li class="nav__list--wrapper nav__list--divider-two">
                    <p class="tag">&lt;a href="/about"&gt;</p>
                    <router-link class="nav__list--link" to="/about">About Me</router-link>
                    <p class="tag">&lt;/a&gt;</p>
                </li>
            </ul>
            <p class="tag">&lt;/nav&gt;</p>
        </div>

        <p class="tag">&lt;<span>/body</span>&gt;</p>
    </nav>
</template>

<script>

export default {
  name: "AboutNav"
};
</script>

<style lang="scss" scoped>
.nav {
    margin: 0 0 25px 25px;
    font-family: 'Merriweather Sans' , sans-serif;

    @media only screen and (max-width: 1440px) and (max-height: 800px) {
        margin-top: 10px;
        margin-bottom: 15px;
    }

     @media only screen and (max-width: 500px) {
            margin-top: 0px;
            margin-left: 0;
            margin-bottom: 15px;
    }

    &__list {
        margin: 0 0 0 20px;

        &--wrapper {
            display: flex;
        }

        &--divider {
            margin: 10px 0 15px 0;

            @media only screen and (max-width: 770px) {
                margin-bottom: 7px;
            }
        }

        &--divider-two {
            margin: 0 0 10px 0;

            @media only screen and (max-width: 770px) {
                display: none;
            }
        }

        &--link {
            text-decoration: none;
            color: #dcdcdc;
            padding: 0 5px;
            transition: .3s ease-in-out;

            &:hover {
                color: peru;
            }
        }
    }
}
</style>