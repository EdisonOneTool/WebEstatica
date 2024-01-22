bgL=()=>{   document.getElementById("cover").style.backgroundColor="rgba(112, 112, 112, 0.616)"
}
bgD=()=>{   document.getElementById("cover").style.backgroundColor="#0a0a0a"
document.getElementById("cover").style.color="white"
}
changeUsername=()=> {
    //Obtengo el contenido del campo de texto
    var username = document.getElementById("userNameField").value;
   
    // Si la lista no es vacia
    if(username !== "" && username !== null) {
        //Cambio el color del cover a verde
        document.getElementById("cover").style.backgroundColor = "green"

        //Agrego el contenido del campo al texto de bienvenida
        document.getElementById("userNameText").textContent = username;

        // Crear un nuevo elemento li
        var nuevoElemento = document.createElement("li");

        // Establecer el contenido del nuevo elemento con el valor ingresado
        nuevoElemento.textContent = username;

        // Obtener la lista ul existente
        var miLista = document.getElementById("miLista");

        // Agregar el nuevo elemento a la lista
        miLista.appendChild(nuevoElemento);

        // Limpiar el campo de texto después de agregar a la lista
        document.getElementById("userNameField").value = "";
    }
    QSI.API.run();
}