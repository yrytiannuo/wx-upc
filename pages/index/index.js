//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    floorList: [
      {
        cardimg: 'http://39.107.78.205/static/1.jpg',
        title: '南教',
        detail: '进入南教',
      }, {
        cardimg: 'http://39.107.78.205/static/2.jpg',
        title: '南唐',
        detail: '进入南唐',
      }, {
        cardimg: 'http://39.107.78.205/static/3.jpg',
        title: '西环',
        detail: '进入西环',
      }, {
        cardimg: 'http://39.107.78.205/static/4.jpg',
        title: '东廊',
        detail: '进入东廊',
      },
    ],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  toDetail: function(e){
    var index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/detail/detail?id='+index,
    })
  },
  onGotUserInfo: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
  },
})
