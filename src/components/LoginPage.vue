<template>
    <div>
        <v-card width="30%" height="40%" class="mx-auto mt-5" dark style="position: absolute; left: 35%; top: 25%">
            <v-card-title>
                <h1 class="display-1 mx-auto">LOG IN</h1>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field
                            label="Username"
                            prepend-icon="mdi-account-circle"
                    />
                    <v-text-field
                            label="Password"
                            v-bind:type="showPassword ? 'text' : 'password'"
                            prepend-icon="mdi-lock"
                            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            v-on:click:append="showPassword = !showPassword"
                    />
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn href="http://localhost:8080/" color="orange" width="20%">LOG IN</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
            <v-divider></v-divider>
            <v-card-text class="registration-redirect">
                <h5 style="text-align: center">Don't have an account? <a href="http://localhost:8080/registration" class="registration-link mx-auto">Register one here!</a></h5>
            </v-card-text>

        </v-card>

    </div>
</template>

<script>


    export default {
        name: 'App',

        components: {},

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
