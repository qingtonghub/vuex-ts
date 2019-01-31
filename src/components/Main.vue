/*
 * @Description: 主组件
 * @Author: QingTong
 * @Date: 2019-01-25 14:39:46
 * @Last Modified by: QingTong
 * @Last Modified time: 2019-01-25 15:12:38
 */

<template>
  <div>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  @Component
  export default class Main extends Vue {

  }
</script>

