<template>
  <div id="app">
    <router-view/>
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
    background: #333;
    display: flex;
    align-items: center;
  }

  #app {
    font: 16px "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: #333;
    height: 100%;
    width: 100%;
  }
</style>