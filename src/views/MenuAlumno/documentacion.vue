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
                                        <h4>Recibo de Pago</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col">
                                                    <label
                                                        for="exampleFormControlFile1"
                                                        >Agregue su Recibo de
                                                        Pago</label
                                                    >
                                                    <input
                                                        type="file"
                                                        class="form-control-file"
                                                        id="exampleFormControlFile1"
                                                    />

                                                    <ul class="list-group mt-3">
                                                        <li
                                                            class="list-group-item"
                                                        >
                                                            Foto clara y en alta
                                                            resolución
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
                                                    >
                                                        Enviar
                                                    </button>
                                                </div>

                                                <div class="col-lg-4">
                                                    <div class="card">
                                                        <img
                                                            src="img/img1.jpg"
                                                            class="card-img-top"
                                                            alt="..."
                                                        />
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
                                                <div class="col">
                                                    <label
                                                        for="exampleFormControlFile1"
                                                        >Agregue su DNI</label
                                                    >
                                                    <input
                                                        type="file"
                                                        class="form-control-file"
                                                        id="exampleFormControlFile1"
                                                        ref="dni"
                                                        v-on:change="handleFileUploadDni()"
                                                    />

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
                                                        <img v-if="this.urlDni == ''" src="../../assets/loading.gif"/>
                                                        <iframe
                                                            class="h-100"
                                                            :src="this.urlDni"
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
                                                    <input
                                                        type="file"
                                                        class="form-control-file"
                                                        id="exampleFormControlFile1"
                                                        ref="certificado"
                                                        v-on:change="handleFileUploadCertidicadoalificaciones()"
                                                    />

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
                                                        <img  v-if="this.urlCertificado == ''" src="../../assets/loading.gif"/>
                                                        <iframe 
                                                            class="h-100"
                                                            :src="this.urlCertificado"
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
                                                    <input
                                                        type="file"
                                                        class="form-control-file"
                                                        id="exampleFormControlFile1"
                                                        ref="proyecto"
                                                        v-on:change="handleFileUploadProyecto()"
                                                    />

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
                                                        <img v-if="this.urlProyecto == ''" src="../../assets/loading.gif"/>
                                                        <iframe
                                                            class="h-100"
                                                            :src="this.urlProyecto"
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
        urlDni : "",
        urlCertificado : "",
        //urlCopiaCertificado :"",
        urlProyecto : "",
        dni : "",
        certificado : "",
        proyecto : "",
        ContentType:{
            headers: {'Content-Type': 'multipart/form-data'}
        }
        
    }),
    methods: {
        handleFileUploadDni() {
            this.dni = this.$refs.dni.files[0];
            this.urlDni =  URL.createObjectURL(this.dni);
            console.log(this.urlDni);
        },
        handleFileUploadCertidicadoalificaciones() {
            this.certificado = this.$refs.certificado.files[0];
        },
        handleFileUploadProyecto() {
            this.proyecto = this.$refs.proyecto.files[0];
        },
        submitFile(type){
            let formData = new FormData();
            formData.append('id_username', localStorage.getItem("UserId"));
            formData.append('type',type);
            if(type == "DNI"){
                formData.append('document', this.dni);
            }else if(type == 'CERTIFICADO'){
                formData.append('document', this.certificado);
            }else if(type == 'PROYECTO'){
                formData.append('document', this.proyecto);
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
                            this.urlDni = response.data.document_url
                            console.log(this.urlDni);
                            }
                        }else if(url == "https://senati.herokuapp.com/api/get-document/cert.php"){
                            if(response.data.success == true){
                            this.urlCertificado = response.data.document_url
                            }
                        }else if(url == "https://senati.herokuapp.com/api/get-document/proy.php"){
                            if(response.data.success == true){
                            this.urlProyecto = response.data.document_url
                            console.log("Proyecto: "+this.urlProyecto)
                            }
                        }
                        
                    })
        }
        
    }
}
</script>