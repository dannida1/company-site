const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

function process(event) {
    event.preventDefault();

    const phoneNumber = phoneInput.getNumber();
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-mail').value;

    /*
    function isValidMail(email) {
        return /^[a-zA-Z0-9. !#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-] {0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-] {0, 61} [a-zA-Z0-9])?)*$/.test(email);
    }*/
    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    if (name == '' || email == '' || phoneInputField == '') {
        alert('Fill all fields');
    } else if (phoneInput.isValidNumber()) {
        //info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
        alert('Name: ' + name + '\n' + 'email: ' + email + '\n' + 'Phone number:' + phoneNumber);
    } else {
        //error.innerHTML = `Invalid phone number.`;
        alert('Invalid phone number');
    }

    document.getElementById("login").reset();
}