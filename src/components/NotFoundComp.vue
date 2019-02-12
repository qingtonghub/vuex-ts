/*
 * @Description: 404
 * @Author: qingtong
 * @Date: 2019-02-12 20:22:56
 * @Last Modified by: qingtong
 * @Last Modified time: 2019-02-12 20:24:57
 */

<template>
  <section>
    <main class="main">
      <section class="main-wrapper">
        <el-row class="main-wrapper-content">
          <el-col :span="12" class="bg-image">
            <img :src="bgImage" alt="404">
          </el-col>
          <el-col :span="12" class="info-404">
            <p class="name-404">404</p>
            <p class="desc">抱歉, 您访问的页面不存在</p>
            <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
          </el-col>
        </el-row>
      </section>
    </main>
  </section>
</template>

<script lang="ts">
  import { Component, Vue} from 'vue-property-decorator';
  @Component({
    name: 'notfoundcomp',
  })
  export default class NotFoundComp extends Vue {
    private bgImage: string = require('../assets/imgs/404.png');
  }
</script>

<style lang="scss">
  .main {
    .main-wrapper {
      width: 100%;
      height: 100%;
      .main-wrapper-content {
        padding-top: 150px;
        .bg-image {
          text-align: right;
        }
        .info-404 {
          margin-top: 120px;
          .name-404 {
            font-size: 60px;
            color: #444;
            margin-bottom: 20px;
          }
          .desc {
            font-size: 18px;
            color: #666;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
</style>