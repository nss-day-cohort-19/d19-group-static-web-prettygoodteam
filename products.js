function display(dog) {
	var picturePath = "<img src=\"" + dog.picture + "\" />";
	var pricing;
	if (dog.price == 0) {
    pricing = "Daily Rate: $25 <br>Hourly Rate: $8 per hour";
} else if (dog.price ==1)  {
    pricing = "Daily Rate: $20 <br>Hourly Rate: $5 per hour";
}
	puppyDiv.innerHTML += "<div><table><tr><td>Name:</td><td>" + dog.name + "</td></tr><tr><td>Breed: </td><td>" + dog.breed + "</td><tr><td>Age:</td><td>" + dog.age + "</td><tr><td>Personality:</td><td>" + dog.personality + "</td><tr><td>Pricing:</td><td>" + pricing +"</td></tr></table>" +
picturePath + "</div>";
}

var productsArray = [];
var dogGeorge = {name: "George", picture: "images/shepherd.jpg", breed: "Shepherd", age: "3", personality: "Sweet", price: 0};
var dogHenry = {name: "Henry", picture: "images/bulldog-skateboarding.jpg", breed: "Bulldog", age: "2", personality: "Spunky", price: 1};
var dogScruffy = {name: "Scruffy", picture: "images/scruffy.jpg", breed: "Terrier mix", age: "8", personality: "Quirky", price: 1};
var dogSpaz = {name: "Spaz", picture: "images/boston.jpg", breed: "Boston Terrier", age: "4", personality: "Energetic!", price: 1};
var dogSophie = {name: "Sophie", picture: "images/huskypitbull.jpg", breed: "Husky Pitbull mix", age: "1", personality: "Happy", price: 0};
var dogAlbert = {name: "Albert", picture: "images/pug.jpg", breed: "Pug", age: "5", personality: "Lap dog", price: 0};
var dogFrank = {name: "Frank", picture: "images/dachshund.jpg", breed: "Dachshund", age: "1", personality: "Playful!", price: 1};
var dogDoug = {name: "Doug", picture: "images/coolguy.jpg", breed: "Mix", age: "3", personality: "Laid-back", price: 1};
var dogTiny = {name: "Tiny", picture: "images/shibainu.jpg", breed: "Shiba Inu", age: "5", personality: "Smart", price: 0};
productsArray.push(dogGeorge, dogHenry, dogScruffy, dogSpaz, dogSophie, dogAlbert, dogFrank, dogDoug, dogTiny);
var puppyDiv = document.getElementById("puppies");

productsArray.forEach(function(dog){
	display(dog);
});