<template>
    <div>
        <el-row :gutter="10">
            <h1>Lista Clienti</h1>
        </el-row>

        <el-row :gutter="10">
            <el-button type="primary" @click="modalInserisciCliente = true">Aggiungi Cliente</el-button>
        </el-row>

        <el-dialog :visible.sync="modalInserisciCliente" append-to-body width="50%">
            <el-form  label-width="160px" method="POST">
                <el-form-item label="Azienda">
                    <el-input v-model="company"></el-input>
                </el-form-item>
                <el-form-item label="Referente">
                    <el-input v-model="ref_name"></el-input>
                </el-form-item>
                <el-form-item label="Numero di Telefono">
                    <el-input v-model="phone"></el-input>
                </el-form-item>
                <el-form-item label="Indirizzo E-mail">
                    <el-input v-model="mail"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="modalInserisciCliente = false">Annulla</el-button>
                <el-button type="primary" @click="inserisciCliente()">Salva</el-button>
            </span>
        </el-dialog>

        <el-row :gutter="10">
            <el-table
                    :data="clienti"
                    style="width: 100%">
                <el-table-column
                        prop="company"
                        label="Azienda"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="ref_name"
                        label="Referente"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="phone"
                        label="numero di telefono"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="mail"
                        label="indirizzo e-mail"
                        sortable
                >
                </el-table-column>
            </el-table>
        </el-row>
    </div>
              
</template>
<script>

    import axios from "axios";

    export default{
        name: 'ListaClienti',
        data(){
            return{
                clienti: [],
                modalInserisciCliente: false,
                company: null,
                ref_name: null,
                phone: null,
                mail: null,
            }
        },
        created(){
          this.customers()
        },
        methods: {
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
            inserisciCliente() {
                axios
                    .post('http://80.211.134.4/api/customers' + '?ref_name=' + this.ref_name + '&company=' + this.company + '&phone=' + this.phone + '&mail=' + this.mail, {})
                    .then(response => {
                        this.modalInserisciCliente = false
                        this.works()
                        return response

                    })
                    .catch(error => {
                        this.modalInserisciCliente = false
                        this.works()
                        return error
                    })
            }
        }
    }
</script>
<style scoped>
    .el-row {
        margin-bottom: 20px;
    }
</style>
