const api = require('../../utils/api.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {},
  /* 生命周期函数--监听页面加载*/
  onLoad: function(options) {
    var that = this;
    var detailInfo = wx.getStorageSync('detailInfo');
    that.setData({
      store_id: detailInfo.store_id,
      date_range: detailInfo.date_range
    })
    // 关键指标数据接口
    api.DetailKeySales({
      // data
      store_id: that.data.store_id,
      date_range: that.data.date_range
    }).then(res => {
      that.setData({
        item: res.data,
        item1: res.data.current, //当前值
        item2: res.data.last_year, //去年同期值
        item3: res.data.guide, //参考值
        item4: res.data.diff_last_year, //去年同期值差异，百分率
        item5: res.data.diff_guide, //参考值差异率，百分比
      })
    }).catch(err => {
      // 处理出错情况
      console.log(err)
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})