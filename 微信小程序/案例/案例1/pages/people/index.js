const order = ['demo1', 'demo2', 'demo3']
Page({
  /**
   * 页面的初始数据
   */
  data: {
    longitude:'',
    latitude:'',
    markers:[{
      iconPath: "../../images/people-active.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50,
    }],
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    toView: 'green',
    item: {
      index: 0,
      msg: '这是一个template',
      time: '2016-09-15'
    },
  },
  onLoad(){
    wx.getLocation({
      success:(res)=>{
        console.log(res);
        this.setData({
          longitude:res.longitude,
          latitude:res.latitude,
          "markers[0].longitude":res.longitude,
          "markers[0].latitude":res.latitude,
        })
      }
    })
  },
  upper(e) {
    console.log(e)
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