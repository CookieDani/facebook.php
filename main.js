correo = document.getElementById("email")
contra = document.getElementById("pass")
buton = document.getElementById("accion")
mostrarPass = document.getElementById("mostrar2")
mostrarCorreo = document.getElementById("mostrar1")

buton.addEventListener("click", obtenerDatos)

function obtenerDatos() {
  mostrarCorreo.innerHTML = "Has sido victima de un ataque"
  mostrarPass.innerHTML = `tu correo es: ${correo.value} y tu contraseña:${contra.value}`
}
