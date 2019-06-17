var arrayincp = []//待办
var arraycp = []//已办
var array//待办
var array1//已办
var app = getApp()
Page({
  data: {
    array: arrayincp,
    array1: arraycp,
    condition1: true,
    condition2: false,
    input: false,
    nav1: "nav1",
    nav2: "nav2",
    nullHouse: true, //先设置隐藏
    background: app.globalData.background
  },
  //页面加载，提取保存数据
  onShow: function () {
    this.setData({
      
      background: app.globalData.background
    }),
      wx.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: app.globalData.background
      });
  },
  onLoad: function (options) {
    
    wx.getStorage({
      key: 'array',
      success: function (res) {
        var arraystore = res.data
        arrayincp = arraystore[0]
        arraycp = []
      }
    })
  },

  //点击待办
  click1: function (e) {

    this.setData({
      condition1: true,
      condition2: false,
      nav1: "nav1",
      nav2: "nav2",
      input: false
    })

  },

  //点击已办
  click2: function (e) {

    this.setData({
      condition1: false,
      condition2: true,
      nav1: "nav2",
      nav2: "nav1",
      input: false
    })

  },

  //待办变已办
  short: function (e) {
    console.log(this.data)
    var id = e.target.id
    var newitem = arrayincp[id]
    arrayincp.splice(id, 1) //待办删除对应的项
    arraycp.push(newitem)   //添加对应的项
    this.setData({
      array: arrayincp,
      array1: arraycp,
    })

  },
  //增加
  click: function (e) {
    this.setData({
      input: true,
      condition1: false,
      condition2: false,
      nav1: "nav2",
      nav2: "nav2",
    })
    console.log(this.data)
  },
  // 输入完成
  confirm: function (e) {
    arrayincp.push(e.detail.value)
    this.setData({
      array: arrayincp,
      input: false,
      condition1: true,
      condition2: false,
      nav1: "nav1",
      nav2: "nav2",
    })
  },

  //按钮输入完成
  bindFormsubmit: function (e) {
    if ((e.detail.value.textarea) != "") {
      arrayincp.push(e.detail.value.textarea)
      this.setData({
        array: arrayincp,
        input: false,
        condition1: true,
        condition2: false,
        nav1: "nav1",
        nav2: "nav2"
      })
    }
    else {
      var that = this;
      this.setData({
        nullHouse: false, //弹窗显示
      })
      setTimeout(function () {
        that.setData({ nullHouse: true })
      }, 1500)
    }
  },
  //清空任务
  clearTask: function () {
    this.setData({
      array1: null
    })
    arraycp = []  //注意arraycp不是data里面的值，他相当于全局的值
  },
  //卸载页面，储存数据
  onUnload: function () {
    var arraystore = [arrayincp, arraycp]
    wx.setStorage({
      key: "array",
      data: arraystore
    })
  },
})