function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function closeAlert(){
    document.getElementById("alert-success").classList.remove("show");
    document.getElementById("alert-danger").classList.remove("show");
}


function sendForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data)
    
    if(data.password1 === data.password2 && data.terminos) {
        showAlertSuccess();
    } else {
        showAlertError();
    }
}




