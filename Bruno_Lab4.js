        /*
            Name: Bruno Surdi Oliveira
            Date: Feb 2020
            Purpose: Lab 4 - Temperature Converter
        */

        //Function that converts Celsius to Fahrenheit
        function fahrenheitConvertion() {
            // Grab the value entered in the Enter temperature input
            var valueTemperature = document.getElementById("tbInput").value;
            // console.log(typeof valueTemperature); -Returned String
            var valueTemperature = parseInt(valueTemperature);

            // Converting
            var FahrConvertion = ((valueTemperature * (9 / 5)) + 32);
            // console.log(FahrConvertion);

            // Grab the output area
            var elementOutput = document.getElementById("pTemperature");

            // Populate with the convertion 
            elementOutput.innerHTML = Math.round(FahrConvertion) + "°F";
        }

        //Function that converts Fahrenheit to Celsius 
        function celsiusConvertion() {
            // Grab the value entered in the Enter temperature input
            var valueTemperature = document.getElementById("tbInput").value;
            // console.log(typeof valueTemperature);
            var valueTemperature = parseInt(valueTemperature);

            // Converting
            var celConvertion = (valueTemperature - 32) * (5 / 9);
            // console.log(celConvertion); 

            // Grab the output area
            var elementOutput = document.getElementById("pTemperature");

            // Populate with the convertion 
            elementOutput.innerHTML = Math.round(celConvertion) + "°C";
        }