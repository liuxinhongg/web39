//index.js
// import $$ from "../../utils/api"
// import ajax from "../../utils/otherapi"
var httpUtil = require('../../utils/otherapi')
//获取应用实例
const app = getApp()
Page({
  data: {
    bannerlist:[],
    goodsList:[],
    nameaa:'123',
  },
  onLoad: function () {
    wx.showToast({
      title: '加载数据',
      icon:'loading',
      duration:5000
    })
    // wx.request({
    //   url: 'https://www.wumeili.top/w/website/bannerList',
    //   method:'GET',
    //   data:'json',
    //   success:(res)=>{
    //     // console.log(res)
    //     this.setData({
    //       bannerlist:res.data.data
    //     })
    //   }
    // })
    httpUtil.httpGet("/w/website/bannerList",{},res=>{
        // console.log(res)
        this.setData({
          bannerlist:res.data
        })
    })
    // $$.bannerList(res=>{
    //   console.log(res);
    //   this.setData({
    //     bannerlist:res.data.data
    //   })
    //   console.log(this.data.nameaa)
    // })
    var that=this;
    httpUtil.httpGet("/w/website/findGoodsTypeList",{},res=>{
      console.log(res)
      that.setData({
        goodsList:res.data
      })
      wx.hideToast()
    })
    // wx.request({
    //   url: 'http://www.wumeili.top/w/website/findGoodsTypeList',
    //   method:'GET',
    //   success:function(res){
    //     console.log(res);
    //     that.setData({
    //       goodsList:res.data.data
    //     })
    //     wx.hideToast()
    //   }
    // })
  },
  jump(val){
    // console.log(val);
    let name=val.currentTarget.dataset.name;
    // wx.navigateTo({
    //   url: '../detail/index?name='+name,
    // })
    wx.setStorage({
      key: 'info',
      data: name,
    })
    wx.switchTab({
      url: '../logs/logs',
    })
  }
})
