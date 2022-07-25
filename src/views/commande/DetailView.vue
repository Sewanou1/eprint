<template>
  <div class="navbar">
    <NavbarView />
  </div>
  <div class="hello" style="p">
    <div class=" mt-10">
      <div class="row" style="">
        <div class="col-md-12">
          <div class="">
            <div class="row">
              <div class="col-md-12">
                <div class="content content-full-width">
                  <!-- begin profile -->
                  <div class="profile">
                    <div class="profile-header">
                      <!-- BEGIN profile-header-cover -->
                      <div class="profile-header-cover"></div>
                      <!-- END profile-header-cover -->
                      <!-- BEGIN profile-header-content -->
                      <div class="profile-header-content">
                        <!-- BEGIN profile-header-img -->
                        <div class="profile-header-img">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                            alt=""
                          />
                        </div>
                        <!-- END profile-header-img -->
                        <!-- BEGIN profile-header-info -->
                        <div class="profile-header-info">
                          <h4 class="m-t-10 m-b-5">John Doe</h4>
                          <p class="m-b-10">Web And Frontend Developer</p>
                          <a href="#" class="btn btn-xs btn-success"
                            >Edit Profile</a
                          >
                        </div>
                        <!-- END profile-header-info -->
                      </div>
                      <!-- END profile-header-content -->
                      <!-- BEGIN profile-header-tab -->
                      <ul class="profile-header-tab nav nav-tabs">
                        <li class="nav-item">
                          <a
                            id="commande"
                            href="#form_commander"
                            class="nav-link_ active show"
                            data-toggle="tab"
                            >COMMANDER</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            id="article"
                            href="#nos_articles"
                            class="nav-link_"
                            data-toggle="tab"
                            >ARTICLE</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            id="catalogue"
                            href="#notre_catalogue"
                            class="nav-link_"
                            data-toggle="tab"
                            >CATALOGUE</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            id="presentation"
                            href="#a_propos"
                            class="nav-link_"
                            data-toggle="tab"
                            >PRESENTATION</a
                          >
                        </li>
                      </ul>
                      <!-- END profile-header-tab -->
                    </div>
                  </div>
                  <!-- end profile -->
                  <div class="tab-content">
                    <!-- partie formulaire -->
                    <div id="form_commander" class="tab-pane active">
                      <section id="" class="section">
                        <div class="container">
                          <div class="row">
                            <div class="col-lg-2"></div>
                            <div class="col-lg-8">
                              <div class="card">
                                <div class="card-body">
                                  <h5 class="card-title">
                                    Commander votre impression
                                  </h5>
                                  <!-- General Form Elements -->
                                  <form>
                                    <div class="row mb-3">
                                      <label
                                        for="inputText"
                                        class="col-sm-3 col-form-label"
                                        >Nom</label
                                      >
                                      <div class="col-sm-9">
                                        <input
                                          type="text"
                                          class="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div class="row mb-3">
                                      <label
                                        for="inputPassword"
                                        class="col-sm-3 col-form-label"
                                        >Prenom</label
                                      >
                                      <div class="col-sm-9">
                                        <input
                                          type="text"
                                          class="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div class="row mb-3">
                                      <label
                                        for="inputEmail"
                                        class="col-sm-3 col-form-label"
                                        >Email</label
                                      >
                                      <div class="col-sm-9">
                                        <input
                                          type="email"
                                          class="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div class="row mb-3">
                                      <label
                                        for="inputNumber"
                                        class="col-sm-3 col-form-label"
                                        >Contact</label
                                      >
                                      <div class="col-sm-9">
                                        <input
                                          type="number"
                                          class="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div class="row mb-3">
                                      <label
                                        for="inputNumber"
                                        class="col-sm-3 col-form-label"
                                        >Document à imprimer</label
                                      >
                                      <div class="col-sm-9">
                                        <input
                                          class="form-control"
                                          type="file"
                                          id="formFile"
                                        />
                                      </div>
                                    </div>
                                    <div class="row mb-3">
                                      <label class="col-sm-3 col-form-label"
                                        >Couleur</label
                                      >
                                      <div class="col-sm-9">
                                        <select
                                          class="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>Blanc noir</option>
                                          <option value="1">A Couleur</option>
                                          <option value="2">
                                            Impression de carte de visite
                                          </option>
                                          <option value="3">
                                            Impression de carte de mariage
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="row mb-3">
                                      <label class="col-sm-3 col-form-label"
                                        >Type d'impression</label
                                      >
                                      <div class="col-sm-9">
                                        <select
                                          class="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>
                                            Impression de fichier pdf
                                          </option>
                                          <option value="1">
                                            Impression de bâche
                                          </option>
                                          <option value="2">
                                            Impression de carte de visite
                                          </option>
                                          <option value="3">
                                            Impression de carte de mariage
                                          </option>
                                        </select>
                                      </div>
                                    </div>

                                    <div class="row mb-3">
                                      <label class="col-sm-3 col-form-label"
                                        >Format voulu</label
                                      >
                                      <div class="col-sm-9">
                                        <select
                                          class="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>
                                            Impression de fichier pdf
                                          </option>
                                          <option value="1">
                                            Impression de bâche
                                          </option>
                                          <option value="2">
                                            Impression de carte de visite
                                          </option>
                                          <option value="3">
                                            Impression de carte de mariage
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="row mb-3">
                                      <label
                                        for="inputDate"
                                        class="col-sm-3 col-form-label"
                                        >Délai</label
                                      >
                                      <div class="col-sm-9">
                                        <input
                                          type="date"
                                          class="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div class="row mb-3">
                                      <label
                                        for="inputPassword"
                                        class="col-sm-3 col-form-label"
                                        >Détail && Exigence</label
                                      >
                                      <div class="col-sm-9">
                                        <textarea
                                          class="form-control"
                                          style="height: 100px"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <fieldset class="row mb-3">
                                      <legend
                                        class="col-form-label col-sm-3 pt-0"
                                      >
                                        Caractère du document
                                      </legend>
                                      <div class="col-sm-9">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="radio"
                                            name="gridRadios"
                                            id="gridRadios1"
                                            value="option1"
                                            checked
                                          />
                                          <label
                                            class="form-check-label"
                                            for="gridRadios1"
                                          >
                                            Confidentiel
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="radio"
                                            name="gridRadios"
                                            id="gridRadios2"
                                            value="option2"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="gridRadios2"
                                          >
                                            Non confidentiel
                                          </label>
                                        </div>
                                        <div class="form-check disabled">
                                          <input
                                            class="form-check-input"
                                            type="radio"
                                            name="gridRadios"
                                            id="gridRadios"
                                            value="option"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="gridRadios3"
                                          >
                                            Public
                                          </label>
                                        </div>
                                      </div>
                                    </fieldset>

                                    <div class="row mb-3">
                                      <button
                                        type="submit"
                                        class="btn btn-primary"
                                      >
                                        Envoyer
                                      </button>
                                    </div>
                                  </form>
                                  <!-- End General Form Elements -->
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-2"></div>
                          </div>
                        </div>
                      </section>
                    </div>

                    <!-- article -->
                    <div id="nos_articles" class="tab-pane fade">
                      <section id="team" class="team">
                        <div class="container">
                          <div class="section-title" data-aos="fade-up">
                            <h2 class="mt-5">Article</h2>
                            <p>Nos articles</p>
                          </div>

                          <div class="row" data-aos="fade-left">
                            <div class="col-lg-3 col-md-6">
                              <div
                                class="member"
                                data-aos="zoom-in"
                                data-aos-delay="100"
                              >
                                <a
                                  href=""
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                >
                                  <div class="pic">
                                    <img
                                      src="assets/img/team/team-1.jpg"
                                      class="img-fluid"
                                      alt=""
                                    />
                                  </div>
                                </a>
                                <div class="member-info">
                                  <a href="">
                                    <h4>Flyers</h4>
                                  </a>
                                  <div>
                                    <span>Prix : 25$</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
                              <div
                                class="member"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                              >
                                <div class="pic">
                                  <img
                                    src="assets/img/team/team-2.jpg"
                                    class="img-fluid"
                                    alt=""
                                  />
                                </div>
                                <div class="member-info">
                                  <h4>Flyers</h4>
                                  <div>
                                    <span>Prix : 25$</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                              <div
                                class="member"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                              >
                                <div class="pic">
                                  <img
                                    src="assets/img/team/team-3.jpg"
                                    class="img-fluid"
                                    alt=""
                                  />
                                </div>
                                <div class="member-info">
                                  <h4>Flyers</h4>
                                  <div>
                                    <span>Prix : 25$</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                              <div
                                class="member"
                                data-aos="zoom-in"
                                data-aos-delay="400"
                              >
                                <div class="pic">
                                  <img
                                    src="assets/img/team/team-4.jpg"
                                    class="img-fluid"
                                    alt=""
                                  />
                                </div>
                                <div class="member-info">
                                  <h4>Flyers</h4>
                                  <div>
                                    <span>Prix : 25$</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>

                    <!-- catalogue -->
                    <div id="notre_catalogue" class="tab-pane fade">
                      <section id="team" class="team">
                        <div class="container">
                          <div class="section-title" data-aos="fade-up">
                            <h2>CATALOGUE</h2>
                            <p>NOS REALISATIONS</p>
                          </div>

                          <div class="row g-0" data-aos="fade-left">
                            <div class="col-lg-3 col-md-4">
                              <div
                                class="gallery-item"
                                data-aos="zoom-in"
                                data-aos-delay="100"
                              >
                                <a
                                  href="assets/img/gallery/gallery-1.jpg"
                                  class="gallery-lightbox"
                                >
                                  <img
                                    src="assets/img/gallery/gallery-1.jpg"
                                    alt=""
                                    class="img-fluid"
                                  />
                                </a>
                              </div>
                            </div>

                            <div class="col-lg-3 col-md-4">
                              <div
                                class="gallery-item"
                                data-aos="zoom-in"
                                data-aos-delay="150"
                              >
                                <a
                                  href="assets/img/gallery/gallery-2.jpg"
                                  class="gallery-lightbox"
                                >
                                  <img
                                    src="assets/img/gallery/gallery-2.jpg"
                                    alt=""
                                    class="img-fluid"
                                  />
                                </a>
                              </div>
                            </div>

                            <div class="col-lg-3 col-md-4">
                              <div
                                class="gallery-item"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                              >
                                <a
                                  href="assets/img/gallery/gallery-3.jpg"
                                  class="gallery-lightbox"
                                >
                                  <img
                                    src="assets/img/gallery/gallery-3.jpg"
                                    alt=""
                                    class="img-fluid"
                                  />
                                </a>
                              </div>
                            </div>

                            <div class="col-lg-3 col-md-4">
                              <div
                                class="gallery-item"
                                data-aos="zoom-in"
                                data-aos-delay="250"
                              >
                                <a
                                  href="assets/img/gallery/gallery-4.jpg"
                                  class="gallery-lightbox"
                                >
                                  <img
                                    src="assets/img/gallery/gallery-4.jpg"
                                    alt=""
                                    class="img-fluid"
                                  />
                                </a>
                              </div>
                            </div>

                            <div class="col-lg-3 col-md-4">
                              <div
                                class="gallery-item"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                              >
                                <a
                                  href="assets/img/gallery/gallery-5.jpg"
                                  class="gallery-lightbox"
                                >
                                  <img
                                    src="assets/img/gallery/gallery-5.jpg"
                                    alt=""
                                    class="img-fluid"
                                  />
                                </a>
                              </div>
                            </div>

                            <div class="col-lg-3 col-md-4">
                              <div
                                class="gallery-item"
                                data-aos="zoom-in"
                                data-aos-delay="350"
                              >
                                <a
                                  href="assets/img/gallery/gallery-6.jpg"
                                  class="gallery-lightbox"
                                >
                                  <img
                                    src="assets/img/gallery/gallery-6.jpg"
                                    alt=""
                                    class="img-fluid"
                                  />
                                </a>
                              </div>
                            </div>

                            <div class="col-lg-3 col-md-4">
                              <div
                                class="gallery-item"
                                data-aos="zoom-in"
                                data-aos-delay="400"
                              >
                                <a
                                  href="assets/img/gallery/gallery-7.jpg"
                                  class="gallery-lightbox"
                                >
                                  <img
                                    src="assets/img/gallery/gallery-7.jpg"
                                    alt=""
                                    class="img-fluid"
                                  />
                                </a>
                              </div>
                            </div>

                            <div class="col-lg-3 col-md-4">
                              <div
                                class="gallery-item"
                                data-aos="zoom-in"
                                data-aos-delay="450"
                              >
                                <a
                                  href="assets/img/gallery/gallery-8.jpg"
                                  class="gallery-lightbox"
                                >
                                  <img
                                    src="assets/img/gallery/gallery-8.jpg"
                                    alt=""
                                    class="img-fluid"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>

                    <!-- A propos -->
                    <div id="a_propos" class="tab-pane fade">
                      <section id="team" class="team">
                        <div class="container">
                          <div class="section-title" data-aos="fade-up">
                            <h2>A PROPOS</h2>
                            <p>PRESENTATION GENERALE</p>
                          </div>
                          <div class="" style="text-align: justify">
                            <p>
                              Soyez les bienvenus sur notre centre d'impression
                            </p>
                            <P
                              >Nous sommes un centre d'expertise en impression
                              qui est à votre disposition pour toute vos
                              commandes en imprimérie. Nous offrons la meilleurs
                              qualité des services au clients et tout ça dans
                              des délais bien respecté. Quelque soit le
                              caractère de votre document, l'impression se passe
                              en toute securité. Notre centre prend en compte la
                              sécurisation de l’impression des documents à
                              caractère confidentiel pour certains clients. Une
                              destruction totale du fichier de sa base de
                              données après impression de ce dernier, ceci si le
                              client mentionne le caractère confidentiel de son
                              document au cours de sa commande.</P
                            >
                            <p>
                              Vos commandes sont livré par notre centre en toute
                              sécurité. Faite nous confiance et vous ne serez
                              pas deçu.
                            </p>
                            <P
                              >Pour le meilleur et le bien des client nous
                              oeuvrons. Merci!!!</P
                            >
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>

                  <!-- end profile-content -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <FooterView />
  </div>

  <!-- Modal -->
