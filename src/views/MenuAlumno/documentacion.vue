<template>
    <div class="w-100">
        <div id="content">
            <section>
                <div class="container py-3">
                    <div>
                        
                        <div class="col-lg-12">
                            <h1>Documentación</h1>
                            <p class="text-muted">
                                Agregue los documentos correspondientes
                            </p>
                        </div>
                        <div v-if="Dni.estado == false || Certificado.estado == false || Proyecto.estado == false || Recibo.estado == false"
                            style="
                                color: #721c24;
                                background-color: #f8d7da;
                                border-color: #f5c6cb;
                                position: relative;
                                padding: 0.75rem 1.25rem;
                                margin-bottom: 1rem;
                                border: 1px solid transparent;
                                border-radius: 0.25rem;
                                flex-wrap: wrap;
                                -ms-flex-wrap: wrap;
                            "
                        >
                            Plazo máximo para subir documentos al sistema: 6 de
                            enero del 2021
                        </div>
                    </div>

                    <div class="">
                        <div class="col-lg-12">
                            <div class="card mt-3">
                                <div class="card-header">
                                    <h4>RECIBO DE PAGO</h4>
                                </div>
                                <div class="card-body">
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <label
                                                    for="exampleFormControlFile1"
                                                    >Agregue su recibo de pago</label
                                                >
                                                <div class="custom-file">
                                                    <input
                                                        type="file"
                                                        class="custom-file-input"
                                                        id="customFileLangHTML"
                                                        ref="recibo"
                                                        v-on:change="
                                                            handleFileUploadRecibo()
                                                        "
                                                        accept=".pdf"
                                                    />
                                                    <label
                                                        class="custom-file-label text-left"
                                                        for="customFileLangHTML"
                                                        data-browse="Elegir"
                                                        >{{
                                                            Recibo.reciboName
                                                        }}</label
                                                    >
                                                </div>
                                                <ul class="list-group mt-3">
                                                    <li class="list-group-item">
                                                        Imagen clara y distingible
                                                    </li>
                                                    <li class="list-group-item">
                                                        Verifica que es el documento correcto
                                                    </li>
                                                    <li class="list-group-item">
                                                        Solo formato PDF
                                                    </li>
                                                </ul>

                                                <button
                                                    type="submit"
                                                    class="btn btn-info btn-lg mt-3"
                                                    v-on:click="
                                                        submitFile('RECIBO_PAGO')
                                                    "
                                                >
                                                    Enviar
                                                </button>
                                            </div>

                                            <div class="col-lg-6">
                                                <div class="card h-100">
                                                    <div
                                                        v-if="
                                                            this.Recibo.urlRecibo ==
                                                            null
                                                        "
                                                    >
                                                        No hay contenido
                                                    </div>
                                                    <img
                                                        class="w-100"
                                                        v-if="
                                                            this.Recibo.urlRecibo ==
                                                            ''
                                                        "
                                                        src="../../assets/senatiLoading.gif"
                                                    />
                                                    <iframe
                                                        v-if="
                                                            this.Recibo.urlRecibo !=
                                                                '' &&
                                                            this.Recibo.urlRecibo !=
                                                                null
                                                        "
                                                        class="h-100"
                                                        :src="this.Recibo.urlRecibo"
                                                    >
                                                    </iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card mt-3">
                                <div class="card-header">
                                    <h4>DNI</h4>
                                </div>
                                <div class="card-body">
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <label
                                                    for="exampleFormControlFile1"
                                                    >Agregue su DNI</label
                                                >
                                                <div class="custom-file">
                                                    <input
                                                        type="file"
                                                        class="custom-file-input"
                                                        id="customFileLangHTML"
                                                        ref="dni"
                                                        v-on:change="
                                                            handleFileUploadDni()
                                                        "
                                                        accept=".pdf"
                                                    />
                                                    <label
                                                        class="custom-file-label text-left"
                                                        for="customFileLangHTML"
                                                        data-browse="Elegir"
                                                        >{{
                                                            Dni.dniName
                                                        }}</label
                                                    >
                                                </div>
                                                <ul class="list-group mt-3">
                                                    <li class="list-group-item">
                                                        Imagen clara y distingible
                                                    </li>
                                                    <li class="list-group-item">
                                                        El DNI tiene que estar regularizado
                                                    </li>
                                                    <li class="list-group-item">
                                                        Solo formato PDF
                                                    </li>
                                                </ul>

                                                <button
                                                    type="submit"
                                                    class="btn btn-info btn-lg mt-3"
                                                    v-on:click="
                                                        submitFile('DNI')
                                                    "
                                                >
                                                    Enviar
                                                </button>
                                            </div>

                                            <div class="col-lg-6">
                                                <div class="card h-100">
                                                    <div
                                                        v-if="
                                                            this.Dni.urlDni ==
                                                            null
                                                        "
                                                    >
                                                        No hay contenido
                                                    </div>
                                                    <img
                                                        class="w-100"
                                                        v-if="
                                                            this.Dni.urlDni ==
                                                            ''
                                                        "
                                                        src="../../assets/senatiLoading.gif"
                                                    />
                                                    <iframe
                                                        v-if="
                                                            this.Dni.urlDni !=
                                                                '' &&
                                                            this.Dni.urlDni !=
                                                                null
                                                        "
                                                        class="h-100"
                                                        :src="this.Dni.urlDni"
                                                    >
                                                    </iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card mt-3">
                                <div class="card-header">
                                    <h4>Certificado de calificaciones</h4>
                                </div>
                                <div class="card-body">
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col">
                                                <label
                                                    for="exampleFormControlFile1"
                                                    >Agregue su
                                                    Certificado</label
                                                >
                                                <div class="custom-file">
                                                    <input
                                                        type="file"
                                                        class="custom-file-input"
                                                        id="customFileLangHTML"
                                                        ref="certificado"
                                                        v-on:change="
                                                            handleFileUploadCertidicadoalificaciones()
                                                        "
                                                        accept=".pdf"
                                                    />
                                                    <label
                                                        class="custom-file-label text-left"
                                                        for="customFileLangHTML"
                                                        data-browse="Elegir"
                                                        >{{
                                                            Certificado.certificadoName
                                                        }}</label
                                                    >
                                                </div>

                                                <ul class="list-group mt-3">
                                                    <li class="list-group-item">
                                                        Imagen clara y distingible
                                                    </li>
                                                    <li class="list-group-item">
                                                        Verifica que es el documento correcto
                                                    </li>
                                                    <li class="list-group-item">
                                                        Solo formato PDF
                                                    </li>
                                                </ul>

                                                <button
                                                    type="submit"
                                                    class="btn btn-info btn-lg mt-3"
                                                    v-on:click="
                                                        submitFile(
                                                            'CERTIFICADO'
                                                        )
                                                    "
                                                >
                                                    Enviar
                                                </button>
                                            </div>

                                            <div class="col-lg-6">
                                                <div class="card h-100">
                                                    <div
                                                        v-if="
                                                            this.Certificado
                                                                .urlCertificado ==
                                                            null
                                                        "
                                                    >
                                                        No hay contenido
                                                    </div>
                                                    <img
                                                        class="w-100"
                                                        v-if="
                                                            this.Certificado
                                                                .urlCertificado ==
                                                            ''
                                                        "
                                                        src="../../assets/senatiLoading.gif"
                                                    />
                                                    <iframe
                                                        v-if="
                                                            this.Certificado
                                                                .urlCertificado !=
                                                                '' &&
                                                            this.Certificado
                                                                .urlCertificado !=
                                                                null
                                                        "
                                                        class="h-100"
                                                        :src="
                                                            this.Certificado
                                                                .urlCertificado
                                                        "
                                                    >
                                                    </iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card mt-3">
                                <div class="card-header">
                                    <h4>
                                        <!-- Copia del Certificado de
                                            Calificación Profesional -->
                                        PROYECTO
                                    </h4>
                                </div>
                                <div class="card-body">
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col">
                                                <label
                                                    for="exampleFormControlFile1"
                                                    >Agregue su Proyecto</label
                                                >
                                                <div class="custom-file">
                                                    <input
                                                        type="file"
                                                        class="custom-file-input"
                                                        id="customFileLangHTML"
                                                        ref="proyecto"
                                                        v-on:change="
                                                            handleFileUploadProyecto()
                                                        "
                                                        accept=".pdf"
                                                    />
                                                    <label
                                                        class="custom-file-label text-left"
                                                        for="customFileLangHTML"
                                                        data-browse="Elegir"
                                                        >{{
                                                            Proyecto.proyectoName
                                                        }}</label
                                                    >
                                                </div>

                                                <ul class="list-group mt-3">
                                                    <li class="list-group-item">
                                                        Imagen clara y distingible
                                                    </li>
                                                    <li class="list-group-item">
                                                        Verifica que es el documento correcto
                                                    </li>
                                                    <li class="list-group-item">
                                                        Solo formato PDF
                                                    </li>
                                                </ul>

                                                <button
                                                    type="submit"
                                                    class="btn btn-info btn-lg mt-3"
                                                    v-on:click="
                                                        submitFile('PROYECTO')
                                                    "
                                                >
                                                    Enviar
                                                </button>
                                            </div>

                                            <div class="col-lg-6">
                                                <div class="card h-100">
                                                    <div
                                                        v-if="
                                                            this.Proyecto
                                                                .urlProyecto ==
                                                            null
                                                        "
                                                    >
                                                        No hay contenido
                                                    </div>
                                                    <img
                                                        class="w-100"
                                                        v-if="
                                                            this.Proyecto
                                                                .urlProyecto ==
                                                            ''
                                                        "
                                                        src="../../assets/senatiLoading.gif"
                                                    />
                                                    <iframe
                                                        v-if="
                                                            this.Proyecto
                                                                .urlProyecto !=
                                                                '' &&
                                                            this.Proyecto
                                                                .urlProyecto !=
                                                                null
                                                        "
                                                        class="h-100"
                                                        :src="
                                                            this.Proyecto
                                                                .urlProyecto
                                                        "
                                                    >
                                                    </iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="bg-dark p-3">
                <p class="text-light text-center">Copyright 2020 SENATI</p>
            </footer>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    created() {
        console.log('Test');
        this.getDocument('DNI');
        this.getDocument('PROYECTO');
        this.getDocument('CERTIFICADO');
        this.getDocument('RECIBO_PAGO');
    },

    data: () => ({
        //recibo: '',
        Recibo: {
            recibo: '',
            urlRecibo: '',
            reciboName: 'Selecciona un archivo',
            estado: false,
        },
        Dni: {
            dni: '',
            urlDni: '',
            dniName: 'Selecciona un archivo',
            estado: false,
        },
        Certificado: {
            certificado: '',
            urlCertificado: '',
            certificadoName: 'Selecciona un archivo',
            estado: false,
        },
        Proyecto: {
            proyecto: '',
            urlProyecto: '',
            proyectoName: 'Selecciona un archivo',
            estado: false,
        },
        ContentType: {
            headers: { 'Content-Type': 'multipart/form-data' },
        },
    }),
    methods: {
        handleFileUploadRecibo() {
            this.Recibo.recibo = this.$refs.recibo.files[0];
            this.Recibo.reciboName = this.$refs.recibo.files[0].name;
            if (this.Recibo.estado == false) {
                this.Recibo.urlRecibo = URL.createObjectURL(this.Recibo.recibo);
            }
            console.log(this.Recibo.urlDni);
        },
        handleFileUploadDni() {
            this.Dni.dni = this.$refs.dni.files[0];
            this.Dni.dniName = this.$refs.dni.files[0].name;
            if (this.Dni.estado == false) {
                this.Dni.urlDni = URL.createObjectURL(this.Dni.dni);
            }
            console.log(this.Dni.urlDni);
        },
        handleFileUploadCertidicadoalificaciones() {
            this.Certificado.certificadoName = this.$refs.certificado.files[0].name;
            this.Certificado.certificado = this.$refs.certificado.files[0];
            if (this.Certificado.estado == false) {
                this.Certificado.urlCertificado = URL.createObjectURL(
                    this.Certificado.certificado
                );
            }
            console.log(this.Certificado.urlCertificado);
        },
        handleFileUploadProyecto() {
            console.log(
                "Se empezo a ejecutar la funcion 'handleFileUploadProyecto()' "
            );
            this.Proyecto.proyectoName = this.$refs.proyecto.files[0].name;
            this.Proyecto.proyecto = this.$refs.proyecto.files[0];
            if (this.Proyecto.estado == false) {
                this.Proyecto.urlProyecto = URL.createObjectURL(
                    this.Proyecto.proyecto
                );
            }
            console.log(this.Proyecto.proyecto)
        },
        submitFile(type) {
            this.makeToast("Enviando","primary",type," se está enviando...")
            let formData = new FormData();
            formData.append('id_username', localStorage.getItem('UserId'));
            formData.append('type', type);
            if (type == 'DNI') {
                formData.append('document', this.Dni.dni);
            } else if (type == 'CERTIFICADO') {
                formData.append('document', this.Certificado.certificado);
            } else if (type == 'PROYECTO') {
                formData.append('document', this.Proyecto.proyecto);
            } else if(type == 'RECIBO_PAGO'){
                formData.append('document', this.Recibo.recibo);
            }
            axios
                .post(
                    'https://senati-api.000webhostapp.com/upload.php',
                    formData,
                    this.ContentType
                )
                .then((response) => {
                    console.log(response.data);
                    if(response.data.success == true){
                        this.makeToast("BUENAS NOTICIAS","success",type," se envió correctamente.")
                    }else{
                        this.makeToast("LO SENTIMOS","danger",type=="RECIBO_PAGO"?"RECIBO DE PAGO":type," ya ha sido enviado anteriormente, no puede enviarlo de nuevo.")
                    }
                })
                .catch((error) => {
                    console.log('FAILURE!!');
                    console.log(error);
                    this.makeToast("LO SENTIMOS","danger",type," no pudo ser enviado por problemas tecnicos.")
                });
        },
        async getDocument(type) {
            if (type == 'DNI') {
                await this.Peticion(
                    'https://senati.herokuapp.com/api/get-document/dni.php'
                );
            } else if (type == 'CERTIFICADO') {
                await this.Peticion(
                    'https://senati.herokuapp.com/api/get-document/cert.php'
                );
            } else if (type == 'PROYECTO') {
                await this.Peticion(
                    'https://senati.herokuapp.com/api/get-document/proy.php'
                );
            } else if (type == 'RECIBO_PAGO'){
                await this.Peticion(
                    'https://senati.herokuapp.com/api/get-document/recibopago.php'
                );
            }
        },
        async Peticion(url) {
            var user = new FormData();
            user.append('id', localStorage.getItem('UserId'));
            await axios.post(url, user, this.ContentType).then((response) => {
                if (url == 'https://senati.herokuapp.com/api/get-document/dni.php')
                {
                    if (response.data.success == true) {
                        this.Dni.urlDni = response.data.document_url;
                        console.log("DNI: "+this.Dni.urlDni)
                        this.Dni.estado = true;
                    } else {
                        this.Dni.urlDni = null;
                    }
                } else if (url == 'https://senati.herokuapp.com/api/get-document/cert.php')
                {
                    if (response.data.success == true) {
                        this.Certificado.urlCertificado = response.data.document_url; //"https://senati-api.000webhostapp.com/document-certificate/"+localStorage.getItem("UserId")+".pdf";//
                        console.log("Certificado: "+this.Certificado.urlCertificado);
                        this.Certificado.estado = true;
                    } else {
                        this.Certificado.urlCertificado = null;
                    }
                } else if (url == 'https://senati.herokuapp.com/api/get-document/proy.php')
                {
                    if (response.data.success == true) {
                        this.Proyecto.urlProyecto = response.data.document_url;
                        console.log("Proyecto: "+this.Proyecto.urlProyecto);
                        this.Proyecto.estado = true;
                    } else {
                        this.Proyecto.urlProyecto = null;
                    }
                    console.log(response.data)
                }else if (url == 'https://senati.herokuapp.com/api/get-document/recibopago.php')
                {
                    if (response.data.success == true) {
                        this.Recibo.urlRecibo = response.data.document_url;
                        console.log("RECIBO:  " + response.data)
                        console.log("RECIBO: " + this.Recibo.urlRecibo);
                        this.Recibo.estado = true;
                    } else {
                        this.Recibo.urlRecibo = null;
                    }
                    console.log(response.data)
                }
            });
        },
        makeToast(title ,variant = null,type,add) {
            this.$bvToast.toast('Su '+type+ add , {
                title: title,//`Variant ${variant || 'default'}`,
                variant: variant,
                solid: true,
            });
        },
    },
};
</script>