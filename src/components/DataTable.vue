<template>
  <div class="w-75 mx-auto my-4 d-table">
   <table class="table">
  <thead class="thead-dark ">
    <tr class="line-h-2">
        <th>
            <input
              type="checkbox"   
            />
          </th>
      <th scope="col"></th>
      <th scope="col">Title</th>
      <th scope="col">Content</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in alldata" :key="item.index">
         <td class="mx-auto text-center px-3 py-4">
            <font-awesome-icon icon="trash" class="icon-delete"  @click="testchecked(item.id)"/>
          </td>
      <th scope="row">{{item.index}}</th>
      <td   class="default" :class="{iscompleted : item.status}" @click="togglestatus(item)">{{item.title}}</td>
      <td class="antiquewhite">{{item.content}}</td>
      <td>
        <p :class="`${item.status}`" class="text-center">{{item.status}}</p>
      </td>
    </tr>
  </tbody>
</table>
<div>
 <Modal  :show="showmodal" @close="hidemodalhandler">
      <FormAdd @cancelmodal="hidemodalhandler"></FormAdd>
    </Modal>
    <b-button variant="primary" @click="showmodelhandler">ADD</b-button>
</div>
    <div>
      <alertmodel  :show="showmodaldelete" @cancelmodal="hidemodaldelete"
      @deletenote="deletenote(selectednote)"
      ></alertmodel>
</div>
  </div>
</template>

<script>
import axios from 'axios'
import Modal from '@/components/Modal'
import FormAdd from '@/components/FormAdd'
import alertmodel from '@/components/alertmodel'

  export default {
    data() {
      return {
        showmodal:false,
        showmodaldelete:false,
        selectednote:null
      }
    },
    components:{
      Modal,
      FormAdd,
      alertmodel, 
    },
    methods:{
      showmodelhandler(){
         this.showmodal = true
      },
      hidemodalhandler(){
        this.showmodal = false
      },
      hidemodaldelete(){
        this.showmodaldelete = false
      },
      testchecked(id){
        this.showmodaldelete = true
        this.selectednote = id
      },
      deletenote(){
        this.$store.dispatch('deletenote',this.selectednote).then(() =>{
          this.selectednote = null
        })
      },
    togglestatus(item){
         axios.patch(`http://localhost:3000/notes/${item.id}`,{
           "title": item.title,
          "content": item.content,
            "status": item.status = !item.status
         }).then((res) =>{
           console.log(res)
         })    
    }
    },
    computed:{
      alldata(){
        return this.$store.getters.notes
      },

    },
    mounted(){
      // axios.get(`http://localhost:3000/notes/`).then((response)=>{
      //   this.alldata = response.data
      // })
      this.$store.dispatch('loadnotes')
      
    }
  }
</script>
<style >
.d-table{
    font-size: 1.2em;
}
.line-h-2{
    line-height: 2.2;
}
.red-alert{
  background-color: #ff2600;
}
.iscompleted{
   text-decoration: line-through !important;
    color: green !important;
    cursor: pointer !important;
}
.default{
  cursor: pointer;
  color: rgba(253,152,0,.993);
}
.true{
      background: #008000;
    border-radius: 20px;
    text-align: center;
    padding: 4px 6px;
    color: white;
    width: 60%;
}
.false{
     background: rgba(253,152,0,.993);
    border-radius: 20px;
    text-align: center;
    padding: 4px 6px;
    color: white;
    width: 60%;
}
.icon-delete{
color:#f33a3a;
cursor: pointer;
}
.antiquewhite{
  color: antiquewhite;
}
</style>