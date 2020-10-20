var Writer = {
	Write: function(file, info) {
		myJSON = JSON.stringify(info);
		localStorage.setItem(file, myJSON);
	}
	Read: function(file)
