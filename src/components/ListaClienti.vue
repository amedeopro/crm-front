<template>
    <div>
        <h1>Lista Clienti</h1>
        <el-button type="primary" @click="modalInserisciUtente = true">Aggiungi Cliente</el-button>   
        <el-dialog :visible.sync="modalInserisciUtente" append-to-body width="80%">
            <el-form  label-width="100px" >
                <el-form-item label="Name">
                    <el-input v-model="name"></el-input>
                </el-form-item>
                <el-form-item label="Activity zone">
                    <el-input v-model="region"></el-input>
                </el-form-item>
                <el-form-item label="Activity form">
                    <el-input v-model="type"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="modalInserisciUtente = false">Annulla</el-button>
                <el-button type="primary" @click="modalInserisciUtente = false">Salva</el-button>
            </span>
        </el-dialog>
    </div>
              
</template>
<script>
    export default{
        name: 'ListaClienti',
        data(){
            return{
            name: null,
            region: null,
            type: null,
            modalInserisciUtente: false
        }
            }
    }
</script>
<style scoped>

</style>
