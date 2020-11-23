<template>
    <div>
            <div class="d-flex">
        <div id="sidebar-container" class="bg-primary">
            <div class="logo">
                <img src="img/logo.png" alt="Logotipo de Senati" class="img-fluid mx-auto d-block" width="200px">
            </div>

            <div class="user m-3 bg-info rounded-pill">
                <li>
                    <a href="perfil" class=" text-light">
                        <img style="padding: 10px 5px;" src=" img/user.png " alt="Foto de Perfil" class="img-fluid avatar mr-2"> 001214638
                    </a>
                </li>
            </div>

            <div class="menu">
                <a href="inicio" class="selected d-block text-light p-3"><i class="fas fa-home mr-2"></i>Inicio</a>
                <a href="perfil" class="d-block text-light p-3"><i class="fas fa-user mr-2"></i>Perfil</a>
                <a href="documentacion_alumno" class="d-block text-light p-3"><i class="far fa-file mr-2"></i>Documentación</a>
                <a href="#" class="d-block text-light p-3"><i class="far fa-calendar mr-2"></i>Calendario</a>

                <a href="#" class="d-block text-light p-3"><i class="fas fa-sign-out-alt mr-2"></i>Cerrar sesión</a>
            </div>
        </div>

        <div class="w-100">
            <div id="content">
                <section id="sec1">

                    <div class="contenedor-texto" style="padding-left: 15px;">

                        <h2 class="titulo">Como subir un archivo </h2>

                        <p class="texto">1.-Entras a Subir documento</p>
                        <p class="texto">2.- Dar click en Seleccion Documento</p>
                        <p class="texto">3.- Eligir el documento a subir</p>
                        <p class="texto">4.- Verificar si el documento es el correcto</p>
                        <p class="texto">5.- Subir el archivo </p>

                    </div>

                    <iframe width="560" height="315" style="align-items: center; box-shadow: 2px 5px 10px #000;" src="https://www.youtube.com/embed/jfS8jgFk-18" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </section>
                <div>
                    <h2 class="subtitulo" style="padding: 20px;">DOCUMENTOS EN PDF:</h2>


                </div>
                <div class="container">


                    <div class="card">
                        <img src="/img/header1.png" alt="">
                        <h4>Recibo de Pago</h4>
                        <p>Recibo de haber pagado el derecho a la titulación</p>

                    </div>
                    <div class="card">
                        <img src="/img/header1.png" alt="">
                        <h4>DNI</h4>
                        <p>DNI o Carné de extranjería en archivo PDF. </p>

                    </div>
                    <div class="card">
                        <img src="/img/header1.png" alt="">
                        <h4>Certificado de calificaciones</h4>
                        <p>Certificado de estudios o Constancia del Logro de aprendizaje en archivo PDF
                        </p>

                    </div>
                    <div class="card">
                        <img src="/img/header1.png" alt="">
                        <h4>Copia del Certificado de Calificación Profesional</h4>
                        <p>Copia del Certificado de Calificación Profesional visado por el jefe del CFP/Escuela </p>

                    </div>



                </div>
                <div>
                    <h2 class="subtitulo">REQUERIMIENTOS:</h2>
                </div>
                <section class="services contenedor" id="servicio" style="padding: 50px;">

                    <div class="contenedor-servicio">
                        <img src="img/quality_check_isometric.png" alt="">
                        <div class="checklist-servicio">
                            <div class="service">
                                <p class="n-service"><span class="number">1</span> He verificado en el sistema Sinfo que mis notas –Malla curricular están todos los cursos aprobados, incluye la nota de Sustentación del Proyecto de Innovación y/o Mejora</p>

                            </div>
                            <div class="service">
                                <p class="n-service"><span class="number">2</span>He verificado y doy fe de No tener deudas pendientes con la Institución
                                </p>

                            </div>
                            <div class="service">
                                <p class="n-service"><span class="number">3</span>He subido en archivo JPG al SINFO la fotografía tamaño pasaporte, con las características solicitadas.</p>

                            </div>
                            <div class="service">
                                <p class="n-service"><span class="number">4</span>He verificado en el sistema Sinfo y doy fe haber aprobado el Programa de Complementación (Ingreso anteriores al 2012-10).</p>

                            </div>
                            <div class="service">
                                <p class="n-service"><span class="number">5</span>He verificado en el sistema (SINFO) que mis datos personales de: Nombre, apellidos, DNI, fecha de nacimiento, están conformes.</p>

                            </div>
                            <div class="service">
                                <p class="n-service"><span class="number">6</span>He actualizado en el sistema SINFO mi dirección, teléfono y correo electrónico.</p>

                            </div>

                        </div>
                    </div>
                </section>


                <footer class="bg-dark p-3" style="bottom:0; ">
                    <p class=" text-light text-center ">Copyright 2020 SENATI</p>
                </footer>



            </div>

        </div>

    </div>
    </div>
</template>

<script>
export default {
    name: 'Inicio',
    created() {
        if (this.getCookie('username') != '122365' || this.getCookie('password') != '123456') {
            window.location.href = '/';
        }
    },
    methods: {
        setCookie(cname, cvalue, exdays) {
            let d = new Date();
            d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
            let expires = 'expires=' + d.toUTCString();
            document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
        },
        getCookie(cname) {
            let name = cname + '=';
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return '';
        }
    }
}
</script>

<style scoped>
#sidebar-container .menu>.selected {
    background-color: grey;
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
</style>
