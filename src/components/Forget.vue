/*
 * @Description: 忘记密码组件
 * @Author: QingTong
 * @Date: 2019-01-25 15:19:16
 * @Last Modified by: QingTong
 * @Last Modified time: 2019-01-31 15:34:54
 */

<template>
  <section class="register" ref="registerContainer">
    <div class="register-bg"></div>
    <div class="register-container">
      <div class="login-logo">
        <svg-icon iconClass="logo"></svg-icon>
      </div>
      <div class="login-form">
        <el-form ref="form" :model="form">
          <div class="login-form-input">
            <svg-icon iconClass="id"></svg-icon>
            <el-form-item>
              <el-input placeholder="请输入手机号" v-model="form.phone" autofocus @input="debouncePhone"></el-input>
            </el-form-item>
            <p class="error-info">{{ check.phone }}</p>
          </div>
          <div class="login-form-input">
            <svg-icon iconClass="password"></svg-icon>
            <el-form-item>
              <el-input type="password" placeholder="重置密码" v-model="form.password" @blur="checkPsw"></el-input>
            </el-form-item>
            <p class="error-info">{{ check.password }}</p>
          </div>
        </el-form>
      </div>
      <div class="submit-btn">
        <el-button type="primary" @click="reset" :loading="isLoading">重  置</el-button>
      </div>
      <div class="user-agreement">
        <el-row>
          <el-col :span="12">
            <el-checkbox v-model="checked">同意<a href="javascript:;" @click="dialogVisible = true">《优客逸家服务条款》</a></el-checkbox>
          </el-col>
          <el-col :span="12">
            直接 <router-link to="/login">登录</router-link>
          </el-col>
        </el-row>
      </div>
    </div>
    <custom-dialog title="网站服务条款" @close="dialogVisible = false;" @confirmEvent="dialogVisible = false" :dialogVisible="dialogVisible" :closeOnClickModal="false" dialogWidth="600px">
      <div class="user-agreement-content" v-html="userAgreement"></div>
    </custom-dialog> 
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DragVerfication from '@/components/base/DragVerfication.vue';
import CustomDialog from '@/components/base/CustomDialog.vue';
import { userAgreement } from '@/config/config';
import { debounce } from '../utils/utils';
import verify from '../utils/verify';
interface Form {
  phone: string;
  password: string;
}
@Component({
  name: 'forget',
  components: {
    DragVerfication,
    CustomDialog
  }
})
export default class Forget extends Vue {
  public $isSupportWebp: any;
  private checked: boolean = true;
  private dialogVisible: boolean = false;
  private userAgreement: string = userAgreement;
  private form: Form = {
    phone: '',
    password: '',
  };
  private check: Form = {
    phone: '',
    password: '',
  };
  private isLoading: boolean = false;
  private created(): void {
    if (this.$route.params.phone) {
      this.form.phone = this.$route.params.phone;
    }
  }
  private debouncePhone(): void {
    debounce(this.checkPhone, 1000, true);
  }
  private checkPhone(): boolean {
    let flag = true;
    if (!verify.phone(this.form.phone).success) {
      this.check.phone = '请输入正确的手机号码';
      flag = false;
    } else {
      this.check.phone = '';
    }
    return flag;
  }
  private checkPsw(): boolean {
    const psw = !!this.form.password;
    this.check.password = psw ? '' : '请输入密码';
    return psw;
  }
  private async reset(): Promise<any> {
    const phone = this.checkPhone();
    const psw = this.checkPsw();
    if (!phone || !psw) {
      return;
    }
    this.isLoading = true;
    const { data }  = await this.axios.post('/user/reset', this.form);
    this.isLoading = false;
    if (data.Success) {
      this.$message({
        message: '重置成功，即将跳转登录页...',
        type: 'success',
        duration: 1500,
        onClose: () => {
          this.$router.push({ name: 'login', params: { phone: this.form.phone }})
        }
      });
    } else {
      this.$message.error(data.Msg);
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/keyframes.scss'; 
  @import '../assets/scss/custom-variables.scss'; 
  .register {
    width: 100%;
    height: 100%;
    position: relative;
    .register-bg {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: -10;
      background-position: center 0;
      background-repeat: no-repeat;
      background-size: cover;
      zoom: 1;
      background-image: url(../assets/imgs/agent_bg.jpg);
    }
    .register-container {
      position: fixed;
      top: 50%;
      left: 50%;
      width: 480px;
      height: 450px;
      transform: translate3d(-50%, -50%, 0);
      background-color: #fff;
      border-radius: 10px;
      text-align: center;
      padding: 10px 0;
      box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, .1);
      z-index: 1;
      animation: login-fadein-down 1s;
      .login-logo {
        svg {
          width: 360px;
          height: 120px;
        }
      }
      .login-form {
        padding: 0 80px;
        .el-form-item {
          margin-bottom: 0;
        }
        input {
          border: none;
        }
        .login-form-input {
          position: relative;
          display: flex;
          border: 1px solid #d4d4d4;
          border-radius: 5px;
          height: 50px;
          margin-bottom: 25px;
          // &:not(:last-child) {
          //   margin-bottom: 20px;
          // }
          svg {
            margin: 15px 10px;
            color: #cdcdcd;
          }
          .el-form-item {
            position: relative;
            margin-bottom: 0;
            flex: 1;
            margin-top: 5px;
            font-size: 14px;
            &:before {
              content: '';
              width: 1px;
              height: 30px;
              border-left: 1px solid #f0f0f0;
              position: absolute;
              top: 4px;
              left: 3px;
              z-index: 1;
              display: block;
            }
          }
          .error-info {
            position: absolute;
            bottom: -20px;
            left: 0;
            font-size: 12px;
            color: #ff5252;
          }
        }
      }
      .about-password {
        padding: 0 80px;
        margin-top: 20px;
        text-align: left;
        div {
          div {
            &:last-child {
              text-align: right;
            }
          }
        }
      }
      .submit-btn {
        padding: 0 80px;
        margin-top: 20px;
        button {
          width: 100%;
          font-size: 18px;
        }
      }
      .user-agreement {
        font-size: 12px;
        padding: 20px 80px;
        .el-checkbox__label {
          font-size: 12px;
          padding-left: 5px;
          color: #333;
        }
        &:last-child {
          text-align: right;
          a {
            color: $main-color
          }
        }
      }
    }
    .copy-right {
      position: absolute;
      left: 50%;
      bottom: 100px;
      color: #fff;
      transform: translate3d(-50%, 0, 0);
      font-size: 12px;
      z-index: 1;
    }
    .video-wrap {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      video {
        width: 100%;
        height: 100%;
        z-index: -100;
        -o-object-fit: cover;
        object-fit: cover;
        right: 0;
        bottom: 0;
        background-size: cover;
        overflow: hidden;
      }
    }
    .user-agreement-content {
      width: 100%;
      height: 500px;
      overflow: auto;
      p, h4 {
        margin-bottom: 5px;
      }
      p {
        line-height: 1.8;
        font-size: 12px;
      }
      h4 {
        margin-top: 15px;
      }
      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(199, 200, 203, .3);
        -webkit-box-shadow: inset 0 0 6px rgba(199, 200, 203, .3);
        border-radius: 10px;
        background-color: #fff;
      }
      &::-webkit-scrollbar {
        width: 8px;
        background-color: #F5F5F5;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #ddd;
      }
    }
    .verifica-code {
      padding: 20px 80px 0 80px;
      input {
        border-right: none;
        &:hover, &:focus {
          border-color: #ddd;
        }
      }
      button {
        border: none;
        background-color: #ddd;
        position: relative;
        left: -4px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        height: 40px;
        &:hover, &:active, &:visited {
          color: #606266;
        }
      }
      .el-button {
        &:active, &:focus {
          color: #606266;
        }
      }
    }
  }
</style>