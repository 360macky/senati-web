import axios from "axios";
//import {mapState} from "vuex";

//const ENDPOINT_PATH = "https://dlg-sistema.herokuapp.com/api/1.0/Identity/login";

export default {
    async login(user) {
        var date = new Date();
        var userFormData = new FormData();
        userFormData.append("password",user.password);
        userFormData.append("username",user.username);
        var exito = false;
        var ContentType = {headers: {"Content-Type": "multipart/form-data"}}
      await axios.post("https://senati.herokuapp.com/api/login/",userFormData,ContentType)
      .then(response => { 
          sessionStorage.setItem("session",response.data.success + date.getTime())
          localStorage.setItem("email",response.data.userData.email_usu)
          localStorage.setItem("apellido",response.data.userData.ape_usu)
          localStorage.setItem("nombre",response.data.userData.nom_usu)
          //this.token = response.data
        console.log(response);
      }).catch(error => {
          console.log(error)
      });
    }
}