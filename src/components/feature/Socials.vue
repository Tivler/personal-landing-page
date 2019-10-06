<template>
  <section class="social">

      <a rel="noopener noreferrer" href="https://github.com/tivler" target="_blank" class="social--link">
        <font-awesome-icon :icon="['fab', 'github-square']" class="social--icon" />
         Github
      </a>

      <a rel="noopener noreferrer" href="https://www.linkedin.com/in/thomas-mckyer/" target="_blank" class="social--link divider">
        <font-awesome-icon :icon="['fab', 'linkedin']" class="social--icon" />
        LinkedIn
      </a>

      <a rel="noopener noreferrer" href="https://www.instagram.com/tmckyer/" target="_blank" class="social--link divider--two">
        <font-awesome-icon :icon="['fab', 'instagram']" class="social--icon" />
        Instagram
      </a>

      <a rel="noopener noreferrer" href="mailto:thomasdmckyer@gmail.com" class="social--link">
        <font-awesome-icon :icon="['fab', 'google-plus-square']" class="social--icon" />
        Email Me
      </a>

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

.social {
    display: flex;
    justify-content: center;
    margin: 10px 0 0 0;

    @media only screen and (max-width: 550px){
     display: none;
    }
    
     &--link {
        font-size: 1em;
        color: #e1e1e1;
        text-decoration: none;
        display: flex;
        align-items: center;
        opacity: 0.8;
        transition: ease-in-out .2s;

        &:hover {
          opacity: 1;
        }
    }


    &--icon {
        font-size: 1.7em;
        color: #f80;
        margin-right: 7px;
    }
}

.divider {
    margin: 0 20px;

    @media only screen and (max-width: 550px){
      margin: 0;
    }

    &--two {
      margin: 0 20px 0 0;
    }
}
</style>