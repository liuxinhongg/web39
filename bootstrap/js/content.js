$(function() {
		$.ajax({
		type: "get",
		url: "http://127.0.0.1/w/website/findGoodsTypeList",
		async: false,
		success: function(res) {
			var sj = res.data;
			console.log(sj);
			for(var i = 0; i < sj.length; i++) {
					$(".content .content_right_produce .produce_pic").append(
						`<div class="content_right_produce_title">${sj[i].name}</div>
						<li class="produce">
							<div class="produce_lis">
								<img src="${sj[i].icon}">
								<a href="xiangqing.html?name=${sj[i].name}">
									点击详情<span class="glyphicon glyphicon-forward"></span>
								</a>
							</div>
							<div class="produce_list row"></div>
						</li>`
					)	
				getShopsort(sj[i].name);
			}
		}
	});
	function getShopsort(goodsname){
		$.ajax({
				type: "get",
				url: "http://127.0.0.1/w/website/findGoodsList",
				async: true,
				data:{
					"platId":"d0a500ecf8ab41aa9ffe8e18ac6419e1",
					"info":goodsname,
					"pageNo":1
				},
				success: function(res) {
					console.log(res);
					var obj = res.data.tbk_dg_material_optional_response.result_list.map_data;
//						console.log(obj.length);
					for(var j = 0; j < 2; j++) {
						$(".produce .produce_list").append(
							`
							<div class="produce_list_item col-lg-3">
								<img src="${obj[j].pict_url}" />
							</div>
							`
						)
					}	
				}
			})
	}
/*function produce(){
	var str=location.hash;
	console.log(str)
		$.ajax({
			type: "get",
			url: "http://127.0.0.1/w/website/findGoodsList",
			async: false,
			data:{
				"platId":"d0a500ecf8ab41aa9ffe8e18ac6419e1",
				"info":str,
				"pageNo":1
			},
			success: function(res) {
				var obj = res.data;
				console.log(obj);
				for(var i = 0; i < obj.length; i++) {
					$(".content content_right_produce li produce_content").append(
						`
						<div class="produce_content_list col-lg-3 col-sm-6">
							<img src="img/cat.jpg"/>
							<span class="produce_content_list_title">好看的猫</span>
							<span class="produce_content_list_price">￥69.00</span>
							<span class="produce_content_list_price_del">￥88.00</span>
						</div> 
						`
					)
				}	
			}
		});
}*/
})
/**/
