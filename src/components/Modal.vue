<template>
<transition name="fade">
    <div class="modal-container" v-if="show" @click.self="$emit('close')">
        <div class="modal-content" :style="{'max-width' : width +'px',height:height+'px'}">
            <slot></slot>
        </div>     
    </div>
</transition>
    
</template>

<script>
export default {
    name:'modal',
    props:{
        show:{
            type:Boolean,
            required:false,
            default:false
        },
        width:{
            type:Number,
            default:520,
            required:false
        },
         height:{
            type:Number,
            default:250,
            required:false
        },

    },
    
}
</script>

<style lang="scss" scoped>
    .modal-container{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 50;
        padding: 12px;
        background-color: rgba(0, 0, 0,0.5);
        &.fade-enter,
        &.fade-leave-to{
            opacity: 0;
        }
        &.fade-enter-active,
        &.fade-leave-active{
            transition: opacity .7s;
        }
        .modal-content{
        width: 100%;
        max-width: 480px;
        height: 390px;
        margin: 100px auto;
        background-color: #ffffff;
        padding: 20px;
        border: 5px;
    }
    
    }

</style>