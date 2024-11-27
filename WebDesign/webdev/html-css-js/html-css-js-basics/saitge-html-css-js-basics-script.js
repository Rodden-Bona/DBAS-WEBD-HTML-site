// script.js

// Selecting the button element by its ID
const BUTTON = document.getElementById('clickMe');
// Selecting the DIV element by its ID
const BUTTON_STATUS = document.getElementById('button_status');

// Adding an event listener to respond when the button is clicked
BUTTON.addEventListener('click', function() {
    console.log('Button was clicked!');
    // This message will be displayed in the browser console when the button is clicked
    
    // Un-comment this code to change the button text
    // BUTTON.innerHTML = "Button was Clicked";
    // Change the button text when the button is clicked

    BUTTON_STATUS.innerHTML = "Button was clicked"
});
