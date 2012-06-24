$('#search-artist input').keypress(function(e) {
  if (e.keyCode === 13) {
      getData();
  }
});  


function initialize(data) {
  console.log(data);
  // for (var i = 0; i < data.length; i++) {    
    var locationLat = data[0].venue.location['geo:point']['geo:lat'];
    var locationLong = data[0].venue.location['geo:point']['geo:long'];
  //}
  console.log(location);
  var myOptions = {
    center: new google.maps.LatLng(locationLat, locationLong),
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}

function getData() {
	$("header").slideUp();    
  $('#artist-name').html("");
  $('#shows').html("");
	var origArtist = $('#search-artist input').val();
  var artist = toTitleCase(origArtist);
  $.ajax({
    url: "http://ws.audioscrobbler.com/2.0/?method=artist.getevents&artist="+artist+"&autocorrect=1&api_key=894064fca12d26335a68f014d98f4145&format=json"
  }).done(function(data){
		console.log(data);
		if (data.error){
			$("#notice").append(data.message+".");
		} else if (data.events.total === "0"){
			$("#notice").append("Sorry, no shows found at this time.");
		} else if (data.events["@attr"].artist === artist) {
			displayData(data.events.event, artist);
		} else {
			$("#notice").append("Did you mean '"+data.events["@attr"].artist+
			"', ya dingus?<br /><button id='autocorrect-correct' class='btn'>Yup, show me "+
			data.events["@attr"].artist+
			".</button><button id='autocorrect-incorrect' class='btn'>Nope, I meant "+
			origArtist+".</button>");
			$("#autocorrect-correct").click(function(){
				displayData(data.events.event, data.events["@attr"].artist);
			});
			$("#autocorrect-incorrect").click(function(){
				$.ajax({
			    url: "http://ws.audioscrobbler.com/2.0/?method=artist.getevents&artist="+origArtist+"&autocorrect=0&api_key=894064fca12d26335a68f014d98f4145&format=json"
			  }).done(function(data){
					if (data.events.total === "0"){
						$("#artist-name").html("");
						$("#artist-name").append("Sorry, no shows found at this time.");
					} else {
						displayData(data.events.event, origArtist);
					}
				});
			});
		}
  });
}

function displayMap() {
  
}

function displayData(data, artist) {
	$("#notice").html("");
	$("#artist-name").html("");
	$("#artist-name").append(artist);
	for (var i = 0; i < data.length; i++) {
    $('#shows').append('<li id='+i+'>'+data[i].startDate+" at "+data[i].venue.name+" in "+
		data[i].venue.location.city+ ", "+data[i].venue.location.country+" </li>");
  }
	$("#shows li:last").addClass("last");
	sortData(data);
	$('#map-button').append("Do you want to see a map for this? <br /><button id='submit' class='btn'>VIEW MAP</button>");
	$('#map-button .btn').click( function(){
	  initialize(data);
	});
}

function toTitleCase(str){
	return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function sortData(data){
	for (var j = 0; j < data.length; j++) {
		if (data[j].cancelled === "1"){
			$('#'+j).append("<span class='cancelled'> Cancelled!</span>");
		}
	}
}
