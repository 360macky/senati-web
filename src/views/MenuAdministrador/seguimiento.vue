<template>
    <!-- Container -->
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="mt-4">Seguimiento</h1>
        <p class="text-muted">Solicite estadísticas y reportes de acuerdo a la carrera y sede.</p>
        <div class="card my-4">
          <div class="card-body">
            
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group">
                  <label for="">Carrera:</label>
                  <select class="form-control" id="">
                    <option>Carrera #1</option>
                    <option>Carrera #2</option>
                    <option>Carrera #3</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label for="">Sede:</label>
                  <select class="form-control" id="">
                    <option>Sede #1</option>
                    <option>Sede #2</option>
                    <option>Sede #3</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-4">
                <button class="btn btn-info btn-block">Generar reporte</button>
              </div>
              <div class="col-lg-4">
                <button class="btn btn-success btn-block">Descargar Excel</button>
              </div>
              <div class="col-lg-4">
                <button class="btn btn-warning btn-block">Backup</button>
              </div>
            </div>

            <hr class="my-4">

            <!-- Alumnos -->
            <h4 class="my-3 text-primary">Estado de alumnos</h4>
            <div class="row">
              <div class="col-lg-12">
                <div class="card-deck">

                  <div class="card">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-lg-4 d-flex align-items-lg-center justify-content-lg-center">
                          <h1 class="text-primary">00%</h1>
                        </div>
                        <div class="col-lg-8">
                          <h4>Alumnos activos (<span class="text-danger">A</span>)</h4>
                          <p>Alumnos con proceso de titulación vigente</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-lg-4 d-flex align-items-lg-center justify-content-lg-center">
                          <h1 class="text-primary">00%</h1>
                        </div>
                        <div class="col-lg-8">
                          <h4>Alumnos inactivos (<span class="text-danger">F</span>)</h4>
                          <p>Alumnos ya titulados o que nunca se titularon</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <!-- Titulación -->
            <h4 class="my-3 text-primary">Estado de titulación</h4>
            <div class="row">
              <div class="col-lg-12">
                <div class="card-deck">

                  <div class="card">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-lg-12 d-flex align-items-lg-center justify-content-lg-center">
                          <h1 class="text-primary">00%</h1>
                        </div>
                        <div class="col-lg-12">
                          <h4>Faltante (<span class="text-danger">N</span>)</h4>
                          <p>ALumno que aún no envía sus los documentos correspondientes para la titulación</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-lg-12 d-flex align-items-lg-center justify-content-lg-center">
                          <h1 class="text-primary">00%</h1>
                        </div>
                        <div class="col-lg-12">
                          <h4>Pendiente (<span class="text-danger">P</span>)</h4>
                          <p>ALumno que envío sus documentos correspondientes, pero que aún no han sido revisados.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-lg-12 d-flex align-items-lg-center justify-content-lg-center">
                          <h1 class="text-primary">00%</h1>
                        </div>
                        <div class="col-lg-12">
                          <h4>Aprobado (<span class="text-danger">A</span>)</h4>
                          <p>Alumno que cumple con los requisitos para lograr la titulación.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
body {
      font-family: 'Didact Gothic', sans-serif;
    }
</style>