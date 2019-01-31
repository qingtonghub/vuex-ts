/*
 * @Description: 登录组件
 * @Author: QingTong
 * @Date: 2019-01-25 15:16:27
 * @Last Modified by: QingTong
 * @Last Modified time: 2019-01-31 15:40:02
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
      console.log('login created');
    }
    private mounted(): void {
      console.log('login mounted');
    }
    private activated(): void {
      console.log('login activated');
    }
    private deactivated(): void {
      console.log('login deactivated');
    }
  }
</script>