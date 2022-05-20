var getData = function () {
    var name = document.getElementById("name").value;
    var mail = document.getElementById("email").value;
    var mensaje = document.getElementById("msg").value;

    if (name == "") {
        document.getElementById("name").focus();
    } else {
        if (mail == "") {
            document.getElementById("email").focus();
        } else {
            if (mensaje == "") {
                document.getElementById("msg").focus();
            } else {
                localStorage.setItem("nombre", name);
                localStorage.setItem("correo", mail);
                localStorage.setItem("msg", mensaje);
                window.open("../pages/muestra.html");
                document.getElementById("nombre").value = "";
                document.getElementById("email").value = "";
                document.getElementById("msg").value = "";
                document.getElementById("nombre").focus();
            }
        }
    }
    localStorage.clear();
}

var sendData = function(){
    var nombre = localStorage.getItem("nombre");
    var email = localStorage.getItem("correo");
    var mensaje = localStorage.getItem("msg");

    document.getElementById("contenido-mensaje").innerHTML = "Nombre: " + nombre + "<br>" + "Correo: " + email + "<br>" + "Mensaje: " + mensaje + "<br>";

}