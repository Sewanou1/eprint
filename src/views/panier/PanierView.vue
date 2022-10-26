<template>
    <div class="navbar">
        <NavbarView />
    </div>
 
    <div class="hello container">
        <div>
            <div class="wrapper">
                <!-- Content Wrapper. Contains page content -->
                <div class="content-wrapper">
                    <!-- Content Header (Page header) -->
                    <section class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                                <div class="col-sm-6">
                                    <h1>DataTables</h1>
                                </div>
                                <div class="col-sm-6">
                                    <ol class="breadcrumb float-sm-right">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        <li class="breadcrumb-item active">DataTables</li>
                                    </ol>
                                </div>
                            </div>
                        </div>  
                    </section>
                    <PopupView v-if="popupTriggers.buttonTrigger" 
                                :TogglePopup="()=>TogglePopup('buttonTrigger')">
                        <div class="popup-body">
                            <h2 class="en-tete mb-4">Le devis de votre panier :</h2>
                                <p class="paragraphe">
                                   <span>{{ this.valeur_devi }} FCFA</span>
                                </p>
                        </div>
                    </PopupView>

                    <PopupComView v-if="popupTriggerss.buttonTrigger" 
                                :TogglePopups="()=>TogglePopups('buttonTrigger')" :the_order="this.order">
                        <div class="popup-body">
                            <h2 class="en-tete mb-4">Sauvegarde de la commande:</h2>
                                <p class="paragraphe">
                                   <span>{{ this.commandez }}</span>
                                </p>
                        </div>
                    </PopupComView>

                    <!-- <PopupView v-if="popupTriggers.timedTrigger" 
                                :TogglePopup="()=>TogglePopup('timedTrigger')">
                            <h2>My Timed popup</h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae totam pariatur alias, accusamus repellat eaque assumenda tempore excepturi accusantium porro, voluptatibus facere qui doloremque repellendus! Odio, vero! Esse, delectus perferendis!
                            </p>
                    </PopupView> -->
                    

                    <!-- Main content -->
                    <section class="content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-12">
                                    <!-- /.card -->
                                    <div class="card">
                                        <div class="card-header row">
                                            <div class="col-md-10 ">
                                                <h3 class="card-title">Vos commandes</h3>
                                            </div>

                                            <div class="col-md-2 ">
                                                <button type="submit" class="btn btn-info btn-sm float-end"
                                                    @click.prevent="removeArticleFromCart(index.article)">
                                                    <i class="fas fa-trash"></i>Vider le Panier
                                                </button>
                                            </div>


                                        </div>
                                        <!-- /.card-header -->
                                        <div class="card-body">
                                            <table id="example1" class="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Commandes</th>
                                                        <th>Commentaire</th>
                                                        <th>Quantité</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(article,index) in getCart" :key="index">
                                                        <td>
                                                            -{{ article.typeImpression }} <br>
                                                            -{{ article.format}} <br>
                                                            -{{ article.support}} <br>
                                                            -{{ article.document_imprimer}} <br>
                                                        </td>
                                                        <td>{{ article.commentaire }}</td>
                                                        <td> {{ article.quantite }} </td>
                                                        <td style="text-align:center; justify-content: space-between;">
                                                            <button class="btn btn-danger btn-sm "
                                                                @click.prevent="removeArticleFromCart(index.article)">
                                                                <i class="fas fa-trash"></i>Supprimer
                                                            </button>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                                <tfoot>
                                                </tfoot>
                                            </table>
                                            <form @submit.prevent="OrderNow();TogglePopups('buttonTrigger');">
                                                <div class="row mt-5">
                                                    <div class="col-lg-8">
                                                        <input type="hidden" name="_token"
                                                            value="JvlWGUbNewVMiShDufYXkAJQOaKwtfJ80lfoHViL">
                                                        <div class="row gy-4">
                                                            <div class="col-md-4">
                                                                <input type="text" name="nom" id="nom"
                                                                    class="form-control" placeholder="Nom"  v-model="commande.nom">
                                                            </div>

                                                            <div class="col-md-4 ">
                                                                <input type="text" class="form-control" name="prenom"
                                                                    id="prenom" placeholder="Prenom"  v-model="commande.prenom">
                                                            </div>

                                                            <div class="col-md-4 ">
                                                                <input type="text" class="form-control" name="telephone"
                                                                    id="telephone" placeholder="Téléphone"  v-model="commande.telephone">
                                                            </div>

                                                            <div class="col-md-4 ">
                                                                <select class="form-select"
                                                                    aria-label="Default select example" v-model="commande.type_livraison">
                                                                    <option selected></option>
                                                                    <option value="A livrer à la maison ">A livrer à la maison</option>
                                                                    <option  value="A rétirer au centre d'impression">A rétirer au centre d'impression
                                                                    </option>
                                                                </select>
                                                            </div>

                                                            <div class="col-md-4">
                                                                <input type="date" name="delais" id="delais"
                                                                    class="form-control" placeholder="delais"  v-model="commande.delais">
                                                            </div>

                                                            <div class="col-md-4">
                                                                <input type="text" name="adresse" id="adresse"
                                                                    class="form-control" placeholder="Adresse"  v-model="commande.adresse">
                                                            </div>


                                                            <div class="col-md-4 ">
                                                                <input type="email" class="form-control" name="email"
                                                                    id="email" placeholder="Adresse Mail" v-model="commande.email">
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="row">
                                                            <div class="col-md-6 ">
                                                            </div>
                                                            <div class="col-md-6 ">
                                                                <button class="btn btn-warning form-control float-end "
                                                                    @click.prevent="GetQuote();TogglePopup('buttonTrigger');">
                                                                    <i class="fas fa-trash"></i>Demandez devis
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-4">
                                                            <div class="col-md-6 ">
                                                            </div>
                                                            <div class="col-md-6 home">
                                                                <button type="submit"
                                                                    class="btn btn-success form-control float-end"
                                                                    >
                                                                    <i class="fas fa-trash"></i>Commandez <i
                                                                        class="ri-shopping-cart-2-line"> </i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <hr>
                                            <h5 class="mb-5">Les moyens de paiements disponibles</h5>
                                            <div class="row">
                                                <div class="col-2"><img src="../../../src/assets/images/mtn.jpg" alt=""
                                                        style="height:80px; width: 80px;"></div>
                                                <div class="col-2"> <img src="../../../src/assets/images/moov.png"
                                                        alt="" style="height:80px ; width: 80px;"></div>
                                                <div class="col-2"><img src="../../../src/assets/images/mastercard.png"
                                                        alt="" style="height:80px; width: 80px;"></div>
                                                <div class="col-2"><img src="../../../src/assets/images/american.png"
                                                        alt="" style="height:80px; width: 80px;"></div>
                                                <div class="col-2"><img src="../../../src/assets/images/orange.jpg"
                                                        alt="" style="height:80px; width: 80px;"></div>
                                                <div class="col-2"> <img src="../../../src/assets/images/visa.png"
                                                        alt="" style="height:80px; width: 80px;"></div>
                                            </div>
                                        </div>
                                        <!-- /.card-body -->
                                    </div>
                                    <!-- /.card -->
                                </div>
                                <!-- /.col -->
                            </div>
                            <!-- /.row -->
                        </div>
                        <!-- /.container-fluid -->
                    </section>
                    <!-- /.content -->
                </div>
                <!-- /.content-wrapper -->
            </div>
        </div>
    </div>

    <div class="footer">
        <FooterView />
    </div>
