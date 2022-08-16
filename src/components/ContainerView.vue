<template>
  <div class="hello">
    <section id="hero">
      <div class="container">
        <div class="row justify-content-between">
          <div
            class="
              col-lg-7
              pt-5 pt-lg-0
              order-2 order-lg-1
              d-flex
              align-items-center
            "
          >
            <div data-aos="zoom-out" data-aos-duration="2000">
              <h1>Commande ton impression sur <span>E-PRINT</span></h1>
              <h2>
                Une plateforme web qui va permettre à toute structure
                d’impression de faire valoir ses services aux personnes qui sont
                dans le besoin
              </h2>
              <div class="text-center text-lg-start">
                <a href="/commander" class="btn-get-started scrollto"
                  >Commander maintenant</a
                >
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 order-1 order-lg-2 hero-img"
            data-aos="zoom-out"
            data-aos-delay="300"
          >
            <img
              src="../assets/img/imprimer1.png"
              class="img-fluid animated"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <!-- End Hero -->

    <main id="main">
      <!-- ======= Details Section ======= -->
      <section id="details" class="details">
        <div class="container">
          <div class="row content">
            <div class="col-md-4" data-aos="fade-right"  data-aos-duration="2000">
              <img src="../assets/img/client.png" class="img-fluid" alt="" />
            </div>
            <div class="col-md-8 pt-4" data-aos="fade-up"  data-aos-duration="2000">
              <h3>Aimerez vous faire une impression ?.</h3>
              <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i class="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </li>
                <li>
                  <i class="bi bi-check"></i> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
                <li>
                  <i class="bi bi-check"></i> Iure at voluptas aspernatur
                  dignissimos doloribus repudiandae.
                </li>
                <li>
                  <i class="bi bi-check"></i> Est ipsa assumenda id facilis
                  nesciunt placeat sed doloribus praesentium.
                </li>
              </ul>
              <p>
                Voluptas nisi in quia excepturi nihil voluptas nam et ut.
                Expedita omnis eum consequatur non. Sed in asperiores aut
                repellendus. Error quisquam ab maiores. Quibusdam sit in officia
              </p>
            </div>

            <div class="text-center mt-5 text">
              <a
                href="/commander"
                class="btn-get-started scrollto"
                >Commander maintenant</a
              >
            </div>
          </div>

          <div class="row content">
            <div class="col-md-4 order-1 order-md-2" data-aos="fade-left"  data-aos-duration="2000">
              <img src="../assets/img/imprimeur.png" class="img-fluid" alt="" />
            </div>
            <div class="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up"  data-aos-duration="2000">
              <h3>Vous êtes un imprimeur ou un centre d'imprimerie ?</h3>
              <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
              <p>
                Inventore id enim dolor dicta qui et magni molestiae. Mollitia
                optio officia illum ut cupiditate eos autem. Soluta dolorum
                repellendus repellat amet autem rerum illum in. Quibusdam
                occaecati est nisi esse. Saepe aut dignissimos distinctio id
                enim.
              </p>
            </div>
          </div>
          <div class="text-center mt-5 text">
            <a
              href="{{ route('inscription') }}"
              class="btn-get-started scrollto"
              >Inscrivez-vous maintenant</a
            >
          </div>
        </div>
      </section>
      <!-- End Details Section -->

      <!-- ======= Debut service ======= -->
      <section id="features" class="features">
        <div class="container">
          <div class="section-title" data-aos="fade-up">
            <h2>SERVICES</h2>
            <p>Nos services</p>
          </div>

          <div class="row" data-aos="fade-left">
            <div class="col-lg-3 col-md-4">
              <div class="icon-box" data-aos="zoom-in" data-aos-delay="50"  data-aos-duration="1000" >
                <i class="ri-store-line" style="color: #ffbb2c"></i>
                <h3><a href=""> Impression de fichier pdf</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div class="icon-box" data-aos="zoom-in" data-aos-delay="100"  data-aos-duration="1000">
                <i class="ri-bar-chart-box-line" style="color: #5578ff"></i>
                <h3><a href="">Impression de bâche</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div class="icon-box" data-aos="zoom-in" data-aos-delay="150"  data-aos-duration="1500">
                <i class="ri-calendar-todo-line" style="color: #e80368"></i>
                <h3><a href="">Impression de carte de visite</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div class="icon-box" data-aos="zoom-in" data-aos-delay="200"  data-aos-duration="2000">
                <i class="ri-paint-brush-line" style="color: #e361ff"></i>
                <h3><a href="">Impression de carte de mariage</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box" data-aos="zoom-in" data-aos-delay="250"  data-aos-duration="3500">
                <i class="ri-database-2-line" style="color: #47aeff"></i>
                <h3><a href="">Impression de carte d'anniversaire</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box" data-aos="zoom-in" data-aos-delay="300"  data-aos-duration="3500">
                <i class="ri-gradienter-line" style="color: #ffa76e"></i>
                <h3><a href="">Impression de carte d'invitation</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box" data-aos="zoom-in" data-aos-delay="350"  data-aos-duration="3500">
                <i class="ri-file-list-3-line" style="color: #11dbcf"></i>
                <h3><a href="">Impression de Calendrier </a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box" data-aos="zoom-in" data-aos-delay="400"  data-aos-duration="4000">
                <i class="ri-price-tag-2-line" style="color: #4233ff"></i>
                <h3><a href="">Impression de flyers</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box" data-aos="zoom-in" data-aos-delay="450"  data-aos-duration="4500">
                <i class="ri-anchor-line" style="color: #b2904f"></i>
                <h3><a href=""> Autres… </a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box" data-aos="zoom-in" data-aos-delay="500"  data-aos-duration="5000">
                <i class="ri-disc-line" style="color: #b20969"></i>
                <h3><a href="">Moton Ideal</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box" data-aos="zoom-in" data-aos-delay="550"  data-aos-duration="5500">
                <i class="ri-base-station-line" style="color: #ff5828"></i>
                <h3><a href="">Verdo Park</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box" data-aos="zoom-in" data-aos-delay="600"  data-aos-duration="6000">
                <i class="ri-fingerprint-line" style="color: #29cc61"></i>
                <h3><a href="">Flavor Nivelanda</a></h3>
              </div>
            </div>
          </div>

          <div class="text-center mt-5">
            <a href="#about" class="btn-get-started scrollto"
              >Commander maintenant</a
            >
          </div>
        </div>
      </section>
      <!-- End services -->

      <!-- ======= Counts Section ======= -->
      <section id="counts" class="counts">
        <div class="container">
          <div class="row" data-aos="fade-up">
            <div class="col-lg-4 col-md-6">
              <div class="count-box">
                <i class="bi bi-emoji-smile"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>Clients enregistrés</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mt-5 mt-md-0">
              <div class="count-box">
                <i class="bi-2x bi-emoji-smile"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="521"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>Imprimeurs disponible</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mt-5 mt-lg-0">
              <div class="count-box">
                <i class="bi bi-headset"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1463"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>Equipe</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End Counts Section -->

      <!-- ======= Gallery Section ======= -->
      <section id="gallery" class="gallery">
        <div class="container" >
          <div class="section-title" data-aos="fade-up">
            <h2>Galerie</h2>
            <p>Quelques impressions</p>
          </div>

          <div class="row g-0" data-aos="fade-left">
            <div class="col-lg-3 col-md-4">
              <div class="gallery-item" data-aos="zoom-in"  data-aos-duration="2000">
                <a href="../assets/img/gallery/gallery-1.jpg" data-glightbox="title: Your title; description: description here; descPosition: left; type: image; effect: fade; width: 900px; height: auto; zoomable: true; draggable: true;"
                  
                  class="gallery-lightbox"
                >
                  <img
                    src="../assets/img/gallery/gallery-1.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item" data-aos="zoom-in"  data-aos-duration="2000">
                <a
                  href="../assets/img/gallery/gallery-2.jpg"
                  class="gallery-lightbox"
                >
                  <img
                    src="../assets/img/gallery/gallery-2.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item" data-aos="zoom-in" data-aos-duration="2000">
                <a
                  href="../assets/img/gallery/gallery-3.jpg"
                  class="gallery-lightbox"
                >
                  <img
                    src="../assets/img/gallery/gallery-3.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item" data-aos="zoom-in" data-aos-duration="2500">
                <a
                  href="../assets/img/gallery/gallery-4.jpg"
                  class="gallery-lightbox"
                >
                  <img
                    src="../assets/img/gallery/gallery-4.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item" data-aos="zoom-in" data-aos-duration="2500">
                <a
                  href="../assets/img/gallery/gallery-5.jpg"
                  class="gallery-lightbox"
                >
                  <img
                    src="../assets/img/gallery/gallery-5.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item" data-aos="zoom-in" data-aos-duration="2500">
                <a
                  href="../assets/img/gallery/gallery-6.jpg"
                  class="gallery-lightbox"
                >
                  <img
                    src="../assets/img/gallery/gallery-6.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item" data-aos="zoom-in" data-aos-duration="2500">
                <a
                  href="../assets/img/gallery/gallery-7.jpg"
                  class="gallery-lightbox"
                >
                  <img
                    src="../assets/img/gallery/gallery-7.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item" data-aos="zoom-in" data-aos-duration="2500">
                <a
                  href="../assets/img/gallery/gallery-8.jpg"
                  class="gallery-lightbox"
                >
                  <img
                    src="../assets/img/gallery/gallery-8.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End Gallery Section -->

      <!-- ======= Avis des utilisateurs ======= -->
      <section id="testimonials" class="testimonials">
        <div class="container">
          <div class="swiper-slide">
            <div class="col-lg-12">
              <div class="">
                <h6 class="">E-PRINT Témoignages</h6>
                <h1 class="section-title">
                  Que disent les clients à <br />
                  propos de <span>E-PRINT</span>?
                </h1>
              </div>
            </div>
          </div>
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <img
                      src="../assets/img/gallery/gallery-8.jpg"
                      class="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Client 1</h4>
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <img
                      src="../assets/img/gallery/gallery-8.jpg"
                      class="testimonial-img"
                      alt=""
                    />
                    <h3>Sara Wilsson</h3>
                    <h4>Client 2</h4>
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Export tempor illum tamen malis malis eram quae irure esse
                      labore quem cillum quid cillum eram malis quorum velit
                      fore eram velit sunt aliqua noster fugiat irure amet legam
                      anim culpa.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <img
                      src="../assets/img/gallery/gallery-8.jpg"
                      class="testimonial-img"
                      alt=""
                    />
                    <h3>Jena Karlis</h3>
                    <h4>Client 3</h4>
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Enim nisi quem export duis labore cillum quae magna enim
                      sint quorum nulla quem veniam duis minim tempor labore
                      quem eram duis noster aute amet eram fore quis sint minim.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      <!-- End Testimonials Section -->

      <!-- ======= F.A.Q Section ======= -->
      <section id="faq" class="faq section-bg">
        <div class="container">
          <div class="section-title" data-aos="fade-up">
            <h2>F.A.Q</h2>
            <p>Questions frequentes</p>
          </div>

          <div class="faq-list">
            <ul>
              <li data-aos="fade-up">
                <i class="bx bx-help-circle icon-help"></i>
                <a
                  data-bs-toggle="collapse"
                  class="collapse"
                  data-bs-target="#faq-list-1"
                  >Non consectetur a erat nam at lectus urna duis?
                  <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="faq-list-1"
                  class="collapse show"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                    volutpat lacus laoreet non curabitur gravida. Venenatis
                    lectus magna fringilla urna porttitor rhoncus dolor purus
                    non.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="100">
                <i class="bx bx-help-circle icon-help"></i>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-2"
                  class="collapsed"
                  >Feugiat scelerisque varius morbi enim nunc?
                  <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="faq-list-2"
                  class="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="250">
                <i class="bx bx-help-circle icon-help"></i>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-3"
                  class="collapsed"
                  >Dolor sit amet consectetur adipiscing elit?
                  <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="faq-list-3"
                  class="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                    sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                    nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                    pellentesque eu tincidunt. Lectus urna duis convallis
                    convallis tellus. Urna molestie at elementum eu facilisis
                    sed odio morbi quis
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <i class="bx bx-help-circle icon-help"></i>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-4"
                  class="collapsed"
                  >Tempus quam pellentesque nec nam aliquam sem et tortor
                  consequat? <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="faq-list-4"
                  class="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Molestie a iaculis at erat pellentesque adipiscing commodo.
                    Dignissim suspendisse in est ante in. Nunc vel risus commodo
                    viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                    bibendum est. Purus gravida quis blandit turpis cursus in.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="550">
                <i class="bx bx-help-circle icon-help"></i>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-5"
                  class="collapsed"
                  >Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                  turpis nunc eget lorem dolor?
                  <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="faq-list-5"
                  class="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Laoreet sit amet cursus sit amet dictum sit amet justo.
                    Mauris vitae ultricies leo integer malesuada nunc vel.
                    Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                    eget lorem dolor sed. Ut venenatis tellus in metus vulputate
                    eu scelerisque.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!-- End F.A.Q Section -->
    </main>
  </div>
