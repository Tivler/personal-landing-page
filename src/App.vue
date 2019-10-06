<template>
  <div id="app">
    <router-view/>
    hey
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
  }
</style>