</template>

<script>
// import "../../app"
import axios from "axios";
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";
import PopupView from "@/components/PopupView.vue";
import PopupComView from "@/components/PopupComView.vue";
import { ref } from 'vue';

export default {
    name: "PanierView",

    setup () {
        const popupTriggers= ref({
            buttonTrigger:false,
            timedTrigger:false
        });

        const popupTriggerss= ref({
            buttonTrigger:false,
            timedTrigger:false
        });

        const TogglePopup = (trigger)=> {
            popupTriggers.value[trigger]= !popupTriggers.value[trigger]
        }
        /***************************************/
        const TogglePopups = (trigger)=> {
            popupTriggerss.value[trigger]= !popupTriggerss.value[trigger]
        }

//ici le popup apres le nombre de minute fixé quand on charge la page et il s'agit du timde popup 
       /* setTimeout(()=> {
            popupTriggers.value.timedTrigger= true;
        }, 3000) */

        return {
           PopupView ,
           PopupComView,
           popupTriggers,
           popupTriggerss,
           TogglePopup,
           TogglePopups
        }
        
        

    },

    data () {
        return {
            commande:{
                nom:'',
                prenom:'',
                telephone:'',
                type_livraison:'',
                delais:'',
                adresse:'',
                email:'',
                montant:'', 
                nombre_article: this.$store.state.cart.length,
                articles_commande: this.$store.state.cart,              
            },
            file:null,
            valeur_devi:'',
            commandez:'',
            order:''


        };
         
    },
    components: {
    NavbarView,
    FooterView,
    PopupView,
    PopupComView
},

    computed: {
        getCart() {
            return this.$store.state.cart;
        }
    },

    methods: {
        removeArticleFromCart(article) {
            this.$store.dispatch('removeArticleFromCart', article);
        },

        GetQuote() {
            axios.post('http://127.0.0.1:8000/api/GetDevis', this.$store.state.cart)
                .then(res => {
                    console.log("Response", res)
                    this.commande.montant=res.data.devis
                    this.valeur_devi= res.data.devis
                }).catch(err => console.log(err))
           
        },

        value(){
            return 
        },
        

        OrderNow() {
            axios.post('http://127.0.0.1:8000/api/commander', this.commande)
                .then(res => {
                    console.log(res)
                    this.$store.state.cart = {};
                    this.commande = {};
                    this.commandez="Succès !!!"
                    this.order = res.data.order
                }).catch(err => {
                    console.log(err)
                    if(this.$store.state.cart.length==0){
                        this.commandez="Le panier est vide"
                    }else
                    this.commandez="Veillez bien renseigner les champs du formulaire !!!"
                } )
        }
    },

    mounted() {
        axios.post('http://127.0.0.1:8000/api/GetDevis', this.$store.state.cart)
        .then(res => {
            this.commande.montant=res.data.devis
        }).catch(err => console.log(err))
        // addKkiapayListener('success',this.successHandler);
    },

};

</script>

<style scoped lang="scss">
.wrapper,
body,
html {
    min-height: 100%
}

span{
    font-size: 20px;
}

.popup-body{
    justify-content: center;
    padding: 20px;
}

.en-tete{
    text-align: center;
}

.paragraphe{
    text-align: center;
}

.wrapper {
    position: relative
}

.wrapper .content-wrapper {
    min-height: calc(100vh - calc(3.5rem + 1px) - calc(3.5rem + 1px))
}

.layout-boxed .wrapper {
    box-shadow: 0 0 10 rgba(0, 0, 0, .3)
}

.layout-boxed .wrapper,
.layout-boxed .wrapper::before {
    margin: 0 auto;
    max-width: 1280px;
    overflow: hidden
}

.layout-boxed .wrapper .main-sidebar {
    left: inherit
}

@supports not (-webkit-touch-callout:none) {
    .layout-fixed .wrapper .sidebar {
        height: calc(100vh - (3.5rem + 1px))
    }

    .layout-fixed.text-sm .wrapper .sidebar {
        height: calc(100vh - (2.93725rem + 1px))
    }
}

.layout-navbar-fixed.layout-fixed .wrapper .control-sidebar {
    top: calc(3.5rem + 1px)
}

.layout-navbar-fixed.layout-fixed .wrapper .main-header.text-sm~.control-sidebar {
    top: calc(2.93725rem + 1px)
}

.layout-navbar-fixed.layout-fixed .wrapper .sidebar {
    margin-top: calc(3.5rem + 1px)
}

.layout-navbar-fixed.layout-fixed .wrapper .brand-link.text-sm~.sidebar {
    margin-top: calc(2.93725rem + 1px)
}

.layout-navbar-fixed.layout-fixed.text-sm .wrapper .control-sidebar {
    top: calc(2.93725rem + 1px)
}

.layout-navbar-fixed.layout-fixed.text-sm .wrapper .sidebar {
    margin-top: calc(2.93725rem + 1px)
}


body:not(.layout-fixed).layout-navbar-fixed.text-sm .wrapper .main-sidebar {
    margin-top: calc(calc(2.93725rem + 1px)/ -1)
}

body:not(.layout-fixed).layout-navbar-fixed.text-sm .wrapper .main-sidebar .sidebar {
    margin-top: calc(2.93725rem + 1px)
}

.layout-navbar-fixed .wrapper .control-sidebar {
    top: 0
}

