// var config = require('config.js');//引入配置文件。
let APICONFIG="https://www.wumeili.top"
function Get(url,data,cb){
  wx.request({
    url: APICONFIG + url,
    data:data,
    success:(res) => {
      typeof cb == "function" && cb(res.data,"");
    }
  })
};

function Post(url, data, cb) {
  wx.request({
    method: 'POST',
    url: APICONFIG + url,
    data: data,
    header:{
      "Content-Type": "application/x-www-form-urlencoded"//跨域请求
    },
    success: (res) => {
      typeof cb == "function" && cb(res.data, "");
    }
  });
};
//暴露接口
module.exports = {
  httpGet: Get,
  httpPost: Post
}