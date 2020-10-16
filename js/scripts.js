var searchEngines = {
	"google": "https://www.google.com/search?q="
}

function searchform() {
	return {
		term: "",
		search() {
			var location = searchEngines.google + this.term;
			document.location = location;
		},
		
	}
}