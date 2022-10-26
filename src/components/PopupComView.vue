<template>
    <div class="popup">
        <div class="popup-inner">
            <slot ></slot>
            <button class="popup-close btn btn-secondary " @click="TogglePopups()">
                Fermer
            </button>
            <button class="popup-close btn btn-secondary " @click="open" >
                Payer{{ this.orders }}
            </button>
        </div>
    </div>
</template>

<script>
import {
  openKkiapayWidget,
  addKkiapayListener,
  removeKkiapayListener,
} from "kkiapay";
    export default{
        props: ['TogglePopups', 'the_order'],

        // data() {
        //     return {
        //         orders: this.the_order
        //     }
        // },

        methods: {
            open() {
                console.log(this.the_order)
            openKkiapayWidget({
                amount: this.the_order.montant_total,
                api_key: "6aa5a030a84211ecb9755de712bc9e4f",
                sandbox: true,
                phone: "97000000",
                firstname: this.the_order.prenom,
                lastname: this.the_order.nom,
                email: this.the_order.email
            });
            },

            successHandler(response) {
            console.log(response.transactionId);
                
            },


            beforeDestroy() {
                removeKkiapayListener('success',this.successHandler)
            },
        },

        mounted() {
            addKkiapayListener('success',this.successHandler)
        },
    }
</script>

<style lang="scss" scoped>
    .popup{
        position:fixed;
        top:0;
        left:0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.2);
        display:flex;
        align-items: center;
        justify-content: center;

        .popup-inner {
            background: #FFF;
            padding:32px;
            width:40%;
            border-radius:20px;

            .popup-close{
                // transform: translate(270%,0);
                border-radius:10px ;
                border: none;
            }
        }



    }

</style>