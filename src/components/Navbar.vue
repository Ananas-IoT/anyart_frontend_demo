<template>
    <div>
        <nav>
            <v-navigation-drawer v-model="drawer" app clipped class="grey darken-3" dark>
                <v-list dense>
                    <v-list-item-action>
                    </v-list-item-action>
                    <v-list-item>
                        <h1 style="margin: 0 auto">Catherin Smith</h1>
                    </v-list-item>
                    <v-list-item-action>
                    </v-list-item-action>
                    <v-list-item>
                        <v-avatar style="margin: 0 auto" size="186">
                            <img src="@/assets/artist_portrait2.jpg">
                        </v-avatar>
                    </v-list-item>
                    <v-list-item-action>
                    </v-list-item-action>
                    <v-list-item>
                        <v-btn text large style="padding: 0">
                            <v-icon>home</v-icon>
                            <v-list-item-action>
                            </v-list-item-action>
                            My Profile
                        </v-btn>
                    </v-list-item>
                    <v-list-item>
                        <v-btn text large style="padding: 0">
                            <v-icon size="20">folder</v-icon>
                            <v-list-item-action>
                            </v-list-item-action>
                            Available orders
                        </v-btn>
                    </v-list-item>
                    <v-list-item>
                        <v-btn text large style="padding: 0">
                            <v-icon size="20">folder</v-icon>
                            <v-list-item-action>
                            </v-list-item-action>
                            Finished orders
                        </v-btn>
                    </v-list-item>
                    <v-list-item-action>
                    </v-list-item-action>
                    <v-list-item>
                        <v-btn text large style="padding: 0">
                            <v-icon>settings</v-icon>
                            <v-list-item-action>
                            </v-list-item-action>
                            Settings
                        </v-btn>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-app-bar app clipped-left class="grey darken-3" dark style="padding: 0; margin: 0">
                <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="orange--text"></v-app-bar-nav-icon>
                <v-toolbar-title class="text-uppercase orange--text">
                    <a href="http://localhost:8080/" text class="orange--text"><span>Any</span>
                        <span class="font-weight-black">Art</span>
                    </a>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn x-large href="http://localhost:8080/login" depressed class="grey darken-3 orange--text ma-3">
                    <span>Log In</span>
                    <v-icon right>fingerprint</v-icon>
                </v-btn>
                <v-btn x-large href="http://localhost:8080/registration" depressed
                       class="grey darken-3 orange--text ma-3">
                    <span>Sing In</span>
                    <v-icon right>account_circle</v-icon>
                </v-btn>
            </v-app-bar>
            <v-footer app clipped class="grey darken-3" dark >
                <v-spacer></v-spacer>
                <span>&copy; 2019</span>
            </v-footer>
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
    .footer{

    }

</style>