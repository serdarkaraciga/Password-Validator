(function () {
    let password = document.querySelector('.password');

    let helperText = {
        charLength: document.querySelector('.helper-text.length'),
        Lowercase: document.querySelector('.helper - text Lowercase'),
        uppercase: document.querySelector('.helper - text.uppercase'),
        special: document.querySelector('.helper - text.special')
    };

    // next code here

})();

// Listen for keyup action on password field
password.addEventListener("keyup", function () {

    // Check that password is a minimum of 8 characters
    patternTest(pattern.charLength(),helperText.charLength);

    // Check that password contains a lowercase letter
    patternTest(pattern.Lowercase(),helperText.lowercase);

    // Check that password contains an uppercase letter
    patternTest(pattern.uppercase(),helperText.uppercase);

    // Check that password contains a number or special character
    patternTest(pattern.spectal(),helperText.special);

    // Check that all requirements are fulfilled
    if (
        hasClass(helperText.charLength, "valid") &
        hasClass(helperText.lowercase, "valid") &
        hasClass(helperText.uppercase, "valid") &
        hasClass(helperText.spectal, "valid")
    ) {
        addClass(password.parentElement, "valid");
    } else
        removeClass(password.parentElement, "valid");
    }
);
