<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'app',
}

</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  html {
    height: 100vh;
  }

  body {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    color: #333;
  }

  #app {
    font: 16px "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: ghostwhite;
    height: 100%;
    width: 100%;
  }
</style>