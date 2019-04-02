/*
The scene display timeline:
- The scene is cleared (choices and characters are removed from the page)
- The actions are executed (changing place, updating variables, etc)
- The character is displayed
- The conditions on every choice are evaluated, and the available choices are displayed
- The player clicks on a choice, usually triggering a change of scene
*/
//
var partyCount = 16;
var powerCount = 10;
var foodCount = 10;
var day = 0;

var matsUpdateSubstring = "$";
var dayUpdateSubstringShort = "$d";
var dayUpdateSubstringMed = "$e";
var dayUpdateSubstringLong = "$f";
var deathFlag = "%die:";
var gainFlag = "%gain:";
var powerGainSubstring = "@pg:";
var foodGainSubstring = "@fg:";
var powerLossSubstring = "@pl:";
var foodLossSubstring = "@fl:";

var dayStringElement = document.getElementById('days');
var partyStringElement = document.getElementById('party');
var foodStringElement = document.getElementById('food');
var powerStringElement = document.getElementById('power');
function onSceneCleared()
{
	// day++;
	// dayStringElement.innerHTML = day;
	//Custom code that will be executed right after the scene has been cleared from its choices and characters,
	//before any of the content of the scene is processed.
}

function onPlaceDisplayed(place)
{
	//Custom code that will be executed right after a place has been displayed in a scene
}

function onCharacterDisplayed(character)
{
	//Custom code that will be executed right after a character has been displayed in a scene
}

function onSceneDisplayed(scene)
{
	//Custom code that will be executed right after a scene is completely drawn
}

function onChoiceClicked(targetSceneId)
{
	if(targetSceneId.toLowerCase().includes(matsUpdateSubstring)) {
		foodCount -=1;
		powerCount -=1;
		foodStringElement.innerHTML = foodCount;
		powerStringElement.innerHTML = powerCount;
	}

	if(targetSceneId.toLowerCase().includes(foodGainSubstring)) {
		var toAdd = Number(targetSceneId.substring(targetSceneId.indexOf("@fg:") + 4));
		foodCount += toAdd;
		foodStringElement.innerHTML = foodCount;
		console.log(foodCount);
	}

	if(targetSceneId.toLowerCase().includes(powerGainSubstring)) {
		var toAdd = Number(targetSceneId.substring(targetSceneId.indexOf("@pg:") + 4));
		powerCount += toAdd;
		powerStringElement.innerHTML = powerCount;
		console.log(powerCount);
	}

	if(targetSceneId.toLowerCase().includes(foodLossSubstring)) {
		var toLose = Number(targetSceneId.substring(targetSceneId.indexOf("@fl:") + 4));
		foodCount -= toLose;
		foodStringElement.innerHTML = foodCount;
		console.log(foodCount);
	}

	if(targetSceneId.toLowerCase().includes(powerLossSubstring)) {
		var toLose = Number(targetSceneId.substring(targetSceneId.indexOf("@pl:") + 4));
		powerCount -= toLose;
		powerStringElement.innerHTML = powerCount;
		console.log(powerCount);
	}


	if(targetSceneId.toLowerCase().includes(dayUpdateSubstringShort)){
		day += getRandomInt(3,4);
		dayStringElement.innerHTML = day;
	} else if (targetSceneId.toLowerCase().includes(dayUpdateSubstringMed)){
		day += getRandomInt(5,8);
		dayStringElement.innerHTML = day;
	} else if (targetSceneId.toLowerCase().includes(dayUpdateSubstringLong)){
		day += getRandomInt(10,15);
		dayStringElement.innerHTML = day;
	}

	if(targetSceneId.toLowerCase().includes(deathFlag)){
		console.log(partyCount);
		var toRemove = Number(targetSceneId.substring(targetSceneId.indexOf("%die:") + 5));
		console.log(toRemove);
		partyCount -= toRemove;
		partyStringElement.innerHTML = partyCount;
	}

	if(targetSceneId.toLowerCase().includes(gainFlag)){
		var toAdd = Number(targetSceneId.substring(targetSceneId.indexOf("%gain:") + 6));
		partyCount += toAdd;
		partyStringElement.innerHTML = partyCount;
	}

	//Custom code that will be executed when the player clicks on a choice
	//targetSceneId can be an actual scene identifier, but it could also be a special value that you want to catch instead!
	//In any case, this function needs to return false for the default behaviour to be executed.
	//The default behaviour is to display the scene that has targetSceneId as its identifier.
	//If you've done something else and want to prevent the scene from displaying, return true instead.

	//Example of a custom behaviour upon clicking on a choice:
	//Redirecting the player to an ending page if the target of the choice is called "end"
	if(targetSceneId.toLowerCase() == "end")
	{
		location = "end.html";
		return true;
	}

	return false;
}

// retrieve random int
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
