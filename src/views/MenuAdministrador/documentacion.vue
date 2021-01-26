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
                                    <b-form-select v-model="seleccionado" :options="carreras" @input="recargar"></b-form-select>
                                    <!-- <select
                                        class="form-control"
                                        id="exampleFormControlSelect1"
                                        
                                        :value="selected.value"
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
                                    </select> -->
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
            <!-- <b-pagination
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
            ></b-table> -->
        </div>
        <div class="container" v-if="seleccionado != null">
            <b-card class="mb-4" :title="'Alumnos de la carrera: '+seleccionado.value ">
                <b-table
                    ref="custom-table"
                    class="vuetable"
                    sort-by="title"
                    sort-desc.sync="false"
                    @row-selected="rowSelected"
                    selectable
                    :select-mode="bootstrapTable.selectMode"
                    :current-page="currentPage"
                    selectedVariant="primary"
                    :fields="bootstrapTable.fields"
                    :items="dataProvider"
                    id="table"
                >
                h
                    <template slot="status" slot-scope="data">
                        <b-badge
                            class="mb-1"
                            variant="danger"
                            >{{ data.value }}</b-badge
                        >
                    </template>
                </b-table>
                <b-pagination
                    size="sm"
                    align="center"
                    :total-rows="totalRows"
                    :per-page="perPage"
                    v-model="currentPage"
                >
                    <template v-slot:next-text>
                        <i class="simple-icon-arrow-right" />
                    </template>
                    <template v-slot:prev-text>
                        <i class="simple-icon-arrow-left" />
                    </template>
                    <template v-slot:first-text>
                        <i class="simple-icon-control-start" />
                    </template>
                    <template v-slot:last-text>
                        <i class="simple-icon-control-end" />
                    </template>
                </b-pagination>

                <b-alert
                    v-if="bootstrapTable.selected.length > 0"
                    show
                    variant="primary"
                    >Selected Items :<br />
                    <pre>{{ bootstrapTable.selected }}</pre>
                </b-alert>
            </b-card>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    created() {
        this.getCarreras();
    },
    data: () => ({
        carreras: [{value:null, text:'Cargando...'}],
        seleccionado: null,
        alumnos: null,
        ContentType: { headers: { 'Content-Type': 'multipart/form-data' } },
        perPage: 10,
        currentPage: 1,
        totalRows: 2,
        selected:{
            value : null
        },
        bootstrapTable: {
        selected: [],
        selectMode: 'multi',
        fields: [  
          { key: 'id_s', label: 'Id', sortDirection: 'desc', tdClass: 'list-item-heading' },
          { key: 'nom_usu', label: 'Nombres', tdClass: 'text-muted' },
          { key: 'ape_usu', label: 'Apellidos', tdClass: 'text-muted' },
          { key: 'email_usu', label: 'Correo Electronico', tdClass: 'text-muted' },
          { key: 'telf_usu', label: 'Telefono', tdClass: 'text-muted' },
          { key: 'url_dni', label: 'DNI', tdClass: 'text-muted' },
          { key: 'url_certificado', label: 'Certificado de Estudios', tdClass: 'text-muted' },
          { key: 'url_proyecto', label: 'Proyecto', tdClass: 'text-muted' },
          { key: 'url_recibo_pago', label: 'Recibo', tdClass: 'text-muted' },
          { key: 'estadoTransporte.nomEstTrans', label: 'Acciones', tdClass: 'text-muted' }
        ]
      },
    }),
    methods: {
        recargar() {
            this.$root.$emit('bv::refresh::table', 'table');
        },
        async getCarreras() {
            var config = {
                method: 'get',
                url: 'https://senati.herokuapp.com/api/careers/',
                headers: {},
            };
            let items=[];
            console.log("Obteniendo Carreras...")
            await axios(config)
                .then((response) => {
                    console.log(response.data);
                    items.push({value:null, text:'Seleccionar', disabled:true});
                    response.data.forEach(element => {
                        items.push({value:{id : element.id, value : element.nombre},text:element.nombre})
                    });
                    this.carreras = items;
                    console.log(this.carreras)
                    //this.carreras = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        onPaginationData(paginationData) {
            this.$refs.pagination.setPaginationData(paginationData);
        },
        rowSelected(items) {
            this.bootstrapTable.selected = items;
        },
        dataProvider() {
            //const params = this.apiParamsConverter(ctx)
            //let promise = axios.get(apiUrl + '/cakes/fordatatable', { params: params })
            //var carreraId = document.getElementById('exampleFormControlSelect1').value;
            var dataForm = new FormData();
            console.log("Carrera seleccionada: "+this.seleccionado.id)
            dataForm.append('id_carrera',this.seleccionado.id);
            dataForm.append('rows_quantity', 10);
            dataForm.append('page_number',this.currentPage == null ? 1 : this.currentPage);

            console.log('Pagina Actual: ' + this.currentPage);
            let promise = axios.post('https://senati.herokuapp.com/api/careers-students/',dataForm,this.ContentType);
            return promise
                .then((result) => result.data)
                .then((data) => {
                    let items = data.filas;
                    //items = data.filas;
                    this.totalRows = data.cantidadRegistrosEnDocumentacion;
                    console.log(items)
                    console.log(data)
                    return items;
                    
                })
                .catch((_error) => {
                    console.log(_error);
                    return [];
                });
        },
        // async alerta() {
        //     if (this.currentPage != null && document.getElementById(
        //             'exampleFormControlSelect1'
        //         ).value != (null || "")) {
        //         var carreraId = document.getElementById(
        //             'exampleFormControlSelect1'
        //         ).value;
        //         if (this.carreras == null) {
        //             carreraId = 1;
        //         }
        //         var dataForm = new FormData();
        //         dataForm.append('id_carrera', carreraId);
        //         dataForm.append('rows_quantity', 10);
        //         dataForm.append(
        //             'page_number',
        //             this.currentPage == null ? 1 : this.currentPage
        //         );
        //         document.getElementById('option-disable').disabled = true;
        //         // document.getElementById('option-disable').value);
        //         console.log(
        //             document.getElementById('exampleFormControlSelect1').value
        //         );
        //         console.log('Pagina Actual: ' + this.currentPage);

        //         await axios
        //             .post(
        //                 'https://senati.herokuapp.com/api/careers-students/',
        //                 dataForm,
        //                 this.ContentType
        //             )
        //             .then((response) => {
        //                 console.log(response);
        //                 if (this.currentPage > 1) {
        //                     for (let i = 0; i < ((this.currentPage-1)*this.perPage); i++) {
        //                         this.alumnos[i] = {i : "relleno"};
        //                     }
        //                     console.log("RELLENO: "+this.alumnos)
        //                     for(var i = 0; i<(response.data.filas).length; i++){
        //                     this.alumnos[(this.currentPage-1)*this.perPage+i] = response.data.filas[i]
        //                     }
        //                     console.log("Alumnos: "+this.alumnos);
        //                 }else{
        //                     this.alumnos = response.data.filas;
        //                 }
        //                 //

        //                 this.rows = response.data.CantidadHojas * this.perPage;
        //                 console.log(this.alumnos);
        //                 console.log(this.rows);
        //                 this.recargar();
        //             })
        //             .catch((error) => {
        //                 console.log(error);
        //             });
        //     }
        // },
    },
    computed: {
        //   rows() {
        //     return this.items.length
        //   }
    },
};
</script>