</template>

<script>
export default {
  name: "ContainerView",
};
</script>

<style scoped lang="scss">
/**
* Template Name: Bootslander - v4.7.1
* Template URL: https://bootstrapmade.com/bootslander-free-bootstrap-landing-page-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/
body {
  font-family: "Open Sans", sans-serif;
  color: #444444;
}

a {
  color: #1acc8d;
  text-decoration: none;
}

a:hover {
  color: #34e5a6;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Montserrat", sans-serif;
}

/*--------------------------------------------------------------
# Preloader
--------------------------------------------------------------*/
#preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  overflow: hidden;
  background: #fff;
}

#preloader:before {
  content: "";
  position: fixed;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  border: 6px solid #1acc8d;
  border-top-color: #d2f9eb;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  -webkit-animation: animate-preloader 1s linear infinite;
  animation: animate-preloader 1s linear infinite;
}

@-webkit-keyframes animate-preloader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-preloader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/*--------------------------------------------------------------
# Back to top button
--------------------------------------------------------------*/
.back-to-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 996;
  background: #1acc8d;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.4s;
}
.back-to-top i {
  font-size: 28px;
  color: #fff;
  line-height: 0;
}
.back-to-top:hover {
  background: #2be4a2;
  color: #fff;
}
.back-to-top.active {
  visibility: visible;
  opacity: 1;
}

