<template>
    <div>
        <div class="d-flex">
            <div id="sidebar-container" class="bg-primary">
                <div class="logo">
                    <img
                        src="https://i.imgur.com/Stl4qpM.png"
                        alt="Logotipo de Senati"
                        class="img-fluid mx-auto d-block"
                        width="200px"
                    />
                </div>
                <div class="user m-3 bg-info rounded-pill">
                    <li>
                        <a href="#" class=" text-light">
                            <img
                                style="padding: 10px 5px;"
                                src=" img/user.png "
                                alt="Foto de Perfil"
                                class="img-fluid avatar mr-2"
                            />
                            001214638
                        </a>
                    </li>
                </div>

                <div class="menu">
                    <a href="inicio" class="d-block text-light p-3"
                        ><i class="fas fa-home mr-2"></i>Inicio</a
                    >
                    <a href="perfil" class="d-block text-light p-3"
                        ><i class="fas fa-user mr-2"></i>Perfil</a
                    >
                    <a
                        href="documentacionalumno"
                        class="selected d-block text-light p-3"
                        ><i class="far fa-file mr-2"></i>Documentación</a
                    >
                    <a href="#" class="d-block text-light p-3"
                        ><i class="far fa-calendar mr-2"></i>Calendario</a
                    >

                    <a href="cerrarsesion" class="d-block text-light p-3"
                        ><i class="fas fa-sign-out-alt mr-2"></i>Cerrar
                        sesión</a
                    >
                </div>
            </div>

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
                                    class="alert alert-danger"
                                    style="
                             border-color: #f5c6cb; position: relative;padding: 0.75rem 1.25rem; margin-bottom: 1rem;    border: 1px solid transparent;border-radius: 0.25rem; flex-wrap: wrap;-ms-flex-wrap: wrap;"
                                    id="alert"
                                >
                                    Plazo máximo para subir documentos al
                                    sistema: 6 de enero del 2021
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-12">
                                    <form>
                                        <div
                                            class="card mt-3"
                                            id="file_1_container"
                                        >
                                            <div class="card-header">
                                                <h4>DNI</h4>
                                            </div>
                                            <div class="card-body">
                                                <div class="form-group">
                                                    <div class="row">
                                                        <div class="col">
                                                            <label
                                                                for="exampleFormControlFile1"
                                                                >Agregue su
                                                                DNI</label
                                                            >
                                                            <input
                                                                type="file"
                                                                class="form-control-file"
                                                                id="file_1"
                                                                @change="
                                                                    updateBorderColor_DNI()
                                                                "
                                                            />

                                                            <ul
                                                                class="list-group mt-3"
                                                            >
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    Foto clara y
                                                                    en alta
                                                                    resolución
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    Dapibus ac
                                                                    facilisis in
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    Morbi leo
                                                                    risus
                                                                </li>
                                                            </ul>

                                                            <button
                                                                type="submit"
                                                                class="btn btn-info btn-lg mt-3"
                                                                @click.prevent="
                                                                    send()
                                                                "
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

                                        <div
                                            class="card mt-3"
                                            id="file_2_container"
                                        >
                                            <div class="card-header">
                                                <h4>Certificado de estudios</h4>
                                            </div>
                                            <div class="card-body">
                                                <div class="form-group">
                                                    <div class="row">
                                                        <div class="col">
                                                            <label
                                                                for="exampleFormControlFile1"
                                                                >Agregue su
                                                                certificado</label
                                                            >
                                                            <input
                                                                type="file"
                                                                class="form-control-file"
                                                                id="file_2"
                                                                @change="
                                                                    updateBorderColor_Estudios()
                                                                "
                                                            />

                                                            <ul
                                                                class="list-group mt-3"
                                                            >
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    Cras justo
                                                                    odio
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    Dapibus ac
                                                                    facilisis in
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    Morbi leo
                                                                    risus
                                                                </li>
                                                            </ul>

                                                            <button
                                                                type="submit"
                                                                class="btn btn-info btn-lg mt-3"
                                                                @click.prevent="
                                                                    send()
                                                                "
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

                                        <div
                                            class="card mt-3"
                                            id="file_3_container"
                                        >
                                            <div class="card-header">
                                                <h4>Proyecto</h4>
                                            </div>
                                            <div class="card-body">
                                                <div class="form-group">
                                                    <div class="row">
                                                        <div class="col">
                                                            <label
                                                                for="exampleFormControlFile1"
                                                                >Agregue su
                                                                proyecto</label
                                                            >
                                                            <input
                                                                type="file"
                                                                class="form-control-file"
                                                                id="file_3"
                                                                @change="
                                                                    updateBorderColor_Proyecto()
                                                                "
                                                            />

                                                            <ul
                                                                class="list-group mt-3"
                                                            >
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    Cras justo
                                                                    odio
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    Dapibus ac
                                                                    facilisis in
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    Morbi leo
                                                                    risus
                                                                </li>
                                                            </ul>

                                                            <button
                                                                type="submit"
                                                                class="btn btn-info btn-lg mt-3"
                                                                @click.prevent="
                                                                    send()
                                                                "
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
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer class="bg-dark p-3">
                        <p class="text-light text-center">
                            Copyright 2020 SENATI
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DocumentacionAlumno',
    created() {
        document.title = 'Enviar documentación';
        if (
            this.getCookie('username') != '122365' ||
            this.getCookie('password') != '123456'
        ) {
            window.location.href = '/';
        }
    },
    methods: {
        setCookie(cname, cvalue, exdays) {
            let d = new Date();
            d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
            let expires = 'expires=' + d.toUTCString();
            document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
        },
        getCookie(cname) {
            let name = cname + '=';
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return '';
        },
        send() {
            document.querySelector('#alert').classList.remove('alert-danger');
            document.querySelector('#alert').classList.add('alert');
            document.querySelector('#alert').classList.add('alert-success');
            document.querySelector('#alert').innerHTML = 'Documento enviado';
        },
        updateBorderColor_DNI() {
            document.querySelector('#file_1_container').classList.add('border');
            document
                .querySelector('#file_1_container')
                .classList.add('border-success');
        },
        updateBorderColor_Estudios() {
            document.querySelector('#file_2_container').classList.add('border');
            document
                .querySelector('#file_2_container')
                .classList.add('border-success');
        },
        updateBorderColor_Proyecto() {
            document.querySelector('#file_3_container').classList.add('border');
            document
                .querySelector('#file_3_container')
                .classList.add('border-success');
        },
        sendDocument(type) {
            const UPLOAD_DOCUMENT_API =
                'https://senati.herokuapp.com/dashboard/documentacion/upload/upload.php';

            let fileInput = document.querySelector('#file_1');
            let idUsername = '356';

            let formdata = new FormData();
            formdata.append('id_username', idUsername);
            formdata.append('type', type);
            formdata.append('document', fileInput.files[0], '[PROXY]');

            let requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch(UPLOAD_DOCUMENT_API, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.warn('error', error));
        }
    }
};
</script>

<style scoped>
#sidebar-container .menu > .selected {
    background-color: grey;
}

#sidebar-container .menu > a:hover {
    background-color: #0275d8;
    text-decoration: none;
}

.bg-primary {
    background-color: #111b54 !important;
}

#sidebar-container {
    min-height: 100vh;
}

#sidebar-container .menu {
    width: 15rem;
}

/* .w-100 {
  overflow-y: auto;
} */

.avatar {
    max-width: 35px;
}

#content {
    overflow-y: auto;
    height: 100vh;
}

#icon01,
#icon02,
#icon03 {
    cursor: pointer;
}
</style>
