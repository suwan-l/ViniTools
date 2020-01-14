const config = require('../../utils/config.js');
const imgUrl = config.imgUrl;//图片地址
Page({
  data: {
    // banne图片轮播
    bannerImg: [
      {
        img: imgUrl+'201912/20191227092012305.jpg'
      },
      {
        img: imgUrl+'201912/20191227092012582.jpg'
      },
      {
        img: imgUrl+'201912/20191227092012305.jpg'
      },
      {
        img: imgUrl+'201912/20191227092012582.jpg'
      }
    ],

    //应用导航
    navList: [
      {
        id:1,
        listImg: imgUrl +"202001/20200102142112985.png",
        name:'市场健康评估'
      },
      {
        id: 2,
        listImg: imgUrl + "202001/20200102142112216.png",
        name: '门店360评估'
      },
      {
        id: 3,
        listImg: imgUrl + "202001/20200102142112216.png",
        name: '关键指标自检'
      },
      {
        id: 4,
        listImg: imgUrl + "202001/20200102142112216.png",
        name: '生命周期模型'
      },
      {
        id: 5,
        listImg: imgUrl + "202001/20200113164628578.png",
        name: 'MORE+'
      }
    ]
  },
  onLoad: function() {
  },

  // 点击应用跳转对应页面
  navigateToPage:function(e){
    var indexId = e.currentTarget.id;
    if (indexId == 1) {
      wx.navigateTo({
        url: '../PartnerEvaluate/PartnerEvaluate',
      })
    }
    else if (indexId == 2) {
      wx.navigateTo({
        url: '../SingleEvaluate/SingleEvaluate',
      })
    } 
    else if (indexId == 3){
      wx.navigateTo({
        url: '../Checking/Checking',
      })
    }
    else if (indexId == 4) {
      wx.navigateTo({
        url: '../LifeCycle/LifeCycle',
      })
    }
    else if (indexId == 5){
      wx.showLoading({ 
        title: '即将发布~', 
        mask: true ,
        duration: 1000,
      });
    }
  }
})