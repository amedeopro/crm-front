<template>

  <el-table
          :data="lavori"
          style="width: 100%">
    <el-table-column
            prop="work_type"
            label="Tipo di Lavoro"
            >
    </el-table-column>
    <el-table-column
            prop="dead_line"
            label="Terminare entro il"
            >
    </el-table-column>
    <el-table-column
            prop="finished"
            label="E' stato terminato ?"
            >
    </el-table-column>
    <el-table-column
            prop="information"
            label="Informazioni"
            >
    </el-table-column>
  </el-table>
</template>

<script>

  import axios from 'axios';

export default {
  name: 'Lavori',
  data(){
    return {
      lavori: []
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

<style scoped>

</style>
