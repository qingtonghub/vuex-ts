/*
 * @Description: 登录组件
 * @Author: QingTong
 * @Date: 2019-01-25 15:16:27
 * @Last Modified by: qingtong
 * @Last Modified time: 2019-02-08 20:53:37
 */
<template>
  <div :class="[$style['page-wrap'], $style['login-wrap']]">
    <div :class="$style['form-box']">
      
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  @Component({
    name: 'login',
  })
  export default class Login extends Vue {
    private created(): void {
      // https://api.github.com/users/octocat/gists
      // this.axios.get('/clientPool/GetChannel').then((response) => {
      // this.axios.get('/example/get').then((response) => {
      //   console.log(response);
      // });
    }
    private mounted(): void {
      // console.log('login mounted');
    }
    private activated(): void {
      console.log('login activated');
    }
    private deactivated(): void {
      console.log('login deactivated');
    }
  }
</script>

<style lang="scss" module>
  .page-wrap {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    min-height: 710px;
    z-index: -10;
    background-position: center 0;
    background-repeat: no-repeat;
    background-size: cover;
    zoom: 1;
  }
  .login-wrap {
    background-image: url(../assets/imgs/agent_bg.jpg);
  }
  .form-box {
    width: 344px;
    height: 320px;
    position: absolute;
    left: 50%;
    top: 40%;
    z-index: 10;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.5);
  }
</style>
