@extends("layouts.contactos")

@section("content")

    <div id="response">
        <div class="container">
            <a href="{{route("contactos.create")}}">ADD</a>
            <table class="table table-white table-striped mt-5 mb-5 d-none d-lg-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Telefono</th>
                    <th>Número de libros</th>
                    <th>Fecha de nacimiento</th>
                </tr>
                </thead>
                <tbody id="contentContacts">

                </tbody>
            </table>
        </div>
    </div>

@endsection
