
 
// function harmonicMinor(note){
// note = scales.indexOf(note)	
// return scales[note] + scales[note + 2] + scales[note + 3] + scales[note + 5] + scales[note + 7] + scales[note + 8] + scales[note + 11];
// }

// function ionian(note){
// 	note = scales.indexOf(note)
// 	return scales[note] + scales[note+2] + scales[note+4] + scales[note+5] + scales[note+7] + scales[note+9] + scales[note + 11];
// }

// function dorian(note){
// 	note = scales.indexOf(note)	
// 	return scales[note] + scales[note + 2] + scales[note + 3] + scales[note + 5] + scales[note + 7] + scales[note + 9] + scales[note + 10];
// }

// function phrygian(note){
// 	note = scales.indexOf(note)
// 	return scales[note] + scales[note + 1] + scales[note + 3] + scales[note + 5] + scales[note + 7] + scales[note + 8] + scales[note + 10];
// }

// function lydian(note){
// 	note = scales.indexOf(note);
// 	return scales[note] + scales[note + 2] + scales[note + 4] + scales[note + 6] + scales[note + 7] + scales[note + 9] + scales[note + 11];

// }
// function mixolydian(note){
// 	note = scales.indexOf(note);
// 	return scales[note] + scales[note + 2] + scales[note + 4] + scales[note + 5] + scales[note + 7] + scales[note + 9] + scales[note + 10];
// }
// function aeolian(note){
// 	note = scales.indexOf(note);
// 	return scales[note] + scales[note + 2] + scales[note + 3] + scales[note + 5] + scales[note + 7] + scales[note + 8] + scales[note + 10];
// }
// function locrian(note){
// 	note = scales.indexOf(note);
// 	return scales[note] + scales[note + 1] + scales[note + 3] + scales[note + 5] + scales[note + 6] + scales[note + 8] + scales[note + 10];
// }

// var scales = ['c','c#','d','d#','e','f','f#','g','g#','a','a#','b','c','c#','d','d#','e','f','f#','g','g#','a','a#','b'];
// var scaleKeys = [];
// var majChords = [];
// var minChords = [];
// var sus2Chords = [];
// var sus4Chords = [];
// var majSeventhChords = [];
// var minSeventhChords = [];
// var seventhChords = [];
// var dimChords = [];

	
// // All 12 diatonic keys of the Circle of Fifths and Chords 

// 	for(var i= 0; i < scales.length - 12; i++){
		
// 		scaleKeys.push(scales[i] + scales[i+2] + scales[i+4] + scales[i+5] + scales[i+7] + scales[i+9] + scales[i + 11]);
// 		majChords.push(scales[i] + scales[i+4] + scales[i+7]);
// 		minChords.push(scales[i] + scales[i+3] + scales[i+7]);
// 		dimChords.push(scales[i] + scales[i+3] + scales[i+6]);
// 		sus2Chords.push(scales[i] + scales[i+2] + scales[i+7]);
// 		sus4Chords.push(scales[i] + scales[i+5] + scales[i+7]);
// 		majSeventhChords.push(scales[i] + scales[i+4] + scales[i+7] + scales[i+11]);
// 		minSeventhChords.push(scales[i] + scales[i+3] + scales[i+7] + scales[i+10]);
// 		seventhChords.push(scales[i] + scales[i+4] + scales[i+7] + scales[i+10]);
// 	}



// var input = document.getElementById("scaleInput");
// var display = document.getElementById("display");
// var select = document.getElementById("selectMode");
// var inputVal = "";
// var scale = "";

