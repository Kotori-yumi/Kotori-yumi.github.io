function revisar(input) {
    console.log("ejecutando")

    //let elemento = document.getElementById("nombre");

    if (input.value == "") {
        input.className = "form-control is-invalid";
        return false;
    } else {
        input.className = "form-control is-valid";
        return true;
    }
}

function validarEmail(elemento) {
    //sdkajds@dsadsaid.huh expresion regular, se escribe dentro de dos barras // 

    let expresion = /\w+@\w+\.[a-z]{2,}$/;
    if (elemento.value != " " && expresion.test(elemento.value)) {
        elemento.className = "form-control is-valid"; return true;
    } else {
        elemento.className = "form-control is-invalid"; return false;
    }
}

function validarConsulta(input) {
    if (input.value != "" && input.value.length >= 10) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}


function validarForm(event) {
    //con esta linea prevengo que se actualice la pagina del boton sumit
    event.preventDefault();
    console.log("Desde Validar Form");

    if (revisar(document.getElementById("nombre")) &&
        validarEmail(document.getElementById("email")) &&
        validarConsulta(document.getElementById("consulta"))) {

        enviarMail();    

    } else {
       
    }
}

function enviarMail() {
    let template_params = {
        "from_name": document.getElementById("nombre").value,
        "message_html": `Mensaje ${document.getElementById(`consulta`).value} -
        Email: ${document.getElementById(`email`).value}`};

    let service_id = "default_service";
    let template_id = "rolling";
 emailjs.send(service_id, template_id, template_params).then(
     function(response){
         console.log("Su respuesta se envio correctamente" + response);

         document.getElementById("alerta").className="alert alert-primary m-4";
         document.getElementById("alerta").innerText= " SU CONSULTA FUE ENVIADA";
     }, function(error){
         console.log("se produjo un error" + error);
         document.getElementById("alerta").className="alert alert-warning m-4";
         document.getElementById("alerta").innerText=" Ocurrio un error en el envio";
         
     }
 )
}