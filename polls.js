function addNewPolls(containerId) {
	var mainContainerDiv = document.getElementById(containerId);
	
	return function(dataset) {
		dataset = [
			{
				title : "Which Moose??",
				subtitle1 : "Moose1",
				subtitle2 : "Moose2",
				image1 : "http://images.clipartpanda.com/Moose-clip-art-Moose-7.png",
				image2 : "http://images.clipartpanda.com/Moose-clip-art-Moose-7.png"
			},
			{
				title : "Which Duck??",
				subtitle1 : "Duck1",
				subtitle2 : "Duck2",
				image1 : "http://pngimg.com/upload/duck_PNG4998.png",
				image2 : "http://pngimg.com/upload/duck_PNG4998.png"
			}
		];
		
		for(var i = 0; i < dataset.length; i++) {
			var newData = dataset[i];
			var frameDiv = createFeedItem(newData["title"], newData["subtitle1"], newData["subtitle2"], newData["image1"], newData["image2"]);
			mainContainerDiv.insertBefore(frameDiv, mainContainerDiv.firstChild);
		}
	}
}

function createFeedItem(title, subtitle1, subtitle2, src1, src2) {
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
	image1.width = 100;
	image1.height = 100;
	image2.src = src2;
	image2.width = 100;
	image2.height = 100;
	
	frameDiv.appendChild(titleDiv);
	frameDiv.appendChild(image1);
	frameDiv.appendChild(subtitle1Div);
	frameDiv.appendChild(image2);
	frameDiv.appendChild(subtitle2Div);
	
	return frameDiv;
}