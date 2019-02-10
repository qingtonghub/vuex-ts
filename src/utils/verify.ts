/*
 * @Description: 验证工具
 * @Author: qingtong
 * @Date: 2019-02-10 20:09:22
 * @Last Modified by: qingtong
 * @Last Modified time: 2019-02-10 20:54:33
 */


/**
 * 自定义正则验证 regVerify(reg)
 * 验证正整数： verify.number(value)
 * 验证电话号码： verify.phone(val)
 * 验证电子邮件： verify.email(val)
 * 验证身份证： verify.idCard(val)
 * 验证日期： verify.date(val)
 * 验证保留两位小数的金额： verify.amout(val)
 * 保留两位小数：returnFloat（value）
 */
function checkDate(date: any): { success: boolean; errorMsg: string; } {
    const birthday = date.split('-');
    const year = Number(birthday[0]);
    const month = Number(birthday[1]);
    const day = Number(birthday[2]);
    const odd = !!(month % 2); // 奇数月份
    const msg = {
        success: true,
        errorMsg: ''
    };
    if (year === 0 || month === 0 || day === 0) {
        msg.success = false;
        msg.errorMsg = '年月日不能为0';
        return msg;
    }
    if (month > 12) {
        msg.success = false;
        msg.errorMsg = '月份不正确';
        return msg;
    } else if (month === 2) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        if (day > 29) {
            msg.success = false;
            msg.errorMsg = '闰年 2 月日期不大于 29 日';
        }
      } else {
        if (day > 28) {
            msg.success = false;
            msg.errorMsg = '非闰年 2 月日期不大于 28 日';
        }
      }
    } else if (odd && day > 30) {
        msg.success = false;
        msg.errorMsg = month + ' 月没有 ' + day + ' 日';
    } else if (!odd && day > 31) {
        msg.success = false;
        msg.errorMsg = month + ' 月没有 ' + day + ' 日';
    }
    return msg;
}
function checkParity(card: any) {
    const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    const reg18 = /^\d{17}([0-9]|X|x)$/;
    const len = card.length;
    if (len === 15) {
        let cardTemp = 0;
        let i;
        card = card.substr(0, 6) + '19' + card.substr(6, card.length - 6);
        for (i = 0; i < 17; i++) {
            cardTemp += card.substr(i, 1) * arrInt[i];
        }
        card += arrCh[cardTemp % 11];
    }
    if (reg18.test(card)) {
        let cardTemp = 0;
        let i = 0;
        let valnum;
        for (i = 0; i < 17; i++) {
            cardTemp += card.substr(i, 1) * arrInt[i];
        }
        valnum = arrCh[cardTemp % 11];
        if (valnum === card.substr(17, 1)) {
            return true;
        }
    }
    // debugger
    return false;
}
function checkCertificatesNo(value: string): any {
    const msg = {
        gender: Number(value.substr(16, 1)) % 2 === 0 ? 'male' : 'female', // 获取性别
        birDate: value.substr(6, 8).replace(/(.{4})(.{2})/, '$1-$2-'), // 获取生日信息
        success: true,
        errorMsg: ''
    };
    const birthVerify = checkDate(msg.birDate);
    const parity = checkParity(value);
    if (!birthVerify.success) {
        // 身份证日期
        msg.success = false;
        msg.errorMsg = '身份证' + birthVerify.errorMsg;
    } else if (!parity) {
        // 身份证校验位验证
        msg.success = false;
        msg.errorMsg = '身份证校验位不正确';
    }
    return msg;
}
function returnFloat(val: any): any {
    let value: any = Math.round(parseFloat(val) * 100) / 100;
    const xsd = value.toString().split('.');
    if (xsd.length === 1) {
        value = value.toString() + '.00';
        return value;
    }
    if (xsd.length > 1) {
        if (xsd[1].length < 2) {
        value = value.toString() + '0';
        }
        return value;
    }
}
function regVerify(reg: any ) {
    return (val: any) => {
        return {
            success: reg.test(val),
            errorMessage: reg.test(val) ? '匹配' : '不匹配'
        };
    };
}
const verify = {
    number: regVerify(/^[0-9]*$/),
    phone: regVerify(/^[0-9]{11}$/),
    email: regVerify(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/),
    amout: regVerify(/^\d+\.?\d{0,2}$/),
    idCard: checkCertificatesNo,
    date: checkDate,
    returnFloat
};

export default verify;


