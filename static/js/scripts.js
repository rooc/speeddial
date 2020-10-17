var searchEngines = {
	"google": "https://www.google.com/search?q=",
	"duckduckgo": "https://duckduckgo.com/?q="
}

function searchform() {
	return {
		term: "",
		search() {
			var location = searchEngines.duckduckgo + this.term;
			document.location = location;
		},
		
	}
}