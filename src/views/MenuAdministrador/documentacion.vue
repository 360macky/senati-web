<template>
    <div class="container">
    <div class="row mt-4">
      <div class="col-lg-12">
        <h1>Documentación</h1>
        <p class="text-muted">Revise los registros de los alumnos por carrera</p>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div class="card mb-4">
          <div class="card-header">

            <div class="row">
              <div class="col-lg-6">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Carrera:</label>
                  <select class="form-control" id="exampleFormControlSelect1" v-on:change="alerta(1)">
                    <option id="option-disable" >Seleccionar</option>
                    <option v-for="(carrera,index) in carreras" :key="index" >
                      {{carrera.nombre}}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Sede:</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Sede #1</option>
                    <option>Sede #2</option>
                    <option>Sede #3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Table -->
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <table class="table table-bordered">
                  <thead class="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>Nombres</th>
                      <th>Apellidos</th>
                      <th>Correo electrónico</th>
                      <th>Teléfono</th>
                      <th>DNI</th>
                      <th>Certificado de estudios</th>
                      <th>Proyecto</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="alumno in alumnos" v-bind:key="alumno.id">
                      <td>5672345</td>
                      <td>Hector Marcos</td>
                      <td>Salas Mendoza</td>
                      <td>hectorsalas@mail.com</td>
                      <td>4545454</td>
                      <td>
                        <div class="form-check form-check-inline">
                          <input type="checkbox" class="form-check-input" checked>
                          <a href="">Ver</a>
                        </div>
                      </td>
                      <td>
                        <div class="form-check form-check-inline">
                          <input type="checkbox" class="form-check-input" checked>
                          <a href="">Ver</a>
                        </div>
                      </td>
                      <td>
                        <div class="form-check form-check-inline">
                          <input type="checkbox" class="form-check-input" checked>
                          <a href="">Ver</a>
                        </div>
                      </td>
                      <td>A</td>
                      <td>
                        <button class="btn btn-success">Aprobado</button>
                        <button class="btn btn-info">Generar reporte</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  created(){
    this.getCarreras();
  },
  data:()=>({
    carreras : null,
    alumnos : null
  }),
  methods:{
    async getCarreras(){
      var config = {
        method: 'get',
        url: 'https://senati.herokuapp.com/api/careers/',
        headers: { }
      };
      await axios(config).then(response =>{
        console.log(response.data);
        this.carreras = response.data
      }).catch(error=>{
        console.log(error)
      })
    },
    async alerta(carreraId){
      document.getElementById("option-disable").disabled = true;
      console.log(document.getElementById("exampleFormControlSelect1").value)
      if(carreraId == null){
        carreraId = 1
      }
      await axios.get("https://senati.herokuapp.com/api/careers-students/",{params:{id_carrera: carreraId}}).then(response=>{
        console.log(response.data)
      }).catch(error=>{
        console.log(error)
      })
    }
  }
}
</script>