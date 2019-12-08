<template>
    <div>
        <nav>
            <v-navigation-drawer v-model="drawer" app clipped class="grey darken-3" dark>
                <v-list dense>
                    <v-list-item>
                        <v-list-item-action>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title></v-list-item-title>
                        </v-list-item-content>
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
                <v-btn href="http://localhost:8080/login" depressed class="grey darken-3 orange--text ma-3">
                    <span>Log In</span>
                    <v-icon right>fingerprint</v-icon>
                </v-btn>
                <v-btn href="http://localhost:8080/registration" depressed class="grey darken-3 orange--text ma-3">
                    <span>Sing In</span>
                    <v-icon right>account_circle</v-icon>
                </v-btn>
            </v-app-bar>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        data() {
            return {
                drawer: false,

            }
        }
    }
</script>

<style scoped>

</style>