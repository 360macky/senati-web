<template>
    <!-- Container -->
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="mt-4">Seguimiento</h1>
                <p class="text-muted">
                    Solicite estadísticas y reportes de acuerdo a la carrera y
                    sede.
                </p>
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
                            <div class="col-lg-4 mt-1">
                                <button class="btn btn-info btn-block">
                                    Generar reporte
                                </button>
                            </div>
                            <div class="col-lg-4 mt-1">
                                <button class="btn btn-success btn-block">
                                    Descargar Excel
                                </button>
                            </div>
                            <div class="col-lg-4 mt-1">
                                <button class="btn btn-warning btn-block">
                                    Backup
                                </button>
                            </div>
                            <div class="col-lg-4"></div>

                            <div class="col-lg-4 mt-3">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <button
                                            class="btn btn-outline-secondary"
                                            type="button"
                                            v-on:click="submitFile()"
                                        >
                                            Enviar
                                        </button>
                                    </div>
                                    <div class="custom-file">
                                        <input
                                            accept=".xlsx,.xls"
                                            type="file"
                                            class="custom-file-input"
                                            id="customFileLangHTML"
                                            ref="excel"
                                            v-on:change="
                                                handleFileUploadExcel()
                                            "
                                        />
                                        <label
                                            class="custom-file-label"
                                            for="inputGroupFile03"
                                            data-browse="Elegir"
                                            >{{ this.Excel.ExcelName }}</label
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="my-4" />

                        <!-- Alumnos -->
                        <h4 class="my-3 text-success">Estado de alumnos:</h4>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card-deck">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div
                                                    class="col-lg-4 d-flex align-items-lg-center justify-content-lg-center"
                                                >
                                                    <div class="text-center">
                                                        <h1
                                                            class="text-primary"
                                                        >
                                                            160
                                                        </h1>
                                                        <h5
                                                            class="text-primary"
                                                        >
                                                            alumnos
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div class="col-lg-8">
                                                    <h4
                                                        class="font-weight-bold"
                                                    >
                                                        Activos (<span
                                                            class="text-danger"
                                                            >A</span
                                                        >)
                                                    </h4>
                                                    <p>
                                                        Alumnos con proceso de
                                                        titulación vigente
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div
                                                    class="col-lg-4 d-flex align-items-lg-center justify-content-lg-center"
                                                >
                                                    <div class="text-center">
                                                        <h1
                                                            class="text-primary"
                                                        >
                                                            40
                                                        </h1>
                                                        <h5
                                                            class="text-primary"
                                                        >
                                                            alumnos
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div class="col-lg-8">
                                                    <h4
                                                        class="font-weight-bold"
                                                    >
                                                        Inactivos (<span
                                                            class="text-danger"
                                                            >F</span
                                                        >)
                                                    </h4>
                                                    <p>
                                                        Alumnos ya titulados o
                                                        que nunca se titularon
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <button
                                                class="btn btn-info btn-sm btn-block"
                                            >
                                                Generar reporte
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Titulación -->
                        <h4 class="my-3 text-success">Estado de titulación:</h4>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card-deck">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div
                                                    class="col-lg-12 d-flex align-items-lg-center justify-content-lg-center mb-3"
                                                >
                                                    <h1 class="text-primary">
                                                        20%
                                                    </h1>
                                                </div>
                                                <div class="col-lg-12">
                                                    <h4
                                                        class="font-weight-bold"
                                                    >
                                                        Faltante (<span
                                                            class="text-danger"
                                                            >N</span
                                                        >)
                                                    </h4>
                                                    <p>
                                                        Alumno que aún no envía
                                                        sus los documentos
                                                        correspondientes para la
                                                        titulación
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <button
                                                class="btn btn-info btn-sm btn-block"
                                            >
                                                Generar reporte
                                            </button>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div
                                                    class="col-lg-12 d-flex align-items-lg-center justify-content-lg-center mb-3"
                                                >
                                                    <h1 class="text-primary">
                                                        50%
                                                    </h1>
                                                </div>
                                                <div class="col-lg-12">
                                                    <h4
                                                        class="font-weight-bold"
                                                    >
                                                        Pendiente (<span
                                                            class="text-danger"
                                                            >P</span
                                                        >)
                                                    </h4>
                                                    <p>
                                                        Alumno que envió sus
                                                        documentos
                                                        correspondientes, pero
                                                        que aún no han sido
                                                        revisados.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <button
                                                class="btn btn-info btn-sm btn-block"
                                            >
                                                Generar reporte
                                            </button>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div
                                                    class="col-lg-12 d-flex align-items-lg-center justify-content-lg-center mb-3"
                                                >
                                                    <h1 class="text-primary">
                                                        30%
                                                    </h1>
                                                </div>
                                                <div class="col-lg-12">
                                                    <h4
                                                        class="font-weight-bold"
                                                    >
                                                        Aprobado (<span
                                                            class="text-danger"
                                                            >A</span
                                                        >)
                                                    </h4>
                                                    <p>
                                                        Alumno que cumple con
                                                        los requisitos para
                                                        lograr la titulación.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <button
                                                class="btn btn-info btn-sm btn-block"
                                            >
                                                Generar reporte
                                            </button>
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
<script>
import axios from 'axios';
export default {
    
    data: () => ({
        Excel: {
            Excel: null,
            ExcelName: 'Selecciona un archivo',
            estado: false,
        },
        ContentType:{
            headers: {'Content-Type': 'multipart/form-data'}
        }
    }),
    methods: {
        handleFileUploadExcel() {
            console.log('se ejecuta la funcion');
            this.Excel.Excel = this.$refs.excel.files[0];
            this.Excel.ExcelName = this.$refs.excel.files[0].name;
        },
        async submitFile() {
            var formData = new FormData();
            // let fs = require('fs');
            formData.append('file',this.Excel.Excel);
            console.log(formData.get('file'));

            await axios.post("https://senati.herokuapp.com/api/excel/admin/uploadB.php",formData,this.ContentType)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        },
    },
};
</script>
<style scoped>
body {
    font-family: 'Didact Gothic', sans-serif;
}
</style>