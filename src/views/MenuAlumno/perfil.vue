<template>
    <div class="w-100">
        <div id="content">
            <section>
                <div class="container py-3 mb-3">
                    <div class="row gutters-sm" style="padding-top: 90px">
                        <div class="col-md-4 mb-3">
                            <div class="card" style="height: 100%">
                                <div class="card-body">
                                    <div
                                        class="d-flex flex-column align-items-center text-center"
                                        style="padding-top: 30%"
                                    >
                                        <img
                                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                            alt="Admin"
                                            class="rounded-circle"
                                            width="150"
                                        />
                                        <a
                                            style="padding-top: 15px"
                                            href="#"
                                            data-toggle="modal"
                                            data-target="#id01"
                                            ><i class="fas fa-pen mr-1"></i
                                            >Editar</a
                                        >

                                        <div class="mt-3">
                                            <h4>{{ nombre }}</h4>
                                            <p class="text-secondary mb-1">
                                                {{ email }}
                                            </p>
                                            <p class="text-muted font-size-sm">
                                                {{ sede }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="card mb-3" style="width: 104%">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">
                                                Nombre Completo
                                            </h6>
                                        </div>
                                        <div
                                            class="col-sm-9 text-secondary"
                                            style="display: flex"
                                        >
                                            {{ nombre }}
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Contraseña</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            *************
                                            <a
                                                style="padding-left: 15px"
                                                href="#"
                                                data-toggle="modal"
                                                data-target="#id02"
                                                ><i class="fas fa-pen mr-1"></i
                                                >Editar</a
                                            >
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Carrera</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            {{ carrera }}
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Celular</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            {{ telefono }}
                                            <a
                                                style="padding-left: 15px"
                                                href="#"
                                                data-toggle="modal"
                                                data-target="#id03"
                                                ><i class="fas fa-pen mr-1"></i
                                                >Editar</a
                                            >
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Sede</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            {{ sede }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row gutters-sm">
                                <div class="col-sm-6 mb-3">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h6
                                                class="d-flex align-items-center mb-3"
                                            >
                                                <i
                                                    class="material-icons text-info mr-2"
                                                    >Cursos</i
                                                >Proyectos
                                            </h6>
                                            <small>Próximamente</small>
                                            <div
                                                class="progress mb-3"
                                                style="height: 5px"
                                            >
                                                <div
                                                    class="progress-bar bg-primary"
                                                    role="progressbar"
                                                    style="width: 50%"
                                                    aria-valuenow="80"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                            <small>Próximamente</small>
                                            <div
                                                class="progress mb-3"
                                                style="height: 5px"
                                            >
                                                <div
                                                    class="progress-bar bg-primary"
                                                    role="progressbar"
                                                    style="width: 72%"
                                                    aria-valuenow="72"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                            <small>Próximamente</small>
                                            <div
                                                class="progress mb-3"
                                                style="height: 5px"
                                            >
                                                <div
                                                    class="progress-bar bg-primary"
                                                    role="progressbar"
                                                    style="width: 89%"
                                                    aria-valuenow="89"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                            <small>Próximamente</small>
                                            <div
                                                class="progress mb-3"
                                                style="height: 5px"
                                            >
                                                <div
                                                    class="progress-bar bg-primary"
                                                    role="progressbar"
                                                    style="width: 55%"
                                                    aria-valuenow="55"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                            <small>Próximamente</small>
                                            <div
                                                class="progress mb-3"
                                                style="height: 5px"
                                            >
                                                <div
                                                    class="progress-bar bg-primary"
                                                    role="progressbar"
                                                    style="width: 66%"
                                                    aria-valuenow="66"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 mb-3">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h6
                                                class="d-flex align-items-center mb-3"
                                            >
                                                <i
                                                    class="material-icons text-info mr-2"
                                                    >Asignaciones</i
                                                >Proyectos
                                            </h6>
                                            <small>Próximamente</small>
                                            <div
                                                class="progress mb-3"
                                                style="height: 5px"
                                            >
                                                <div
                                                    class="progress-bar bg-primary"
                                                    role="progressbar"
                                                    style="width: 80%"
                                                    aria-valuenow="80"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                            <small>Próximamente</small>
                                            <div
                                                class="progress mb-3"
                                                style="height: 5px"
                                            >
                                                <div
                                                    class="progress-bar bg-primary"
                                                    role="progressbar"
                                                    style="width: 72%"
                                                    aria-valuenow="72"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                            <small>Próximamente</small>
                                            <div
                                                class="progress mb-3"
                                                style="height: 5px"
                                            >
                                                <div
                                                    class="progress-bar bg-primary"
                                                    role="progressbar"
                                                    style="width: 89%"
                                                    aria-valuenow="89"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                            <small>Próximamente</small>
                                            <div
                                                class="progress mb-3"
                                                style="height: 5px"
                                            >
                                                <div
                                                    class="progress-bar bg-primary"
                                                    role="progressbar"
                                                    style="width: 55%"
                                                    aria-valuenow="55"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                            <small>Próximamente</small>
                                            <div
                                                class="progress mb-3"
                                                style="height: 5px"
                                            >
                                                <div
                                                    class="progress-bar bg-primary"
                                                    role="progressbar"
                                                    style="width: 66%"
                                                    aria-valuenow="66"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="bg-dark p-3 mt-3" style="bottom: 0">
                <p class="text-light text-center">Copyright 2020 SENATI</p>
            </footer>
        </div>

        <!-- Modal Perfil-->
        <div
            class="modal fade"
            id="id01"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            Cambiar foto de perfil
                        </h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <input type="file" class="form-control-file" />
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success">
                            Guardar
                        </button>
                        <button
                            type="button"
                            class="btn btn-danger"
                            data-dismiss="modal"
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Contraseña-->
        <div
            class="modal fade"
            id="id02"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            Cambiar contraseña
                        </h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <label for="">Contraseña anterior:</label>
                            <div class="input-group">
                                <input
                                    :type="this.type.type1"
                                    id="pass01"
                                    class="form-control"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    v-model="forPassword.currentPassword"
                                />
                                <div class="input-group-prepend">
                                    <span
                                        class="input-group-text"
                                        id="basic-addon1"
                                        ><i
                                            :class="['fas', ico.icon1]"
                                            id="icon01"
                                            v-on:click="ChangeIcon(1)"
                                        ></i
                                    ></span>
                                </div>
                            </div>

                            <label for="">Contraseña nueva:</label>
                            <div class="input-group">
                                <input
                                    :type="type.type2"
                                    id="pass02"
                                    class="form-control"
                                    aria-label="Username"
                                    aria-describedby="basic-addon2"
                                    v-model="forPassword.newPassword"
                                />
                                <div class="input-group-prepend">
                                    <span
                                        class="input-group-text"
                                        id="basic-addon2"
                                        ><i
                                            :class="['fas', ico.icon2]"
                                            id="icon02"
                                            v-on:click="ChangeIcon(2)"
                                        >
                                        </i>
                                    </span>
                                </div>
                            </div>

                            <label for="">Confirmar nueva contraseña:</label>
                            <div class="input-group">
                                <input
                                    :type="type.type3"
                                    id="pass03"
                                    class="form-control"
                                    aria-label="Username"
                                    aria-describedby="basic-addon3"
                                    v-model="forPassword.repeatPassword"
                                />
                                <div class="input-group-prepend">
                                    <span
                                        class="input-group-text"
                                        id="basic-addon3"
                                        ><i
                                            :class="['fas', ico.icon3]"
                                            id="icon02"
                                            v-on:click="ChangeIcon(3)"
                                        ></i
                                    ></span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button
                            v-on:click="changePassword()"
                            type="button"
                            class="btn btn-success"
                        >
                            Guardar
                        </button>
                        <button
                            type="button"
                            class="btn btn-danger"
                            data-dismiss="modal"
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="modal fade"
            id="id03"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            Cambiar teléfono
                        </h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="">Nuevo teléfono:</label>
                            <input
                                type="text"
                                class="form-control"
                                style="width: 50%"
                                v-model="forNumTelf.numTelefono"
                            />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success">
                            Guardar
                        </button>
                        <button
                            type="button"
                            class="btn btn-danger"
                            data-dismiss="modal"
                        >
                            Cancelar
                        </button>
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
        email: localStorage.getItem('email'),
        apellido: localStorage.getItem('apellido'),
        nombre: localStorage.getItem('nombre'),
        id: localStorage.getItem('UserId'),
        carrera: localStorage.getItem('Carrera'),
        sede: localStorage.getItem('Sede'),
        telefono: localStorage.getItem('telefono'),
        ico: {
            icon1: 'fa-eye',
            icon2: 'fa-eye',
            icon3: 'fa-eye',
        },
        type: {
            type1: 'password',
            type2: 'password',
            type3: 'password',
        },
        forPassword: {
            currentPassword: '',
            newPassword: '',
            repeatPassword: '',
        },
        forNumTelf:{
            numTelefono : ''
        },
        ContentType:{
            headers: {'Content-Type': 'multipart/form-data'}
        }
    }),
    methods: {
        ChangeIcon(num) {
            if (num == 1) {
                if (this.type.type1 == 'password') {
                    this.type.type1 = 'text';
                    this.ico.icon1 = 'fa-eye-slash';
                } else {
                    this.type.type1 = 'password';
                    this.ico.icon1 = 'fa-eye';
                }
            } else if (num == 2) {
                if (this.type.type2 == 'password') {
                    this.type.type2 = 'text';
                    this.ico.icon2 = 'fa-eye-slash';
                } else {
                    this.type.type2 = 'password';
                    this.ico.icon2 = 'fa-eye';
                }
            } else if (num == 3) {
                if (this.type.type3 == 'password') {
                    this.type.type3 = 'text';
                    this.ico.icon3 = 'fa-eye-slash';
                } else {
                    this.type.type3 = 'password';
                    this.ico.icon3 = 'fa-eye';
                }
            }
        },
        async changePassword() {
            if (
                this.forPassword.newPassword == this.forPassword.repeatPassword
            ) {
                var dataPass = new FormData();
                dataPass.append('id_usuario', localStorage.getItem("codAlu"));
                dataPass.append('password', this.forPassword.currentPassword);
                dataPass.append('new_password', this.forPassword.newPassword);

                await axios.post('https://senati.herokuapp.com/api/update/password.php',dataPass,this.ContentType).then(response=>{
                    console.log(response);
                }).catch(error=>{
                    console.log(error);
                });
            }
        },
    },
};
</script>

<style scoped>
body {
    color: #1a202c;
    text-align: left;
    background-color: #e2e8f0;
    font-family: 'Roboto', sans-serif;
}

.main-body {
    padding: 15px;
}

.card {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
}

.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
}

.gutters-sm {
    margin-right: -8px;
    margin-left: -8px;
}

.gutters-sm > .col,
.gutters-sm > [class*='col-'] {
    padding-right: 8px;
    padding-left: 8px;
}

.bg-gray-300 {
    background-color: #e2e8f0;
}

.h-100 {
    height: 100% !important;
}

.shadow-none {
    box-shadow: none !important;
}
</style>