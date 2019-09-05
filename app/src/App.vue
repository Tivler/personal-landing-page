<template>
  <div id="app">
    <Head />
    <Socials />
    <Nav />
    <Copyright />
  </div>
</template>

<script>
import Head from "./components/Head";
import Socials from "./components/Socials";
import Nav from "./components/Nav";
import Copyright from "./components/Copyright";

export default {
  name: "app",
  components: {
    Head,
    Socials,
    Nav,
    Copyright
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font: 16px "Helvetica Neue", Helvetica, Arial, sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
background-color: #333;
}
</style>
