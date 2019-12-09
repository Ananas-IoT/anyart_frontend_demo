<template>
    <div>
        <nav>
            <v-navigation-drawer v-model="drawer" app clipped class="menu-background darken-4">
                <v-list dense style="padding: 0">
                    <v-container class="profile-background" style="padding: 0">
                        <br/>
                        <v-list-item style="padding-bottom: 10px ">
                            <v-avatar style="margin: 0 auto" size="190" color="#212121">
                                <v-avatar style="margin: 0 auto" size="186">
                                    <v-img src="@/assets/photo_2019-11-10_02-21-01.jpg"/>
                                </v-avatar>
                            </v-avatar>
                        </v-list-item>
                        <v-list-item>
                            <h1 class="white--text" style="margin: 0 auto">Victoria Foliush</h1>
                        </v-list-item>
                    </v-container>
                    <v-divider></v-divider>
                    <v-list-item style="margin: 10px 0; padding-left: 5px">
                        <v-btn text large class="white--text menu-button">
                            <v-icon left>home</v-icon>
                            <v-spacer></v-spacer>
                            Мій профіль
                            <v-spacer></v-spacer>
                        </v-btn>
                    </v-list-item>
                    <v-list-item style="margin: 10px 0; padding-left: 5px">
                        <v-btn text large class="white--text menu-button" style="font-size: 12px"
                               href="http://localhost:8080/available_orders">
                            <v-icon left size="23">view_list</v-icon>
                            <v-spacer></v-spacer>
                            Доступні замовлення
                            <v-spacer></v-spacer>
                        </v-btn>
                    </v-list-item>
                    <v-list-item style="margin: 10px 0; padding-left: 5px">
                        <v-btn text large class="white--text menu-button" style="font-size: 12px">
                            <v-icon left size="20">done_all</v-icon>
                            <v-spacer></v-spacer>
                            Завершені замовлення
                            <v-spacer></v-spacer>
                        </v-btn>
                    </v-list-item>
                    <v-list-item class="menu-buttom" style="margin: 10px 0; padding-left: 5px">
                        <v-btn text large class="white--text menu-button">
                            <v-icon left>settings</v-icon>
                            <v-spacer></v-spacer>
                            Налаштування
                            <v-spacer></v-spacer>
                        </v-btn>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-app-bar app clipped-left class="navbar-text grey darken-4" style="padding: 0; margin: 0">
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"
                                    style="color: rgba(255,162,100,1)"></v-app-bar-nav-icon>
                <v-toolbar-title class="text-uppercase">
                    <a href="http://localhost:8080/" text style="color: rgba(255,162,100,1)"><span>Any</span>
                        <span class="font-weight-black">Art</span>
                    </a>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn x-large href="http://localhost:8080/login" depressed class="grey darken-3 white--text ma-3">
                    <span>УВІЙТИ</span>
                    <v-icon right>fingerprint</v-icon>
                </v-btn>
                <v-btn x-large href="http://localhost:8080/registration" depressed
                       class="grey darken-3 white--text ma-3">
                    <span>зареєструватися</span>
                    <v-icon right>account_circle</v-icon>
                </v-btn>
            </v-app-bar>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        components: {},
        data() {
            return {
                drawer: false,

            }
        }
    }
</script>

<style scoped>
    .menu-button {
        margin: 5px;
        padding: 4px; width: 100%; font-size: 13px;
        background: rgb(33,33,33);
    }
    .menu-background {
        background-image: url("../assets/YQ3DWT.jpg");
        background-size: cover;
        background-attachment: fixed;
    }

    /*.gradient-background {*/
    /*    border: grey solid 1px;*/
    /*    background: rgb(255, 162, 100);*/
    /*    background: linear-gradient(90deg, rgba(255, 162, 100, 1) 0%, rgba(255, 225, 127, 1) 100%);*/
    /*}*/
</style>