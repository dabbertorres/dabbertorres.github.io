var main = function()
{
	const AnimTime = 100;

	var menu = $("#header #menu");
	var diff = menu.width() - $("#header #menu a").width();

	$("#header #menu a").hover(
		function()
		{
			$(this).animate(
			{
				paddingLeft: diff + "px"
			}, AnimTime);
		},
		function()
		{
			$(this).animate(
			{
				paddingLeft: "0px"
			}, AnimTime);
		}
	);
}

$(document).ready(main);