.layout-navbar-fixed .wrapper a.anchor {
    display: block;
    position: relative;
    top: calc((3.5rem + 1px + (.5rem * 2))/ -1)
}

.layout-navbar-fixed .wrapper .main-sidebar:hover .brand-link {
    transition: width .3s ease-in-out;
    width: 280px
}

.layout-navbar-fixed .wrapper .brand-link {
    overflow: hidden;
    position: fixed;
    top: 0;
    transition: width .3s ease-in-out;
    width: 280px;
    z-index: 1035
}

.layout-navbar-fixed .wrapper .sidebar-dark-primary .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-primary .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-secondary .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-secondary .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-success .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-success .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-info .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-info .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-warning .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-warning .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-danger .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-danger .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-light .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-light .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-dark .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-dark .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-lightblue .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-lightblue .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-navy .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-navy .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-olive .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-olive .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-lime .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-lime .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-fuchsia .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-fuchsia .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-maroon .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-maroon .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-blue .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-blue .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-indigo .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-indigo .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-purple .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-purple .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-pink .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-pink .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-red .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-red .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-orange .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-orange .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-yellow .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-yellow .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-green .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-green .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-teal .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-teal .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-cyan .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-cyan .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-white .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-white .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-gray .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-gray .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .sidebar-dark-gray-dark .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .wrapper .sidebar-light-gray-dark .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .wrapper .main-header.border-bottom-0~.content-wrapper {
    margin-top: 3.5rem
}

.layout-navbar-fixed .wrapper .content-wrapper {
    margin-top: calc(3.5rem + 1px)
}

.layout-navbar-fixed .wrapper .main-header.text-sm~.content-wrapper {
    margin-top: calc(2.93725rem + 1px)
}

.layout-navbar-fixed .wrapper .main-header {
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1033
}

.layout-navbar-fixed.text-sm .wrapper .content-wrapper {
    margin-top: calc(2.93725rem + 1px)
}

.layout-navbar-not-fixed .wrapper .brand-link {
    position: static
}

.layout-navbar-not-fixed .wrapper .content-wrapper,
.layout-navbar-not-fixed .wrapper .sidebar {
    margin-top: 0
}

.layout-navbar-not-fixed .wrapper .main-header {
    position: static
}

.layout-navbar-not-fixed.layout-fixed .wrapper .sidebar {
    margin-top: 0
}

.layout-navbar-fixed.layout-fixed .wrapper .control-sidebar {
    top: calc(3.5rem + 1px)
}

.layout-navbar-fixed.layout-fixed .wrapper .main-header.text-sm~.control-sidebar,
.text-sm .layout-navbar-fixed.layout-fixed .wrapper .main-header~.control-sidebar {
    top: calc(2.93725rem + 1px)
}

.layout-navbar-fixed.layout-fixed .wrapper .sidebar {
    margin-top: calc(3.5rem + 1px)
}

.layout-navbar-fixed.layout-fixed .wrapper .brand-link.text-sm~.sidebar,
.text-sm .layout-navbar-fixed.layout-fixed .wrapper .brand-link~.sidebar {
    margin-top: calc(2.93725rem + 1px)
}

.layout-navbar-fixed.layout-fixed.text-sm .wrapper .control-sidebar {
    top: calc(2.93725rem + 1px)
}

.layout-navbar-fixed.layout-fixed.text-sm .wrapper .sidebar {
    margin-top: calc(2.93725rem + 1px)
}

.layout-navbar-fixed .wrapper .control-sidebar {
    top: 0
}

.layout-navbar-fixed .wrapper a.anchor {
    display: block;
    position: relative;
    top: calc((3.5rem + 1px + (.5rem * 2))/ -1)
}

.layout-navbar-fixed .wrapper.sidebar-collapse .brand-link {
    height: calc(3.5rem + 1px);
    transition: width .3s ease-in-out;
    width: 4.6rem
}

.layout-navbar-fixed .wrapper.sidebar-collapse .brand-link.text-sm,
.text-sm .layout-navbar-fixed .wrapper.sidebar-collapse .brand-link {
    height: calc(2.93725rem + 1px)
}

.layout-navbar-fixed .wrapper.sidebar-collapse .main-sidebar:hover .brand-link {
    transition: width .3s ease-in-out;
    width: 280px
}

.layout-navbar-fixed .wrapper .brand-link {
    overflow: hidden;
    position: fixed;
    top: 0;
    transition: width .3s ease-in-out;
    width: 280px;
    z-index: 1035
}

.layout-navbar-fixed .wrapper .content-wrapper {
    margin-top: calc(3.5rem + 1px)
}

.layout-navbar-fixed .wrapper .main-header.text-sm~.content-wrapper,
.text-sm .layout-navbar-fixed .wrapper .main-header~.content-wrapper {
    margin-top: calc(2.93725rem + 1px)
}

.layout-navbar-fixed .wrapper .main-header {
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1037
}

.layout-navbar-fixed.text-sm .wrapper .content-wrapper {
    margin-top: calc(2.93725rem + 1px)
}

body:not(.layout-fixed).layout-navbar-fixed.text-sm .wrapper .main-sidebar {
    margin-top: calc(calc(2.93725rem + 1px)/ -1)
}

body:not(.layout-fixed).layout-navbar-fixed.text-sm .wrapper .main-sidebar .sidebar {
    margin-top: calc(2.93725rem + 1px)
}

.layout-navbar-not-fixed .wrapper .brand-link {
    position: static
}

.layout-navbar-not-fixed .wrapper .content-wrapper,
.layout-navbar-not-fixed .wrapper .sidebar {
    margin-top: 0
}

.layout-navbar-not-fixed .wrapper .main-header {
    position: static
}

.layout-navbar-not-fixed.layout-fixed .wrapper .sidebar {
    margin-top: 0
}

