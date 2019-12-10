<template>
    <div id="back" style="height: 100%">
        <Navbar></Navbar>
        <v-card width="50%" class="mx-auto mt-5" dark style="position:absolute; top: 2%; left: 25%">
            <v-card-title>
                <h1 class="display-1 mx-auto">Реєстрація</h1>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field
                            label="Ім'я"
                    />
                    <v-text-field
                            label="Прізвище"
                    />
                    <v-text-field
                            label="Логін"
                    />
                    <v-text-field
                            label="Адреса електроної пошти"
                    />
                    <v-text-field
                            label="Пароль"
                            v-bind:type="showPassword ? 'text' : 'password'"
                            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            v-on:click:append="showPassword = !showPassword"
                    />
                    <v-text-field
                            label="Повторіть пароль"
                            v-bind:type="showPassword ? 'text' : 'password'"
                            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            v-on:click:append="showPassword = !showPassword"
                    />
                    <v-radio-group row dark>
                        <v-radio color="orange" label="Замовник" value="orderer"></v-radio>
                        <v-radio color="orange" label="Митець" value="performer"></v-radio>
                    </v-radio-group>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="orange" width="20%">Зареєструватись</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
            <v-divider></v-divider>
            <v-card-text class="registration-redirect">
                <h5 style="text-align: center">Вже є аккаунт? <a class="login-link mx-auto" href="http://localhost:8080/login"> Увійди тут!</a></h5>
            </v-card-text>
        </v-card>

    </div>
</template>

<script>

    import Navbar from "./Navbar";
    export default {
        name: 'App',

        components: {
            Navbar
        },

        data: () => ({
            showPassword: false
        }),
        methods: {
        }

    };
</script>

<style scoped>
    #back{
        background-image: url("../assets/canva-photo-editor (1).png");
        background-size: cover;
        background-attachment: fixed;
    }
    .login-link {
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
