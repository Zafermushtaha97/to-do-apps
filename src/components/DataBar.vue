<template>
    <div class="container text-white pt-4"> 
    <b-card class="card w-75 border-0 shadow-sm   rounded">
        <ul class="summary">
    <li class="summary__item">
      <span class="summary__item-description">Total</span> {{ completenote }}
    </li>
    <li class="summary__item">
      <span class="summary__item-description">Completed</span> {{ completenote -  remaining}}
    </li>
    <li class="summary__item">
      <span class="summary__item-description">Not Completed</span>
      {{ remaining }}
    </li>
  </ul>
  </b-card>
    </div>
</template>
<script>
export default {
    name:'databar',
    data(){
        return{
            total:5,
            completed:1,
            notCompleted:4         
        }
    },
    computed:{
      remaining(){
        return this.$store.getters.remaining
      },
      completenote(){
        return this.$store.getters.completenote
      }
     
    
    },
    mounted(){
          
    }
}
</script>

<style  scoped>
.card{
    background-color:rgba(121, 111, 143, 0.137);
}
.summary {
  margin: 0;
  padding: 2em 0;
  display: inline-flex;
  width: auto;
  margin-bottom: 1.75em;
  list-style-type: none;
}

.summary__item {
  padding: 0 1em;
  font-size: 2.2em;
}
.summary__item-description {
  font-size: 0.5em;
  display: block;
  line-height: 150%;
}
</style>
    