/*--------------------------------------------------------------
# Disable AOS delay on mobile
--------------------------------------------------------------*/
@media screen and (max-width: 768px) {
  [data-aos-delay] {
    transition-delay: 0 !important;
  }
}
/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  height: 80px;
  transition: all 0.5s;
  z-index: 997;
  transition: all 0.5s;
  background: rgba(1, 4, 136, 1);
}

#header.header-scrolled {
  background: rgba(1, 4, 136, 0.9);
  height: 60px;
}
#header .logo h1 {
  font-family: Montserrat;
  font-size: 28px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 700;
}
#header .logo h1 a,
#header .logo h1 a:hover {
  color: #fff;
  text-decoration: none;
}
#header .logo img {
  padding: 0;
  margin: 0;
  max-height: 40px;
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/**
* Desktop Navigation
*/
.navbar {
  padding: 0;
}
.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}
.navbar li {
  position: relative;
}
.navbar a,
.navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  font-size: 15px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  transition: 0.3s;
}
.navbar a i,
.navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}
.navbar > ul > li > a:before {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 3px;
  left: 30px;
  background-color: #1acc8d;
  visibility: hidden;
  width: 0px;
  transition: all 0.3s ease-in-out 0s;
}
.navbar a:hover:before,
.navbar li:hover > a:before,
.navbar .active:before {
  visibility: visible;
  width: 25px;
}
.navbar a:hover,
.navbar .active,
.navbar .active:focus,
.navbar li:hover > a {
  color: #fff;
}
.navbar .dropdown ul {
  display: block;
  position: absolute;
  left: 30px;
  top: calc(100% + 30px);
  margin: 0;
  padding: 10px 0;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
  border-radius: 4px;
}
.navbar .dropdown ul li {
  min-width: 200px;
}
.navbar .dropdown ul a {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  text-transform: none;
  color: #01036f;
}
.navbar .dropdown ul a i {
  font-size: 12px;
}
.navbar .dropdown ul a:hover,
.navbar .dropdown ul .active:hover,
.navbar .dropdown ul li:hover > a {
  color: #1acc8d;
}
.navbar .dropdown:hover > ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}
.navbar .dropdown .dropdown ul {
  top: 0;
  left: calc(100% - 30px);
  visibility: hidden;
}
.navbar .dropdown .dropdown:hover > ul {
  opacity: 1;
  top: 0;
  left: 100%;
  visibility: visible;
}
@media (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }
  .navbar .dropdown .dropdown:hover > ul {
    left: -100%;
  }
}

