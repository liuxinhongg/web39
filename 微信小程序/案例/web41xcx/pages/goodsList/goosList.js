// pages/goodsList/goosList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      lunbo: [
        {
        "id": "42dde03b6e0b42749377b310e0117d00",
        "remarks": "",
        "createDate": "2019-05-13 22:17:03",
        "updateDate": "2019-09-24 15:38:57",
        "img": "http://wumeili.top/userfiles/1/images/img/2019/09/TB1VTxGgED1gK0jSZFGXXbd3FXa-440-180.jpg",
        "linkUrl": "https://s.click.taobao.com/DjlSA0w",
        "sort": "2",
        "type": "1"
        },
        {
        "id": "246d5ec85b6947ec940f5f018981edba",
        "remarks": "",
        "createDate": "2019-05-13 22:16:55",
        "updateDate": "2019-09-24 15:32:28",
        "img": "http://wumeili.top/userfiles/1/images/img/2019/09/banner1.jpg",
        "linkUrl": "https://pages.tmall.com/wow/a/act/tiantian/tmc/22616/wupr?wh_pid=main-161460&ali_trackid=2:mm_53158044_483700261_108902300369:1558787810_225_1295101601",
        "sort": "1",
        "type": "1"
        },
        {
        "id": "407d42c2b617417e8d963837c98333c9",
        "remarks": "",
        "createDate": "2019-05-13 22:17:10",
        "updateDate": "2019-09-24 15:30:57",
        "img": "http://wumeili.top/userfiles/1/images/img/2019/09/banner4.jpg",
        "linkUrl": "https://pages.tmall.com/wow/a/act/tmall/tmc/22351/wupr?wh_pid=industry-161337&ali_trackid=2:mm_53158044_483700261_108901850476:1558787852_245_1230036013",
        "sort": "4",
        "type": "0"
        },
        {
        "id": "46610d7047fe425d899b7a7bed757205",
        "remarks": "",
        "createDate": "2019-05-13 20:52:49",
        "updateDate": "2019-09-24 15:30:23",
        "img": "http://wumeili.top/userfiles/1/images/img/2019/09/banner1.jpg",
        "linkUrl": "https://pages.tmall.com/wow/a/act/tmall/tmc/23671/wupr?wh_pid=main-168332&ali_trackid=2:mm_53158044_483700261_109458350009:1568985370_122_646665215",
        "sort": "2",
        "type": "0"
        },
        {
        "id": "61ddad99aeaa4f0092f2c04c686d5135",
        "remarks": "",
        "createDate": "2019-05-13 20:53:41",
        "updateDate": "2019-09-24 15:27:15",
        "img": "http://wumeili.top/userfiles/1/images/img/2019/09/tianmaochaoshi.jpg",
        "linkUrl": "https://s.click.taobao.com/0YrYA0w",
        "sort": "1",
        "type": "0"
        },
        {
        "id": "dc17a791585d497db9e1d89afd7c8c64",
        "remarks": "",
        "createDate": "2019-05-31 13:41:03",
        "updateDate": "2019-09-24 14:56:06",
        "img": "http://wumeili.top/userfiles/1/images/img/2019/09/banner2.png",
        "linkUrl": "https://pages.tmall.com/wow/a/act/tmall/tmc/23671/wupr?wh_pid=main-168332&ali_trackid=2:mm_53158044_483700261_109458350009:1568985370_122_646665215",
        "sort": "3",
        "type": "0"
        }
        ]
    // markers: [{
    //   iconPath: "/resources/others.png",
    //   id: 0,
    //   latitude: 23.099994,
    //   longitude: 113.324520,
    //   width: 50,
    //   height: 50
    // }],
    // polyline: [{
    //   points: [{
    //     longitude: 113.3245211,
    //     latitude: 23.10229
    //   }, {
    //     longitude: 113.324520,
    //     latitude: 23.21229
    //   }],
    //   color:"#FF0000DD",
    //   width: 2,
    //   dottedLine: true
    // }],
    // controls: [{
    //   id: 1,
    //   iconPath: '/resources/location.png',
    //   position: {
    //     left: 0,
    //     top: 300 - 50,
    //     width: 50,
    //     height: 50
    //   },
    //   clickable: true
    // }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
      wx.getLocation({
        success:function(res){
          that.setData({
            hasLocation: true,
            lon: res.longitude, 
            lat:res.latitude//这里是获取经纬度
          })
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  bb(){
    alert(666)
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