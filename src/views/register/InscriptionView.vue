<template>
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Pages / Register - NiceAdmin Bootstrap Template</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.gstatic.com" rel="preconnect">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/quill/quill.snow.css" rel="stylesheet">
  <link href="assets/vendor/quill/quill.bubble.css" rel="stylesheet">
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="assets/vendor/simple-datatables/style.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">


  <!-- =======================================================
  * Template Name: NiceAdmin - v2.2.2
  * Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body>


<main>
    <div class="container">

      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div class="d-flex justify-content-center py-4">
                <router-link to="/" class="logo d-flex align-items-center w-auto">
                  <img src="" alt="">
                  <span class=""  style="color: rgba(1, 4, 136, 1); font-size:28px;font-weight: 700; margin-top:25px">E-PRINT</span>

               </router-link>
              </div><!-- End Logo -->

              <div class="card mb-4">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Inscrivez vous !!</h5>

                  </div>

                  <form class="row g-3 needs-validation">
                    <div class="col-12">
                      <label for="yourName" class="form-label">Nom</label>
                      <input type="text" name="nom" class="form-control" id="yourName" required v-model="InfoUsers.nom">

                    </div>

                    <div class="col-12">
                      <label for="yourName" class="form-label">Prénom</label>
                      <input type="text" name="prenom" class="form-control" id="lastName" required v-model="InfoUsers.prenom">

                    </div>

                    <div class="col-12">
                      <label for="yourEmail" class="form-label">Email</label>
                      <input type="email" name="email" class="form-control" id="yourEmail" required v-model="InfoUsers.email">
                      <div class="invalid-feedback">Please enter a valid Email adddress!</div>
                    </div>

                    <div class="col-12">
                        <label for="yourPassword" class="form-label">Télephone</label>
                        <input type="number" name="telephone" class="form-control" id="yourPassword" placeholder="EX :+229 00000000" required v-model="InfoUsers.telephone">
                        <div class="invalid-feedback">Please enter your tel!</div>
                    </div>

                    <div class="col-12">
                        <label for="yourPassword" class="form-label">Adresse</label>
                        <input type="text" name="adresse" class="form-control" id="yourPassword" required v-model="InfoUsers.adresse">
                        <div class="invalid-feedback">Please enter your adresse!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Mot de passe</label>
                      <input type="password" name="password" class="form-control" id="yourPassword" required v-model="InfoUsers.password">
                      <div class="invalid-feedback">Please enter your password!</div>
                    </div>


                    <div class="col-12">
                        <label for="yourPassword" class="form-label">Confirmer mot de passe</label>
                        <input type="password" name="password1" class="form-control" id="yourPassword" required v-model="InfoUsers.password_confirmation">
                        <div class="invalid-feedback">Please enter your password!</div>
                      </div>

                    <!-- <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required>
                        <label class="form-check-label" for="acceptTerms">I agree and accept the terms and conditions</label>
                        <div class="invalid-feedback">You must agree before submitting.</div>
                      </div>
                    </div> -->
                    <div class="col-12">
                      <button class="btn btn-primary w-100" style="background-color: rgba(1, 4, 136, 1)" type="submit"  @click.prevent="submitUser" >  S'inscrire</button>
                    </div>
                    <div class="col-12">
                      <p class="small mb-0" >Avez vous un compte? <a href="/connexion" style="color: rgb(40, 44, 245)">Se connecter</a></p>
                    </div>
                  </form>

                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

    </div>
  </main><!-- End #main -->

</body>
</html>

</template>

<script>
  import axios from 'axios'

  export default {

    name : "InscriptionView",

    data() {
      return {
        InfoUsers: {
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        adresse: '',
        password: '',
        password_confirmation: '',
        }
      }
    },

    methods: {
      submitUser(){
        axios.post('http://localhost:8000/api/inscription',this.InfoUsers)    
        .then(response => (
          console.log(response),
         alert('Inscription effectuée avec succès !!!')
        ))
        .catch( error => {
          console.log("ERRRR::", error.response.data)
          alert('Veillez bien renseigner les champs Merci!!!')
        })

      }
    }
  }
</script>
