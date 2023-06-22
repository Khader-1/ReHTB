function reHTB() {

    // Find all text inputs with class "text-success"
    var textInputs = document.querySelectorAll('input.text-success');

    // Iterate through each text input
    textInputs.forEach(function (input) {
        // Get the current value
        var currentValue = input.value;

        // Create a hidden field
        var hiddenField = document.createElement('input');
        hiddenField.type = 'hidden';
        hiddenField.value = currentValue;

        // Insert the hidden field as a sibling after the input
        input.parentNode.insertBefore(hiddenField, input.nextSibling);

        // Remove the class and empty the input
        input.classList.remove('text-success');
        input.value = '';

        // Enable the input
        input.disabled = false;

        // Find the parent of the parent of the input
        var parentContainer = input.parentNode.parentNode;

        // Find the next button within the parent container
        var nextButton = parentContainer.querySelector('.btnAnswer');

        // Enable the next button
        nextButton.disabled = false;
        // nextButton remove all actions and events
        nextButton.removeAttribute('onclick');

        // Set the onclick event for the next button
        nextButton.onclick = function () {
            // prevent default action
            event.preventDefault();
            // Get the hidden field value
            var hiddenValue = hiddenField.value;

            // Check if the input value matches the hidden field value
            if (input.value === hiddenValue) {
                // Disable the button
                nextButton.disabled = true;

                // Set the class of the input to "text-success"
                input.classList.add('text-success');
                // remove the class of the input to "text-danger"
                input.classList.remove('text-danger');
            } else {
                // Set the class of the input to "text-danger"
                input.classList.add('text-danger');
            }
        };
    });
}

reHTB();

// call the function on document ready
document.addEventListener('DOMContentLoaded', function() {
    // Document is fully loaded
    reHTB(); // Call your function here
});

window.onload = function() {
    // Document and all external resources are fully loaded
    reHTB(); // Call your function here
};
