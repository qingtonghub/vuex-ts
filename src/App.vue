<template>
  <div id="app">
    <!-- <div class="tit">
      <router-link to="/">Home</router-link>
      <router-link to="/login">A login</router-link>
      <router-link to="/register">B register</router-link>
      <router-link to="/forget">C forget</router-link>
    </div> -->
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
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: Helvetica Neue,Helvetica,Hiragino Sans GB,Microsoft YaHei,Arial,STHeiti,sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
}
</style>
