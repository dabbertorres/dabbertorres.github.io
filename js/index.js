var main = function()
{
	// set font-size of header title dynamically
	var title = $("#header #title");
	var titleFontSize = parseInt(title.height()) + "px";
	title.css("font-size", titleFontSize);
	
	var menuButtons = $("#header #menu a");
	var menuButtonFontSize = (parseInt(menuButtons.height()) - 2) + "px";
	menuButtons.css("font-size", menuButtonFontSize);

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
