let APICONFIG="https://www.wumeili.top"
let ajax={
  get(url,data,success){
    wx.request({
      url: APICONFIG+url,
      data:data,
      success
    })
  },
  // 轮播图
  bannerList(success){
    this.get('/w/website/bannerList',success)
  },
  // 商品分类查询
goodsSearch(info,success){
    this.get('/w/website/findGoodsList?info='+info,success)
  },
  // getCoupon(data,success){
  //   this.get("/w/client/checkTBKkl",data,success)
  // }
}
export default ajax;