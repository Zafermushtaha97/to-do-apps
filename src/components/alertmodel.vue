<template>
    <transition name="fade">
    <div class="mt-4">
    <b-alert :show="show" class="red-alert"  fade>
    <h4 class="alert-heading text-white">Do you want to delete this note?</h4>
     <b-button variant="light" size="md" class="px-4 py-2 mx-4" @click="deletenote">Yes</b-button>
     <b-button variant="light" size="md" class="px-4 py-2" @click="cancel">NO</b-button>
  </b-alert>
    </div>
    </transition>
</template>

<script>
export default {
    name:'alertmodel',
    props:["show"],
    methods:{
        cancel(){
            this.$emit('cancelmodal')
        },
        deletenote(){
            this.$emit('deletenote')
            this.cancel()
        }
    },
    
}
</script>

<style  scopped>
    .red-alert{
  background-color: #ff2600;
    top: 12px;
    position: fixed;
      width: 50%;
    left: 20%;

}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>