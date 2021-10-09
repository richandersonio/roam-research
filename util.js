
if (window.roamrja) {
	console.log("util - Installed before")  
} else {
	console.log("util - Installing")  
	window.roamrja = {};
}

var api = window.roamrja;

api.version = () => {
    return "0.1";
}
