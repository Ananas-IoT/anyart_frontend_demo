<template>
    <div>
        <v-card width="50%" class="mx-auto mt-5" dark>
            <v-card-title>
                <h1 class="display-1 mx-auto">SING UP</h1>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field
                            label="First name"
                    />
                    <v-text-field
                            label="Last name"
                    />
                    <v-text-field
                            label="User name"
                    />
                    <v-text-field
                            label="Email"
                    />
                    <v-text-field
                            label="Password"
                            v-bind:type="showPassword ? 'text' : 'password'"
                            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            v-on:click:append="showPassword = !showPassword"
                    />
                    <v-text-field
                            label="Confirm password"
                            v-bind:type="showPassword ? 'text' : 'password'"
                            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            v-on:click:append="showPassword = !showPassword"
                    />
                    <v-radio-group row dark>
                        <v-radio color="orange" label="Orderer" value="orderer"></v-radio>
                        <v-radio color="orange" label="Performer" value="performer"></v-radio>
                    </v-radio-group>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="orange" width="20%">SING UP</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
            <v-divider></v-divider>
            <v-card-text class="registration-redirect">
                <h5 style="text-align: center">Already have an account? <a class="login-link mx-auto" href="#">Log in here!</a></h5>
            </v-card-text>
        </v-card>

    </div>
</template>

<script>

    export default {
        name: 'App',

        components: {
        },

        data: () => ({
            showPassword: false
        }),
        methods: {
        }

    };
</script>

<style scoped>
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
