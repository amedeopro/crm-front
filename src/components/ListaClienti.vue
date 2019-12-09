<template>
    <div>
        <h1>Lista Clienti</h1>
        <el-button type="primary" @click="modalInserisciUtente = true">Aggiungi Cliente</el-button>   
        <el-dialog :visible.sync="modalInserisciUtente" append-to-body width="80%">
            <el-form  label-width="100px" method="POST">
                <el-form-item label="Tipo di lavoro">
                    <el-input v-model="work_type"></el-input>
                </el-form-item>
                <el-form-item label="Consegnare entro">
                    <el-date-picker v-model="dead_line" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="Seleziona una data"></el-date-picker>
                </el-form-item>
                <el-form-item label="Il lavoro è stato terminato">
                    <el-input v-model="finished"></el-input>
                </el-form-item>
                <el-form-item label="Informazioni">
                    <el-input v-model="information" type="textarea" :rows="2"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="modalInserisciUtente = false">Annulla</el-button>
                <el-button type="primary" @click="inserisciLavoro()">Salva</el-button>
            </span>
        </el-dialog>
    </div>
              
</template>
<script>
    import axios from "axios";

    export default{
        name: 'ListaClienti',
        data(){
            return{
                work_type: null,
                dead_line: null,
                finished: null,
                information: null,
                modalInserisciUtente: false,
            }
        },
        methods: {
            inserisciLavoro() {
                axios
                    .post('http://127.0.0.1:8000/api/works', {
                        params:{
                            work_type: this.work_type,
                            dead_line: this.dead_line,
                            finished: this.finished,
                            information: this.information,
                        }
                    })
                    .then(response => {
                        this.modalInserisciUtente = false
                        return response
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
