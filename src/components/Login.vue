/*
 * @Description: 登录组件
 * @Author: QingTong
 * @Date: 2019-01-25 15:16:27
 * @Last Modified by: qingtong
 * @Last Modified time: 2019-02-11 14:53:12
 */
<template>
  <div :class="[$style['page-wrap'], $style['login-wrap']]">
    <div :class="$style['form-box']">
      <div :class="$style.logo">
        <img src="../assets/imgs/logo.png" alt="">
      </div>
      <div :class="$style.fields">
        <div :class="$style['form-field']">
          <label>
            <input v-model="form.phone" type="text" placeholder="请输入手机号" @blur="checkPhone">
          </label>
        </div>
        <div :class="$style['form-field']">
          <label>
            <input v-model="form.password" type="password" placeholder="输入密码" @blur="checkPsw">
          </label>
        </div>
      </div>
      <div :class="[$style['error-box'], {[$style.show]: showErrorMsg}]">
        <span>{{ errorMsg }}</span>
      </div>
      <div :class="$style['btn-box']">
        <button @click="login">登  录</button>
      </div>
      <div :class="$style.extra">
        <div :class="$style['extra-left']">
          <router-link to="/forget">忘记密码？</router-link>
        </div>
        <div :class="$style['extra-right']">
          没有账号？现在就
          <router-link to="/register">注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import verify from '../utils/verify';
  interface Form {
    phone: string;
    password: string;
  }
  @Component({
    name: 'login',
  })
  export default class Login extends Vue {
    private form: Form = {
      phone: '',
      password: '',
    };
    private showErrorMsg: boolean = false;
    private errorMsg: string = '';
    private checkPhone(): void {
      if (!verify.phone(this.form.phone).success) {
        this.errorMsg = '请输入正确的手机号';
        this.showErrorMsg = true;
        return;
      }
      this.showErrorMsg = false;
    }
    private checkPsw(): void {
      if (this.showErrorMsg) {
        return;
      }
      if (this.form.password === '') {
        this.errorMsg = '请输入密码';
        this.showErrorMsg = true;
        return;
      }
      this.showErrorMsg = false;
    }
    private login(): void {
      this.checkPhone();
      this.checkPsw();
      if (this.showErrorMsg) {
        return;
      }
      this.axios.post('/user/login', this.form).then((response) => {
        const { data } = response;
        if (!data.Success) {
          throw new Error(data.Msg);
        }
        console.log('登录成功');
      }).catch((err) => {
        console.log(err);
      });
    }
    // private created(): void {
    //   this.axios.post('/user/post').then((response) => {
    //     console.log(response);
    //   });
    // }
    // private mounted(): void {
    //   // console.log('login mounted');
    // }
    // private activated(): void {
    //   console.log('login activated');
    // }
    // private deactivated(): void {
    //   console.log('login deactivated');
    // }
  }
</script>

<style lang="scss" module>
  @import '../assets/scss/keyframes.scss'; 
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
    position: absolute;
    left: 50%;
    top: 40%;
    z-index: 10;
    transform: translate(-50%, -50%);
    .logo {
      display: block;
      overflow: hidden;
      text-align: center;
      margin: auto;
      margin-bottom: 59px;
    }
    .fields {
      .form-field {
        height: 44px;
        &:first-child input{
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        }
        &:last-child input{
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
        }
      }
      input {
        display: block;
        width: 100%;
        height: 44px;
        padding: 10px 20px;
        outline: none;
        border: none;
        border-bottom: 1px solid #dae1e9;
        color: #384655;
        background-image: none;
        background-color: #fff;
        font-size: 14px;
      }
    }
    .error-box {
      margin-top: 10px;
      position: relative;
      border-radius: 5px;
      overflow: hidden;
      text-align: center;
      color: #fff;
      display: none;
      height: 44px;
      line-height: 44px;
      background: rgba(0, 0, 0, 0.5);
      &.show {
        display: block;
        animation: fadeYIn .5s ease-in-out both;
      }
    }
    .btn-box button{
      display: block;
      margin-top: 30px;
      height: 44px;
      line-height: 44px !important;
      font-size: 18px !important;
      color: #fff;
      background-color: #16d3d0;
      outline: none;
      border: none;
      border-radius: 5px;
      width: 100%;
      text-align: center;
      transition: all .2s ease;
      cursor: pointer;
      &:hover {
        background-color: #12c7c3;
      }
    }
    .extra {
      overflow: hidden;
      color: #fff;
      margin-top: 10px;
      .extra-left {
        float: left;
      }
      .extra-right {
        float: right;
        a {
          color: #16d3d0;
        }
      }
      a {
        text-decoration: none;
        color: #fff;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
