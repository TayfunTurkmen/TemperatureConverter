// DOM Elements
const temperatureInput = document.getElementById('temperature');
const fromUnitSelect = document.getElementById('fromUnit');
const toUnitSelect = document.getElementById('toUnit');
const convertButton = document.getElementById('convertButton');
const resultDiv = document.getElementById('result');

// Function to check if all fields are filled
function checkFields() {
    if (temperatureInput.value && fromUnitSelect.value && toUnitSelect.value) {
        convertButton.disabled = false;
    } else {
        convertButton.disabled = true;
    }
}

// Event listeners for field changes
temperatureInput.addEventListener('input', checkFields);
fromUnitSelect.addEventListener('change', checkFields);
toUnitSelect.addEventListener('change', checkFields);

// Temperature conversion logic
function convertTemperature(temp, fromUnit, toUnit) {
    let convertedTemp;

    // Convert from Celsius
    if (fromUnit === 'Celsius') {
        if (toUnit === 'Fahrenheit') {
            convertedTemp = (temp * 9/5) + 32;
        } else if (toUnit === 'Kelvin') {
            convertedTemp = temp + 273.15;
        } else {
            convertedTemp = temp;
        }
    }

    // Convert from Fahrenheit
    else if (fromUnit === 'Fahrenheit') {
        if (toUnit === 'Celsius') {
            convertedTemp = (temp - 32) * 5/9;
        } else if (toUnit === 'Kelvin') {
            convertedTemp = (temp - 32) * 5/9 + 273.15;
        } else {
            convertedTemp = temp;
        }
    }

    // Convert from Kelvin
    else if (fromUnit === 'Kelvin') {
        if (toUnit === 'Celsius') {
            convertedTemp = temp - 273.15;
        } else if (toUnit === 'Fahrenheit') {
            convertedTemp = (temp - 273.15) * 9/5 + 32;
        } else {
            convertedTemp = temp;
        }
    }

    return convertedTemp.toFixed(2);
}

// Convert button click event
convertButton.addEventListener('click', () => {
    const temp = parseFloat(temperatureInput.value);
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;
    
    const result = convertTemperature(temp, fromUnit, toUnit);
    resultDiv.textContent = `${temp} ${fromUnit} is ${result} ${toUnit}`;
});
