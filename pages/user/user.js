var app = getApp();

Page({
  data: {
    //text:"这是一个页面"
  },
  onGetUserInfo: function (e) {
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },
  onLoad: function (option) {
    // //页面初始化，options为页面跳转所带来的参数
    // if (app.globalData.userinfo == null){
    //   // wx.redirectTo({
    //   //   url: '../login/login',
    //   // })
    // }
    // else{
    //   this.setData({ username: app.globalData.userinfo.username})
    // }
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
  onReady: function () {
    //页面渲染完成
  },
  onShow: function () {
    //页面显示
  },
  onHide: function () {
    //页面隐藏
  },
  onUnload: function () {
    //页面关闭
  }

})