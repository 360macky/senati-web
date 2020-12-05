<template>
    <div>
        <section>
        <div class="imgBx">
            <img src="../assets/senati_login.jpg" alt="">
        </div>
        <div class="contentBx">
            <div class="formBx">
                <h2>Iniciar Sesion</h2>
                <form @submit.prevent="logear">
                    <div class="inputBx">
                        <span>Usuario</span>
                        <input v-model="user.username" type="text" name="">
                    </div>
                    <div class="inputBx">
                        <span>Contraseña</span>
                        <input v-model="user.password" type="password" name="">
                    </div>
                    <div class="remember">
                        <label><input  type="checkbox" name="">Recordar Contraseña</label>
                    </div>
                    <div class="inputBx">
                        <input type="submit" value="Iniciar Sesion">
                    </div>
                </form>
                <h3>Ingresar a nuestras paginas</h3>
                <ul class="sci">
                    <li>
                        <a href="https://www.facebook.com/SenatiOficial/"><img src="../assets/facebook.png" alt="" style="width: 40px;height: 40px;"></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/SenatiOficial/"><img src="../assets/youtube.png" alt="" style="width: 50px;height: 50px;"></a>

                    </li>
                </ul>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
//import auth from "@/logic/auth";
//import axios from "axios";

import { mapState, mapMutations} from "vuex";
import axios from "axios";
export default {
    name: 'Login',
    created(){
        console.log(sessionStorage.getItem("sessionActive"))
        if(sessionStorage.getItem("sessionActive") == "true"){
            this.$router.push("/Menu")
        }
    },
    Update: function () {
        console.log('Empiezanuevo renderizado de component');
    },
    data:()=>({
        user:{
      username: "",
      password: "",
    },
    }),
    methods: {
        ...mapMutations(['login']),
        //...mapActions(['SetToken']),
        async logear() {
            var date = new Date();
            var userFormData = new FormData();
            userFormData.append("password",this.user.password);
            userFormData.append("username",this.user.username);
            var ContentType = {headers: {"Content-Type": "multipart/form-data"}}
             await axios.post("https://senati.herokuapp.com/api/login/",userFormData,ContentType)
            .then(response => {
                sessionStorage.setItem("session",response.data.success + date.getTime())
                sessionStorage.setItem("sessionActive",true);
                localStorage.setItem("email",response.data.userData.email_usu)
                localStorage.setItem("apellido",response.data.userData.ape_usu)
                localStorage.setItem("nombre",response.data.userData.nom_usu)
                localStorage.setItem("FullName",response.data.userData.nom_usu +" "+ response.data.userData.ape_usu);
                localStorage.setItem("UserId",response.data.userData.id_usu);
                localStorage.setItem("Carrera",response.data.userData.carrera.nombre_carrera);
                localStorage.setItem("Sede",response.data.userData.sede.nombre_sede);
                localStorage.setItem("telefono",response.data.userData.telf_usu);
                //state.fullName = response.data.userData.nom_usu + response.data.userData.ape_usu;
                //state.rol = response.data.userData.rolid;
                //state.session = response.data.success;
                //state.token = response.data.token;
                //state.correo = response.data.email_usu;
              console.log(response);
              this.$router.push("/Menu")
            }).catch(error => {
                console.log(error);
            });
        }
    },
    computed:{
        ...mapState(['session'])
    },
    
}
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css2? family = Poppins: ital, wght @ 0,100; 0,200; 0,300; 0,400; 0,500; 0,600; 0,700; 0,800; 0,900; 1,100; 1,200; 1.300; 1.400; 1.500; 1.600; 1.700; 1.800; 1.900 & display = swap ');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    
    section {
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
    }
    
    section .imgBx {
        position: relative;
        width: 50%;
        height: 100%;
    }
    
    section .imgBx::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(225deg, #0c3247, #03a9f4);
        z-index: 1;
        mix-blend-mode: screen;
    }
    
    section .imgBx img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    section .contentBx {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
    }
    
    section .contentBx .formBx {
        width: 50%;
    }
    
    section .contentBx .formBx h2 {
        color: #607d8b;
        font-weight: 600;
        font-size: 1.5em;
        text-transform: uppercase;
        margin-bottom: 20px;
        border-bottom: 4px solid #03a9f4;
        display: inline-block;
        letter-spacing: 1px;
    }
    
    section .contentBx .formBx .inputBx {
        margin-bottom: 20px;
    }
    
    section .contentBx .formBx .inputBx span {
        font-size: 16px;
        margin-bottom: 5px;
        display: inline-block;
        color: #607db8;
        font-weight: 300;
        font-size: 16px;
        letter-spacing: 1px;
    }
    
    section .contentBx .formBx .inputBx input {
        width: 100%;
        padding: 10px 20px;
        outline: none;
        font-weight: 400;
        border: 1px solid #607d8b;
        font-size: 16px;
        letter-spacing: 1px;
        color: #607d8b;
        background: transparent;
        border-radius: 30px;
    }
    
    section .contentBx .formBx .inputBx input[type="submit"] {
        background: #03a9f4;
        color: #fff;
        border: none;
        font-weight: 500;
        cursor: pointer;
    }
    
    section .contentBx .formBx .inputBx input[type="submit"]:hover {
        background: skyblue;
    }
    
    .remember {
        margin-bottom: 10px;
        color: #607d8b;
        font-weight: 400;
        font-size: 14px;
    }
    
    section .contentBx .formBx h3 {
        color: #607d8b;
        text-align: center;
        margin: 80px 0 10px;
        font-weight: 500;
    }
    
    section .contentBx .formBx .sci {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    section .contentBx .formBx .sci li {
        list-style: none;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 7px;
    }
    
    @media (max-width:768px) {
        section .imgBx {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        section .contentBx {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            z-index: 1;
        }
        section .contentBx .formBx {
            width: 100%;
            padding: 40px;
            background: rgb(255 255 255 / 0.9);
            margin: 50px;
        }
        section .contentBx .formBx h3 {
            color: #607d8b;
            text-align: center;
            margin: 30px 0 10px;
            font-weight: 500;
        }
    }
</style>