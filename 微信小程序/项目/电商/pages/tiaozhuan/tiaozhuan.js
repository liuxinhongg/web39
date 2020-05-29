// pages/tiaozhuan/tiaozhuan.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
      rng:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that=this;
      wx.getStorage({
        key: 'info',
        success: function(res) {
          that.getname(res.data)
          console.log(res.data)
        },
      })
      
  },
  getname(info){
    var that=this;
    wx.request({
      url: 'http://wumeili.top/w/website/findGoodsList',
      data: {
        "info": info,
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        var xianjia = [];
        var juan = [];
        var skt = res.data.data.tbk_dg_material_optional_response.result_list.map_data;
        console.log(skt);
        for (var i = 0; i < skt.length; i++) {
          var x = skt[i].coupon_amount;
          if (x == undefined) {
            x = 0
          }
          juan.push(x)
        }
        for (var i = 0; i < skt.length; i++) {
          var x = skt[i].coupon_amount;
          if (x == undefined) {
            x = 0
          }
          var jisuan = skt[i].zk_final_price - x;
          jisuan = jisuan.toFixed(2);
          xianjia.push(jisuan);
        }
        that.setData({
          "rng": skt,
          "xianjia": xianjia,
          "juan": juan,
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })




  },
  fuzhi(x) {
    var that = this;
    var tu = x.currentTarget.dataset.tu;
    var titles = x.currentTarget.dataset.titles;
    var juan = x.currentTarget.dataset.juan;
    console.log(x)
    if(juan==undefined){
      wx.showToast({
        title: '优惠券已被抢光',
        icon: 'success',
        duration: 2000
      })
    }else{
    wx.request({
      url: 'http://wumeili.top/w/client/checkTBKkl',
      data: {
        "text": titles,
        "url": "https:" + juan,
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


  dianji(e) {
    console.log(e)
    var ids = e.currentTarget.dataset;
    wx.setStorage({
      key: 'id',
      data: ids
    })
    wx.navigateTo({
      url: '../xiangqingye/xiangqingye',
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