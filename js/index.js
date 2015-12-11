var main = function()
{
	const AnimTime = 100;
	
	$("#header #menu a").hover(
		function()
		{
			$(this).animate(
			{
				letterSpacing: "1em"
			}, AnimTime);
		},
		function()
		{
			$(this).animate(
			{
				paddingLeft: "0em"
			}, AnimTime);
		}
	);
}

$(document).ready(main);
