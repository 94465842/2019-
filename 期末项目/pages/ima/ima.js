var app = getApp();
var src;
var background;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    viewBg: "white",
    src: app.globalData.src,
    background : app.globalData.background
  },

  onShow: function () {
    wx.setNavigationBarTitle({
      title: '背景图片'
    })
    
  },
  bule: function () {
    background = "#89dcf8"
    this.setData({
      background: background
    })
    
    app.globalData.background = background
    wx.setNavigationBarColor({
      frontColor: '#000000',//只能为000000或111111
      backgroundColor: app.globalData.background
    });
  },
  red: function () {
    background = "#F4A7B9"
    this.setData({
      background: background
    })
    app.globalData.background = background
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: app.globalData.background
    });
  },
  moren: function () {
    background = "#3197ed"
    this.setData({
      background: background
    })
    app.globalData.background = background
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: app.globalData.background
    });
  }
})