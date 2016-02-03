/*Kristen Vincent's G575 Website*/

//create a function that is called when the script loads
//this function contains functions that are defined below
function initialize() {
	cityInfo();
	addColumns();
	addEvents();
	addData();
	debugAjax();
};

//funciton to make a table of the four cities and their populations
function cityInfo() {
	//Creating an array containing city and population methods
	var cityPopulation = [
		{	
			city: 'Green Bay',
			population: 104057
		},

		{	
			city: 'Appleton',
			population: 72623
		},

		{	
			city: 'De Pere',
			population: 23800
		},

		{	
			city: 'Oshkosh',
			population: 66083
		}

	];


	//append (jQuery) the table to the div
	$("#mydiv").append("<table>");

	//appand (jQuery) the header row to the table
	$("table").append("<tr>");

	//adding columns for City and Population to the header row
	$("tr").append("<th>City</th><th>Population</th>");

	//creating a loop to populate the table
	for (var i = 0; i < cityPopulation.length; i++) {
		//assigning the data that goes into the table to a variable
		var rowHTML = "<tr><td>" + cityPopulation[i].city + "</td><td>" + cityPopulation[i].population + "</td></tr>";
		//add the above data to the table
		$("table").append(rowHTML);
	};

};


//Start of debug exercise
//Creating a function to add a column with values to the table
function addColumns(){
	//cityPopulation needs to be inside this function, too, to use it
	cityPopulation = [
		{	
			city: 'Green Bay',
			population: 104057
		},

		{	
			city: 'Appleton',
			population: 72623
		},

		{	
			city: 'De Pere',
			population: 23800
		},

		{	
			city: 'Oshkosh',
			population: 66083
		}

	];

    //a function is created, which will do the same thing to each row in the table (loop through the table)
    $('tr').each(function(i){
    	//if a row in the table is in the 0 position, 
    	if (i == 0){
    		//add City Size to the header row
    		$(this).append('<th>City Size</th>');
    	} else {

    		//if a row is not the 0 position, a variable called citySize is created
    		var citySize;
    		//citySize will be set to Small if cityPopulation is less than 100000
    		if (cityPopulation[i-1].population < 100000){
    			citySize = 'Small';		
    		//citySize will be set to Medium if cityPopulation is less than 500000	
    		} else if (cityPopulation[i-1].population < 500000){
    			citySize = 'Medium';
    		//citySize will be set to Large if cityPopulation fits neither of the above two criteria
    		} else {
    			citySize = 'Large';
    		
    		};
    		//attach the value related to the current iteration of the citySize variable to the data row of that element in the table
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

//A function called addEvents is created to add events that happen when the user does a specified action
function addEvents(){
	//When the user mouses over the table, a function is written to add a color to the text in the table
	$('#mydiv').mouseover(function(){
		//A variable called color is set to an rgb( string
		var color = "rgb(";
		//A loop is created to generate 3 numbers, which will create and rgb color value
		for (var i=0; i<3; i++){
			//to obtain each of those numbers, on each iteration of the loop, a variable called random is set to the rounded value
			//of a random number (between 0 and 1) multiplied by 255 (which is the max rgb color value)
			var random = Math.round(Math.random() * 255);
			//the contents of the random variable are joined with the contents of the color variable (concatenated)
			color += random;
			//if the value is less than 2, a comma will be concatenated to the color and random string
			if (i<2){
				color += ",";
			//if the value is not less than 2 (the value is 2 because we said above i<3), a ) will be concatenated
			//to the end of the string, capping the rgb string, which now has all 3 values
			} else {
				color += ")";
			};
		};
		//the css method is applied to the current element (#mydiv)
		//the first parameter is the color property, and the color we want to add is the random color stored in the 
		//color variable, which was generated in the above loop
		$(this).css('color', color);
	});
	//another function is created within the addEvents function
	function clickme(){
		//an alert method is created, which will display a message when the function is called
		alert('Hey, you clicked me!');
	};
	//The on method is used.  The first parameter is the click property, and upon click, the called clickme function is performed.
	$('table').on('click', clickme);
};

//A function called addData is created to add data to the page.
function addData(){
	//ajax method with jQuery
	$.ajax("data/madison.geojson", {
		dataType: "json",
		success: callback
	});
	console.log(response);
};

//a callback function is defined
function callback(response){
	console.log(response);
};


//Start of Module 3 Activity debugging
function debugAjax(){
	console.log("hello");
	var mydata;

	$.ajax("data/madison.geojson", {
		dataType: "json",
		success: function(response){
			mydata = response;
			console.log(mydata);
		}	
	});
	
	//Here we add a new HTML element br (line break)
	//$('#mydiv').append('<br>GeoJSON data:</br>' + JSON.stringify(mydata));
	
};


//after the document has loaded, call function initialize
$(document).ready(initialize);