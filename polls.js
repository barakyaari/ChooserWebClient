var votesQueue = [];

function addNewPolls(containerId) {
	var mainContainerDiv = document.getElementById(containerId);
	
	return function(dataset) {
		dataset = JSON.parse(dataset)["message"];
		
		for(var i = 0; i < dataset.length; i++) {
			var newData = dataset[i];
			var frameDiv = createFeedItem(
				newData["poll_title"],
				newData["image1_description"],
				newData["image2_description"],
				newData["image1_image"],
				newData["image2_image"],
				voteCallback(newData["Id"], mainContainerDiv));
			
			mainContainerDiv.insertBefore(frameDiv, mainContainerDiv.firstChild);
		}
	}
}

function voteCallback(poll_id, mainContainerDiv) {
	return function (voteFor) {
		return function() {
			var vote = { result : voteFor, pollId : poll_id };
			votesQueue.push(vote);
			document.getElementById("ResultSet").innerHTML += "{" + vote["result"] + "," + vote["pollId"] + "},";
			
			mainContainerDiv.removeChild(mainContainerDiv.firstChild);
		};
	}
}

function createFeedItem(title, subtitle1, subtitle2, src1, src2, vote) {
	var frameDiv = document.createElement("div");
	var titleDiv = document.createElement("div");
	var image1 = document.createElement("img");
	var image2 = document.createElement("img");
	var subtitle1Div = document.createElement("div");
	var subtitle2Div = document.createElement("div");
	
	titleDiv.innerHTML = title;
	subtitle1Div.innerHTML = subtitle1;
	subtitle2Div.innerHTML = subtitle2;
	image1.src = src1;
	image1.onclick = vote(1);
	image1.width = 100;
	image1.height = 100;
	image2.src = src2;
	image2.onclick = vote(2);
	image2.width = 100;
	image2.height = 100;
	
	frameDiv.appendChild(titleDiv);
	frameDiv.appendChild(image1);
	frameDiv.appendChild(subtitle1Div);
	frameDiv.appendChild(image2);
	frameDiv.appendChild(subtitle2Div);
	
	return frameDiv;
}

function submitVotes(containerId) {
	votesQueue = [];
	document.getElementById("ResultSet").innerHTML = "";
	alert("Sent!");
}