/**
* Mobile Navigation
*/
.mobile-nav-toggle {
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  display: none;
  line-height: 0;
  transition: 0.5s;
}

@media (max-width: 991px) {
  .mobile-nav-toggle {
    display: block;
  }

  .navbar ul {
    display: none;
  }
}
.navbar-mobile {
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(1, 3, 91, 0.9);
  transition: 0.3s;
  z-index: 999;
}
.navbar-mobile .mobile-nav-toggle {
  position: absolute;
  top: 15px;
  right: 15px;
}
.navbar-mobile ul {
  display: block;
  position: absolute;
  top: 55px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  padding: 10px 0;
  border-radius: 8px;
  background-color: #fff;
  overflow-y: auto;
  transition: 0.3s;
}
.navbar-mobile > ul > li > a:before {
  left: 20px;
}
.navbar-mobile a,
.navbar-mobile a:focus {
  padding: 10px 20px;
  font-size: 15px;
  color: #0205a1;
}
.navbar-mobile a:hover,
.navbar-mobile .active,
.navbar-mobile li:hover > a {
  color: #3f43fd;
}
.navbar-mobile .getstarted,
.navbar-mobile .getstarted:focus {
  margin: 15px;
}
.navbar-mobile .dropdown ul {
  position: static;
  display: none;
  margin: 10px 20px;
  padding: 10px 0;
  z-index: 99;
  opacity: 1;
  visibility: visible;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
}
.navbar-mobile .dropdown ul li {
  min-width: 200px;
}
.navbar-mobile .dropdown ul a {
  padding: 10px 20px;
}
.navbar-mobile .dropdown ul a i {
  font-size: 12px;
}
.navbar-mobile .dropdown ul a:hover,
.navbar-mobile .dropdown ul .active:hover,
.navbar-mobile .dropdown ul li:hover > a {
  color: #1acc8d;
}
.navbar-mobile .dropdown > .dropdown-active {
  display: block;
}

/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
#hero {
  width: 100%;
  background: url("../../src/assets/img/hero-bg.jpg");
  position: relative;
  padding: 120px 0 0 0;
 
}
#hero:before {
  content: "";
  background: rgba(2, 5, 161, 0.91);
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  
}
#hero h1 {
  margin: 0 0 20px 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  color: rgba(255, 255, 255, 0.8);
}
#hero h1 span {
  color: #fff;
  border-bottom: 4px solid #1acc8d;
}
#hero h2 {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
  font-size: 24px;
}
#hero .btn-get-started {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 30px;
  border-radius: 50px;
  transition: 0.5s;
  color: #fff;
  background: #1acc8d;
}

