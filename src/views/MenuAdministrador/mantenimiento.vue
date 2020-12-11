<template>
    <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="mt-4">Mantenimiento</h1>
        <div class="card-deck my-4">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-8">
                  <h3 class="card-title text-primary">Generar reporte</h3>

                  <div class="form-group">
                    <label for="">Carrera:</label>
                    <select class="form-control" id="">
                      <option>Carrera #1</option>
                      <option>Carrera #2</option>
                      <option>Carrera #3</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="">Sede:</label>
                    <select class="form-control" id="">
                      <option>Sede #1</option>
                      <option>Sede #2</option>
                      <option>Sede #3</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-4">
                  <h1 class="text-center" style="font-size: 100px;"><i class="fas fa-file-export"></i></h1>
                </div>
              </div>

              <div class="d-flex justify-content-lg-between">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                  <label class="form-check-label" for="defaultCheck1">
                    Default checkbox
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                  <label class="form-check-label" for="defaultCheck1">
                    Default checkbox
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                  <label class="form-check-label" for="defaultCheck1">
                    Default checkbox
                  </label>
                </div>
              </div>

            </div>

            <div class="card-footer">
              <button class="btn btn-block btn-success">Generar reporte</button>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-8">
                  <h3 class="card-title text-primary">Subir reporte</h3>
                </div>
                <div class="col-lg-4">
                  <h1 class="text-center" style="font-size: 100px;"><i class="fas fa-file-import"></i></h1>
                </div>
              </div>
            </div>

            <div class="card-footer">
              <button class="btn btn-block btn-success">Subir reporte</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>