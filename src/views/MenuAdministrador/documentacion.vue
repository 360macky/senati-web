<template>
    <div class="container">
        <div class="row mt-4">
            <div class="col-lg-12">
                <h1>Documentación</h1>
                <p class="text-muted">
                    Revise los registros de los alumnos por carrera
                </p>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="card mb-4">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1"
                                        >Carrera:</label
                                    >
                                    <select
                                        class="form-control"
                                        id="exampleFormControlSelect1"
                                        v-on:change="alerta()"
                                    >
                                        <option id="option-disable">
                                            Seleccionar
                                        </option>
                                        <option
                                            v-for="(carrera, index) in carreras"
                                            :key="index"
                                            :value="carrera.id"
                                        >
                                            {{ carrera.nombre }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1"
                                        >Sede:</label
                                    >
                                    <select
                                        class="form-control"
                                        id="exampleFormControlSelect1"
                                    >
                                        <option>Luis Cáceres Graziani</option>
                                        <option>Independencia</option>
                                        <option>San Juan De Lurigancho</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Table -->
                <!-- <div class="row">
                    <div class="col-lg-12">
                        <div v-if="alumnos != null" class="card">
                            <div class="card-body">
                                <table
                                    class="table table-bordered table-responsive"
                                >
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
                                        <tr
                                            v-for="alumno in alumnos"
                                            v-bind:key="alumno.id"
                                        >
                                            <td>{{ alumno.id_s }}</td>
                                            <td>{{ alumno.nom_usu }}</td>
                                            <td>{{ alumno.ape_usu }}</td>
                                            <td>{{ alumno.email_usu }}</td>
                                            <td>{{ alumno.telf_usu }}</td>
                                            <td>
                                                <div
                                                    class="form-check form-check-inline"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                    />
                                                    <a
                                                        data-toggle="modal"
                                                        :data-target="
                                                            '.dni' +
                                                            alumno.id_usu
                                                        "
                                                        >Ver</a
                                                    >
                                                </div>

                                                <div
                                                    :class="
                                                        'modal fade bd-example-modal-lg dni' +
                                                        alumno.id_usu
                                                    "
                                                    tabindex="-1"
                                                    role="dialog"
                                                    aria-labelledby="myLargeModalLabel"
                                                    aria-hidden="true"
                                                    :id="
                                                        '#exampleModalCenter' +
                                                        alumno.id_s
                                                    "
                                                >
                                                    <div
                                                        class="modal-dialog modal-lg"
                                                        role="document"
                                                    >
                                                        <div
                                                            class="modal-content"
                                                        >
                                                            <div
                                                                v-if="
                                                                    alumno.url_dni ==
                                                                    null
                                                                "
                                                            >
                                                                El alumno aun no
                                                                a entregado el
                                                                documento
                                                                respectivo
                                                            </div>
                                                            <iframe
                                                                width="100%"
                                                                height="600"
                                                                :src="
                                                                    alumno.url_dni
                                                                "
                                                                frameborder="0"
                                                            >
                                                                <div
                                                                    class="h-100"
                                                                ></div>
                                                            </iframe>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div
                                                    class="form-check form-check-inline"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                    />
                                                    <a
                                                        data-toggle="modal"
                                                        :data-target="
                                                            '.certificado' +
                                                            alumno.id_usu
                                                        "
                                                    >
                                                        Ver
                                                    </a>
                                                </div>
                                                <div
                                                    :class="
                                                        'modal fade bd-example-modal-lg certificado' +
                                                        alumno.id_usu
                                                    "
                                                    tabindex="-1"
                                                    role="dialog"
                                                    aria-labelledby="myLargeModalLabel"
                                                    aria-hidden="true"
                                                >
                                                    <div
                                                        class="modal-dialog modal-lg"
                                                        role="document"
                                                    >
                                                        <div
                                                            class="modal-content"
                                                        >
                                                            <div
                                                                v-if="
                                                                    alumno.url_certificado ==
                                                                    null
                                                                "
                                                            >
                                                                El alumno aun no
                                                                a entregado el
                                                                documento
                                                                respectivo
                                                            </div>
                                                            <iframe
                                                                width="100%"
                                                                height="600"
                                                                :src="
                                                                    alumno.url_certificado
                                                                "
                                                                frameborder="0"
                                                            >
                                                                <div
                                                                    class="h-100"
                                                                ></div>
                                                            </iframe>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div
                                                    class="form-check form-check-inline"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                    />
                                                    <a
                                                        data-toggle="modal"
                                                        :data-target="
                                                            '.proyecto' +
                                                            alumno.id_usu
                                                        "
                                                    >
                                                        Ver
                                                    </a>
                                                </div>
                                                <div
                                                    :class="
                                                        'modal fade bd-example-modal-lg proyecto' +
                                                        alumno.id_usu
                                                    "
                                                    tabindex="-1"
                                                    role="dialog"
                                                    aria-labelledby="myLargeModalLabel"
                                                    aria-hidden="true"
                                                >
                                                    <div
                                                        class="modal-dialog modal-lg"
                                                        role="document"
                                                    >
                                                        <div
                                                            class="modal-content"
                                                        >
                                                            <div
                                                                v-if="
                                                                    alumno.url_proyecto ==
                                                                    null
                                                                "
                                                            >
                                                                El alumno aun no
                                                                a entregado el
                                                                documento
                                                                respectivo
                                                            </div>
                                                            <iframe
                                                                width="100%"
                                                                height="600"
                                                                :src="
                                                                    alumno.url_proyecto
                                                                "
                                                                frameborder="0"
                                                            >
                                                                <div
                                                                    class="h-100"
                                                                ></div>
                                                            </iframe>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>A</td>
                                            <td>
                                                <button class="btn btn-success">
                                                    Aprobado
                                                </button>
                                                <button class="btn btn-info">
                                                    Generar reporte
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
        <!-- Paginacion -->
        <div class="overflow-auto">
            <b-pagination
                ref="paginacion"
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
                :localNumberOfPages="rows"
                :input="alerta()"
            ></b-pagination>
            <p class="mt-3">Current Page: {{ currentPage }}</p>

            <b-table
                id="my-table"
                :items="alumnos"
                :per-page="perPage"
                :current-page="currentPage"
                small
            ></b-table>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    created() {
        if (this.carreras == null) {
            this.getCarreras();
        }
    },
    data: () => ({
        carreras: null,
        alumnos: null,
        ContentType: { headers: { 'Content-Type': 'multipart/form-data' } },
        perPage: 10,
        currentPage: null,
        rows: null,
        items: [
            { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
            { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
            { id: 3, first_name: 'Barney', last_name: 'Rubble' },
            { id: 4, first_name: 'Betty', last_name: 'Rubble' },
            { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
            { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
            { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
            { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
            { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' },
        ],
    }),
    methods: {
        recargar(){
            this.$root.$emit('bv::refresh::table', 'my-table')
        },
        async getCarreras() {
            var config = {
                method: 'get',
                url: 'https://senati.herokuapp.com/api/careers/',
                headers: {},
            };
            await axios(config)
                .then((response) => {
                    console.log(response.data);
                    this.carreras = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async alerta() {
            if (this.currentPage != null && document.getElementById(
                    'exampleFormControlSelect1'
                ).value != (null || "")) {
                var carreraId = document.getElementById(
                    'exampleFormControlSelect1'
                ).value;
                if (this.carreras == null) {
                    carreraId = 1;
                }
                var dataForm = new FormData();
                dataForm.append('id_carrera', carreraId);
                dataForm.append('rows_quantity', 10);
                dataForm.append(
                    'page_number',
                    this.currentPage == null ? 1 : this.currentPage
                );
                document.getElementById('option-disable').disabled = true;
                // document.getElementById('option-disable').value);
                console.log(
                    document.getElementById('exampleFormControlSelect1').value
                );
                console.log('Pagina Actual: ' + this.currentPage);

                await axios
                    .post(
                        'https://senati.herokuapp.com/api/careers-students/',
                        dataForm,
                        this.ContentType
                    )
                    .then((response) => {
                        console.log(response);
                        if (this.currentPage > 1) {
                            for (let i = 0; i < ((this.currentPage-1)*this.perPage); i++) {
                                this.alumnos[i] = {i : "relleno"};
                            }
                            console.log("RELLENO: "+this.alumnos)
                            for(var i = 0; i<(response.data.filas).length; i++){
                            this.alumnos[(this.currentPage-1)*this.perPage+i] = response.data.filas[i]
                            }
                            console.log("Alumnos: "+this.alumnos);
                        }else{
                            this.alumnos = response.data.filas;
                        }
                        //
                        
                        
                        this.rows = response.data.CantidadHojas * this.perPage;
                        console.log(this.alumnos);
                        console.log(this.rows);
                        this.recargar();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
    },
    computed: {
        //   rows() {
        //     return this.items.length
        //   }
    },
};
</script>