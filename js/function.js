function enviarConsulta()
{
    let enlace= document.getElementById("botonContacto");
    let mensaje="https://wa.me/543515196190?text=Hola, mi nombre es *"+ document.getElementById("nombre").value+"*\n, email: "+document.getElementById("email").value+",\n teléfono *"+
     document.getElementById("telefono").value+"* y vivo en "+document.getElementById("provincia").value+".\n Necesito información sobre *"+document.getElementById("consulta").value
    enlace.href=mensaje+"*";

return mensaje
}