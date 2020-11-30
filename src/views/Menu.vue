<template>
  <div class="d-flex">
    <!-- <div class="row p-0 m-0"> -->
      <div id="sidebar-container" class="bg-primary">
            <div class="logo">
                <a href="https://www.senati.edu.pe/"><img src="../assets/logo.png" alt="Logotipo de Senati" class="img-fluid mx-auto d-block" width="200px"></a>
            </div>

            <div style="background: skyblue;" class="text-left">
                <li style="list-style: none;">
                    <router-link to="/Menu/Perfil" class="usuario">
                        <img style="padding: 10px 5px;" src="../assets/user.png" alt="Foto de Perfil" class="img-fluid avatar mr-2"> SERGIO ALEJANDRO
                    </router-link>
                </li>
            </div>

            <div class="menu text-left">
                <router-link to="/Menu/Inicio" class="d-block text-light p-3"><i class="fas fa-home mr-2"></i>Inicio</router-link>
                <router-link to="/Menu/Perfil" class="d-block text-light p-3"><i class="fas fa-user mr-2"></i>Perfil</router-link>
                <router-link to="/Menu/Documentacion" class="d-block text-light p-3"><i class="far fa-file mr-2"></i>Documentación</router-link>
                <router-link to="/Menu/Calendario" class="d-block text-light p-3"><i class="far fa-calendar mr-2"></i>Calendario</router-link>

                <a href="#" class="d-block text-light p-3"><i class="fas fa-sign-out-alt mr-2"></i>Cerrar sesión</a>
            </div>
        </div>
      <!-- <div class="col-md-9"> -->
        <router-view id="w-100"> </router-view>
      <!-- </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Menu",
  data: () => ({
    email: localStorage.getItem("email"),
    apellido: localStorage.getItem("apellido"),
    nombre: localStorage.getItem("nombre"),
  }),
};
</script>

<style>
#sidebar-container .menu>.selected {
    background-color: grey;
}

body {
    font-family: 'Roboto', sans-serif;
}

#sidebar-container .menu>a:hover {
    background-color: #0275d8;
    text-decoration: none;
}

.bg-primary {
    background-color: #111B54 !important;
}

#sidebar-container {
    min-height: 100vh;
}

#sidebar-container .menu {
    width: 15rem;
}


/* .w-100 {
  overflow-y: auto;
} */

.avatar {
    max-width: 45px;
}

#content {
    overflow-y: auto;
    height: 100vh;
}

#icon01,
#icon02,
#icon03 {
    cursor: pointer;
}

.usuario {
    text-decoration: none;
    color: black;
}

.usuario:hover {
    color: #fff;
    text-decoration: none;
}
</style>