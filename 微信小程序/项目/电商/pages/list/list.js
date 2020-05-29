// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "img":[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://wumeili.top/w/website/findGoodsTypeList',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        var skt=res.data.data;
        console.log(skt);
        that.setData({
          "img":skt
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  dianji(e){
    console.log(e)
    var name = e.currentTarget.dataset.name;
    wx.setStorage({
      key: 'info',
      data: name,
    })
    wx.navigateTo({
      url: '../tiaozhuan/tiaozhuan',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
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