$(function(){
	$.ajax({
		type: "get",
		url: "http://127.0.0.1/w/website/bannerList",
		async: true,
		success: function(res) {
			var pic = res.data;
			//console.log(res)
			for(var i = 0; i < pic.length; i++) {
				if(i == 0) {
					$(".carousel-indicators").append(
						`<li data-target="#myCarousel" data-slide-to="i" class="active"></li>`
					)
					$(".carousel-inner").append(
						` <div class="item active">
							<img src="${pic[i].img}">
						</div>`
					)
				} else {
					$(".carousel-indicators").append(
						`<li data-target="#myCarousel" data-slide-to="i"></li>`
					)
					$(".carousel-inner").append(
						` <div class="item">
							<img src="${pic[i].img}">
						</div>`
					)
				}
			}
		}
	})
})