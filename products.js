function display(dog) {
	var picturePath = "<img src=\"" + dog.picture + "\" />";
	puppyDiv.innerHTML += "<div>" + dog.name + "<br>" + dog.breed + "<br>" + dog.age + "<br>" + dog.personality +
picturePath + "</div>";
}

var productsArray = [];
var dogGeorge = {name: "George", picture: "images/shepherd.jpg", breed: "Shepherd", age: "3", personality: "Sweet", price: "1"};
var dogHenry = {name: "Henry", picture: "images/bulldog-skateboarding.jpg", breed: "Bulldog", age: "2", personality: "Spunky", price: "2"};
var dogScruffy = {name: "Scruffy", picture: "images/scruffy.jpg", breed: "Terrier mix", age: "8", personality: "Quirky", price: "2"};
var dogSpaz = {name: "Spaz", picture: "images/boston.jpg", breed: "Boston Terrier", age: "4", personality: "Energetic!", price: "3"};
var dogSophie = {name: "Sophie", picture: "images/huskypitbull.jpg", breed: "Husky Pitbull mix", age: "1", personality: "Happy", price: "1"};
var dogAlbert = {name: "Albert", picture: "images/pug.jpg", breed: "Pug", age: "5", personality: "Lap dog", price: "4"};
var dogFrank = {name: "Frank", picture: "images/dachshund.jpg", breed: "Dachshund", age: "1", personality: "Playful!", price: "2"};
var dogDoug = {name: "Doug", picture: "images/coolguy.jpg", breed: "Mix", age: "3", personality: "Laid-back", price: "1"};
var dogTiny = {name: "Tiny", picture: "images/shibainu.jpg", breed: "Shiba Inu", age: "5", personality: "Smart", price: "4"};
productsArray.push(dogGeorge, dogHenry, dogScruffy, dogSpaz, dogSophie, dogAlbert, dogFrank, dogDoug, dogTiny);
var puppyDiv = document.getElementById("puppies");

productsArray.forEach(function(dog){
	display(dog);
});