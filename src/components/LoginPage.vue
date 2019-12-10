<template>
    <div id="back" style="height: 100%">
        <Navbar></Navbar>
        <v-card width="30%" height="40%" class="mx-auto mt-5" dark style="position:absolute; top: 20%; left: 35%">
            <v-card-title>
                <h1 class="display-1 mx-auto">Вхід</h1>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field
                            label="Логін"
                            prepend-icon="mdi-account-circle"
                    />
                    <v-text-field
                            label="Пароль"
                            v-bind:type="showPassword ? 'text' : 'password'"
                            prepend-icon="mdi-lock"
                            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            v-on:click:append="showPassword = !showPassword"
                    />
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn href="http://localhost:8080/" color="orange" width="20%">Увійти</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
            <v-divider></v-divider>
            <v-card-text class="registration-redirect">
                <h5 style="text-align: center">Немає аккаунту? <a href="http://localhost:8080/registration" class="registration-link mx-auto">Зареєструйся тут!</a></h5>
            </v-card-text>
        </v-card>
        <v-footer clipped class="grey darken-3" dark style="position: absolute; bottom: 0; width: 100%">
            <v-spacer></v-spacer>
            <span>Made with ❤ in 2019</span>
        </v-footer>
    </div>
</template>

<script>


    import Navbar from "./Navbar";
    export default {
        name: 'App',

        components: {Navbar},

        data: () => ({
            showPassword: false
        }),
        methods: {
        },
        computed: {

        }
    };
</script>

<style scoped>
    #back{
        background-image: url("../assets/canva-photo-editor (1).png");
        background-size: cover;
        background-attachment: fixed;
    }
    .registration-link {
        color: orange;
        text-decoration-line: none;
    }

    @media (max-width: 600px) {
        .registration-redirect {
            font-size: small;
        }
    }
    @media (min-width: 601px) and (max-width: 900px){
        .registration-redirect {
            font-size: 16px;
        }
    }
    @media (min-width: 901px) {
        .registration-redirect {
            font-size: large;
        }
    }

</style>