#details .text .btn-get-started {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 30px;
  border-radius: 50px;
  transition: 0.5s;
  color: #fff;
  background: #1acc8d;
}

#features .btn-get-started {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 30px;
  border-radius: 50px;
  transition: 0.5s;
  color: #fff;
  background: #1acc8d;
}

#hero .btn-get-started:hover {
  background: #17b57d;
}
#hero .animated {
  animation: up-down 2s ease-in-out infinite alternate-reverse both;
}
@media (min-width: 1024px) {
  #hero {
    background-attachment: fixed;
  }
}
@media (max-width: 991px) {
  #hero {
    padding-top: 80px;
  }
  #hero .animated {
    -webkit-animation: none;
    animation: none;
  }
  #hero .hero-img {
    text-align: center;
  }
  #hero .hero-img img {
    max-width: 50%;
  }
  #hero h1 {
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 10px;
  }
  #hero h2 {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px;
  }
}
@media (max-width: 575px) {
  #hero .hero-img img {
    width: 80%;
  }
}

@-webkit-keyframes up-down {
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
}

@keyframes up-down {
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
}
.hero-waves {
  display: block;
  margin-top: 60px;
  width: 100%;
  height: 60px;
  z-index: 5;
  position: relative;
}

.wave1 use {
  -webkit-animation: move-forever1 10s linear infinite;
  animation: move-forever1 10s linear infinite;
  -webkit-animation-delay: -2s;
  animation-delay: -2s;
}

.wave2 use {
  -webkit-animation: move-forever2 8s linear infinite;
  animation: move-forever2 8s linear infinite;
  -webkit-animation-delay: -2s;
  animation-delay: -2s;
}

.wave3 use {
  -webkit-animation: move-forever3 6s linear infinite;
  animation: move-forever3 6s linear infinite;
  -webkit-animation-delay: -2s;
  animation-delay: -2s;
}

@-webkit-keyframes move-forever1 {
  0% {
    transform: translate(85px, 0%);
  }
  100% {
    transform: translate(-90px, 0%);
  }
}

@keyframes move-forever1 {
  0% {
    transform: translate(85px, 0%);
  }
  100% {
    transform: translate(-90px, 0%);
  }
}
@-webkit-keyframes move-forever2 {
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
}
@keyframes move-forever2 {
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
}
@-webkit-keyframes move-forever3 {
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
}
@keyframes move-forever3 {
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
}
/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
section {
  padding: 60px 0;
  overflow: hidden;
}

.section-bg {
  background-color: #f5f5ff;
}

.section-title {
  padding-bottom: 40px;
}
.section-title h2 {
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  line-height: 1px;
  margin: 0 0 5px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #aaaaaa;
  font-family: "Poppins", sans-serif;
}
.section-title h2::after {
  content: "";
  width: 120px;
  height: 1px;
  display: inline-block;
  background: #1acc8d;
  margin: 4px 10px;
}
.section-title p {
  margin: 0;
  margin: 0;
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color: #010483;
}

/*--------------------------------------------------------------
# Breadcrumbs
--------------------------------------------------------------*/
.breadcrumbs {
  padding: 20px 0;
  background-color: #fafaff;
  min-height: 40px;
  margin-top: 80px;
}
@media (max-width: 992px) {
  .breadcrumbs {
    margin-top: 64px;
  }
}
.breadcrumbs h2 {
  font-size: 24px;
  font-weight: 400;
  margin: 0;
}
@media (max-width: 992px) {
  .breadcrumbs h2 {
    margin: 0 0 10px 0;
  }
}
.breadcrumbs ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
}
.breadcrumbs ol li + li {
  padding-left: 10px;
}
.breadcrumbs ol li + li::before {
  display: inline-block;
  padding-right: 10px;
  color: #6c757d;
  content: "/";
}
@media (max-width: 768px) {
  .breadcrumbs .d-flex {
    display: block !important;
  }
  .breadcrumbs ol {
    display: block;
  }
  .breadcrumbs ol li {
    display: inline-block;
  }
}

