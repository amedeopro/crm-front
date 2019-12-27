<template>
  <div>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="6">
        <el-card class="box-card">
          <h1>LOGIN</h1>
          <el-form>
            <el-form-item label="Username">
              <el-input v-model="username"></el-input>
            </el-form-item>
            <el-form-item label="Password">
              <el-input type="password" v-model="password"></el-input>
            </el-form-item>
            <el-form-item align="right">
              <el-button type="primary" @click="onSubmit">Login</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      username: null,
      password: null
    };
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
