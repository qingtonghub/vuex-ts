<template>
  <div id="app">
    <div class="tit">
      <router-link to="/">Home</router-link>
      <router-link to="/login">A login</router-link>
      <router-link to="/register">B register</router-link>
      <router-link to="/forget">C forget</router-link>
    </div>
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/> -->

    <keep-alive include="login">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  @Component
  export default class App extends Vue {
    private keep: any[] = [];
  }
</script>

<style lang="scss">
a {
  margin-right: 10px;
}
div.test {
  width: 100px;
  height: 1000px;
  border: 1px solid #ccc;
}
.tit {
  position: fixed;
  right: 0;
  top: 50%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
