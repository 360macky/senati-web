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
                        <div
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

                    <div class="row">
                        <div class="col-lg-12">
                                <div class="card mt-3">
                                    <div class="card-header">
                                        <h4>DNI</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col">
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
                                                            v-on:change="handleFileUploadDni()">
                                                        <label class="custom-file-label text-left" for="customFileLangHTML" data-browse="Elegir">{{Dni.dniName}}</label>
                                                    </div>
                                                    <ul class="list-group mt-3">
                                                        <li
                                                            class="list-group-item"
                                                        >
                                                            Cras justo odio
                                                        </li>
                                                        <li
                                                            class="list-group-item"
                                                        >
                                                            Dapibus ac facilisis
                                                            in
                                                        </li>
                                                        <li
                                                            class="list-group-item"
                                                        >
                                                            Morbi leo risus
                                                        </li>
                                                    </ul>

                                                    <button
                                                        type="submit"
                                                        class="btn btn-info btn-lg mt-3"
                                                        v-on:click="submitFile('DNI')"
                                                    >
                                                        Enviar
                                                    </button>
                                                </div>

                                                <div class="col-lg-6">
                                                    <div class="card h-100">
                                                        <div v-if="this.Dni.estado == false">No hay contenido</div>
                                                        <img v-if="this.Dni.urlDni == ''" src="../../assets/loading.gif"/>
                                                        <iframe
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
                                                            v-on:change="handleFileUploadCertidicadoalificaciones()">
                                                        <label class="custom-file-label text-left" for="customFileLangHTML" data-browse="Elegir">{{Certificado.certificadoName}}</label>
                                                    </div>

                                                    <ul class="list-group mt-3">
                                                        <li
                                                            class="list-group-item"
                                                        >
                                                            Cras justo odio
                                                        </li>
                                                        <li
                                                            class="list-group-item"
                                                        >
                                                            Dapibus ac facilisis
                                                            in
                                                        </li>
                                                        <li
                                                            class="list-group-item"
                                                        >
                                                            Morbi leo risus
                                                        </li>
                                                    </ul>

                                                    <button
                                                        type="submit"
                                                        class="btn btn-info btn-lg mt-3"
                                                        v-on:click="submitFile('CERTIFICADO')" 
                                                    >
                                                        Enviar
                                                    </button>
                                                </div>

                                                <div class="col-lg-6">
                                                    <div class="card h-100">
                                                        <div v-if="this.Certificado.estado == false">No hay contenido</div>
                                                        <img  v-if="this.Certificado.urlCertificado == ''" src="../../assets/loading.gif"/>
                                                        <iframe 
                                                            class="h-100"
                                                            :src="this.Certificado.urlCertificado"
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
                                                        >Agregue su
                                                        Proyecto</label
                                                    >
                                                    <div class="custom-file">
                                                        <input 
                                                            type="file" 
                                                            class="custom-file-input" 
                                                            id="customFileLangHTML"
                                                            ref="proyecto"
                                                            v-on:change="handleFileUploadProyecto()">
                                                        <label class="custom-file-label text-left" for="customFileLangHTML" data-browse="Elegir">{{Proyecto.proyectoName}}</label>
                                                    </div>

                                                    <ul class="list-group mt-3">
                                                        <li
                                                            class="list-group-item"
                                                        >
                                                            Cras justo odio
                                                        </li>
                                                        <li
                                                            class="list-group-item"
                                                        >
                                                            Dapibus ac facilisis
                                                            in
                                                        </li>
                                                        <li
                                                            class="list-group-item"
                                                        >
                                                            Morbi leo risus
                                                        </li>
                                                    </ul>

                                                    <button
                                                        type="submit"
                                                        class="btn btn-info btn-lg mt-3"
                                                        v-on:click="submitFile('PROYECTO')"
                                                    >
                                                        Enviar
                                                    </button>
                                                </div>

                                                <div class="col-lg-6">
                                                    <div class="card h-100">
                                                        <div v-if="this.Proyecto.estado == false">No hay contenido</div>
                                                        <img v-if="this.Proyecto.urlProyecto == ''" src="../../assets/loading.gif"/>
                                                        <iframe
                                                            class="h-100"
                                                            :src="this.Proyecto.urlProyecto"
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
    created(){
      console.log("Test");
      this.getDocument("DNI")
      this.getDocument("PROYECTO")
      this.getDocument("CERTIFICADO")
    },
 
    data: () => ({
        //recibo: '',
        Dni:{
            dni : "",
            urlDni : "",
            dniName : "Selecciona un archivo",
            estado : false
        },
        Certificado:{
            certificado : "",
            urlCertificado : "",
            certificadoName : "Selecciona un archivo",
            estado : false
        },
        Proyecto:{
            proyecto : "",
            urlProyecto : "",
            proyectoName : "Selecciona un archivo",
            estado : false
        },
        ContentType:{
            headers: {'Content-Type': 'multipart/form-data'}
        }
        
    }),
    methods: {
        handleFileUploadDni() {
            this.Dni.dni = this.$refs.dni.files[0];
            this.Dni.dniName = this.$refs.dni.files[0].name;
            if(this.Dni.urlDni == ''){
                this.Dni.urlDni =  URL.createObjectURL(this.Dni.dni);
            }
            console.log(this.urlDni);
        },
        handleFileUploadCertidicadoalificaciones() {
            this.Certificado.certificadoName = this.$refs.certificado.files[0].name;
            this.Certificado.certificado = this.$refs.certificado.files[0];
            if(this.Certificado.urlCertificado == ''){
                this.Certificado.urlCertificado =  URL.createObjectURL(this.Certificado.certificado);
            }
            console.log(this.urlCertificado);
        },
        handleFileUploadProyecto() {
            console.log("Se empezo a ejecutar la funcion 'handleFileUploadProyecto()' ")
            this.Proyecto.proyectoName = this.$refs.proyecto.files[0].name;
            this.Proyecto.proyecto = this.$refs.proyecto.files[0];
            if(this.Proyecto.urlProyecto == ''){
                this.Proyecto.urlProyecto  =  URL.createObjectURL(this.Proyecto.proyecto);
            }
        },
        submitFile(type){
            let formData = new FormData();
            formData.append('id_username', localStorage.getItem("UserId"));
            formData.append('type',type);
            if(type == "DNI"){
                formData.append('document', this.Dni.dni);
            }else if(type == 'CERTIFICADO'){
                formData.append('document', this.Certificado.certificado);
            }else if(type == 'PROYECTO'){
                formData.append('document', this.Proyecto.proyecto);
            }
            axios.post( "https://senati-api.000webhostapp.com/upload.php", formData, this.ContentType
            ).then(response=>{
                console.log(response.data)
            }).catch(error=>{
                console.log('FAILURE!!');
                console.log(error)
            });
        },
        async getDocument(type){
            if(type == "DNI"){
                await this.Peticion("https://senati.herokuapp.com/api/get-document/dni.php")
            }else if(type == "CERTIFICADO"){
                await this.Peticion("https://senati.herokuapp.com/api/get-document/cert.php")
            }else if(type == "PROYECTO"){
                await this.Peticion("https://senati.herokuapp.com/api/get-document/proy.php")
            }
        },
        async Peticion(url){
            var user= new FormData();
            user.append("id",localStorage.getItem("UserId"));
            await axios.post(url,user, this.ContentType)
                    .then(response=>{
                        if(url == "https://senati.herokuapp.com/api/get-document/dni.php"){
                            if(response.data.success == true){
                            this.Dni.urlDni = response.data.document_url
                            this.Dni.estado = true;
                            }
                        }else if(url == "https://senati.herokuapp.com/api/get-document/cert.php"){
                            if(response.data.success == true){
                            this.Certificado.urlCertificado = response.data.document_url
                            this.Certificado.estado = true;
                            }
                        }else if(url == "https://senati.herokuapp.com/api/get-document/proy.php"){
                            if(response.data.success == true){
                            this.Proyecto.urlProyecto = response.data.document_url
                            this.Proyecto.estado = true;
                            }
                        }
                    })
        }
    }
}
</script>
<style scoped>

</style>