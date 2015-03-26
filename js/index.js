var main = function()
{
	// set font-size of header title dynamically
	var title = $("#header #title");
	var fontSize = (parseInt(title.height()) - 4) + "px";
	title.css("font-size", fontSize);

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
