<template>
  <el-aside width="230px">
    <div class="logo-container">
      <router-link to="/dashboard">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="206"
          height="65"
          viewBox="0 0 206 65"
        >
          <image
            id="Livello_1"
            data-name="Livello 1"
            x="10"
            y="4"
            width="159"
            height="57"
            xlink:href="data:img/png;base64,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"
          /></svg
      ></router-link>
    </div>
    <div v-if="authenticated">
      <p style="width: 100%; text-align: center; margin:5% 0 5% 0;">
        <strong>Benvenuto</strong> {{ user.name }}
      </p>

      <el-menu
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <i class="el-icon-folder-opened"></i>
          <router-link to="/lavori"><span>Lavori</span></router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-user"></i>
          <router-link to="/clienti"><span>Clienti</span></router-link>
        </el-menu-item>
        <el-menu-item index="3" @click="signOut()">
          <i class="el-icon-right"></i>
          <span>LogOut</span>
        </el-menu-item>
      </el-menu>
    </div>
  </el-aside>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AsideMenu",
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user"
    })
  },
  methods: {
    ...mapActions({
      signOutAction: "auth/signOut"
    }),
    signOut() {
      this.signOutAction().then(() => {
        this.$router.replace({
          name: "login"
        });
      });
    }
  }
};
</script>

<style scoped>
.el-aside {
  background: #545c64;
  color: white;
  min-height: 100vh;
}

.el-menu-item * {
  vertical-align: middle;
  color: white;
  text-decoration: none;
}
</style>
