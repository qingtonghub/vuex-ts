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

    <!-- <keep-alive> -->
      <router-view/>
    <!-- </keep-alive> -->
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  @Component
  export default class App extends Vue {
    private mounted() {
      // this.$nextTick(() => {
      //   document.cookie = '.AspNet.Cookies=giukqz66npCdG_XcUSU_E7uHeuNeVGNDBABextbUnhKwjMZP_ROpYwz-3k9t3D_OPMpJW-4pE83qBUr5dp3MxD6uWvnb-nfFT7BEhkJ4jtDJY6sUs7QmPiLDfTgQ7NOuugmTS87FGdXXWSEzmT_ZMnIvQp2t5PTjySXjfFdKatZbZwfQPd7cmg926Et06e-2vpjyrVQnf5GSMbJnfRpCxbQdy3TX3dRY29pLDrPlXwXyMxZ0F868kvXVfTz4SNAI2uQ3EmjKIidtE0LCgRx2K1yWkQht5xu4GU7rK7jq4ouzLIs1EChoeKYtkrx40-bAXFGxn4ktCwXgICjEFeaCv3dnvZ_cSRbueVb-XKoqAVhRdtu_FcrtH971DAfGzffg_3RkJ4mXkTI03OSND-xmtA';
      // });
    }
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
