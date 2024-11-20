let itemDivElement = document.getElementById('row')


let jsonDatabase = [
	{
		"title": "daryl the cat",
		"pictureUrl": "daryl.png",
		"price": "1000 moon coins"
	},
	{
		"title": "broomstick",
		"pictureUrl": "broomstick.png",
		"price": "250 moon coins"
	},
	{
		"title": "cauldron",
		"pictureUrl": "cauldron.png",
		"price": "800 moon coins"
	},
	{
		"title": "crystal" ,
		"pictureUrl": "crystal.png",
		"price": "250 moon coins"
	},
	{
		"title": "candle",
		"pictureUrl": "candle.png",
		"price": "75 moon coins"
	},
	{
		"title": "bryan the snake",
		"pictureUrl": "brian.png",
		"price": "500 moon coins"
	},
	{
		"title": "hat",
		"pictureUrl": "hat.png",
		"price": "25 moon coins"
	},
	{
		"title": "spellbook",
		"pictureUrl": "spellbook.png",
		"price": "3000 moon coins"
	},
	{
		"title": "charlie the rat",
		"pictureUrl": "rat.png",
		"price": "30 moon coins"
	}
];

for (var i = 0; i<jsonDatabase.length; i++) {
	createItem(jsonDatabase[i]);
}

function createItem(json){
	let newItemElement = document.createElement("DIV");
	newItemElement.classList.add("item")

	let newPicContainer = document.createElement("DIV");
	newPicContainer.classList.add("picContainer");
	newItemElement.appendChild(newPicContainer);

	let newPic = document.createElement("IMG");
	newPic.src = json['pictureUrl']
	newPicContainer.appendChild(newPic)

	let newTextContainer = document.createElement("DIV");
	newTextContainer.classList.add("textContainer");
	newItemElement.appendChild(newTextContainer);

	let newHeading = document.createElement("H1");
	newHeading.innerText = json['title'];
	newTextContainer.appendChild(newHeading);


	let newPrice = document.createElement("P");
	newPrice.innerText = json['price'];
	newTextContainer.appendChild(newPrice);

	itemDivElement.appendChild(newItemElement);

}