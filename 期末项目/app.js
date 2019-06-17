//app.js
//设定默认工作时间和休息时间
const defaultTime = {
  defaultWorkTime: 25,
  defaultRestTime: 5
}
var app = getApp()
var fsrc = ""
var backcolor = "#3197ed"
var background
//这里的逻辑是定义小程序的变量工作时间和休息时间如果是之前已经存贮的数据则保留，否则设定为默认工作时间和休息时间
App({
  onLaunch: function() {
    let workTime = wx.getStorageSync('workTime')
    let restTime = wx.getStorageSync('restTime')
    if (!workTime) {
      wx.setStorage({
        key: 'workTime',
        data: defaultTime.defaultWorkTime
      })
    }
    if (!restTime) {
      wx.setStorage({
        key: 'restTime',
        data: defaultTime.defaultRestTime
      })
    }
    
  },
 
  globalData: {
    src: fsrc,
    background : backcolor
    
  }

})
