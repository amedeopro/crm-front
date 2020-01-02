<template>
  <div>
    <el-row :gutter="10">
      <h1>Lista Lavori</h1>
    </el-row>
    <el-row :gutter="10">
      <el-button type="primary" @click="modalInserisciLavoro = true"
        >Aggiungi Lavoro</el-button
      >
    </el-row>

    <el-drawer
      title="Aggiungi lavoro"
      :visible.sync="modalInserisciLavoro"
      direction="rtl"
      custom-class="demo-drawer"
      ref="drawer"
      append-to-body
      size="30%"
    >
      <div style="padding: 0 30px 0 30px">
        <el-form label-width="160px" method="POST">
          <el-form-item label="Cliente">
            <el-select
              v-model="clienteScelto"
              placeholder="Cliente per cui svolgere il lavoro"
            >
              <el-option
                v-for="cliente in clienti"
                :key="cliente.id"
                :label="cliente.company"
                :value="cliente.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Tipo di lavoro">
            <el-input v-model="work_type"></el-input>
          </el-form-item>
          <el-form-item label="Consegnare entro">
            <el-date-picker
              v-model="dead_line"
              type="date"
              format="dd-MM-yyyy"
              value-format="yyyy-MM-dd"
              placeholder="Seleziona una data"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="Il lavoro è stato terminato">
            <el-select v-model="finished" placeholder="Si o No?">
              <el-option label="Si" value="1"> </el-option>
              <el-option label="No" value="0"> </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="A chi assegni il lavoro?">
            <el-select
              v-model="utenteScelto"
              placeholder="Utente a cui assegnare il lavoro"
            >
              <el-option
                v-for="user in users"
                :key="user.id"
                :label="user.name"
                :value="user.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Informazioni">
            <el-input
              v-model="information"
              type="textarea"
              :rows="2"
            ></el-input>
          </el-form-item>
        </el-form>

        <el-button @click="modalInserisciLavoro = false">Annulla</el-button>
        <el-button type="primary" @click="inserisciLavoro()">Salva</el-button>
      </div>
    </el-drawer>

    <el-drawer
      title="Modifica lavoro"
      :visible.sync="modalModificaLavoro"
      direction="rtl"
      custom-class="demo-drawer"
      ref="drawer"
      append-to-body
      size="30%"
      v-for="work in modWork"
      :key="work.id"
    >
      <div style="padding: 0 30px 0 30px">
        <el-form label-width="170px" method="POST">
          <el-row> il cliente è {{ work.company }} </el-row>
          <el-form-item label="Tipo di lavoro">
            <el-input v-model="work.work_type"></el-input>
          </el-form-item>
          <el-form-item label="Consegnare entro">
            <el-date-picker
              v-model="work.dead_line"
              type="date"
              format="dd-MM-yyyy"
              value-format="yyyy-MM-dd"
              placeholder="Seleziona una data"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="Il lavoro è stato terminato">
            <el-select v-model="work.finished" placeholder="Si o No?">
              <el-option label="Sì" value="1"></el-option>
              <el-option label="No" value="0"> </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="A chi assegni il lavoro?">
            <el-select
              v-model="work.name"
              placeholder="Utente a cui assegnare il lavoro"
            >
              <el-option
                v-for="user in users"
                :key="user.id"
                :label="user.name"
                :value="user.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Informazioni">
            <el-input
              v-model="work.information"
              type="textarea"
              :rows="2"
            ></el-input>
          </el-form-item>
        </el-form>

        <el-button @click="modalModificaLavoro = false">Annulla</el-button>
        <el-button type="primary" @click="updateWork(work.id)">Salva</el-button>
      </div>
    </el-drawer>

    <el-row :gutter="10">
      <el-table :data="lavori" style="width: 100%">
        <el-table-column prop="name" label="Lavoro assegnato a" sortable>
        </el-table-column>
        <el-table-column prop="company" label="Cliente" sortable>
        </el-table-column>
        <el-table-column prop="work_type" label="Tipo di Lavoro" sortable>
        </el-table-column>
        <!-- <el-table-column prop="dead_line" label="Terminare entro il" sortable>
        </el-table-column> -->
        <!-- <el-table-column prop="finished" label="E' stato terminato ?" sortable>
        </el-table-column> -->
        <!-- <el-table-column prop="information" label="Informazioni">
        </el-table-column> -->
        <el-table-column align="right">
          <template slot-scope="scope">
            <el-tooltip
              class="item"
              effect="dark"
              content="Vedi dettagli"
              placement="top"
            >
              <el-button
                @click="viewDetails(scope.row.id)"
                circle
                icon="el-icon-search"
              ></el-button>
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="dark"
              content="Modifica"
              placement="top"
            >
              <el-button
                type="primary"
                circle
                icon="el-icon-edit"
                @click="modifyWork(scope.row.id)"
              ></el-button>
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="dark"
              content="Elimina"
              placement="top"
            >
              <el-button
                type="danger"
                circle
                icon="el-icon-delete"
                @click="openConfirmDelete(scope.row.id)"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-dialog
      width="60%"
      title="Dettagli lavoro"
      :visible.sync="modalDetail"
      append-to-body
      v-for="work in modWork"
      :key="work.id"
    >
      <div class="dettagliLavoro">
        <p><strong>Il lavoro deve essere consegnato entro il:</strong></p>
        <p>{{ work.dead_line }}</p>
        <p><strong>Dettagli sul lavoro da svolgere:</strong></p>
        <p>{{ work.information }}</p>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Lavori",
  data() {
    return {
      search: "",
      lavori: [],
      work_type: null,
      dead_line: null,
      finished: null,
      information: null,
      modalInserisciLavoro: false,
      modalModificaLavoro: false,
      clienteScelto: null,
      clienti: [],
      users: [],
      utenteScelto: null,
      modWork: [],
      test: "",
      modalDetail: false
    };
  },
  created() {
    this.works();
    this.caricaUsers();
    this.customers();
  },
  methods: {
    handleEdit() {
      // eslint-disable-next-line no-undef
      Console.log("modifica");
    },
    handleDelete: function() {
      // eslint-disable-next-line no-undef
      Console.log("chiudi");
    },
    works() {
      axios
        .get("works")
        .then(response => {
          this.lavori = response.data;
        })
        .catch(error => {
          return error;
        });
    },
    inserisciLavoro() {
      axios
        .post(
          "works" +
            "?work_type=" +
            this.work_type +
            "&dead_line=" +
            this.dead_line +
            "&finished=" +
            this.finished +
            "&information=" +
            this.information +
            "&user_id=" +
            this.utenteScelto +
            "&customer_id=" +
            this.clienteScelto,
          {}
        )
        .then(response => {
          this.modalInserisciLavoro = false;
          this.works();
          return response;
        })
        .catch(error => {
          this.modalInserisciLavoro = false;
          return error;
        });
    },
    caricaUsers() {
      axios
        .get("users")
        .then(response => {
          this.users = response.data;
        })
        .catch(error => {
          return error;
        });
    },
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
    deleteWork(id) {
      axios
        .delete("works/" + id)
        .then(response => {
          this.works();
          return response;
        })
        .catch(error => {
          return error;
        });
    },
    modifyWork(id) {
      axios
        .get("works/" + id)
        .then(response => {
          this.modWork = response.data;
          this.modalModificaLavoro = true;
          return response;
        })
        .catch(error => {
          return error;
        });
    },
    updateWork(id) {
      axios
        .patch(
          "works/" +
            id +
            "?work_type=" +
            this.modWork[0].work_type +
            "&dead_line=" +
            this.modWork[0].dead_line +
            "&finished=" +
            this.modWork[0].finished +
            "&information=" +
            this.modWork[0].information +
            "&user_id=" +
            this.modWork[0].name,
          {}
        )
        .then(response => {
          this.works();
          this.modalModificaLavoro = false;
          return response;
        })
        .catch(error => {
          this.modalModificaLavoro = false;
          return error;
        });
    },
    openConfirmDelete(id) {
      this.$confirm("Sicuro di voler eliminare il lavoro ?", "Attenzione", {
        confirmButtonText: "OK",
        cancelButtonText: "Annulla",
        type: "warning"
      })
        .then(() => {
          this.deleteWork(id);
        })
        .catch(() => {});
    },
    viewDetails(id) {
      // devo creare un servzio per il solo show dei dati e non riutilizzare quello per la modifica
      axios
        .get("works/" + id)
        .then(response => {
          this.modWork = response.data;
          this.modalDetail = true;
          return response;
        })
        .catch(error => {
          return error;
        });
    }
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.dettagliLavoro p {
  font-size: 25px;
}
</style>
