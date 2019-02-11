/*
 * @Description: 二次封装ElementUI中的Dialog组件
 * @Author: qingtong
 * @Date: 2019-02-11 20:50:34
 * @Last Modified by: qingtong
 * @Last Modified time: 2019-02-11 20:52:09
 */

<template>
  <el-dialog :title="title"
             :visible="dialogVisible"
             :width="dialogWidth"
             :close-on-click-modal="closeOnClickModal"
             :lock-scroll="false"
             @close="handleClose"
             top="0">
    <slot></slot>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" :loading="loading" @click="handleConfirmEvent">{{confirmButtonText}}</el-button>
      <el-button @click="handleClose">取消</el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component
export default class CustomDialog extends Vue {
  @Prop({ type: String, default: '提示' })
  private title: string;

  @Prop({ type: Boolean, default: false })
  private dialogVisible: boolean;

  @Prop({ type: String, default: '400px' })
  private dialogWidth: string;

  @Prop({ type: Boolean, default: true })
  private closeOnClickModal: boolean;

  @Prop({ type: Boolean, default: false})
  private loading: boolean;

  @Prop({ type: String, default: '确定'})
  private confirmButtonText: string;

  private handleClose(value: any): void {
    this.$emit('close', value);
  }
  // 点击确定事件
  private handleConfirmEvent(): void {
    this.$emit('confirmEvent');
    // this.$emit('close');
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.el-dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  background: #fff;
  border-radius: 5px;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  padding: 0 20px;
  .el-dialog__header {
    height: 50px;
    line-height: 55px;
    padding: 0;
    border-bottom: 1px solid #f2f2f2;
    .el-dialog__title {
      font-weight: 600;
    }
    .el-dialog__headerbtn {
      top: 16px;
    }
  }
  .el-dialog__body {
    font-size: 15px;
    padding: 10px 0;
  }
  .el-dialog__footer {
    padding-right: 0;
    .dialog-footer {
      button {
        padding: 8px 12px;
      }
    }
  }
}
</style>
