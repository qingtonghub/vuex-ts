/*
 * @Description: 滑块拖动验证组件
 * @Author: qingtong
 * @Date: 2019-02-11 15:26:04
 * @Last Modified by: qingtong
 * @Last Modified time: 2019-02-11 15:32:43
 */

<template>
  <section class="drag-verfication">
    <div class="drag-verfication-wrapper" onselectstart="return false" ref="dragBox">
      <div class="drag-bg" ref="dragBg"></div>
      <div class="drag-text" ref="dragText">{{dragText}}</div>
      <div class="drag-slider" ref="dragSlider"><i class="el-icon-d-arrow-right"></i></div>
    </div>
  </section>
</template>

<script lang='ts'>
  import { Component, Vue, Prop } from 'vue-property-decorator';
  @Component
  export default class DragVerfication extends Vue {
  public $refs!: {
    [key: string]: any,
    dragSlider: HTMLFormElement,
    dragBox: HTMLFormElement,
    dragText: HTMLFormElement
    dragBg: HTMLFormElement
  };
  @Prop({ type: String, default: '请拖动滑块至最右端完成验证' })
  private dragText: any;
  // 解锁需要滑动的距离
  private successMoveDistance: number = 0;
  // 鼠标按下时的位置
  private downX: number = 0;
  // 是否解锁成功
  private isSuccess: boolean = false;

  public mounted(): void {
    this.successMoveDistance = this.$refs.dragBox.offsetWidth - this.$refs.dragSlider.offsetWidth;
    this.$refs.dragSlider.onmousedown = this.mousedownHandler;
  }

    // 鼠标按下事件
  private mousedownHandler(e: any): void {
    const $e = e || window.event || e.which;

    this.$refs.dragBg.style.transition = '';
    this.$refs.dragSlider.style.transition = '';
    this.downX = $e.clientX;

    document.onmousemove = this.mousemoveHandler;
    document.onmouseup = this.mouseupHandler;
  }

  // 获取鼠标当前需要移动多少距离
  private getOffsetX(offset: number, min: number, max: number): number {
    if (offset < min) {
      offset = min;
    } else if (offset > max) {
      offset = max;
    }
    return offset;
  }

  // 鼠标移动事件
  private mousemoveHandler(e: any): void {
    const $e: any = e || window.event || e.which;
    const moveX: number = $e.clientX;
    const offsetX: number = this.getOffsetX(moveX - this.downX, 0, this.successMoveDistance);

    this.$refs.dragBg.style.width = offsetX + 'px';
    this.$refs.dragSlider.style.left = offsetX + 'px';

    if (offsetX === this.successMoveDistance) {
      this.sliderSuccess();
    }

    $e.preventDefault();
  }

  // 鼠标松开事件
  private mouseupHandler(e: any): void {
    if (!this.isSuccess) {
      this.$refs.dragBg.style.width = 0 + 'px';
      this.$refs.dragSlider.style.left = 0 + 'px';
      this.$refs.dragBg.style.transition = 'width .5s linear';
      this.$refs.dragSlider.style.transition = 'left .5s linear';
    }

    document.onmousemove = null;
    document.onmouseup = null;
  }

  // 滑块解锁成功
  private sliderSuccess(): void {
    this.isSuccess = true;
    this.$refs.dragText.innerHTML = '验证通过';
    this.$refs.dragText.style.color = '#fff';
    this.$refs.dragBg.style.backgroundColor = '#7ac23c';
    this.$refs.dragSlider.className = 'drag-slider active';
    this.$refs.dragSlider.style.border = '1px solid #7ac23c';

    // 更换图标
    this.$refs.dragSlider.children[0].className = 'el-icon-circle-check';

    // 滑动成功时，移除鼠标按下事件和鼠标移动事件
    this.$refs.dragSlider.onmousedown = null;
    document.onmousemove = null;
  }
}
</script>

<style lang="scss">
  .drag-verfication {
    position: relative;
    width: 320px;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    margin-top: 20px;
    .drag-verfication-wrapper {
      width: 100%;
      height: 100%;
      background-color: #dbe1e8;
      .drag-bg {
        position: absolute;
        left:0;
        top:0;
        width: 40px;
        height: 40px;
        background-color: #7ac23c;
      }
      .drag-text {
        position: absolute;
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #444;
        text-align: center;
      }
      .drag-slider {
        position: absolute;
        left: 0;
        top: 0;
        width: 50px;
        height: 40px;
        border: 1px solid #dbe1e8;
        background: #fff;
        text-align: center;
        cursor: move;
      }
      .drag-slider > i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        font-size: 18px;
      }
      .drag-slider.active > i {
        color: #7ac23c;
      }
    }
  }
</style>