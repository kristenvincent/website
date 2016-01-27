/*Kristen Vincent's G575 Website*/

//create a function that is called when the script loads//
function initialize() {
	cityInfo();
};

//funciton to make a table of the four cities and their populations//
function cityInfo() {
	//Creating a city array and a population array//
	var cityPopulation = [
		{	city: 'Green Bay',
			population: '104057'
		},

		{	city: 'Appleton',
			population: '72623'
		},

		{	city: 'De Pere',
			population: '23800'
		},

		{	city: 'Oshkosh',
			population: '66083'
		}

		]
	};

	//append (jQuery) the table to the div//
	$("#mydiv").append("<table>");

	//appand (jQuery) the header to the table//
	$("table").append("<tr>");

	//adding columns for city and population//
	$("row").append("<heading>City</heading><heading>Population</heading>");

	//creating a loop to populate the table//
	for (var i = 0; i < cityPopulation.length; i++) {
		console.log(i);
		var rowHTML = "<row><td>" + cityPopulation[i].city + "</td><td>" + cityPopulation[i].population + "</td></row>";
		//add the above string to the table//
		$("table").append(rowHTML);

};

//after the document has loaded, call the function//
$(document).ready(initialize);
