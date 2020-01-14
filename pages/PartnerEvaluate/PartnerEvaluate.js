Page({
  data: {
    dx:"", //店效
    dx_score: "",//店效得分

    ds:"",//店数
    ds_score: "",//店数得分

    kd:"",//三万以下店数
    kd_score: "",//三万以下店数得分

    zqkd: "", //周期内净增长店数
    zqkd_score: '',//周期内净增长店数得分

    hy: "",//组织会议次数
    hy_score: "",//组织会议得分

    yyjl: "",//运营经理数量
    yyjl_score: "",//运营经理得分

    rankSum1:"",
    rankSum2:"",
    rankSum:"",
    stateText: '', //健康状态
  },
  //店效输入的值
  keyword_1: function(e) {
    var kword1 = Number(e.detail.value);
    if (kword1<30000){
      this.data.dx = 0;
    } 
    else if (kword1 >= 30000 && kword1 < 50000){
      this.data.dx = 2
    } 
    else if (kword1 >= 50000 && kword1 < 70000){
      this.data.dx = 6
    } 
    else if (kword1 >= 70000 && kword1 < 90000){
      this.data.dx = 9
    } 
    else if(kword1 >= 90000){
      this.data.dx = 10
    }
    // 店效得分
    this.data.dx_score = parseFloat(this.data.dx * 0.4);
    this.setData({
      kword1: kword1
    });
  },
  //店数输入的值
  keyword_2: function (e) {
    var kword2 = e.detail.value;
    if (kword2 < 3) {
      this.data.ds = 0
    } 
    else if (kword2 >= 3 && kword2 < 5) {
      this.data.ds = 2
    } 
    else if (kword2 >= 5 && kword2 < 7) {
      this.data.ds = 6
    } 
    else if (kword2 >= 7 && kword2 < 10) {
      this.data.ds = 9
    } 
    else if (kword2 >= 10) {
      this.data.ds = 10
    }
    // 店数得分
    this.data.ds_score = parseFloat(this.data.ds * 0.1);
    this.setData({
      kword2: kword2
    });
  },
  //3万以下店数输入的值
  keyword_3: function (e) {
    var kword3 = e.detail.value;
    if (kword3/this.data.kword2 == 0) {
      this.data.kd = 10;
    } 
    else if (kword3 / this.data.kword2 > 0 && kword3 / this.data.kword2 < 0.3) {
      this.data.kd = 5;
    } 
    else if (kword3 / this.data.kword2 >= 0.3 && kword3 / this.data.kword2 <= 0.5) {
      this.data.kd = 2;
    } 
    else if (kword3 / this.data.kword2 >0.5) {
      this.data.kd = 0;
    } 
    // 3万以下店数得分
    this.data.kd_score = parseFloat(this.data.kd * 0.2);
    this.setData({
      kword3: kword3
    });
  },
  //周期内开店数输入的值
  keyword_4: function (e) {
    var kword4 = e.detail.value;
    this.setData({
      kword4: kword4
    });
  },
  //周期内关店数输入的值
  keyword_5: function (e) {
    var kword5 = e.detail.value;
    this.setData({
      kword5: kword5
    });
  },
  //组织会议次数输入的值
  keyword_6: function (e) {
    var kword6 = e.detail.value;
    if(kword6 >=3 ){
      this.data.hy = 10;
    }else{
      this.data.hy = 0;
    }
    // 组织会议次数得分
    this.data.hy_score = parseFloat(this.data.hy * 0.375);
    this.setData({
      kword6: kword6
    });
  },
  //运营经理数量输入的值
  keyword_7: function (e) {
    var kword7 = e.detail.value;
    var dsnum = parseInt(this.data.kword2 / 8);
    if (kword7 >= dsnum) {
      this.data.yyjl = 10;
    } else {
      this.data.yyjl = 0;
    }
    // 运营经理数量得分
    this.data.yyjl_score = parseFloat(this.data.yyjl * 0.626);
    this.setData({
      kword7: kword7
    });
  },

  // 点击提交跳转
  submitBtn: function (e) {
    if (this.data.kword1 == null || this.data.kword2 == null || this.data.kword3 == null || this.data.kword4 == null || this.data.kword5 == null || this.data.kword6 == null || this.data.kword7 == null ) {
      wx.showToast({ //显示消息提示框  此处是提升用户体验的作用
        title: '输入不能为空',
        icon: 'loading',
        mask: true,
        duration: 500,
      });
    } else {
      // 净增长店数
      if (this.data.kword4 - this.data.kword5 == 0) {
        this.data.zqkd = 0;
      }
      else if (this.data.kword4 - this.data.kword5 >= 1 && this.data.kword4 - this.data.kword5 <= 3) {
        this.data.zqkd = 5;
      }
      else if (this.data.kword4 - this.data.kword5 > 3) {
        this.data.zqkd = 10;
      }
      else if (this.data.kword4 - this.data.kword5 < 0) {
        this.data.zqkd = -10;
      }
      //净增长店数得分
      this.data.zqkd_score = parseFloat(this.data.zqkd * 0.3);

      //（店效得分 + 店数得分 + 3万一下店数得分 + 净增长店数得分）*0.6
      this.data.rankSum1 = (this.data.dx_score + this.data.ds_score + this.data.kd_score + this.data.zqkd_score) * 0.6
      //（组织会议次数得分+运营经理数量得分）*0.4
      this.data.rankSum2 = (this.data.hy_score + this.data.yyjl_score) * 0.4 
      //计算总得分
      var rankScore = (this.data.rankSum1 + this.data.rankSum2);
      this.data.rankSum = Math.round(rankScore * 10) / 10;

      // 健康状态
      if (this.data.rankSum > 8.5) {
        this.data.stateText = '优秀'
      }
      else if (this.data.rankSum >= 7 && this.data.rankSum <= 8.5) {
        this.data.stateText = '健康'
      }
      else if (this.data.rankSum >= 6 && this.data.rankSum < 7) {
        this.data.stateText = '亚健康'
      }
      else if (this.data.rankSum >= 4 && this.data.rankSum < 6) {
        this.data.stateText = '不健康'
      }
      else if (this.data.rankSum < 4) {
        this.data.stateText = '危险'
      }
      wx.navigateTo({
        url: '../PartnerDetail/PartnerDetail',
      });
    }

    wx.setStorage({
      key: 'textArray',
      data: {
        kword1: this.data.kword1,
        kword2: this.data.kword2,
        kword3: this.data.kword3,
        kword4: this.data.kword4,
        kword5: this.data.kword5,
        kword6: this.data.kword6,
        kword7: this.data.kword7,
        rankSum:this.data.rankSum,
        stateText: this.data.stateText,
      },
    })
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})