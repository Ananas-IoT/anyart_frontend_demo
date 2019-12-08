<template>
    <div>
        <nav>
            <v-navigation-drawer v-model="drawer" app clipped class="grey darken-3" dark >
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
            <v-app-bar app clipped-left v-toolbar-side-icon class="grey darken-3" dark>
                <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="orange--text"></v-app-bar-nav-icon>
                <v-toolbar-title class="text-uppercase orange--text">
                    <span>Any</span>
                    <span class="font-weight-black">Art</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn depressed class="grey darken-3 orange--text ma-3">
                    <span>Log In</span>
                    <v-icon right>fingerprint</v-icon>
                </v-btn>
                <v-btn depressed class="grey darken-3 orange--text ma-3">
                    <span>Sing In</span>
                    <v-icon right>account_circle</v-icon>
                </v-btn>
            </v-app-bar>
        </nav>
        <v-footer app class="grey darken-3" dark >
            <span>&copy; 2019</span>
        </v-footer>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        components: {

        },
        data() {
            return {
                drawer: false,

            }
        }

    }
</script>

<style scoped>

</style>