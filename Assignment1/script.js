/*
	WEB 303 Assignment 1 - jQuery
	{Vrund Patel}
*/

$(document).ready(function(){
	$("input").change(function(){
		let AnnualSalary = $("#yearly-salary").val();
		let Percent = $("#percent").val();
		let AmountSpent = ((AnnualSalary*Percent)/100).toFixed(2);

		$("#amount").text("$" + AmountSpent);
	});
});