@media (min-width:576px) {
    .layout-sm-navbar-fixed.layout-fixed .wrapper .control-sidebar {
        top: calc(3.5rem + 1px)
    }

    .layout-sm-navbar-fixed.layout-fixed .wrapper .main-header.text-sm~.control-sidebar,
    .text-sm .layout-sm-navbar-fixed.layout-fixed .wrapper .main-header~.control-sidebar {
        top: calc(2.93725rem + 1px)
    }

    .layout-sm-navbar-fixed.layout-fixed .wrapper .sidebar {
        margin-top: calc(3.5rem + 1px)
    }

    .layout-sm-navbar-fixed.layout-fixed .wrapper .brand-link.text-sm~.sidebar,
    .text-sm .layout-sm-navbar-fixed.layout-fixed .wrapper .brand-link~.sidebar {
        margin-top: calc(2.93725rem + 1px)
    }

    .layout-sm-navbar-fixed.layout-fixed.text-sm .wrapper .control-sidebar {
        top: calc(2.93725rem + 1px)
    }

    .layout-sm-navbar-fixed.layout-fixed.text-sm .wrapper .sidebar {
        margin-top: calc(2.93725rem + 1px)
    }

    .layout-sm-navbar-fixed .wrapper .control-sidebar {
        top: 0
    }

    .layout-sm-navbar-fixed .wrapper a.anchor {
        display: block;
        position: relative;
        top: calc((3.5rem + 1px + (.5rem * 2))/ -1)
    }

    .layout-sm-navbar-fixed .wrapper.sidebar-collapse .brand-link {
        height: calc(3.5rem + 1px);
        transition: width .3s ease-in-out;
        width: 4.6rem
    }

    .layout-sm-navbar-fixed .wrapper.sidebar-collapse .brand-link.text-sm,
    .text-sm .layout-sm-navbar-fixed .wrapper.sidebar-collapse .brand-link {
        height: calc(2.93725rem + 1px)
    }

    .layout-sm-navbar-fixed .wrapper.sidebar-collapse .main-sidebar:hover .brand-link {
        transition: width .3s ease-in-out;
        width: 280px
    }

    .layout-sm-navbar-fixed .wrapper .brand-link {
        overflow: hidden;
        position: fixed;
        top: 0;
        transition: width .3s ease-in-out;
        width: 280px;
        z-index: 1035
    }

    .layout-sm-navbar-fixed .wrapper .content-wrapper {
        margin-top: calc(3.5rem + 1px)
    }

    .layout-sm-navbar-fixed .wrapper .main-header.text-sm~.content-wrapper,
    .text-sm .layout-sm-navbar-fixed .wrapper .main-header~.content-wrapper {
        margin-top: calc(2.93725rem + 1px)
    }

    .layout-sm-navbar-fixed .wrapper .main-header {
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 1037
    }

    .layout-sm-navbar-fixed.text-sm .wrapper .content-wrapper {
        margin-top: calc(2.93725rem + 1px)
    }

    body:not(.layout-fixed).layout-sm-navbar-fixed.text-sm .wrapper .main-sidebar {
        margin-top: calc(calc(2.93725rem + 1px)/ -1)
    }

    body:not(.layout-fixed).layout-sm-navbar-fixed.text-sm .wrapper .main-sidebar .sidebar {
        margin-top: calc(2.93725rem + 1px)
    }

    .layout-sm-navbar-not-fixed .wrapper .brand-link {
        position: static
    }

    .layout-sm-navbar-not-fixed .wrapper .content-wrapper,
    .layout-sm-navbar-not-fixed .wrapper .sidebar {
        margin-top: 0
    }

    .layout-sm-navbar-not-fixed .wrapper .main-header {
        position: static
    }

    .layout-sm-navbar-not-fixed.layout-fixed .wrapper .sidebar {
        margin-top: 0
    }
}

@media (min-width:768px) {
    .layout-md-navbar-fixed.layout-fixed .wrapper .control-sidebar {
        top: calc(3.5rem + 1px)
    }

    .layout-md-navbar-fixed.layout-fixed .wrapper .main-header.text-sm~.control-sidebar,
    .text-sm .layout-md-navbar-fixed.layout-fixed .wrapper .main-header~.control-sidebar {
        top: calc(2.93725rem + 1px)
    }

    .layout-md-navbar-fixed.layout-fixed .wrapper .sidebar {
        margin-top: calc(3.5rem + 1px)
    }

    .layout-md-navbar-fixed.layout-fixed .wrapper .brand-link.text-sm~.sidebar,
    .text-sm .layout-md-navbar-fixed.layout-fixed .wrapper .brand-link~.sidebar {
        margin-top: calc(2.93725rem + 1px)
    }

    .layout-md-navbar-fixed.layout-fixed.text-sm .wrapper .control-sidebar {
        top: calc(2.93725rem + 1px)
    }

    .layout-md-navbar-fixed.layout-fixed.text-sm .wrapper .sidebar {
        margin-top: calc(2.93725rem + 1px)
    }

    .layout-md-navbar-fixed .wrapper .control-sidebar {
        top: 0
    }

    .layout-md-navbar-fixed .wrapper a.anchor {
        display: block;
        position: relative;
        top: calc((3.5rem + 1px + (.5rem * 2))/ -1)
    }

    .layout-md-navbar-fixed .wrapper.sidebar-collapse .brand-link {
        height: calc(3.5rem + 1px);
        transition: width .3s ease-in-out;
        width: 4.6rem
    }

    .layout-md-navbar-fixed .wrapper.sidebar-collapse .brand-link.text-sm,
    .text-sm .layout-md-navbar-fixed .wrapper.sidebar-collapse .brand-link {
        height: calc(2.93725rem + 1px)
    }

    .layout-md-navbar-fixed .wrapper.sidebar-collapse .main-sidebar:hover .brand-link {
        transition: width .3s ease-in-out;
        width: 280px
    }

    .layout-md-navbar-fixed .wrapper .brand-link {
        overflow: hidden;
        position: fixed;
        top: 0;
        transition: width .3s ease-in-out;
        width: 280px;
        z-index: 1035
    }

    .layout-md-navbar-fixed .wrapper .content-wrapper {
        margin-top: calc(3.5rem + 1px)
    }

    .layout-md-navbar-fixed .wrapper .main-header.text-sm~.content-wrapper,
    .text-sm .layout-md-navbar-fixed .wrapper .main-header~.content-wrapper {
        margin-top: calc(2.93725rem + 1px)
    }

    .layout-md-navbar-fixed .wrapper .main-header {
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 1037
    }

    .layout-md-navbar-fixed.text-sm .wrapper .content-wrapper {
        margin-top: calc(2.93725rem + 1px)
    }

    body:not(.layout-fixed).layout-md-navbar-fixed.text-sm .wrapper .main-sidebar {
        margin-top: calc(calc(2.93725rem + 1px)/ -1)
    }

    body:not(.layout-fixed).layout-md-navbar-fixed.text-sm .wrapper .main-sidebar .sidebar {
        margin-top: calc(2.93725rem + 1px)
    }

    .layout-md-navbar-not-fixed .wrapper .brand-link {
        position: static
    }

    .layout-md-navbar-not-fixed .wrapper .content-wrapper,
    .layout-md-navbar-not-fixed .wrapper .sidebar {
        margin-top: 0
    }

    .layout-md-navbar-not-fixed .wrapper .main-header {
        position: static
    }

    .layout-md-navbar-not-fixed.layout-fixed .wrapper .sidebar {
        margin-top: 0
    }
}