/*--------------------------------------------------------------
# About
--------------------------------------------------------------*/
.about {
  padding: 40px 0 0 0;
}
.about .icon-boxes h3 {
  font-size: 28px;
  font-weight: 700;
  color: #010483;
  margin-bottom: 15px;
}
.about .icon-box {
  margin-top: 40px;
}
.about .icon-box .icon {
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border: 2px solid #7ceec6;
  border-radius: 50px;
  transition: 0.5s;
}
.about .icon-box .icon i {
  color: #1acc8d;
  font-size: 32px;
}
.about .icon-box:hover .icon {
  background: #1acc8d;
  border-color: #1acc8d;
}
.about .icon-box:hover .icon i {
  color: #fff;
}
.about .icon-box .title {
  margin-left: 85px;
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 18px;
}
.about .icon-box .title a {
  color: #343a40;
  transition: 0.3s;
}
.about .icon-box .title a:hover {
  color: #1acc8d;
}
.about .icon-box .description {
  margin-left: 85px;
  line-height: 24px;
  font-size: 14px;
}
.about .video-box {
  //   background: url("../img/about.png") center center no-repeat;
  background-size: contain;
  min-height: 300px;
}
.about .play-btn {
  width: 94px;
  height: 94px;
  background: radial-gradient(#3f43fd 50%, rgba(63, 67, 253, 0.4) 52%);
  border-radius: 50%;
  display: block;
  position: absolute;
  left: calc(50% - 47px);
  top: calc(50% - 47px);
  overflow: hidden;
}
.about .play-btn::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  z-index: 100;
  transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.about .play-btn::before {
  content: "";
  position: absolute;
  width: 120px;
  height: 120px;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation: pulsate-btn 2s;
  animation: pulsate-btn 2s;
  -webkit-animation-direction: forwards;
  animation-direction: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: steps;
  animation-timing-function: steps;
  opacity: 1;
  border-radius: 50%;
  border: 5px solid rgba(63, 67, 253, 0.7);
  top: -15%;
  left: -15%;
  background: rgba(198, 16, 0, 0);
}
.about .play-btn:hover::after {
  border-left: 15px solid #3f43fd;
  transform: scale(20);
}
.about .play-btn:hover::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border: none;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  z-index: 200;
  -webkit-animation: none;
  animation: none;
  border-radius: 0;
}

@-webkit-keyframes pulsate-btn {
  0% {
    transform: scale(0.6, 0.6);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
}

@keyframes pulsate-btn {
  0% {
    transform: scale(0.6, 0.6);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
}
/*--------------------------------------------------------------
# Features
--------------------------------------------------------------*/
.features .icon-box {
  display: flex;
  align-items: center;
  padding: 20px;
  background: #f5f5ff;
  transition: ease-in-out 0.3s;
}
.features .icon-box i {
  font-size: 32px;
  padding-right: 10px;
  line-height: 1;
}
.features .icon-box h3 {
  font-weight: 700;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-size: 16px;
}
.features .icon-box h3 a {
  color: #010483;
  transition: ease-in-out 0.3s;
}
.features .icon-box h3 a:hover {
  color: #01036f;
}
.features .icon-box:hover {
  background: #ebebff;
}

/*--------------------------------------------------------------
# Counts
--------------------------------------------------------------*/
.counts {
  background: #f5f5ff;
  padding: 70px 0 60px;
}
.counts .count-box {
  padding: 30px 30px 25px 30px;
  width: 100%;
  position: relative;
  text-align: center;
  background: #fff;
}
.counts .count-box i {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  background: #1acc8d;
  padding: 12px;
  color: #fff;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  width: 48px;
  height: 48px;
}
.counts .count-box span {
  font-size: 36px;
  display: block;
  font-weight: 600;
  color: #010483;
}
.counts .count-box p {
  padding: 0;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
}

/*--------------------------------------------------------------
# Details
--------------------------------------------------------------*/
.details .content + .content {
  margin-top: 100px;
}
.details .content h3 {
  font-weight: 600;
  font-size: 26px;
  color: #010483;
}
.details .content ul {
  list-style: none;
  padding: 0;
}
.details .content ul li {
  padding-bottom: 10px;
}
.details .content ul i {
  font-size: 20px;
  padding-right: 4px;
  color: #1acc8d;
}
.details .content p:last-child {
  margin-bottom: 0;
}

/*--------------------------------------------------------------
# Gallery
--------------------------------------------------------------*/
.gallery .gallery-item {
  overflow: hidden;
  border-right: 3px solid #fff;
  border-bottom: 3px solid #fff;
}
.gallery .gallery-item img {
  transition: all ease-in-out 0.4s;
}
.gallery .gallery-item:hover img {
  transform: scale(1.1);
}

/*--------------------------------------------------------------
# Testimonials
--------------------------------------------------------------*/
.testimonials {
  padding: 80px 0;
  background: url("../assets/img/imprimer1.png") no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
}

.testimonials::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(1, 3, 111, 0.8);
}
.testimonials .section-header {
  margin-bottom: 40px;
}
.testimonials .testimonials-carousel,
.testimonials .testimonials-slider {
  overflow: hidden;
}
.testimonials .testimonial-item {
  text-align: center;
  color: #fff;
}
.testimonials .testimonial-item .testimonial-img {
  width: 100px;
  border-radius: 50%;
  border: 6px solid rgba(255, 255, 255, 0.15);
  margin: 0 auto;
}
.testimonials h1,
h6 {
  margin: 10px 0 5px 0;
  color: #fff;
}

.testimonials .testimonial-item h3 {
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0 5px 0;
  color: #fff;
}

.testimonials .testimonial-item h4 {
  font-size: 14px;
  color: #ddd;
  margin: 0 0 15px 0;
}
.testimonials .testimonial-item .quote-icon-left,
.testimonials .testimonial-item .quote-icon-right {
  color: rgba(255, 255, 255, 0.4);
  font-size: 26px;
}
.testimonials .testimonial-item .quote-icon-left {
  display: inline-block;
  left: -5px;
  position: relative;
}
.testimonials .testimonial-item .quote-icon-right {
  display: inline-block;
  right: -5px;
  position: relative;
  top: 10px;
}
.testimonials .testimonial-item p {
  font-style: italic;
  margin: 0 auto 15px auto;
  color: #eee;
}
.testimonials .swiper-pagination {
  margin-top: 20px;
  position: relative;
}
.testimonials .swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.4);
}
.testimonials .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #1acc8d;
}
@media (min-width: 1024px) {
  .testimonials {
    background-attachment: fixed;
  }
}
@media (min-width: 992px) {
  .testimonials .testimonial-item p {
    width: 80%;
  }
}

