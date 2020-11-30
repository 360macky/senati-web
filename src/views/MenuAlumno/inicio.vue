<template>
  <div>
    <div class="w-100">
      <div id="content">
        <section id="sec1">
          <div class="contenedor-texto" style="padding-left: 15px">
            <h2 class="titulo">Como subir un archivo</h2>

            <p class="texto">-Entras a Subir documento</p>
            <p class="texto">-Dar click en Seleccion Documento</p>
            <p class="texto">-Eligir el documento a subir</p>
            <p class="texto">-Verificar si el documento es el correcto</p>
            <p class="texto">-Subir el archivo</p>
          </div>

          <iframe
            width="560"
            height="315"
            style="align-items: center; box-shadow: 2px 5px 10px #000"
            src="https://www.youtube.com/embed/jfS8jgFk-18"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </section>
        <div>
          <h2 class="subtitulo" style="padding: 20px">DOCUMENTOS EN PDF:</h2>
        </div>
        <div class="container">
          <div class="card">
            <img src="/img/header1.png" alt="" />
            <h4>Recibo de Pago</h4>
            <p>Recibo de haber pagado el derecho a la titulación</p>
          </div>
          <div class="card">
            <img src="/img/header1.png" alt="" />
            <h4>DNI</h4>
            <p>DNI o Carné de extranjería en archivo PDF.</p>
          </div>
          <div class="card">
            <img src="/img/header1.png" alt="" />
            <h4>Certificado de calificaciones</h4>
            <p>
              Certificado de estudios o Constancia del Logro de aprendizaje en
              archivo PDF
            </p>
          </div>
          <div class="card">
            <img src="/img/header1.png" alt="" />
            <h4>Copia del Certificado de Calificación Profesional</h4>
            <p>
              Copia del Certificado de Calificación Profesional visado por el
              jefe del CFP/Escuela
            </p>
          </div>
        </div>
        <div>
          <h2 class="subtitulo">REQUERIMIENTOS:</h2>
        </div>
        <section
          class="services contenedor"
          id="servicio"
          style="padding: 50px"
        >
          <div class="contenedor-servicio">
            <img src="img/quality_check_isometric.png" alt="" />
            <div class="checklist-servicio">
              <div class="service">
                <p class="n-service">
                  <span class="number">1</span> He verificado en el sistema
                  Sinfo que mis notas –Malla curricular están todos los cursos
                  aprobados, incluye la nota de Sustentación del Proyecto de
                  Innovación y/o Mejora
                </p>
              </div>
              <div class="service">
                <p class="n-service">
                  <span class="number">2</span>He verificado y doy fe de No
                  tener deudas pendientes con la Institución
                </p>
              </div>
              <div class="service">
                <p class="n-service">
                  <span class="number">3</span>He subido en archivo JPG al SINFO
                  la fotografía tamaño pasaporte, con las características
                  solicitadas.
                </p>
              </div>
              <div class="service">
                <p class="n-service">
                  <span class="number">4</span>He verificado en el sistema Sinfo
                  y doy fe haber aprobado el Programa de Complementación
                  (Ingreso anteriores al 2012-10).
                </p>
              </div>
              <div class="service">
                <p class="n-service">
                  <span class="number">5</span>He verificado en el sistema
                  (SINFO) que mis datos personales de: Nombre, apellidos, DNI,
                  fecha de nacimiento, están conformes.
                </p>
              </div>
              <div class="service">
                <p class="n-service">
                  <span class="number">6</span>He actualizado en el sistema
                  SINFO mi dirección, teléfono y correo electrónico.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer class="bg-dark p-3" style="bottom: 0">
          <p class="text-light text-center">Copyright 2020 SENATI</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped>
html,
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', sans-serif;
}

.title {
    text-align: center;
    font-size: 40px;
    color: #6a6a6a;
    margin-top: 100px;
    font-weight: 100;
}

.titulo {
    border-bottom: 2px solid #E6E6E6;
}

.titulo1 {
    padding: 10px 20px;
}

.texto {
    font-weight: 500;
}

section {
    height: 404px;
    display: flex;
    justify-content: space-evenly;
    padding: 0px 15px;
    align-items: center;
}

section h2 {
    font-size: 50px;
    font-weight: 500;
    margin-bottom: 5px;
}

section p {
    font-weight: 500;
    margin-bottom: 15px;
}

section a {
    display: inline-block;
    padding: 7px 0;
    color: #283773;
    text-decoration: none;
    width: 100px;
    text-align: center;
    border: 1px solid #fff;
    border-radius: 50px;
}

section img {
    height: 60%;
}

section:nth-child(1) {
    background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
}

.container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    /*flex-wrap: wrap;*/
    justify-content: center;
    margin: auto;
}

.container .card {
    width: 330px;
    height: 430px;
    border-radius: 8px;
    box-shadow: 0 2px 2px rgb(0, 0, 0, 0.2);
    overflow: hidden;
    margin: 20px;
    text-align: center;
    transition: all 0.25s;
}

.container .card:hover {
    transform: translateY(-15px);
    box-shadow: 0 12px 16px rgb(0, 0, 0, 0.2);
}

.container .card img {
    width: 330px;
    height: 220px;
}

.container .card h4 {
    font-weight: 600;
}

.container .card p {
    padding: 0 1rem;
    font-size: 16px;
    font-weight: 300;
}

.container .card a {
    font-weight: 500;
    text-decoration: none;
    color: #000;
    border: 1px solid skyblue;
    border-radius: 15px;
    padding: 5px 5px;
    bottom: 50px;
}

.container .card a:hover {
    background: skyblue;
}

.subtitulo {
    font-size: 40px;
    text-align: center;
    font-weight: 300;
    margin-bottom: 30px;
}

.contenedor-servicio {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
}

.contenedor-servicio img {
    width: 40%;
}

.checklist-servicio {
    width: 45%;
}

.service {
    margin-bottom: 20px;
}

.n-service {
    margin-bottom: 7px;
    text-align: left;
    padding: 0px 5px;
}

.number {
    display: inline-block;
    background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    margin-right: 5px;
    width: 30px;
    height: 30px;
    color: #fff;
    font-weight: 700;
}
</style>