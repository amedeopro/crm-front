<template>
  <div>
    <el-row :gutter="10">
      <h1>Lista Clienti</h1>
    </el-row>

    <el-row :gutter="10">
      <el-button type="primary" @click="modalInserisciCliente = true"
        >Aggiungi Cliente</el-button
      >
    </el-row>

    <el-dialog :visible.sync="modalInserisciCliente" append-to-body width="50%">
      <el-form label-width="160px" method="POST">
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

    <el-dialog :visible.sync="modalModificaCliente" append-to-body width="50%">
      <el-form label-width="160px" method="PATCH">
        <el-form-item label="Azienda">
          <el-input v-model="modCustomer.company"></el-input>
        </el-form-item>
        <el-form-item label="Referente">
          <el-input v-model="modCustomer.ref_name"></el-input>
        </el-form-item>
        <el-form-item label="Numero di Telefono">
          <el-input v-model="modCustomer.phone"></el-input>
        </el-form-item>
        <el-form-item label="Indirizzo E-mail">
          <el-input v-model="modCustomer.mail"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="modalModificaCliente = false">Annulla</el-button>
        <el-button type="primary" @click="updateCustomers(modCustomer.id)"
          >Salva</el-button
        >
      </span>
    </el-dialog>

    <el-row :gutter="10">
      <el-table :data="clienti" style="width: 100%">
        <el-table-column prop="company" label="Azienda" sortable>
        </el-table-column>
        <el-table-column prop="ref_name" label="Referente" sortable>
        </el-table-column>
        <el-table-column prop="phone" label="numero di telefono" sortable>
        </el-table-column>
        <el-table-column prop="mail" label="indirizzo e-mail" sortable>
        </el-table-column>
        <el-table-column align="right">
          <template slot-scope="scope">
            <el-button size="mini" @click="modifyCustomer(scope.row.id)"
              >Edit</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="openConfirmDelete(scope.row.id)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "ListaClienti",
  data() {
    return {
      clienti: [],
      modalInserisciCliente: false,
      modalModificaCliente: false,
      company: null,
      ref_name: null,
      phone: null,
      mail: null,
      modCustomer: []
    };
  },
  created() {
    this.customers();
  },
  methods: {
    customers() {
      axios
        .get("customers")
        .then(response => {
          this.clienti = response.data;
        })
        .catch(error => {
          return error;
        });
    },
    inserisciCliente() {
      axios
        .post(
          "customers" +
            "?ref_name=" +
            this.ref_name +
            "&company=" +
            this.company +
            "&phone=" +
            this.phone +
            "&mail=" +
            this.mail,
          {}
        )
        .then(response => {
          this.modalInserisciCliente = false;
          this.works();
          return response;
        })
        .catch(error => {
          this.modalInserisciCliente = false;
          this.works();
          return error;
        });
    },
    modifyCustomer(id) {
      axios
        .get("customers/" + id)
        .then(response => {
          this.modCustomer = response.data;
          this.modalModificaCliente = true;
          return response;
        })
        .catch(error => {
          return error;
        });
    },
    updateCustomers(id) {
      axios
        .patch(
          "customers/" +
            id +
            "?company=" +
            this.modCustomer.company +
            "&ref_name=" +
            this.modCustomer.ref_name +
            "&phone=" +
            this.modCustomer.phone +
            "&mail=" +
            this.modCustomer.mail,
          {}
        )
        .then(response => {
          this.customers();
          this.modalModificaCliente = false;
          return response;
        })
        .catch(error => {
          this.modalModificaLavoro = false;
          return error;
        });
    },
    deleteCustomer(id) {
      axios
        .delete("customers/" + id)
        .then(response => {
          this.customers();
          return response;
        })
        .catch(error => {
          return error;
        });
    },
    openConfirmDelete(id) {
      this.$confirm("Sicuro di voler eliminare il cliente ?", "Attenzione", {
        confirmButtonText: "OK",
        cancelButtonText: "Annulla",
        type: "warning"
      })
        .then(() => {
          this.deleteCustomer(id);
        })
        .catch(() => {});
    }
  }
};
</script>
<style scoped>
.el-row {
  margin-bottom: 20px;
}
</style>
