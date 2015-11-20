function addNewPolls(containerId) {
	return function(newData) {
		document.getElementById(containerId).innerHTML = newData + '<br />' + document.getElementById(containerId).innerHTML;
	}
}