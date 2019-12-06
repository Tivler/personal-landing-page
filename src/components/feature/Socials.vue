<template>
    <section class="socials">
      <p class="tag">&lt;section class="<span>social__media</span>"&gt;</p>

      <div class="socials--wrapper">
          <span class="socials--item git">
              <a href="https://github.com/tivler" class="socials__link" target="_blank">
                <font-awesome-icon :icon="['fab', 'github-square']" class="socials--icon" />
                Github
              </a>
          </span>
          <span class="socials--item linkedin">
              <a href="https://www.linkedin.com/in/thomas-mckyer/" class="socials__link" target="_blank">
                <font-awesome-icon :icon="['fab', 'linkedin']" class="socials--icon" />
                LinkedIn
              </a>
          </span>
          <span class="socials--item instagram">
              <a href="https://www.instagram.com/tmckyer/" class="socials__link" target="_blank">
                <font-awesome-icon :icon="['fab', 'instagram']" class="socials--icon" />
                Instagram
              </a>
          </span>
      </div>

      <p class="tag">&lt;/section&gt;</p>
  </section>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";

library.add(faFontAwesome);

export default {
  name: "Socials"
};
</script>

<style lang="scss" scoped>
.socials {
    margin: 35px 0 40px 25px;
    font-family: 'Merriweather Sans' , sans-serif;

    @media only screen and (max-width: 1440px) and (max-height: 800px) {
        margin-top: 10px;
        margin-bottom: 0;
    }

    @media only screen and (max-width: 500px) {
           display: none;
    }

    &--wrapper {
        margin: 15px 0 15px 20px;
        display: flex;

        @media only screen and (max-width: 1440px) and (max-height: 800px) {
            margin: 8px 0 8px 20px;
        }

        @media only screen and (max-width: 500px) {
           flex-direction: column;
        }
    }

    &--item {
        padding-right: 30px;
    }
    
    &__link {
        font-size: .8em;
        color: #fff;
        text-decoration: none;
        display: flex;
        align-items: center;
        opacity: 0.8;
        transition: ease-in-out .2s;

        @media only screen and (max-width: 1440px) and (max-height: 800px) {
            font-size: .75em;
        }

        @media only screen and (max-width: 800px) {
            font-size: .8em; 
        }

        &:hover {
          opacity: 1;
        }
    }

    &--icon {
        font-size: 1.8rem;
        color: peru;
        margin-right: 10px;

        @media only screen and (max-width: 1440px) and (max-height: 800px) {
            font-size: 1.6rem;
        }

        @media only screen and (max-width: 800px) {
            font-size: 1.4rem; 
            margin-right: 7px;
        }
    }
}
</style>