"Use strict"

window.onload = function(){
    const emailForm = document.getElementById("emailForm");
    emailForm.addEventListener("submit", printForData);

    function printForData(event) {
        event.preventDefault();
        const emailTxt = document.getElementById("email");
        const pwTxt = document.getElementById("password");
        console.log(emailTxt.value);
        console.log(pwTxt.value);
        emailTxt.value = "";
        pwTxt.value = "";
        emailTxt.focus();
    }

}