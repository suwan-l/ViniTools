//app.js
App({
  onLaunch: function () {
    // 登录
    // wx.login({
    //   success: res => {
    //     if (res.code) {
    //       // 登录接口地址
    //       wx.request({
    //         url: 'https://activity.vinistyle.cn/tool/user/login',
    //         data: {
    //           code: res.code
    //         },
    //         method: 'POST',
    //         header: {
    //           "content-type": "application/x-www-form-urlencoded"
    //         },
    //         success: function (res) {
    //           // 本地储存登录后数据
    //           wx.setStorageSync('user_info', res.data.data)
    //           // 如果未注册跳转到注册页
    //           if (res.data.data.status!=1) {
    //             wx.redirectTo({
    //               url: '../register/register',
    //             })
    //           }
    //         }
    //       })
    //     }
    //   }
    // })


    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  globalData: {
    userInfo: null,
  }
})