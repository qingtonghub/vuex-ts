/*
 * @Description: 登录组件
 * @Author: QingTong
 * @Date: 2019-01-25 15:16:27
 * @Last Modified by: QingTong
 * @Last Modified time: 2019-02-02 11:43:34
 */
<template>
  <div class="test">
    Login
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
      this.axios.get('/example/get').then((response) => {
        console.log(response);
      });
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