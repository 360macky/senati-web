<template>
  <div>
    <div class="row">
      <div class="col-lg-2 col-md-3 col-sm-12">
        <div class="Menu">
          <div class="">
            <div id="sidebar-container" class="bg-primary">
              <div class="logo">
                <img
                  src="../assets/logo.png"
                  alt="Logotipo de Senati"
                  class="img-fluid mx-auto d-block"
                  width="200px"
                />
              </div>

              <div class="user m-3 bg-info rounded-pill">
                <li class="nav-item">
                  <a href="#" class="nav-link text-light">
                    <img
                      src="img/user.png"
                      alt="Foto de Perfil"
                      class="img-fluid avatar mr-2"
                    />
                    {{ nombre + " " + apellido }}
                  </a>
                </li>
              </div>

              <div class="menu">
                <router-link to="/Menu/Inicio" class="d-block text-light p-3"
                  ><i class="fas fa-home mr-2"></i>Inicio</router-link
                >
                <router-link
                  to="/Menu/Perfil"
                  class="selected d-block text-light p-3"
                  ><i class="fas fa-user mr-2"></i>Perfil</router-link
                >
                <router-link
                  to="/Menu/Documentacion"
                  class="d-block text-light p-3"
                  ><i class="far fa-file mr-2"></i>Documentación</router-link
                >
                <router-link to="/Menu/Calendario" class="d-block text-light p-3"
                  ><i class="far fa-calendar mr-2"></i>Calendario</router-link
                >
                <router-link to="/Menu/Contacto" class="d-block text-light p-3"
                  ><i class="fas fa-comments mr-2"></i>Contacto</router-link
                >
                <a
                  href="#"
                  class="d-block text-light p-3"
                  @click="$router.push('/Login')"
                  ><i class="fas fa-sign-out-alt mr-2"></i>Cerrar sesión</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <router-view id="content"> </router-view>
      </div>
    </div>
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
<style scoped>
body {
  overflow: hidden;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
}

#sidebar-container .menu > .selected {
  background-color: grey;
}

#sidebar-container .menu > a:hover {
  background-color: #0275d8;
  text-decoration: none;
}

.bg-primary {
  background-color: #111b54 !important;
}

#sidebar-container {
  min-height: 100vh;
}

#sidebar-container .menu {
  width: auto;
}

/* .w-100 {
  overflow-y: auto;
} */

.avatar {
  max-width: 35px;
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
/* Contacto Style */
</style>