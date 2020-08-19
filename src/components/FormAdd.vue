<template>
      <div class="w-75">
        <b-form @submit.prevent="savedata">
      <b-form-group
        id="input-group-1"
        label="Add Note:"
        label-for="input-1"
      >
        <b-form-input
          type="text"
          required
          v-model="note.title"
          placeholder="Title"
        ></b-form-input>
           <b-form-input
           class="mt-4"
          type="text"
          required
          v-model="note.content"
          placeholder="content"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="button" variant="primary" @click="cancel" class="ml-2">Cancel</b-button>
    </b-form>
    </div>
</template>

<script>
// import axios from 'axios'
export default {
    name:'formadd',
  data(){
    return{
     note:{
             title:'',
             content:'',
             status:false
           }
    }
  },
   methods: {
  cancel(){
    this.$emit('cancelmodal')
  },
  savedata(){
          // axios.post('http://localhost:3000/notes/',this.note).then((response) =>{
          //   console.log(response.status)
          //   this.note =''
          // })
          this.$store.dispatch('addnote',this.note).then(()=>{
            this.note = '',
            this.$emit('cancelmodal')
          })
      }
    
  },
}
</script>

<style >
   

</style>