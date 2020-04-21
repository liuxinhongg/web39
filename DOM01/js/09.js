(function(){
	var files=['app.js','hello.js'];
	files.forEach(function(file){
		var scriptTag=document.createElement("script");
		scriptTag.async=false;
		scriptTag.src=file;
		document.body.appendChild(scriptTag)
	})
}())
