1. Create a single HTML page using the editor of your choice. Name this page using the following template: your first name followed by an underscore and then “Lab4”.
2. You will be creatng the new and improved temperature conversion web tool. This app will accept a numeric temperature value and the user will select whether to convert to Fahrenheit or Celsius.
3. Create a function to be called when the “Convert to Fahrenheit” button is clicked:
- Read value in the textfield, this will be the celsius value to convert
- Implement the following formula to calculate the converted temperature value
(CELSIUS × 9/5) + 32 = FAHRENHEIT
- Round the temperature to a whole number
- Output this temperature to the corresponding “<p>” element on the web page with this text concatenated “ °F ”
4. Create a functon to be called when the “Convert to Celsius” button is clicked:
- Read value in the textfield, this will be the fahrenheit value to convert
- Implement the following formula to calculate the converted temperature value
(FAHRENHEIT − 32) × 5/9 = CELSIUS
- Round the temperature to a whole number
- Output this temperature to the corresponding “<p>” element on the web page with this text concatenated “ °C ”
1. Attach the functions created above to the web page using a click event for the two corresponding buttons.
2. When the page runs the user should enter a number into the textfield and one of the two buttons should be clicked, the converted temperature should be displayed on screen for the user to see.