//logs.js
import $$ from "../../utils/api"
var httpUtil = require('../../utils/otherapi')
Page({
  data: {
    aa:'',
    searchlist:[],
    juan:[],
    juanurl:[]
  },
  onLoad: function () {
    // console.log(this.data.aa)
    let that=this
   wx.getStorage({
     key: 'info',
     success(res){
      //  console.log(res.data)
       that.getgoodslist(res.data)
     }
   })
  },
  getgoodslist(val){
    let that=this;
    console.log(val);
    httpUtil.httpGet("/w/website/findGoodsList",
    {
      info:val,
      platId:'d0a500ecf8ab41aa9ffe8e18ac6419e1',
      pageNo:1
    },
    res=>{
      console.log(res);
      let xianjia=[];
      let juan=[];
      let sortFL=[]
      sortFL=res.data.tbk_dg_material_optional_response.result_list.map_data;
      // if(!res.data.error_response.sub_code){
      //   sortFL=res.data.tbk_dg_material_optional_response.result_list.map_data;
      // }else{
      //   sortFL="暂无数据"
      // }
      
      //  this.setData({
      //   searchlist:res.data.data.tbk_dg_material_optional_response.result_list.map_data
      // })
      for (var i =0; i < sortFL.length; i++) {
        var x=sortFL[i].coupon_amount;
        if (x==undefined) {
          x=0;
        }
        juan.push(x)
        for (var i = 0; i < sortFL.length; i++) {
          var x = sortFL[i].coupon_amount;
          if (x == undefined) {
            x = 0
          }
          var jisuan = sortFL[i].zk_final_price - x;
          jisuan = jisuan.toFixed(2);
          xianjia.push(jisuan);
        }
        that.setData({
          "searchlist": sortFL,
          "xianjia": xianjia,
          "juan": juan,
        })
        console.log(this.data.searchlist)
      }
    })

  },
  getcoupon(vou){
    var that=this;
    var tu = vou.currentTarget.dataset.tu;
    var titles = vou.currentTarget.dataset.titles;
    var juan = vou.currentTarget.dataset.juan;
    if (juan==undefined) {
      wx.showToast({
        title: '优惠券已被抢光',
        icon: 'success',
        duration: 2000
      })
    }else{
      httpUtil.httpGet("/w/client/checkTBKkl",
        {
          "text": titles,
          "url":"https:"+juan,
          "logo":tu
        },
        res=>{
          console.log(res);
          var tkl=res.data.data.tbk_tpwd_create_response.data.model;
          that.setData({
            "tkl": tkl
          })
          var tkl1=that.data.tkl;
          that.gettkl(tkl1)
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
  // getcoupon(vou){
  //   console.log(vou)
  //   var tu = vou.currentTarget.dataset.tu;
  //   var titles = vou.currentTarget.dataset.titles;
  //   var juan = vou.currentTarget.dataset.juan;
  //   $$.getCoupon({
  //     "text": titles,
  //     "url":"https:"+juan,
  //     "logo":tu
  //   },res=>{
  //     console.log(res);
  //   })
  // }
})
