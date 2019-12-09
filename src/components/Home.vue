<template>

        <v-container fluid class="cst-background" style="padding: 0; margin: 0">

            <v-row class="images-box" style="padding: 0; margin: 0">
                <v-col v-touch="top" cols="4" style="padding: 0">
                    <v-img alt="image"
                           src="@/assets/gonchar.jpg"></v-img>
                </v-col>
                <v-col v-touch="top" cols="4" style="padding: 0">
                    <v-img alt="image" src="@/assets/portnoy.jpg"></v-img>
                </v-col>
                <v-col v-touch="top" cols="4" style="padding: 0">
                    <v-img alt="image"
                           src="@/assets/vitrag.jpg"></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-card class="main-title mx-auto white--text" flat>
                    <v-card-title class="mx-auto">
                        <h1 class="display-1 mx-auto pa-0">ТУТ МАЄ БУТИ ЯКАСЬ ПРИКОЛЬНА ЦИТАТКА</h1>
                    </v-card-title>
                </v-card>
            </v-row>
            <v-container>
                <v-card span class="block-about-project grey darken-2 white--text" style="box-shadow: none">
                    <v-card-title class="center-title">
                        <h2 class="center-title mx-auto">ЦЕ ПЛАТФОРМА БЛА БЛА БЛА БЛА</h2>
                    </v-card-title>
                    <v-card-title class="center-title">
                    </v-card-title>
                </v-card>
            <h1 class="center-title mx-auto">HOW IT WORKS?</h1>
            <h1 class="center-title mx-auto">ABOUT US</h1>
            <h3 class="center-title mx-auto">We are happy to see you on our site! Our purpose is to make Lviv a better
                place for all of us</h3>
                <v-row>

                    <v-col cols="4" style="text-align: center">
                        <v-avatar style="margin: 0 auto" size="300">
                            <img src="@/assets/samocvetik.jpg" alt="John">
                        </v-avatar>
                    </v-col>

                    <v-col cols="4" style="text-align: center">
                        <v-avatar size="300">
                            <img src="@/assets/samocvetik.jpg" alt="John">
                        </v-avatar>
                    </v-col>

                    <v-col cols="4" style="text-align: center">
                        <v-avatar size="300">
                            <img src="@/assets/samocvetik.jpg" alt="John">
                        </v-avatar>
                    </v-col>
                </v-row>
                  <v-row>
                <v-col cols="6" style="text-align: center">
                    <v-avatar size="300">
                        <img src="@/assets/samocvetik.jpg" alt="John">
                    </v-avatar>

                </v-col>
                <v-col cols="6" style="text-align: center">
                    <v-avatar size="300">
                        <img src="@/assets/samocvetik.jpg" alt="John">
                    </v-avatar>
                </v-col>
            </v-row>
            </v-container>
   <v-footer clipped class="grey darken-3" dark >
                <v-spacer></v-spacer>
                <span>Made with ❤ in 2019</span>
            </v-footer>
        </v-container>
</template>


<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    .images-box {
        position: relative;
        z-index: 1;
    }

    .main-title {
        font-size: 30px;
        position: absolute;
        z-index: 3;
        background-color: rgba(239,	235, 233, 0.5);
        top: 500px;
        right: 50px;
        left: 50px;
        text-align: center;
    }

    .block-about-project {
        position: relative;
    }

    .center-title {
        text-align: center;
    }

    .cst-background {
        background-image: url("../assets/canva-photo-editor (1).png");
        background-size: cover;
        background-attachment: fixed;
    }

</style>