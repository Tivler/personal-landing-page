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

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Indie+Flower');
@import url('https://fonts.googleapis.com/css?family=Bungee+Shade');
@import url('https://fonts.googleapis.com/css?family=Merriweather+Sans');
@import url('https://fonts.googleapis.com/css?family=Bungee&display=swap');
@import url('https://fonts.googleapis.com/css?family=Rock+Salt&display=swap');

* {
  margin: 0;
  padding: 0;
}
  
body {
  background-color: #464646;
  display: flex;
  align-items: center;
  height: 100vh;
  color: #dcdcdc;

  @media only screen and (max-width: 825px) and (max-height: 400px) {
    align-items: initial;
  }

}

.tag {
  font-family: 'Indie Flower';
  color: #919191;
}

span {
  color: peru;
}

#app {
  margin: 0 auto;
}
</style>