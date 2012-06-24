$.ajax({
  url: "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=894064fca12d26335a68f014d98f4145&format=json&limit=1000"
}).done(function(popular){
	console.log(popular);
	for (i = 0; i < popular.artists.artist.length; i++){
		$("#popular").append('<li>"'+popular.artists.artist[i].name+'",</li>');
	}
});