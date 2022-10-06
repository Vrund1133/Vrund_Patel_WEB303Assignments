// Name: Vrund Patel
// ID: 0805859
// Date: 4 October 2022
// Assignment 3

$(document).ready(function(){
	let getJsonObject= $.getJSON("team.json", function(data) {
		console.log("Getting Data from getJson", data);
		
		let item = '';
		$.each(data.members, function(key, val){
			item += '<h2>'+ val.name + '</h2>';
			item += '<h5>' + val.position + '</h5>';
			item += '<p>' + val.bio + '</p>';	
		});
		$('div#team').html(item);
	});
});


$(document).ready(function () { 
	$.ajax({
		url: 'team.json',
		type: 'GET',
		dataType:'json',
		async:false,

		beforeSend:function(){
			$('div#team').append('<p>Loading....</p>');
		},

		timeout:3000,
		error: function(err, exception){
			if(err.status === 3000){
				alert("Error");
			}
		},

		success:(function(data){
			$('div#team').html('');
			$.each(data.members, function(key, val){

				$('div#team').append(`<h2>${val.name}</h2>
									   <h5>${val.position}</h5>
									   <p>${val.bio}</p>`);
				$('.load').hide();
			});
		})
	})

});
	