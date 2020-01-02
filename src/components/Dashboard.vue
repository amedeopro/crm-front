
<template>
  <div>
    <h1>DASHBOARD</h1>
    <el-row style="display: flex; justify-content: center" :gutter="20">
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/Multitasking1.jpg" alt="" class="image" />
          <div style="padding: 14px;">
            <span>Lavori da terminare</span>
            <div class="bottom clearfix">
              <h3>{{ NonSvolti }}</h3>
              <!--                        <el-button type="text" class="button">Operating</el-button>-->
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="../assets/Meditation-Man-Working.jpg"
            alt=""
            class="image"
          />
          <div style="padding: 14px;">
            <span>Lavori terminati</span>
            <div class="bottom clearfix">
              <h3>{{ Svolti }}</h3>
              <!--                        <el-button type="text" class="button">Operating</el-button>-->
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/users.jpg" alt="" class="image" />
          <div style="padding: 14px;">
            <span>Numero di Clienti</span>
            <div class="bottom clearfix">
              <h3>{{ numeroClienti }}</h3>
              <!--                        <el-button type="text" class="button">Operating</el-button>-->
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="display: flex; justify-content: center" :gutter="20">
      <el-col :span="6" style="margin-top: 50px">
        <h3 style="margin-bottom: 5px">Lavori svolti</h3>
        <column-chart
          :data="[['Sun', 32], ['Mon', 46], ['Tue', 28]]"
        ></column-chart>
      </el-col>
      <el-col :span="6" style="margin-top: 50px">
        <h3 style="margin-bottom: 5px">Lavori svolti</h3>
        <bar-chart :data="[['X-Small', 5], ['Small', 27]]"></bar-chart>
      </el-col>
      <el-col :span="6" style="margin-top: 50px">
        <h3 style="margin-bottom: 5px">Lavori svolti</h3>
        <area-chart
          :data="{
            '2017-01-01 00:00:00 -0800': 2,
            '2017-01-01 00:01:00 -0800': 5
          }"
        ></area-chart>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "Dashboard",
  data() {
    return {
      NonSvolti: null,
      Svolti: null,
      numeroClienti: null
    };
  },
  created() {
    this.contaLavori();
    this.contaClienti();
  },
  methods: {
    contaLavori() {
      axios.get("works/contalavori").then(response => {
        this.NonSvolti = response.data.lavorinonterminati;
        this.Svolti = response.data.lavoriterminati;
      });
      // .catch(error => {
      //    console.log(error)
      // })
    },
    contaClienti() {
      axios.get("customers/contaclienti").then(response => {
        this.numeroClienti = response.data;
      });
      // .catch(error => {
      //    console.log(error)
      // })
    }
  }
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
  min-height: 245.35px;
  min-width: 350.5px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
