<template>
    <div style="padding: 0" class="grey darken-2 white--text">
        <v-container fluid style="padding: 0; margin: 0">
            <v-row class="images-box" style="padding: 0; margin: 0">
                <v-col v-touch="top" cols="4" style="padding: 0">
                    <v-img alt="image"
                           src="@/assets/c258b9e36ce904484ec145251f5ed792.jpg"></v-img>
                </v-col>
                <v-col v-touch="top" cols="4" style="padding: 0">
                    <v-img alt="image" src="@/assets/10b45425c209218d122b916c505fe1f9.jpg"></v-img>
                </v-col>
                <v-col v-touch="top" cols="4" style="padding: 0">
                    <v-img alt="image"
                           src="@/assets/y2jycss8btwpwuskhilm.jpg"></v-img>
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

            </v-container>
            <h1 class="center-title mx-auto">HOW IT WORKS?</h1>

            <v-row style="margin: 5% auto 10% auto">
                <v-col offset="2" style="text-align: center">
                </v-col>
                <v-col cols="6" style="text-align: center">
                    <img src="@/assets/tarasphoto.jpg" alt="image" style="width: 1000px">
                </v-col>
                <v-col offset="2" style="text-align: center">
                </v-col>
            </v-row>
            <h1 class="center-title mx-auto">ABOUT US</h1>
            <h3 class="center-title mx-auto">We are happy to see you on our site! Our purpose is to make Lviv a better
                place for all of us</h3>
                <v-row>

                    <v-col cols="4" style="text-align: center">
                        <v-avatar style="margin: 0 auto" size="300">
                            <img src="@/assets/photo_2019-11-15_23-52-00.jpg" alt="John">
                        </v-avatar>
                    </v-col>

                    <v-col cols="4" style="text-align: center">
                        <v-avatar size="300">
                            <img src="@/assets/photo_2019-11-15_23-52-00.jpg" alt="John">
                        </v-avatar>
                    </v-col>

                    <v-col cols="4" style="text-align: center">
                        <v-avatar size="300">
                            <img src="@/assets/photo_2019-11-15_23-52-00.jpg" alt="John">
                        </v-avatar>
                    </v-col>

                </v-row>
        </v-container>
    </div>
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
        background-color: rgba(0.5, 0.5, 0.5, 0.5);
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
</style>