@media (min-width:992px) {
    .layout-lg-navbar-fixed.layout-fixed .wrapper .control-sidebar {
        top: calc(3.5rem + 1px)
    }

    .layout-lg-navbar-fixed.layout-fixed .wrapper .main-header.text-sm~.control-sidebar,
    .text-sm .layout-lg-navbar-fixed.layout-fixed .wrapper .main-header~.control-sidebar {
        top: calc(2.93725rem + 1px)
    }

    .layout-lg-navbar-fixed.layout-fixed .wrapper .sidebar {
        margin-top: calc(3.5rem + 1px)
    }

    .layout-lg-navbar-fixed.layout-fixed .wrapper .brand-link.text-sm~.sidebar,
    .text-sm .layout-lg-navbar-fixed.layout-fixed .wrapper .brand-link~.sidebar {
        margin-top: calc(2.93725rem + 1px)
    }

    .layout-lg-navbar-fixed.layout-fixed.text-sm .wrapper .control-sidebar {
        top: calc(2.93725rem + 1px)
    }

    .layout-lg-navbar-fixed.layout-fixed.text-sm .wrapper .sidebar {
        margin-top: calc(2.93725rem + 1px)
    }

    .layout-lg-navbar-fixed .wrapper .control-sidebar {
        top: 0
    }

    .layout-lg-navbar-fixed .wrapper a.anchor {
        display: block;
        position: relative;
        top: calc((3.5rem + 1px + (.5rem * 2))/ -1)
    }

    .layout-lg-navbar-fixed .wrapper.sidebar-collapse .brand-link {
        height: calc(3.5rem + 1px);
        transition: width .3s ease-in-out;
        width: 4.6rem
    }

    .layout-lg-navbar-fixed .wrapper.sidebar-collapse .brand-link.text-sm,
    .text-sm .layout-lg-navbar-fixed .wrapper.sidebar-collapse .brand-link {
        height: calc(2.93725rem + 1px)
    }

    .layout-lg-navbar-fixed .wrapper.sidebar-collapse .main-sidebar:hover .brand-link {
        transition: width .3s ease-in-out;
        width: 280px
    }

    .layout-lg-navbar-fixed .wrapper .brand-link {
        overflow: hidden;
        position: fixed;
        top: 0;
        transition: width .3s ease-in-out;
        width: 280px;
        z-index: 1035
    }

    .layout-lg-navbar-fixed .wrapper .content-wrapper {
        margin-top: calc(3.5rem + 1px)
    }

    .layout-lg-navbar-fixed .wrapper .main-header.text-sm~.content-wrapper,
    .text-sm .layout-lg-navbar-fixed .wrapper .main-header~.content-wrapper {
        margin-top: calc(2.93725rem + 1px)
    }

    .layout-lg-navbar-fixed .wrapper .main-header {
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 1037
    }

    .layout-lg-navbar-fixed.text-sm .wrapper .content-wrapper {
        margin-top: calc(2.93725rem + 1px)
    }

    body:not(.layout-fixed).layout-lg-navbar-fixed.text-sm .wrapper .main-sidebar {
        margin-top: calc(calc(2.93725rem + 1px)/ -1)
    }

    body:not(.layout-fixed).layout-lg-navbar-fixed.text-sm .wrapper .main-sidebar .sidebar {
        margin-top: calc(2.93725rem + 1px)
    }

    .layout-lg-navbar-not-fixed .wrapper .brand-link {
        position: static
    }

    .layout-lg-navbar-not-fixed .wrapper .content-wrapper,
    .layout-lg-navbar-not-fixed .wrapper .sidebar {
        margin-top: 0
    }

    .layout-lg-navbar-not-fixed .wrapper .main-header {
        position: static
    }

    .layout-lg-navbar-not-fixed.layout-fixed .wrapper .sidebar {
        margin-top: 0
    }
}

@media (min-width:1200px) {
    .layout-xl-navbar-fixed.layout-fixed .wrapper .control-sidebar {
        top: calc(3.5rem + 1px)
    }

    .layout-xl-navbar-fixed.layout-fixed .wrapper .main-header.text-sm~.control-sidebar,
    .text-sm .layout-xl-navbar-fixed.layout-fixed .wrapper .main-header~.control-sidebar {
        top: calc(2.93725rem + 1px)
    }

    .layout-xl-navbar-fixed.layout-fixed .wrapper .sidebar {
        margin-top: calc(3.5rem + 1px)
    }

    .layout-xl-navbar-fixed.layout-fixed .wrapper .brand-link.text-sm~.sidebar,
    .text-sm .layout-xl-navbar-fixed.layout-fixed .wrapper .brand-link~.sidebar {
        margin-top: calc(2.93725rem + 1px)
    }

    .layout-xl-navbar-fixed.layout-fixed.text-sm .wrapper .control-sidebar {
        top: calc(2.93725rem + 1px)
    }

    .layout-xl-navbar-fixed.layout-fixed.text-sm .wrapper .sidebar {
        margin-top: calc(2.93725rem + 1px)
    }

    .layout-xl-navbar-fixed .wrapper .control-sidebar {
        top: 0
    }

    .layout-xl-navbar-fixed .wrapper a.anchor {
        display: block;
        position: relative;
        top: calc((3.5rem + 1px + (.5rem * 2))/ -1)
    }

    .layout-xl-navbar-fixed .wrapper.sidebar-collapse .brand-link {
        height: calc(3.5rem + 1px);
        transition: width .3s ease-in-out;
        width: 4.6rem
    }

    .layout-xl-navbar-fixed .wrapper.sidebar-collapse .brand-link.text-sm,
    .text-sm .layout-xl-navbar-fixed .wrapper.sidebar-collapse .brand-link {
        height: calc(2.93725rem + 1px)
    }

    .layout-xl-navbar-fixed .wrapper.sidebar-collapse .main-sidebar:hover .brand-link {
        transition: width .3s ease-in-out;
        width: 280px
    }

    .layout-xl-navbar-fixed .wrapper .brand-link {
        overflow: hidden;
        position: fixed;
        top: 0;
        transition: width .3s ease-in-out;
        width: 280px;
        z-index: 1035
    }

    .layout-xl-navbar-fixed .wrapper .content-wrapper {
        margin-top: calc(3.5rem + 1px)
    }

    .layout-xl-navbar-fixed .wrapper .main-header.text-sm~.content-wrapper,
    .text-sm .layout-xl-navbar-fixed .wrapper .main-header~.content-wrapper {
        margin-top: calc(2.93725rem + 1px)
    }

    .layout-xl-navbar-fixed .wrapper .main-header {
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 1037
    }

    .layout-xl-navbar-fixed.text-sm .wrapper .content-wrapper {
        margin-top: calc(2.93725rem + 1px)
    }

    body:not(.layout-fixed).layout-xl-navbar-fixed.text-sm .wrapper .main-sidebar {
        margin-top: calc(calc(2.93725rem + 1px)/ -1)
    }

    body:not(.layout-fixed).layout-xl-navbar-fixed.text-sm .wrapper .main-sidebar .sidebar {
        margin-top: calc(2.93725rem + 1px)
    }

    .layout-xl-navbar-not-fixed .wrapper .brand-link {
        position: static
    }

    .layout-xl-navbar-not-fixed .wrapper .content-wrapper,
    .layout-xl-navbar-not-fixed .wrapper .sidebar {
        margin-top: 0
    }

    .layout-xl-navbar-not-fixed .wrapper .main-header {
        position: static
    }

    .layout-xl-navbar-not-fixed.layout-fixed .wrapper .sidebar {
        margin-top: 0
    }
}

