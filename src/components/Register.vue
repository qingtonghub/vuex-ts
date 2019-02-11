/*
 * @Description: 注册组件
 * @Author: QingTong
 * @Date: 2019-01-25 15:17:02
 * @Last Modified by: qingtong
 * @Last Modified time: 2019-02-11 20:54:35
 */
<template>
  <section class="register" ref="registerContainer">
    <div class="register-container">
      <div class="login-logo">
        <svg-icon iconClass="logo"></svg-icon>
      </div>
      <div class="login-form">
        <el-form ref="form" :model="form">
          <div class="login-form-input">
            <svg-icon iconClass="id"></svg-icon>
            <el-form-item>
              <el-input placeholder="请输入手机号" v-model="form.phone" autofocus></el-input>
            </el-form-item>
            <p class="error-info"></p>
          </div>
          <div class="login-form-input">
            <svg-icon iconClass="password"></svg-icon>
            <el-form-item>
              <el-input type="password" placeholder="设置密码" v-model="form.password"></el-input>
            </el-form-item>
            <p class="error-info"></p>
          </div>
          <div class="login-form-input">
            <svg-icon iconClass="password"></svg-icon>
            <el-form-item>
              <el-input type="password" placeholder="确认密码"></el-input>
            </el-form-item>
            <p class="error-info"></p>
          </div>
        </el-form>
      </div>
      <drag-verfication></drag-verfication>
      <div class="verifica-code">
        <el-row>
          <el-col :span="16">
            <el-input placeholder="请输入验证码"></el-input>
          </el-col>
          <el-col :span="8">
            <el-button>发送验证码</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="submit-btn">
        <el-button type="primary">注 册</el-button>
      </div>
      <div class="user-agreement">
        <el-row>
          <el-col :span="12">
            <el-checkbox v-model="checked">同意<a href="javascript:;" @click="dialogVisible = true">《优客逸家服务条款》</a></el-checkbox>
          </el-col>
          <el-col :span="12">
            已有账号? 现在就 <router-link to="/login">登录</router-link>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- <div class="copy-right">{{REGISTER_COPYRIGHT}}</div>
    <div v-if="VIDEO_BACKGROUND" class="video-wrap">
      <video autoplay loop muted class="star-inserted" :poster="videoPath.snapshots">
        <source type="video/mp4" :src="videoPath.mp4">
        <source type="video/ogv" :src="videoPath.ogv">
        <source type="video/webm" :src="videoPath.webm">
      </video>
    </div>-->
    <custom-dialog title="网站服务条款" @close="dialogVisible = false;" :dialogVisible="dialogVisible" :closeOnClickModal="false" dialogWidth="600px">
      <div class="user-agreement-content" v-html="userAgreement"></div>
    </custom-dialog> 
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DragVerfication from '@/components/base/DragVerfication.vue';
import CustomDialog from '@/components/base/CustomDialog.vue';
import { userAgreement } from '@/config/config';
interface Form {
  phone: string;
  password: string;
}
@Component({
  components: {
    DragVerfication,
    CustomDialog
  }
})
export default class Register extends Vue {
  public $isSupportWebp: any;
  private checked: boolean = false;
  private dialogVisible: boolean = false;
  private userAgreement: string = userAgreement;
  private form: Form = {
    phone: '',
    password: '',
  };
}
</script>

<style lang="scss">
  @import '../assets/scss/keyframes.scss'; 
  @import '../assets/scss/custom-variables.scss'; 
  .register {
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
    background-image: url(../assets/imgs/agent_bg.jpg);
    .register-container {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 480px;
      height: 600px;
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
          &:not(:last-child) {
            margin-bottom: 30px;
          }
          svg {
            width: 30px;
            height: 30px;
            margin: 10px;
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