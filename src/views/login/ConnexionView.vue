<template>
    <div class="hello" >
            <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div class="d-flex justify-content-center py-4">
            <router-link to="/"  class="logo d-flex align-items-center w-auto " style="text-decoration: none">           
                  <img src="" alt="">
                  <span class=""  style="color: white; font-size:28px;font-weight: 700; ">E-PRINT</span>
            </router-link> 
              </div><!-- End Logo -->

              <div class="card mb-3">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                    <p class="text-center small">Entrer votre email & mot de passe pour se connecter <i class="baseline-signal_cellular_connected_no_internet_4_bar"></i></p>
                  </div>
                  
                  <form >
                    <div class="input-group mb-4">
                        <input type="email" placeholder="Email" class="form-control"
                            name="email" required autocomplete="email" autofocus v-model="InfoUsers.email">
                    </div>

                    <div class="input-group mb-3">
                        <input type="password" placeholder="Mot de passe"
                            class="form-control" name="password" required
                            autocomplete="current-password" v-model="InfoUsers.password">
                    </div>
                    <div class="col-12">
                        <div class="icheck-primary ">
                              <a href="" style="text-decoration:none" class="float-end  mb-4">Mot de passe oublié?</a>
                        </div>
                    </div>

                    <div class="col-12 mt-3">
                        <input type="submit" class="btn btn-primary btn-block  w-100" style="background-color: rgba(1, 4, 136, 1)" @click.prevent="submitUser"  value="Se connecter"/>
                    </div>
                    <div class="col-12 mt-3">
                      <p class="small mb-0">Vous n'avez pas un compte ? <a class="" href="/inscription" style="color: rgb(40, 44, 245)">Inscrivez-vous</a></p>
                    </div>
                   </form> 
                  
                </div>
              </div>



            </div>
          </div>
        </div>

      </section>
    </div>
</template>

<script>
// import axios from 'axios'

    export default {
        name : "ConnexionView",

          data() {
            return {
              InfoUsers: {
              email: '',
              password: '',
              }
            }
    },

        methods: {
          // submitUser(){
          //   axios.post('http://localhost:8000/api/connexion',this.InfoUsers)      
          //   .then(response => (
          //     localStorage.setItem('token', response.data),
          //     this.$router.push('commander' )
          //   ))
            
          //   .catch( error => {
          //     console.log("ERRRR::", error.response.data)
          //     alert('Donnée(s) incorrecte(s) !!')
          //   })

          // },

        submitUser(){
          this.$store.dispatch('login', this.InfoUsers)
                .then(response => (
               
               this.$router.push('commander' )
             ))
            
             .catch( error => {
             
               alert('Donnée(s) incorrecte(s) !!')
             })
        }

    }
        
    }


</script>

<style lang="scss" scoped>
  .hello {
  background: url("../../assets/img/imp2.jpg") no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  background-color: rgba(0, 0, 0, 0.342);
  background-blend-mode: multiply;

  }
</style>
