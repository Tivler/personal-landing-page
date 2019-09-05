<template>
  <section class="social">

      <a href="https://github.com/tivler" target="_blank" class="social--link">
        <font-awesome-icon :icon="['fab', 'github-square']" class="social--icon" />
         Github
      </a>

      <a href="https://www.linkedin.com/in/thomas-mckyer/" target="_blank" class="social--link divider">
        <font-awesome-icon :icon="['fab', 'linkedin']" class="social--icon" />
        LinkedIn
      </a>

      <a href="mailto:thomasdmckyer@gmail.com" class="social--link">
        <font-awesome-icon :icon="['fab', 'google-plus-square']" class="social--icon" />
        Email
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
    padding-top: 5px;

     &--link {
        font-size: 1em;
        color: #e1e1e1;
        text-decoration: none;
        display: flex;
        align-items: center;
    }


    &--icon {
        font-size: 1.7em;
        color: #f80;
        margin-right: 7px;
    }
}

.divider {
    margin: 0 20px;
}
</style>