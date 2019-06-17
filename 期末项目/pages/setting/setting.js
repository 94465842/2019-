var app = getApp();
Page({
  data: {
    background: app.globalData.background
  },
  onShow: function() {
    wx.setNavigationBarTitle({
      title: '设置'
    })
    this.setData({
    	workTime: wx.getStorageSync('workTime'),
    	restTime: wx.getStorageSync('restTime'),
      background: app.globalData.background
    }),
      wx.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: app.globalData.background
      });
  },
  changeWorkTime: function(e) {
  	wx.setStorage({
  		key: 'workTime',
  		data: e.detail.value
  	})
  },
  changeRestTime: function(e) {
  	wx.setStorage({
  		key: 'restTime',
  		data: e.detail.value
  	})
  }
})
