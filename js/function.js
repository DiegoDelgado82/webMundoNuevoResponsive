function enviarConsulta()
{
    let enlace= document.getElementById("botonContacto");
    let mensaje="https://wa.me/543515196190?text=Hola, mi nombre es "+ document.getElementById("nombre").value+", email: "+document.getElementById("email").value+", teléfono "+
     document.getElementById("telefono").value+" y vivo en "+document.getElementById("provincia").value+".\n Necesito información sobre *"+document.getElementById("consulta").value
    enlace.href=mensaje+"*";

return mensaje
}

function cambiarImagenContenedor(dir)
{

    const container = document.querySelector("#container");
    container.innerHTML="";
    const img = document.createElement("img");
    img.src = dir;
    img.alt = "Foto Infraestructura";
    
    container.appendChild(img);

    /* let imagenCarousel=document.getElementById("contenedorCarousel") 
    alert(dir);
    imagenCarousel.scr="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
    alert(imagenCarousel.scr)*/
}