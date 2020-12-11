<template>
    <div>
    <nav class="navbar navbar-dark bg-primary navbar-expand">
    <router-link class="navbar-brand" to="/MenuAdmin/Inicio">
      <img src="../../assets/logo02.png" width="120px">
    </router-link>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
            Usuario
          </a>
          <div class="dropdown-menu">
            <router-link class="dropdown-item" to="/MenuAdmin/Perfil">Mi perfil</router-link>
            <a v-on:click="CerrarSession()" class="dropdown-item" href="#">Cerrar sesión</a>
          </div>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/MenuAdmin/Documentacion"><i class="fas fa-file mr-2"></i>Documentación</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/MenuAdmin/Mantenimiento"><i class="fas fa-cog mr-2"></i>Mantenimiento</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/MenuAdmin/Seguimiento"><i class="fas fa-chart-line mr-2"></i>Seguimiento</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view/>
  </div>
</template>
<script>
export default {
    methods:{
        CerrarSession(){
            localStorage.clear();
            sessionStorage.clear();
            this.$router.push("/Login");
        }
    }
}
</script>