var main = function()
{
	// set font-size of header title dynamically
	var fontSize = parseInt($("#header #title").height()) + "px";
	$("#header #title").css("font-size", fontSize);

	$("#header #menu a").hover(
		function()
		{
			$(this).animate(
			{
				top: "-=5%"
			}, 100);
		},
		function()
		{
			$(this).animate(
			{
				top: "+=5%"
			}, 100);
		}
	);
}

$(document).ready(main);
