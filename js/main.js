var pageCounter = 1;
var signatureGuitar = document.getElementById("Guitar-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
	
	var ourRequest = new XMLHttpRequest(); 
	ourRequest.open('GET', 'http://localhost/1/json/guitar-' + pageCounter + '.json');
	ourRequest.onload = function() {
		var guitarData = JSON.parse(ourRequest.responseText);
		showDetails(guitarData);
	};
	ourRequest.send();
	pageCounter++;
	if (pageCounter < 2) {
		btn.classList.add("hide-me");
	}
});

function showDetails(data) {
	var description = "";
	
	for(i = 0; i < data.length; i++){
		description += "<p>" + data[i].name + " is a " + data[i].species + ".</p>";
	}
	signatureGuitar.insertAdjacentHTML('beforeend', description);
}