<div class="modal fade z" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
    style="z-index: 1000">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                <button type="button" class="btn btn-primary">Ajouter au panier</button>
            </div>
        </div>
    </div>

</div>
<!--End  Modal -->
</template>

<script>

// $(document).ready(function(){
//     $(".nav-tabs a").click(function(){
//       $(this).tab('show');
//     });
// });
  

import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";

export default {
  name: "DetailView",
  components: {
    NavbarView,
    FooterView,
  },
};
</script>

<style lang="scss" scoped>
body {
  margin-top: 55px;
  background: #eee;
  font-family: "Open Sans", sans-serif;
}
.hello {
  margin-top: 50px;
}

.profile-header {
  position: relative;
  overflow: hidden;
  height: 300px;
}

.profile-header .profile-header-cover {
  background-color: #00b5ec;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.profile-header .profile-header-cover:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0.75) 100%
  );
}

.profile-header .profile-header-content {
  color: #fff;
  padding: 25px;
}

.profile-header-img {
  float: left;
  width: 120px;
  height: 120px;
  overflow: hidden;
  position: relative;
  z-index: 10;
  margin: 0 0 -20px;
  padding: 3px;
  border-radius: 4px;
  background: #fff;
}

.profile-header-img span {
  color: black;
}

.profile-header-img img {
  max-width: 100%;
}

