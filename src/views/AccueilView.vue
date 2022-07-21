<template>
  <div class="navbar">
    <NavbarView />
  </div>
  <div class="">
  <ContainerView/>
  </div>
  <div class="footer">
    <FooterView/>
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";
import ContainerView from "@/components/ContainerView.vue";
export default {
  name: "AccueilView",
  components : {
    NavbarView,
    FooterView,
    ContainerView
}
};


</script>

<style lang="scss" scoped>
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


</style>