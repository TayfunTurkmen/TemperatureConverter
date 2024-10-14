# Temperature Converter

## Overview

This project is a simple **Temperature Converter** built using HTML, CSS, and JavaScript. It allows users to convert temperature values between Celsius, Fahrenheit, and Kelvin. The conversion is based on user input, and the "Convert" button only becomes active once all fields (temperature, "from" unit, and "to" unit) are filled.

## Features

- Convert temperatures between Celsius, Fahrenheit, and Kelvin.
- The "Convert" button is disabled until the temperature value and both units are selected.
- Results are displayed below the form after conversion.

## Project Structure

The project consists of three main files:

1. **index.html**: The structure of the temperature converter.
2. **style.css**: Basic styling to make the UI user-friendly.
3. **script.js**: The JavaScript logic for handling the form input, enabling/disabling the button, and performing the temperature conversion.

## How to Use

1. Enter a temperature in the input field.
2. Select the "From Unit" (the unit of the temperature you are converting from).
3. Select the "To Unit" (the unit you are converting the temperature to).
4. Click the "Convert" button (it will be enabled only when all fields are filled).
5. The result will be displayed below the form.

### Example

- If you enter `34` as the temperature, select **Celsius** as the "From Unit," and select **Fahrenheit** as the "To Unit," the result will display:
  
34 Celsius is 93.20 Fahrenheit


## Installation and Setup

1. Clone or download the repository.
2. Open the `index.html` file in any modern web browser to use the temperature converter.

## Code Explanation

- **HTML**: Provides the structure with an input field for temperature, two dropdown menus for selecting units, and a button for conversion.
- **CSS**: Adds simple styling for better user experience.
- **JavaScript**: Handles:
- Enabling and disabling the convert button based on user input.
- Temperature conversion between Celsius, Fahrenheit, and Kelvin using basic mathematical formulas.
- Displaying the result.

## Formulas Used

- **Celsius to Fahrenheit**: 

°F = (°C × 9/5) + 32

- **Fahrenheit to Celsius**: 

°C = (°F − 32) × 5/9

- **Celsius to Kelvin**: 

K = °C + 273.15

- **Kelvin to Celsius**: 

°C = K − 273.15

K = (°F − 32) × 5/9 + 273.15

- **Kelvin to Fahrenheit**: 

°F = (K − 273.15) × 9/5 + 32

Roadmap: https://roadmap.sh/projects/temperature-converter

