function fetchPolls(cont) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			cont(xhttp.responseText);
		}
	};
	xhttp.open("GET", "ajax_info.txt", true);
	xhttp.send();
}