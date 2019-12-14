<template>
<div>
    <el-row :gutter="10">
        <h1>Lista Lavori</h1>
    </el-row>
    <el-row :gutter="10">
        <el-button type="primary" @click="modalInserisciLavoro = true">Aggiungi Lavoro</el-button>
    </el-row>
    <el-dialog :visible.sync="modalInserisciLavoro" append-to-body width="50%">
        <el-form  label-width="160px" method="POST">
            <el-form-item label="Cliente">
                <el-select v-model="clienteScelto" placeholder="Cliente per cui svolgere il lavoro" >
                    <el-option v-for="cliente in clienti" :key="cliente.id"
                               :label="cliente.company"
                               :value="cliente.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Tipo di lavoro">
                <el-input v-model="work_type"></el-input>
            </el-form-item>
            <el-form-item label="Consegnare entro">
                <el-date-picker v-model="dead_line" type="date" format="dd-MM-yyyy" value-format="yyyy-MM-dd" placeholder="Seleziona una data"></el-date-picker>
            </el-form-item>
            <el-form-item label="Il lavoro è stato terminato">
                <el-select v-model="finished" placeholder="Si o No?">
                    <el-option
                            label="Si"
                            value="1">
                    </el-option>
                    <el-option
                            label="No"
                            value="0">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="A chi assegni il lavoro?">
                <el-select v-model="utenteScelto" placeholder="Utente a cui assegnare il lavoro" >
                    <el-option v-for="user in users" :key="user.id"
                            :label="user.name"
                            :value="user.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Informazioni">
                <el-input v-model="information" type="textarea" :rows="2"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
                <el-button @click="modalInserisciLavoro = false">Annulla</el-button>
                <el-button type="primary" @click="inserisciLavoro()">Salva</el-button>
            </span>
    </el-dialog>
    <el-row :gutter="10">
        <el-table
                :data="lavori"
                style="width: 100%">
            <el-table-column
                    prop="name"
                    label="Lavoro assegnato a"
                    sortable
            >
            </el-table-column>
            <el-table-column
                    prop="company"
                    label="Cliente"
                    sortable
            >
            </el-table-column>
            <el-table-column
                    prop="work_type"
                    label="Tipo di Lavoro"
                    sortable
            >
            </el-table-column>
            <el-table-column
                    prop="dead_line"
                    label="Terminare entro il"
                    sortable
            >
            </el-table-column>
            <el-table-column
                    prop="finished"
                    label="E' stato terminato ?"
                    sortable
            >
            </el-table-column>
            <el-table-column
                    prop="information"
                    label="Informazioni"
            >
            </el-table-column>
        </el-table>
    </el-row>
</div>
</template>

<script>

  import axios from 'axios';

export default {
  name: 'Lavori',
  data(){
    return {
        lavori: [],
        work_type: null,
        dead_line: null,
        finished: null,
        information: null,
        modalInserisciLavoro: false,
        clienteScelto: null,
        clienti: [],
        users: [],
        utenteScelto: null
    }
  },
  created(){
    this.works()
    this.caricaUsers()
    this.customers()
  },
  methods:{
    works(){
      axios
      .get('http://80.211.134.4/api/works')
      .then(response => {
        this.lavori = response.data;
      })
      .catch(error => {
         return error
      })
    },
      inserisciLavoro() {
          axios
              .post('http://80.211.134.4/api/works' + '?work_type=' + this.work_type + '&dead_line=' + this.dead_line + '&finished=' + this.finished + '&information=' + this.information + '&user_id=' + this.utenteScelto + '&customer_id=' + this.clienteScelto, {})
              .then(response => {
                  this.modalInserisciLavoro = false
                  return response

              })
              .catch(error => {
                  this.modalInserisciLavoro = false
                  return error
              })
      },
      caricaUsers(){
          axios
              .get('http://80.211.134.4/api/users')
              .then(response => {
                  this.users = response.data;
              })
              .catch(error => {
                  return error
              })
      },
      customers(){
          axios
              .get('http://80.211.134.4/api/customers')
              .then(response => {
                  this.clienti = response.data;
              })
              .catch(error => {
                  return error
              })
      },
  }
}
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
    }
</style>
