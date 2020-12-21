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
                <div class="row">
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
                                                        checked
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
                                                        class="modal-dialog  modal-lg"
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
                                                                width="100%" height="600"
                                                                :src="
                                                                    alumno.url_dni
                                                                "
                                                                frameborder="0"
                                                            >
                                                            <div class="h-100">

                                                            </div>
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
                                                    <a data-toggle="modal"
                                                        :data-target="
                                                            '.certificado' +
                                                            alumno.id_usu
                                                        ">
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
                                                        class="modal-dialog  modal-lg"
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
                                                                width="100%" height="600"
                                                                :src="
                                                                    alumno.url_certificado
                                                                "
                                                                frameborder="0"
                                                            >
                                                            <div class="h-100">

                                                            </div>
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
                                                    <a data-toggle="modal"
                                                        :data-target="
                                                            '.proyecto' +
                                                            alumno.id_usu
                                                        ">
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
                                                        class="modal-dialog  modal-lg"
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
                                                                width="100%" height="600"
                                                                :src="
                                                                    alumno.url_proyecto
                                                                "
                                                                frameborder="0"
                                                            >
                                                            <div class="h-100">

                                                            </div>
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
                </div>
            </div>
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
    }),
    methods: {
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
            var carreraId = document.getElementById('exampleFormControlSelect1')
                .value;
            if (carreraId == null) {
                carreraId = 1;
            }
            var dataForm = new FormData();
            dataForm.append('id_carrera', carreraId);
            dataForm.append('rows_quantity', 1);
            dataForm.append('pages', null);
            dataForm.append('page_number', 1);
            document.getElementById('option-disable').disabled = true;
            // document.getElementById('option-disable').value);
            console.log(
                document.getElementById('exampleFormControlSelect1').value
            );

            await axios
                .post(
                    'https://senati.herokuapp.com/api/careers-students/',
                    dataForm,
                    this.ContentType
                )
                .then((response) => {
                    console.log(response);
                    this.alumnos = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>