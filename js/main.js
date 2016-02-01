/*Kristen Vincent's G575 Website*/

//create a function that is called when the script loads
function initialize() {
	cityInfo();
	addColumns();
	addEvents();
};

//funciton to make a table of the four cities and their populations
function cityInfo() {
	//Creating a city array and a population array
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

	//appand (jQuery) the header to the table
	$("table").append("<tr>");

	//adding columns for city and population
	$("tr").append("<th>City</th><th>Population</th>");

	//creating a loop to populate the table
	for (var i = 0; i < cityPopulation.length; i++) {
		//assigning the data that goes into the table to a variable
		var rowHTML = "<tr><td>" + cityPopulation[i].city + "</td><td>" + cityPopulation[i].population + "</td></tr>";
		//add the above string to the table
		$("table").append(rowHTML);
	};

};


//Start of debug exercise
//Creating a function to add a column to the table
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

    //a function is created, which will do the same thing to each row in the table
    $('tr').each(function(i){
    	//if an row in the table is the 0 position, 
    	if (i == 0){
    		//add City Size to the header
    		$(this).append('<th>City Size</th>');
    	} else {

    		//if a row is not the 0 position, a variable called citySize is created
    		var citySize;

    		if (cityPopulation[i-1].population < 100000){
    			citySize = 'Small';		
    			
    		} else if (cityPopulation[i-1].population < 500000){
    			citySize = 'Medium';
    	
    		} else {
    			citySize = 'Large';
    		
    		};
    		//attach the value related to the respective citySize variable to the data row of that element in the table
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

//A function called addEvents is created
function addEvents(){
	//When the user mouses over the table, a function is written to perform a task
	$('#mydiv').mouseover(function(){
		//A variable called color is set to 
		var color = "rgb(";
		//A loop is created to add a random color to the table when moused over
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
			};
		};

		$(this).css('color', color);
	});
	//another function is created within the addEvents function
	function clickme(){
		//this alert will be visible when the function is called
		alert('Hey, you clicked me!');
	};
	//The above alert is called when the table is clicked
	$('table').on('click', clickme);
};

//after the document has loaded, call function initialize
$(document).ready(initialize);