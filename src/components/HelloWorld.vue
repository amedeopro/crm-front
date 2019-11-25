<template>
  <div class="hello">
    <table id="customers" >
      <tr>
        <th>Tipo di Lavoro</th>
        <th>Terminare entro il</th>
        <th>E' stato terminato?</th>
        <th>Informazioni</th>
      </tr>
      <tr v-for="work in lavori" :key="work.id">
        <td>{{work.work_type}}</td>
        <td>{{work.dead_line}}</td>
        <td>{{work.finished}}</td>
        <td>{{work.information}}</td>
      </tr>

    </table>


  </div>
</template>

<script>

  import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function(){
    return {
      lavori: {}
    }

  },
  created(){
    this.works()
  },
  methods:{
    works(){
      axios
      .get('http://127.0.0.1:8000/api/works')
      .then(response => {
        this.lavori = response.data;
      })
      // .catch(error => {
      //    console.log(error)
      // })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

  /*test tabella*/
#customers {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
