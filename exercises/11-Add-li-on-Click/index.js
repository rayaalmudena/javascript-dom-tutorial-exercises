let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let liItem = document.createElement("li");
	liItem.innerHTML="Another element";
	document.querySelector("ul").appendChild(liItem);
});
