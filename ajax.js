// Create the XHR object.
function createCORSRequest(method, url) {
	var xhr = new XMLHttpRequest();
	xhr.withCredentials = false;
	if ("withCredentials" in xhr) {
		// XHR for Chrome/Firefox/Opera/Safari.
		xhr.open(method, url, true);
	} else if (typeof XDomainRequest != "undefined") {
		// XDomainRequest for IE.
		xhr = new XDomainRequest();
		xhr.open(method, url);
	} else {
		// CORS not supported.
		xhr = null;
	}
	return xhr;
}

// Make the actual CORS request.
function makeRequest(url, succ, fail) {
	var xhr = createCORSRequest('GET', url);
	if (!xhr) {
		fail('CORS not supported');
		return;
	}

	// Response handlers.
	xhr.onload = function () {
		succ(xhr.responseText);
	};

	xhr.onerror = function () {
		fail('Woops, there was an error making the request.');
	};

	xhr.send();
}
