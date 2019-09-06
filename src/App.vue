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
    box-sizing: border-box;
  }

  #app {
    font: 16px "Helvetica Neue", Helvetica, Arial, sans-serif;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #333;
  }

  body {
    overflow: hidden;
  }
</style>