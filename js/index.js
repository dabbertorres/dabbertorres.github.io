var main = function()
{
	$("#header #menu a").hover(
		function()
		{
			$(this).animate(
			{
				height: "100%",
				paddingTop: "5px",
				paddingBottom: "5px"
			}, 200);
		},
		function()
		{
			$(this).animate(
			{
				height: "80%",
				paddingTop: "0px",
				paddingBottom: "0px"
			}, 200);
		}
	);
}

$(document).ready(main);