// input.addEventListener('change', function(){
// 	inputVal = input.value;
// 	scale = ionian(inputVal.toLowerCase());
// 	console.log(inputVal);
// 	if(select.value === "1"){
// 	scale = ionian(input.value.toLowerCase());
// 	}
// 	if(select.value === "2"){
// 		scale = dorian(input.value.toLowerCase());
// 	}
// 	if(select.value === "3"){
// 		scale = phrygian(input.value.toLowerCase());
// 	}
// 	if(select.value === "4"){
// 		scale = lydian(input.value.toLowerCase());
// 	}
// 	if(select.value === "5"){
// 		scale = mixolydian(input.value.toLowerCase());
// 	}
// 	if(select.value === "6"){
// 		scale = aeolian(input.value.toLowerCase());
// 	}
// 	if(select.value === "7"){
// 		scale = locrian(input.value.toLowerCase());
// 	}


// 	if(inputVal.match(/[a-g]/ig) ){

// 		display.innerHTML = "<h2>" + scale + "</h2>"
// 		input.value = ""; 
// 	} else {
// 		input.value = "";
// 		display.innerHTML = "<h2>Please Enter from Circle of Fifths: C G D A E B F# C# G# D# A# F</h2><br>";
// 		display.innerHTML += "-------------------------------------------------------"
// 		display.innerHTML += "-------------------------------------------------------"
// 	}


// });
			


// input.addEventListener("select", function(){
	

// });
// 			scale: scaleKeys[6],
// 			one : majChords[6],
// 			two : minChords[8],
// 			three: minChords[10], 
// 			four : majChords[11],
// 			five : majChords[1],
// 			six: minChords[3],
// 			seven: dimChords[5] 
// 			}
// 		},
// ];
			
// for (var i = 0; i < keySig.length; i++){
// 	console.log(keySig[i].key.scale);
// 	console.log(keySig[i].key.two);
// }





var ionian = [0,2,4,5,7,9,11];
var dorian = [0,2,3,5,7,9,10];
var phrygian = [0,1,3,5,7,8,10];
var lydian = [0,2,4,6,7,9,11];
var mixolydian = [0,2,4,5,7,9,10];
var aeolian = [0,2,3,5,7,8,10];
var locrian = [0,1,3,5,6,8,10];
var majChords = [0,4,7];
var minChords = [0,3,7];
var majSeventhChords = [0,4,7,11];
var minSeventhChords = [0,3,7,10];
var seventhChords =  [0,4,7,10];
var sus4Chords = [0,5,7];
var sus2Chords = [0,2,7];
var chromaticKey = ['c','c#','d','d#','e','f','f#','g','g#','a','a#','b','c','c#','d','d#','e','f','f#','g','g#','a','a#','b'];
var scales = [ionian, dorian, phrygian, lydian, mixolydian, aeolian, locrian];


	




	function scaleIt(scale, note){
		var startIndex = chromaticKey.indexOf(note);
		var newKey = chromaticKey.slice(startIndex, -1);
		var newScale = ""; 
		for(var i = 0; i < scale.length; i+=1){
		newScale += newKey[scale[i]];
		
		}

		return newScale; 
	  
	}
		
		
		







//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


var input = document.getElementById("scaleInput");
var display = document.getElementById("display");
var select = document.getElementById("selectMode");
var inputVal = "";
var scale = "";


