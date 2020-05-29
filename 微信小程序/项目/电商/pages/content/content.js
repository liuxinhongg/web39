// pages/content/content.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    subject:[],
    tkl:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
      wx.request({
        url: 'http://wumeili.top/w/website/bannerList',
        data: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          var img=res.data.data;
          that.setData({
            "banners":img
          })
        },
        fail: function(res) {},
        complete: function(res) {},
      });
      wx.request({
        url: 'http://wumeili.top/w/website/findGoodsList',
        data: {
          "info":"女装"
        },
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(skt) {
          
          var xianjia = [];
          var juan=[];
          var rng = skt.data.data.tbk_dg_material_optional_response.result_list.map_data;
          // console.log(rng[0].coupon_start_fee)
          console.log(rng)
          for (var i = 0; i < rng.length; i++) {
            var x = rng[i].coupon_amount;
            if (x == undefined) {
              x = 0
            }
            juan.push(x)
          }
          for(var i=0;i<rng.length;i++){
            var x = rng[i].coupon_amount;
            if (x == undefined) {
              x = 0
            }
            var jisuan = rng[i].zk_final_price - x;
            jisuan = jisuan.toFixed(2);
            xianjia.push(jisuan);
          }
          

          that.setData({
            "subject":rng,
            "xianjia":xianjia,
            "juan":juan,
          })
        },
        fail: function(skt) {},
        complete: function(skt) {},
      })
  },
  dianji(e){
    console.log(e)
    var ids = e.currentTarget.dataset;
    wx.setStorage({
      key: 'id',
      data: ids
    })
    wx.navigateTo({
      url: '../xiangqingye/xiangqingye',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  fuzhi(x){
    var that=this; 
    var tu = x.currentTarget.dataset.tu;
    var titles = x.currentTarget.dataset.titles;
    var juan = x.currentTarget.dataset.juan;
   console.log(x)
    wx.request({
      url: 'http://wumeili.top/w/client/checkTBKkl',
      data: {
        "text": titles,
        "url":"https:"+juan,
        "logo":tu
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (fpx) { 
        console.log(fpx);
        var tkl = fpx.data.data.tbk_tpwd_create_response.data.model;
        that.setData({
          "tkl":tkl
        })
        var tkl1=that.data.tkl;
        that.gettkl(tkl1)
      },
      
      fail: function (fpx) { },
      complete: function (fpx) { },
    })
  },
  
  gettkl(tkl){
    var that=this;
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
  sss(vp){
    console.log(vp);
    var neirong=vp.detail.value;
    console.log(neirong);
    
    wx.setStorage({
      key: 'info',
      data: neirong,
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
