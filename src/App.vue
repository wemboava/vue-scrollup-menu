<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <a class="container__btn" href="https://github.com/wemboava/show-menu-when-scrolling-up">&#9733;  GitHub</a>
    </div>
    <footer class="footer">Made by <a class="footer__link" href="https://github.com/wemboava/">Willian Emboava</a></footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'app',

  components: {
    Header
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
  }
  #app {
    position: relative;
  }
  .container {
    height: 400vh;

    display: flex;
    justify-content: center;

    background-image: linear-gradient(to right top, #00ffad, #00dfe6, #00b6ff, #0083ff, #3c00ff);
  
    &__btn {
      margin: 20px;
      padding: 15px 25px;
      
      position: absolute;
      top: 250px;

      border-radius: 5px;
      color: #fff;
      font-size: 22px;
      text-decoration: none;
      transition: all ease .2s;
      
      background-color: #1f1f1f;
      box-shadow: 0px 5px 0px 0px rgb(0, 0, 0);
        
      &:hover {
        transform: translate(0px, 5px);
        -webkit-transform: translate(0px, 5px);
        box-shadow: 0px 2px 0px 0px rgb(0, 0, 0);
      }
    }
  }
  .footer {
    position: absolute;
    bottom: 50px;
    left: calc(50% - 100px);
    font-family: monospace;
    font-size: 18px;

    &__link {
      color: #0083ff;
      text-decoration: none;
    }
  }
</style>
