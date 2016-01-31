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

    	if (i == 0){

    		$(this).append('<th>City Size</th>');
    	} else {
//CITY SIZE NEEDS TO BE SET TO SOMETHING
//HOW CAN IT BE IF/ELSE IF WE NEED BOTH?
//FUNCTION BY .EACH NOT DEFINED
    		var citySize;

    		if (cityPopulation[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPopulation[i-1].population < 500000){
    			citysize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

    		$(this).append('<td' + citySize + '</td>');
    	};
    });
};

//A function called addEvents is created
function addEvents(){
	//When the user mouses over the table, a function is written to perform a task
	$('#table').mouseover(function(){
//FUNCITON BY.MOUSEOVER NOT DEFINED
//WHAT DOES 'RGB(' DO?
		//A variable called color is set to 
		var color = "rgb(";
		//A loop is created to add a random color to the table when moused over
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += "random";

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