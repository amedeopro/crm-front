<template>
    <div id="app">
        <el-container>
            <aside-menu></aside-menu>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>

    import AsideMenu from "./components/AsideMenu.vue";



    export default {
        name: 'app',
        components: {
            AsideMenu,
        }
    }
</script>

<style>

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        /*margin-top: 60px;*/
    }

    .container {
        max-width: 1200px;
        margin: auto;
    }
    .el-main {
        background: #EEF1F4;
    }

    .logo-container {
        padding: 22px;
        background: #434A50;
    }



    .el-menu {
        border-right: 0 !important;
    }
</style>
