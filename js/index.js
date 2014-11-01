var main = function()
{
	$("#header #menu a").hover(
		function()
		{
			$(this).animate(
			{
				height: "100%",
				paddingTop: "12px"
			}, 200);
		},
		function()
		{
			$(this).animate(
			{
				height: "80%",
				paddingTop: "8px"
			}, 200);
		}
	);
}

$(document).ready(main);
