<template>
    <div class="popup">
        <div class="popup-inner">
            <slot ></slot>
            <button class="popup-close btn btn-secondary " @click="TogglePopup()">
                Fermer
            </button>
        </div>
    </div>
</template>

<script>
    export default{
        props: ['TogglePopup']
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
                transform: translate(270%,0);
                border-radius:10px ;
                border: none;
            }
        }



    }

</style>