input.addEventListener('change', function(){
	inputVal = input.value;
	// inputVal = inputVal.slice(0,2);
	console.log(inputVal);
	input.value = inputVal; 
	display.innerHTML = "";
	
	
	
	switch(select.value){	
		case "1": 
			scale =  scaleIt(ionian, input.value.toLowerCase());
			break;
		case "2":
			scale = scaleIt(dorian, input.value.toLowerCase());
			break;
		case "3":
			scale = scaleIt(phrygian, input.value.toLowerCase());
			break;
		case "4":
			scale = scaleIt(lydian, input.value.toLowerCase());
			break;
		case "5":
			scale = scaleIt(mixolydian, input.value.toLowerCase());
			break;
		case "6":
			scale = scaleIt(aeolian, input.value.toLowerCase());
			break;
		case "7":
			scale = scaleIt(locrian, input.value.toLowerCase());
			break;
		case "8":
			scale = scaleIt(majChords, input.value.toLowerCase());
			break;
		case "9":
			scale = scaleIt(minChords, input.value.toLowerCase());
			break;
		case "10":
			scale = scaleIt(sus2Chords, input.value.toLowerCase());
			break;
		case "11":
			scale = scaleIt(sus4Chords, input.value.toLowerCase());
			break;
		case "12":
			scale = scaleIt(majSeventhChords, input.value.toLowerCase());
			break;
		case "13":
			scale = scaleIt(minSeventhChords, input.value.toLowerCase());
			break;
		case "14":
			scale = scaleIt(seventhChords, input.value.toLowerCase());
			break;												
		default: 
			scale =  scaleIt(ionian, input.value.toLowerCase());
			break;
		}





	var regextest =	/(c|c#|d|d#|e|f|f#|g|g#|a|a#|b)/i.test(input.value);
	console.log(regextest);
	if(regextest === true){

		
		
		for(var i = 0; i < scale.length; i++){
			
			if(scale.charAt(i+1) === '#'){
				display.innerHTML += scale.charAt(i);
				
			} else{

				display.innerHTML += scale.charAt(i) + " ";
			}

		}	

		
		
		input.value = ""; 
	} else {
		input.value = "";
		display.innerHTML = "Please Enter from Circle of Fifths: C G D A E B F# C# G# D# A# F<br>";
		display.innerHTML += "-------------------------------------------------------"
		display.innerHTML += "-------------------------------------------------------"
	} 


});

// 		// BowtieBeej refactor 

// 		function ShowScales(note, noteArray){
// 	var i;
// 	var noteNum = scales.indexOf(note);
// 	var displayScales = "";
// 	for(i=0; i<noteArray.length; i++){
// 		displayScales += scales[noteNum + noteArray[i]];
// 	};
// 	return displayScales;
// }


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// var scales = ['c','c#','d','d#','e','f','f#','g','g#','a','a#','b','c','c#','d','d#','e','f','f#','g','g#','a','a#','b'];


// var input = document.getElementById("scaleInput");
// var display = document.getElementById("display");
// var select = document.getElementById("selectMode");
// var inputVal = "";
// var scale = "";
// var noteArray = [0,2,4,5,7,9,11];


			
// input.addEventListener('change', function(){
// 	inputVal = input.value;
// 	console.log(inputVal);
// 	switch(select.value){	
// 		case "ionian": 
// 			noteArray = [0, 2, 4, 5, 7, 9, 11];
// 			break;
// 		case "dorian":
// 			noteArray = [0, 2, 3, 5, 7, 9, 10];
// 			break;
// 		case "phygian":
// 			noteArray = [0, 1, 3, 5, 7, 8, 11];
// 			break;
// 		case "lydian":
// 			noteArray = [0, 2, 4, 6, 7, 9, 11];
// 			break;
// 		case "mixolydian":
// 			noteArray = [0, 2, 4, 5, 7, 9, 10];
// 			break;
// 		case "aeolian":
// 			noteArray = [0, 2, 3, 5, 7, 8, 10];
// 			break;
// 		case "locrian":
// 			noteArray = [0, 1, 3, 5, 6, 8, 10];
// 			break;
// 		default: 
// 			noteArray = [0, 2, 4, 5, 7, 9, 11];
// 			break;
// 		}
 
// 	scale = ShowScales(inputVal.toLowerCase(), noteArray);


// 	if(inputVal.match(/[a-g]/ig) ){

// 		display.innerHTML = "<h2>" + scale + "</h2>"
// 		input.value = ""; 
// 	} else {
// 		input.value = "";
// 		display.innerHTML = "<h2>Please Enter from Circle of Fifths: C G D A E B F# C# G# D# A# F</h2>";
// 		display.innerHTML += "<hr />";
// 	}


// });


			




			







	

