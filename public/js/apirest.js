
function api_js_get() {
    const xhttp = new XMLHttpRequest()
    xhttp.onload = function () {
        let contactos = JSON.parse(xhttp.responseText)
        let salida = "";
        for (let i = 0; i < contactos.length; i++) {
            salida += `
            <tr>
                <td>${contactos[i].id}</td>
                <td>${contactos[i].nombre}</td>
                <td>${contactos[i].telefono}</td>
                <td>${contactos[i].num_libros}</td>
                <td>${contactos[i].fecha_nacimiento}</td>
                <td>
                    <button class="btn btn-danger" onclick="api_js_delete(${contactos[i].id})">DELETE</button>
                    <a class="btn btn-info" href="contactos/${contactos[i].id}/edit">EDIT</a>
                </td>
            </tr>
            `
        }
        document.getElementById("contentContacts").innerHTML = salida + "<br>"
    }
    xhttp.open("GET", "/api/contactoApi", true)
    xhttp.send()
}

function api_post(){
    let name = document.getElementById("nombre").value
    let telephone = document.getElementById("telefono").value
    let price = document.getElementById("price").value
}
