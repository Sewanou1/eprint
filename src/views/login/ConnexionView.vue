<template>
    <div class="hello">
            <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div class="d-flex justify-content-center py-4">
                <a href="/" class="logo d-flex align-items-center w-auto " style="text-decoration: none">
                  <img src="" alt="">
                  <span class=""  style="color: rgba(1, 4, 136, 1); font-size:28px;font-weight: 700; ">E-PRINT</span>
                </a>
              </div><!-- End Logo -->

              <div class="card mb-3">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                    <p class="text-center small">Entrer votre email & mot de passe pour se connecter <i class="baseline-signal_cellular_connected_no_internet_4_bar"></i></p>
                  </div>

                  <form action="{{ route('login') }}" method="post">
                    <div class="input-group mb-4">
                        <input type="email" placeholder="Email" class="form-control"
                            name="email" value="" required autocomplete="email" autofocus>
                    </div>

                    <div class="input-group mb-3">
                        <input type="password" placeholder="Mot de passe"
                            class="form-control" name="password" required
                            autocomplete="current-password">
                    </div>
                    <div class="col-12">
                        <div class="icheck-primary">
                            <input class="form-check-input" type="checkbox" name="remember" id="remember">
                            <label class="form-check-label" for="remember">
                                Se souvenir de moi
                            </label>
                        </div>
                    </div>

                    <div class="col-12 mt-3">
                        <button type="submit" class="btn btn-primary btn-block  w-100" style="background-color: rgba(1, 4, 136, 1)">Se connecter</button>
                    </div>
                    <div class="col-12 mt-3">
                      <p class="small mb-0">Don't have account? <a class="" href="" style="color: rgb(40, 44, 245)">Create an account</a></p>
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
    export default {
        name : "ConnexionView"
    }
</script>