/*--------------------------------------------------------------
# Team
--------------------------------------------------------------*/
.team {
  background: #fff;
}
.team .member {
  text-align: center;
  margin-bottom: 80px;
  position: relative;
}
.team .member .pic {
  border-radius: 4px;
  overflow: hidden;
}
.team .member img {
  transition: all ease-in-out 0.4s;
}
.team .member:hover img {
  transform: scale(1.1);
}
.team .member .member-info {
  position: absolute;
  bottom: -80px;
  left: 0px;
  right: 0px;
  background: rgba(255, 255, 255, 0.9);
  padding: 15px 0;
  border-radius: 0 0 4px 4px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}
.team .member h4 {
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 16px;
  color: #01036f;
  position: relative;
  padding-bottom: 10px;
}
.team .member h4::after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 1px;
  background: #0d12fc;
  bottom: 0;
  left: calc(50% - 25px);
}
.team .member span {
  font-style: italic;
  display: block;
  font-size: 13px;
  color: #01036f;
}
.team .member .social {
  margin-top: 10px;
}
.team .member .social a {
  transition: color 0.3s;
  color: #01036f;
}
.team .member .social a:hover {
  color: #1acc8d;
}
.team .member .social i {
  font-size: 16px;
  margin: 0 2px;
}

/*--------------------------------------------------------------
# Pricing
--------------------------------------------------------------*/
.pricing .box {
  padding: 20px;
  background: #fff;
  text-align: center;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  position: relative;
  overflow: hidden;
}
.pricing h3 {
  font-weight: 400;
  margin: -20px -20px 20px -20px;
  padding: 20px 15px;
  font-size: 16px;
  font-weight: 600;
  color: #777777;
  background: #f8f8f8;
}
.pricing h4 {
  font-size: 36px;
  color: #1acc8d;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  margin-bottom: 20px;
}
.pricing h4 sup {
  font-size: 20px;
  top: -15px;
  left: -3px;
}
.pricing h4 span {
  color: #bababa;
  font-size: 16px;
  font-weight: 300;
}
.pricing ul {
  padding: 0;
  list-style: none;
  color: #444444;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
}
.pricing ul li {
  padding-bottom: 16px;
}
.pricing ul i {
  color: #1acc8d;
  font-size: 18px;
  padding-right: 4px;
}
.pricing ul .na {
  color: #ccc;
  text-decoration: line-through;
}
.pricing .btn-wrap {
  margin: 20px -20px -20px -20px;
  padding: 20px 15px;
  background: #f8f8f8;
  text-align: center;
}
.pricing .btn-buy {
  background: #1acc8d;
  display: inline-block;
  padding: 8px 35px 10px 35px;
  border-radius: 50px;
  color: #fff;
  transition: none;
  font-size: 14px;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  transition: 0.3s;
}
.pricing .btn-buy:hover {
  background: #149f6e;
}
.pricing .featured h3 {
  color: #fff;
  background: #1acc8d;
}
.pricing .advanced {
  width: 200px;
  position: absolute;
  top: 18px;
  right: -68px;
  transform: rotate(45deg);
  z-index: 1;
  font-size: 14px;
  padding: 1px 0 3px 0;
  background: #1acc8d;
  color: #fff;
}