.layout-footer-fixed .wrapper .control-sidebar {
    bottom: 0
}

.layout-footer-fixed .wrapper .main-footer {
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    z-index: 1032
}

.layout-footer-not-fixed .wrapper .main-footer {
    position: static
}

.layout-footer-not-fixed .wrapper .content-wrapper {
    margin-bottom: 0
}

.layout-footer-fixed .wrapper .control-sidebar {
    bottom: 0
}

.layout-footer-fixed .wrapper .main-footer {
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    z-index: 1032
}

.layout-footer-fixed .wrapper .content-wrapper {
    padding-bottom: calc(3.5rem + 1px)
}

.layout-footer-not-fixed .wrapper .main-footer {
    position: static
}

@media (min-width:576px) {
    .layout-sm-footer-fixed .wrapper .control-sidebar {
        bottom: 0
    }

    .layout-sm-footer-fixed .wrapper .main-footer {
        bottom: 0;
        left: 0;
        position: fixed;
        right: 0;
        z-index: 1032
    }

    .layout-sm-footer-fixed .wrapper .content-wrapper {
        padding-bottom: calc(3.5rem + 1px)
    }

    .layout-sm-footer-not-fixed .wrapper .main-footer {
        position: static
    }
}

@media (min-width:768px) {
    .layout-md-footer-fixed .wrapper .control-sidebar {
        bottom: 0
    }

    .layout-md-footer-fixed .wrapper .main-footer {
        bottom: 0;
        left: 0;
        position: fixed;
        right: 0;
        z-index: 1032
    }

    .layout-md-footer-fixed .wrapper .content-wrapper {
        padding-bottom: calc(3.5rem + 1px)
    }

    .layout-md-footer-not-fixed .wrapper .main-footer {
        position: static
    }
}

@media (min-width:992px) {
    .layout-lg-footer-fixed .wrapper .control-sidebar {
        bottom: 0
    }

    .layout-lg-footer-fixed .wrapper .main-footer {
        bottom: 0;
        left: 0;
        position: fixed;
        right: 0;
        z-index: 1032
    }

    .layout-lg-footer-fixed .wrapper .content-wrapper {
        padding-bottom: calc(3.5rem + 1px)
    }

    .layout-lg-footer-not-fixed .wrapper .main-footer {
        position: static
    }
}

@media (min-width:1200px) {
    .layout-xl-footer-fixed .wrapper .control-sidebar {
        bottom: 0
    }

    .layout-xl-footer-fixed .wrapper .main-footer {
        bottom: 0;
        left: 0;
        position: fixed;
        right: 0;
        z-index: 1032
    }

    .layout-xl-footer-fixed .wrapper .content-wrapper {
        padding-bottom: calc(3.5rem + 1px)
    }

    .layout-xl-footer-not-fixed .wrapper .main-footer {
        position: static
    }
}

.layout-top-nav .wrapper {
    margin-left: 0
}

.layout-top-nav .wrapper .main-header .brand-image {
    margin-top: -.5rem;
    margin-right: .2rem;
    height: 33px
}

.layout-top-nav .wrapper .main-sidebar {
    bottom: inherit;
    height: inherit
}

.layout-top-nav .wrapper .content-wrapper,
.layout-top-nav .wrapper .main-footer,
.layout-top-nav .wrapper .main-header {
    margin-left: 0
}


.content-wrapper {
    background-color: #f4f6f9
}

.content-wrapper>.content {
    padding: 0 .5rem
}

.main-sidebar,
.main-sidebar::before {
    transition: margin-left .3s ease-in-out, width .3s ease-in-out;
    width: 280px
}

@media (prefers-reduced-motion:reduce) {

    .main-sidebar,
    .main-sidebar::before {
        transition: none
    }
}


.sidebar-collapse .main-sidebar,
.sidebar-collapse .main-sidebar::before {
    margin-left: -280px
}

.sidebar-collapse .main-sidebar .nav-sidebar.nav-child-indent .nav-treeview {
    padding: 0
}

@media (max-width:767.98px) {

    .main-sidebar,
    .main-sidebar::before {
        box-shadow: none !important;
        margin-left: -280px
    }

    .sidebar-open .main-sidebar,
    .sidebar-open .main-sidebar::before {
        margin-left: 0
    }
}

body:not(.layout-fixed) .main-sidebar {
    height: inherit;
    min-height: 100%;
    position: absolute;
    top: 0
}

body:not(.layout-fixed) .main-sidebar .sidebar {
    overflow-y: auto
}

.layout-fixed .brand-link {
    width: 280px
}

.layout-fixed .main-sidebar {
    bottom: 0;
    float: none;
    left: 0;
    position: fixed;
    top: 0
}

.layout-fixed .control-sidebar {
    bottom: 0;
    float: none;
    position: fixed;
    top: 0
}

.layout-fixed .control-sidebar .control-sidebar-content {
    height: calc(100vh - calc(3.5rem + 1px));
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #a9a9a9 transparent
}

