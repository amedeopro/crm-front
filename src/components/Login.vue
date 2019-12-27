<template>
  <div>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="6">
        <el-card class="box-card">
          <h1>LOGIN</h1>
          <el-form>
            <el-form-item label="E-mail">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="Password">
              <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item align="right">
              <el-button type="primary" @click="login()">Login</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    async login() {
      axios
        .post("http://80.211.134.4/api/auth/signin", this.form)
        .then(response => {
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
.el-row--flex.is-align-middle {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 40vw;
}
</style>
