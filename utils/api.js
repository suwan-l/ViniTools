import request from './request.js';
import config from './config.js';

const host = config.baseUrl;
module.exports = {
  // 获取手机号
  MobileDecrypt: function (data) {
    return request.postRequest(
      host + 'tool/user/decrypt_mobile',
      data,
      false,
    );
  },
  // 注册接口
  Register: function (data) {
    return request.postRequest(
      host + 'tool/user/register',
      data,
      false,
    );
  },
  // 基础业绩选项
  SetBasicsales: function(data){
    return request.getRequest(
      host + 'tool/basic_sales/set',
      data,
      true,
    );
  },
  // 基础业绩数据
  DetailBasicsales: function (data) {
    return request.getRequest(
      host + 'tool/basic_sales/detail',
      data,
      true,
    );
  },
  // 关键指标选项
  SetKeySales: function(data) {
    return request.getRequest(
      host + 'tool/key_sales/set',
      data,
      true,
    );
  },
  // 关键指标数据
  DetailKeySales: function (data) {
    return request.getRequest(
      host + 'tool/key_sales/detail',
      data,
      true,
    );
  }

}