.layout-fixed .control-sidebar .control-sidebar-content::-webkit-scrollbar {
    width: .5rem;
    height: .5rem
}

.layout-fixed .control-sidebar .control-sidebar-content::-webkit-scrollbar-thumb {
    background-color: #a9a9a9
}

.layout-fixed .control-sidebar .control-sidebar-content::-webkit-scrollbar-track {
    background-color: transparent
}

.layout-fixed .control-sidebar .control-sidebar-content::-webkit-scrollbar-corner {
    background-color: transparent
}

@supports (-webkit-touch-callout:none) {
    .layout-fixed .main-sidebar {
        height: inherit
    }
}

.main-footer {
    background-color: #fff;
    border-top: 1px solid #dee2e6;
    color: #869099;
    padding: 1rem
}

.main-footer.text-sm,
.text-sm .main-footer {
    padding: .812rem
}

.content-header {
    padding: 15px .5rem
}

.text-sm .content-header {
    padding: 10px .5rem
}

.content-header h1 {
    font-size: 1.8rem;
    margin: 0
}

.text-sm .content-header h1 {
    font-size: 1.5rem
}

.content-header .breadcrumb {
    background-color: transparent;
    line-height: 1.8rem;
    margin-bottom: 0;
    padding: 0
}

.text-sm .content-header .breadcrumb {
    line-height: 1.5rem
}

.hold-transition .content-wrapper,
.hold-transition .control-sidebar,
.hold-transition .control-sidebar *,
.hold-transition .main-footer,
.hold-transition .main-header,
.hold-transition .main-sidebar,
.hold-transition .main-sidebar * {
    transition: none !important;
    -webkit-animation-duration: 0s !important;
    animation-duration: 0s !important
}

