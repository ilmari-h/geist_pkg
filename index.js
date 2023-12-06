(function () {
	document.addEventListener("DOMContentLoaded", function(event) {
		var iframe = document.getElementById("GeistWidget");
		console.log(iframe)
		if(!iframe) {
			console.error("No iframe found with the id 'GeistWidget'.")
			return;
		}
		var iframeSource = iframe.src;
		iframe.width = "100%";
		iframe.style["outline"] = "none";
		iframe.style["border"] = "none";
		iframe.style["border-width"] = "0px";
		iframe.allowtransparency = "true";
		console.log(iframe.style)
		var url = new URL(iframeSource);
		var host = url.protocol + "//" + url.host;
		window.addEventListener(
			"message",
			event => {
				if(event.origin !== host) {
					return;
				}
				iframe.style.height = event.data+"px";
			}
		);
	});

})();

