<template>
    <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="mt-4">Mi perfil</h1>
        <div class="card my-4">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <img src="img/user.png" alt="Foto de perfil" class="img-fluid d-block mx-auto" width="200px">
                <a href="#" class="d-block text-center mt-4"><i class="fas fa-edit mr-2"></i>Cambiar foto de perfil</a>
              </div>
              <div class="col-lg-8">
                <ul class="list-group">
                  <li class="list-group-item">
                    <span class="text-success">ID:</span> {{codAlu}}
                    <a href="#" class="float-right"><i class="fas fa-edit mr-2"></i>Editar</a>
                  </li>
                  <li class="list-group-item">
                    <span class="text-success">Nombres:</span> {{nombre}}
                    <a href="#" class="float-right"><i class="fas fa-edit mr-2"></i>Editar</a>
                  </li>
                  <li class="list-group-item">
                    <span class="text-success">Apellidos:</span> {{apellido}}
                    <a href="#" class="float-right"><i class="fas fa-edit mr-2"></i>Editar</a>
                  </li>
                  <li class="list-group-item">
                    <span class="text-success">Email:</span> {{email}}
                    <a href="#" class="float-right"><i class="fas fa-edit mr-2"></i>Editar</a>
                  </li>
                </ul> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data:()=>({
    email: localStorage.getItem("email"),
    apellido: localStorage.getItem("apellido"),
    nombre: localStorage.getItem("nombre"),
    id: localStorage.getItem("UserId"),
    carrera : localStorage.getItem("Carrera"),
    sede : localStorage.getItem("Sede"),
    telefono : localStorage.getItem("telefono"),
    codAlu : localStorage.getItem("codAlu"),
    FullName : localStorage.getItem("FullName")
  })
}
</script>