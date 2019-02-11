/*
 * @Description: vgIcon公共组件，用于引用svg格式的图标，全局注册
 * @Author: qingtong
 * @Date: 2019-02-11 16:36:11
 * @Last Modified by: qingtong
 * @Last Modified time: 2019-02-11 19:38:12
 */

<template>
  <!-- <img :src="logoSvg"/> -->
  <svg :class='svgClass' aria-hidden='true'>
    <use :xlink:href='iconName'></use>
  </svg>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  // const ctx: any = require.context('../../assets/svg-icons', true, /\.svg$/);
  // function getBaseName(path: any) {
  //   if (!path) {
  //     return false;
  //   }
  //   path = path.split('/');
  //   const ret = path[path.length - 1];
  //   return ret.replace(/\.\w*/, '');
  // }
  // function getIconsMap(ctx: any) {
  //   return ctx.keys().reduce((icons: any, req: any) => {
  //     const name = getBaseName(req);
  //     icons[name] = ctx(req);
  //     return icons;
  //   }, {});
  // }
  // const ICONS_MAP = getIconsMap(ctx);

  @Component({
    name: 'SvgIcon'
  })
  export default class SvgIcon extends Vue {
    @Prop({ type: String, required: true})
    private iconClass: string;
    @Prop({ type: String})
    private className: string;

    get iconName(): string {
      return `#icon-${this.iconClass}`;
    }
    get svgClass(): string {
      if (this.className) {
        return `svg-icon ${this.className}`;
      }
      return `svg-icon`;
    }
    // get logoSvg(): any {
    //   return ICONS_MAP[this.iconClass];
    // }
  }
</script>

<style scoped lang='scss'>
  .svg-icon {
    width: 20px;
    height: 20px;
    fill: currentColor;
    overflow: hidden;
  }
</style>