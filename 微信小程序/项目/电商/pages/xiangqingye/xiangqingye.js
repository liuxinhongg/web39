// pages/xiangqingye/xiangqingye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      img:[],
      rng:[],
      juan:[],
      juanurl:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.getStorage({
      key: 'id',
      success: function (edg) {
       var idd= that.getids(edg.data.id);
       var juans=edg.data.juan;
       var juanurl=edg.data.lianjie;
       that.setData({
         "juan":juans,
         "juanurl":juanurl
       })
      },
    });
  },
  getids(idd){
    var that=this;  
    wx.request({
      url: 'http://wumeili.top/w/website/findGoodsDetail',
      data: {
        "info": idd,
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        var rng = res.data.data.detail.tbk_item_info_get_response.results.n_tbk_item;
        console.log(rng);
        var img = rng[0].small_images.string;
        that.setData({
          "rng": rng,
          "img": img
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    });
  },
  
  fuzhi(x) {
    var that = this;
    var tu = x.currentTarget.dataset.tu;
    var titles = x.currentTarget.dataset.titles;
    var juans=that.data.juanurl;
    if (juans == undefined) {
      wx.showToast({
        title: '优惠券已被抢光',
        icon: 'success',
        duration: 2000
      })
    } else {
    wx.request({
      url: 'http://wumeili.top/w/client/checkTBKkl',
      data: {
        "text": titles,
        "url": "https:" + juans,
        "logo": tu
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (fpx) {
        console.log(fpx);
        var tkl = fpx.data.data.tbk_tpwd_create_response.data.model;
        that.setData({
          "tkl": tkl
        })
        var tkl1 = that.data.tkl;
        that.gettkl(tkl1)
      },

      fail: function (fpx) { },
      complete: function (fpx) { },
    })
    }
  },

  gettkl(tkl) {
    var that = this;
    wx.setClipboardData({
      data: tkl,
      success(res) {

        wx.getClipboardData({
          success(res) {
            console.log(res.data)
            wx.showModal({
              title: '省钱约消息',
              content: '复制成功，请前往淘宝领取优惠券',
            })
          }
        })
      }
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