/*--------------------------------------------------------------
# F.A.Q
--------------------------------------------------------------*/
.faq .faq-list {
  padding: 0;
}
.faq .faq-list ul {
  padding: 0;
  list-style: none;
}
.faq .faq-list li + li {
  margin-top: 15px;
}
.faq .faq-list li {
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  position: relative;
}
.faq .faq-list a {
  display: block;
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  padding: 0 30px;
  outline: none;
  cursor: pointer;
}
.faq .faq-list .icon-help {
  font-size: 24px;
  position: absolute;
  right: 0;
  left: 20px;
  color: #34e5a6;
}
.faq .faq-list .icon-show,
.faq .faq-list .icon-close {
  font-size: 24px;
  position: absolute;
  right: 0;
  top: 0;
}
.faq .faq-list p {
  margin-bottom: 0;
  padding: 10px 0 0 0;
}
.faq .faq-list .icon-show {
  display: none;
}
.faq .faq-list a.collapsed {
  color: #343a40;
}
.faq .faq-list a.collapsed:hover {
  color: #1acc8d;
}
.faq .faq-list a.collapsed .icon-show {
  display: inline-block;
}
.faq .faq-list a.collapsed .icon-close {
  display: none;
}
@media (max-width: 1200px) {
  .faq .faq-list {
    padding: 0;
  }
}

/*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/
.contact .info-box {
  color: #444444;
  background: #fafbff;
  padding: 30px;
}
.contact .info-box i {
  font-size: 38px;
  line-height: 0;
  color: #4154f1;
}
.contact .info-box h3 {
  font-size: 20px;
  color: #012970;
  font-weight: 700;
  margin: 20px 0 10px 0;
}
.contact .info-box p {
  padding: 0;
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}
.contact .form-email {
  background: #fafbff;
  padding: 30px;
  height: 100%;
}
.contact .form-email .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  margin-bottom: 24px;
  font-weight: 600;
}
.contact .form-email .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  margin-bottom: 24px;
  font-weight: 600;
}
.contact .form-email .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
  margin-bottom: 24px;
}
.contact .form-email .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}
.contact .form-email input,
.contact .form-email textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
  border-radius: 0;
}
.contact .form-email input:focus,
.contact .form-email textarea:focus {
  border-color: #4154f1;
}
.contact .form-email input {
  padding: 10px 15px;
}
.contact .form-email textarea {
  padding: 12px 15px;
}
.contact .form-email button[type="submit"] {
  background: #4154f1;
  border: 0;
  padding: 10px 30px;
  color: #fff;
  transition: 0.4s;
  border-radius: 4px;
}
.contact .form-email button[type="submit"]:hover {
  background: #5969f3;
}
@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
#footer {
  background: #010351;
  padding: 0 0 10px 0;
  color: #fff;
  font-size: 14px;
}
#footer .footer-top {
  padding: 60px 0 30px 0;
}
#footer .footer-top .footer-info {
  margin-bottom: 15px;
  background: #010246;
  color: #fff;
  border-top: 4px solid #1acc8d;
  text-align: center;
  padding: 30px 20px;
}
#footer .footer-top .footer-info h3 {
  font-size: 24px;
  margin: 0 0 20px 0;
  padding: 2px 0 2px 0;
  line-height: 1;
  font-weight: 700;
}
#footer .footer-top .footer-info p {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0;
  font-family: "Montserrat", sans-serif;
}
#footer .footer-top .social-links a {
  font-size: 18px;
  display: inline-block;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}
#footer .footer-top .social-links a:hover {
  background: #1acc8d;
  color: #fff;
  text-decoration: none;
}
#footer .footer-top h4 {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  position: relative;
  padding-bottom: 12px;
}
#footer .footer-top .footer-links {
  margin-bottom: 30px;
}
#footer .footer-top .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
#footer .footer-top .footer-links ul i {
  padding-right: 2px;
  color: #61ebba;
  font-size: 18px;
  line-height: 1;
}
#footer .footer-top .footer-links ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}
#footer .footer-top .footer-links ul li:first-child {
  padding-top: 0;
}
#footer .footer-top .footer-links ul a {
  color: #fff;
  transition: 0.3s;
  display: inline-block;
  line-height: 1;
}
#footer .footer-top .footer-links ul a:hover {
  color: #4be8b0;
}
#footer .footer-top .footer-newsletter form {
  margin-top: 30px;
  background: #fff;
  padding: 6px 10px 6px 15px;
  position: relative;
  border-radius: 50px;
}
#footer .footer-top .footer-newsletter form input[type="email"] {
  border: 0;
  padding: 4px;
  width: calc(100% - 110px);
}
#footer .footer-top .footer-newsletter form input[type="submit"] {
  position: absolute;
  top: 0;
  right: -2px;
  bottom: 0;
  border: 0;
  background: none;
  font-size: 16px;
  padding: 0 20px;
  background: #1acc8d;
  color: #fff;
  transition: 0.3s;
  border-radius: 50px;
}
#footer .footer-top .footer-newsletter form input[type="submit"]:hover {
  background: #149f6e;
}
#footer .copyright {
  border-top: 1px solid #010479;
  text-align: center;
  padding-top: 30px;
}
#footer .credits {
  padding-top: 10px;
  text-align: center;
  font-size: 13px;
  color: #fff;
}
@media (max-width: 575px) {
  #footer .footer-top .footer-info {
    margin: -20px 0 30px 0;
  }
}
</style>