.profile-header-info h4 {
  font-weight: 500;
  color: #fff;
}

.profile-header-img + .profile-header-info {
  margin-left: 140px;
}

.profile-header .profile-header-content,
.profile-header .profile-header-tab {
  position: relative;
}

.b-minus-1,
.b-minus-10,
.b-minus-2,
.b-minus-3,
.b-minus-4,
.b-minus-5,
.b-minus-6,
.b-minus-7,
.b-minus-8,
.b-minus-9,
.b-plus-1,
.b-plus-10,
.b-plus-2,
.b-plus-3,
.b-plus-4,
.b-plus-5,
.b-plus-6,
.b-plus-7,
.b-plus-8,
.b-plus-9,
.l-minus-1,
.l-minus-2,
.l-minus-3,
.l-minus-4,
.l-minus-5,
.l-minus-6,
.l-minus-7,
.l-minus-8,
.l-minus-9,
.l-plus-1,
.l-plus-10,
.l-plus-2,
.l-plus-3,
.l-plus-4,
.l-plus-5,
.l-plus-6,
.l-plus-7,
.l-plus-8,
.l-plus-9,
.r-minus-1,
.r-minus-10,
.r-minus-2,
.r-minus-3,
.r-minus-4,
.r-minus-5,
.r-minus-6,
.r-minus-7,
.r-minus-8,
.r-minus-9,
.r-plus-1,
.r-plus-10,
.r-plus-2,
.r-plus-3,
.r-plus-4,
.r-plus-5,
.r-plus-6,
.r-plus-7,
.r-plus-8,
.r-plus-9,
.t-minus-1,
.t-minus-10,
.t-minus-2,
.t-minus-3,
.t-minus-4,
.t-minus-5,
.t-minus-6,
.t-minus-7,
.t-minus-8,
.t-minus-9,
.t-plus-1,
.t-plus-10,
.t-plus-2,
.t-plus-3,
.t-plus-4,
.t-plus-5,
.t-plus-6,
.t-plus-7,
.t-plus-8,
.t-plus-9 {
  position: relative !important;
}

.profile-header .profile-header-tab {
  background: #fff;
  list-style-type: none;
  margin: -10px 0 0;
  padding: 0 0 0 140px;
  white-space: nowrap;
  border-radius: 0;
}

.text-ellipsis,
.text-nowrap {
  white-space: nowrap !important;
}

.profile-header .profile-header-tab > li {
  display: inline-block;
  margin: 0;
}

.profile-header .profile-header-tab > li > a {
  display: block;
  color: #929ba1;
  line-height: 20px;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: 700;
  font-size: 12px;
  border: none;
}

.profile-header .profile-header-tab > li.active > a,
.profile-header .profile-header-tab > li > a.active {
  color: #242a30;
}

.section {
  background-color: #fff;
}
</style>>
