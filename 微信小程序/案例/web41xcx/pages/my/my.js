// pages/goodsList/goosList.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
      item:{
        title:"我的主页"
      },
      names:[
        {name:"哈哈"}
      ],
      markers: [{
        iconPath: "/img/dt.png",
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 50,
        height: 50
      }]
   
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
    var that = this;
    wx.getLocation({
      success:function(res){
        console.log(res)
        that.setData({
          "markers[0].longitude":res.longitude,
          "markers[0].latitude":res.latitude
        })
      }
    })
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