.dark-mode {
    background-color: #454d55 !important;
    color: #fff
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-dark-primary .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-light-primary .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-dark-secondary .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-light-secondary .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-dark-success .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-light-success .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-dark-info .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-light-info .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-dark-warning .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-light-warning .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-dark-danger .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-light-danger .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-dark-light .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-light-light .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-dark-dark .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-light-dark .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-dark-primary .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-light-primary .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-dark-secondary .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-light-secondary .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-dark-success .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-light-success .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-dark-info .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-light-info .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-dark-warning .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-light-warning .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-dark-danger .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-light-danger .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-dark-light .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-light-light .brand-link:not([class*=navbar]) {
    background-color: #fff
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-dark-dark .brand-link:not([class*=navbar]) {
    background-color: #343a40
}

.layout-navbar-fixed .dark-mode .wrapper .sidebar-light-dark .brand-link:not([class*=navbar]) {
    background-color: #fff
}

@media (min-width:576px) {
    .layout-sm-navbar-fixed .dark-mode .wrapper .sidebar-dark-primary .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-sm-navbar-fixed .dark-mode .wrapper .sidebar-light-primary .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-sm-navbar-fixed .dark-mode .wrapper .sidebar-dark-secondary .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-sm-navbar-fixed .dark-mode .wrapper .sidebar-light-secondary .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-sm-navbar-fixed .dark-mode .wrapper .sidebar-dark-success .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-sm-navbar-fixed .dark-mode .wrapper .sidebar-light-success .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-sm-navbar-fixed .dark-mode .wrapper .sidebar-dark-info .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-sm-navbar-fixed .dark-mode .wrapper .sidebar-light-info .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-sm-navbar-fixed .dark-mode .wrapper .sidebar-dark-warning .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-sm-navbar-fixed .dark-mode .wrapper .sidebar-light-warning .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-sm-navbar-fixed .dark-mode .wrapper .sidebar-dark-danger .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-sm-navbar-fixed .dark-mode .wrapper .sidebar-light-danger .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-sm-navbar-fixed .dark-mode .wrapper .sidebar-dark-light .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-sm-navbar-fixed .dark-mode .wrapper .sidebar-light-light .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-sm-navbar-fixed .dark-mode .wrapper .sidebar-dark-dark .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-sm-navbar-fixed .dark-mode .wrapper .sidebar-light-dark .brand-link:not([class*=navbar]) {
        background-color: #fff
    }
}

@media (min-width:768px) {
    .layout-md-navbar-fixed .dark-mode .wrapper .sidebar-dark-primary .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-md-navbar-fixed .dark-mode .wrapper .sidebar-light-primary .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-md-navbar-fixed .dark-mode .wrapper .sidebar-dark-secondary .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-md-navbar-fixed .dark-mode .wrapper .sidebar-light-secondary .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-md-navbar-fixed .dark-mode .wrapper .sidebar-dark-success .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-md-navbar-fixed .dark-mode .wrapper .sidebar-light-success .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-md-navbar-fixed .dark-mode .wrapper .sidebar-dark-info .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-md-navbar-fixed .dark-mode .wrapper .sidebar-light-info .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-md-navbar-fixed .dark-mode .wrapper .sidebar-dark-warning .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-md-navbar-fixed .dark-mode .wrapper .sidebar-light-warning .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-md-navbar-fixed .dark-mode .wrapper .sidebar-dark-danger .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-md-navbar-fixed .dark-mode .wrapper .sidebar-light-danger .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-md-navbar-fixed .dark-mode .wrapper .sidebar-dark-light .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-md-navbar-fixed .dark-mode .wrapper .sidebar-light-light .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-md-navbar-fixed .dark-mode .wrapper .sidebar-dark-dark .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-md-navbar-fixed .dark-mode .wrapper .sidebar-light-dark .brand-link:not([class*=navbar]) {
        background-color: #fff
    }
}

@media (min-width:992px) {
    .layout-lg-navbar-fixed .dark-mode .wrapper .sidebar-dark-primary .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-lg-navbar-fixed .dark-mode .wrapper .sidebar-light-primary .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-lg-navbar-fixed .dark-mode .wrapper .sidebar-dark-secondary .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-lg-navbar-fixed .dark-mode .wrapper .sidebar-light-secondary .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-lg-navbar-fixed .dark-mode .wrapper .sidebar-dark-success .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-lg-navbar-fixed .dark-mode .wrapper .sidebar-light-success .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-lg-navbar-fixed .dark-mode .wrapper .sidebar-dark-info .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-lg-navbar-fixed .dark-mode .wrapper .sidebar-light-info .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-lg-navbar-fixed .dark-mode .wrapper .sidebar-dark-warning .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-lg-navbar-fixed .dark-mode .wrapper .sidebar-light-warning .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-lg-navbar-fixed .dark-mode .wrapper .sidebar-dark-danger .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-lg-navbar-fixed .dark-mode .wrapper .sidebar-light-danger .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-lg-navbar-fixed .dark-mode .wrapper .sidebar-dark-light .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-lg-navbar-fixed .dark-mode .wrapper .sidebar-light-light .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-lg-navbar-fixed .dark-mode .wrapper .sidebar-dark-dark .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-lg-navbar-fixed .dark-mode .wrapper .sidebar-light-dark .brand-link:not([class*=navbar]) {
        background-color: #fff
    }
}

@media (min-width:1200px) {
    .layout-xl-navbar-fixed .dark-mode .wrapper .sidebar-dark-primary .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-xl-navbar-fixed .dark-mode .wrapper .sidebar-light-primary .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-xl-navbar-fixed .dark-mode .wrapper .sidebar-dark-secondary .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-xl-navbar-fixed .dark-mode .wrapper .sidebar-light-secondary .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-xl-navbar-fixed .dark-mode .wrapper .sidebar-dark-success .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-xl-navbar-fixed .dark-mode .wrapper .sidebar-light-success .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-xl-navbar-fixed .dark-mode .wrapper .sidebar-dark-info .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-xl-navbar-fixed .dark-mode .wrapper .sidebar-light-info .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-xl-navbar-fixed .dark-mode .wrapper .sidebar-dark-warning .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-xl-navbar-fixed .dark-mode .wrapper .sidebar-light-warning .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-xl-navbar-fixed .dark-mode .wrapper .sidebar-dark-danger .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-xl-navbar-fixed .dark-mode .wrapper .sidebar-light-danger .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-xl-navbar-fixed .dark-mode .wrapper .sidebar-dark-light .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-xl-navbar-fixed .dark-mode .wrapper .sidebar-light-light .brand-link:not([class*=navbar]) {
        background-color: #fff
    }

    .layout-xl-navbar-fixed .dark-mode .wrapper .sidebar-dark-dark .brand-link:not([class*=navbar]) {
        background-color: #343a40
    }

    .layout-xl-navbar-fixed .dark-mode .wrapper .sidebar-light-dark .brand-link:not([class*=navbar]) {
        background-color: #fff
    }
}

.dark-mode .breadcrumb-item+.breadcrumb-item::before,
.dark-mode .breadcrumb-item.active {
    color: #adb5bd
}

.dark-mode .main-footer {
    background-color: #343a40;
    border-color: #4b545c
}

.dark-mode .content-wrapper {
    background-color: #454d55;
    color: #fff
}

.dark-mode .content-wrapper .content-header {
    color: #fff
}

.main-header {
    border-bottom: 1px solid #dee2e6;
    z-index: 1034
}

.main-header .nav-link {
    height: 2.5rem;
    position: relative
}

.main-header.text-sm .nav-link,
.text-sm .main-header .nav-link {
    height: 1.93725rem;
    padding: .35rem 1rem
}

.main-header.text-sm .nav-link>.fa,
.main-header.text-sm .nav-link>.fab,
.main-header.text-sm .nav-link>.fad,
.main-header.text-sm .nav-link>.fal,
.main-header.text-sm .nav-link>.far,
.main-header.text-sm .nav-link>.fas,
.main-header.text-sm .nav-link>.ion,
.main-header.text-sm .nav-link>.svg-inline--fa,
.text-sm .main-header .nav-link>.fa,
.text-sm .main-header .nav-link>.fab,
.text-sm .main-header .nav-link>.fad,
.text-sm .main-header .nav-link>.fal,
.text-sm .main-header .nav-link>.far,
.text-sm .main-header .nav-link>.fas,
.text-sm .main-header .nav-link>.ion,
.text-sm .main-header .nav-link>.svg-inline--fa {
    font-size: .875rem
}

.main-header .navbar-nav .nav-item {
    margin: 0
}

.main-header .navbar-nav[class*="-right"] .dropdown-menu {
    left: auto;
    margin-top: -3px;
    right: 0
}

@media (max-width:575.98px) {
    .main-header .navbar-nav[class*="-right"] .dropdown-menu {
        left: 0;
        right: auto
    }
}

.main-header.dropdown-legacy .dropdown-menu {
    top: 3rem;
    margin-top: 0
}

.navbar-img {
    height: calc(calc(3.5rem + 1px) * .5);
    width: auto
}

.navbar-badge {
    font-size: .6rem;
    font-weight: 300;
    padding: 2px 4px;
    position: absolute;
    right: 5px;
    top: 9px
}

.btn-navbar {
    background-color: transparent;
    border-left-width: 0
}

.form-control-navbar {
    border-right-width: 0
}

.form-control-navbar+.input-group-append {
    margin-left: 0
}

.btn-navbar,
.form-control-navbar {
    transition: none
}

.navbar-dark .btn-navbar,
.navbar-dark .form-control-navbar {
    background-color: #343a40;
    border-color: #6c757d
}

.navbar-dark .form-control-navbar::-webkit-input-placeholder {
    color: rgba(255, 255, 255, .6)
}

.navbar-dark .form-control-navbar::-moz-placeholder {
    color: rgba(255, 255, 255, .6)
}

.navbar-dark .form-control-navbar:-ms-input-placeholder {
    color: rgba(255, 255, 255, .6)
}

.navbar-dark .form-control-navbar::-ms-input-placeholder {
    color: rgba(255, 255, 255, .6)
}

.navbar-dark .form-control-navbar::placeholder {
    color: rgba(255, 255, 255, .6)
}

.navbar-dark .form-control-navbar+.input-group-append>.btn-navbar {
    color: rgba(255, 255, 255, .6)
}

.navbar-dark .form-control-navbar:focus,
.navbar-dark .form-control-navbar:focus+.input-group-append .btn-navbar {
    background-color: #498057;
    border-color: #6c757d !important;
    color: #ced4da
}

.navbar-light .btn-navbar,
.navbar-light .form-control-navbar {
    background-color: #dadfe4;
    border-color: #ced4da
}

.navbar-light .form-control-navbar::-webkit-input-placeholder {
    color: rgba(0, 0, 0, .6)
}

.navbar-light .form-control-navbar::-moz-placeholder {
    color: rgba(0, 0, 0, .6)
}

.navbar-light .form-control-navbar:-ms-input-placeholder {
    color: rgba(0, 0, 0, .6)
}
</style>