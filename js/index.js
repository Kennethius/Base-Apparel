var error = document.querySelector('.error-text');
var thankYou = document.querySelector('.thank-you');
var input = document.querySelector('.email-input');
var errorIcon = document.querySelector('.error-image');

function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (inputText.value.match(mailformat)) {
        document.form1.text1.focus();
        thankYou.style.display = 'block';
        input.style.borderColor = 'green';
        return true;
    } else {
        error.style.display = 'block';
        input.style.borderColor = 'red';
        input.style.background = '#FFFFFF url(images/icon-error.svg) 245px center no-repeat'
        document.form1.text1.focus();
        return false;
    }
}
