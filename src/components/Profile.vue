<template>
    <div id="back">
        <link href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap" rel="stylesheet">        <NavbarProfile></NavbarProfile>
        <v-row>
            <v-col cols="3" style="padding: 0">
                <div id="profile" style="position: fixed; margin: 0 5% 0 5%">
                    <br>
                    <h3>Марія Крісті</h3>
                    <v-img style="margin: 3%" src="@/assets/images/artist.jpg"></v-img>
                    <div style="text-align: center">
                    <menu-icon fillColor="#ff9800" size="48" />
                    <menu-icon fillColor="#ff9800" size="48"  />
                    <menu-icon fillColor="#ff9800" size="48"  />
                    <menu-icon fillColor="#ff9800" size="48" />
                    <menu-icon size="48"  />
                    </div>
                    <br>
                    <h4>Спеціалізація:</h4>
                    <p>- Малюнки та Ілюстрації</p>
                    <p>- Поліграфічний дизайн</p>
                    <p>- Векторна графіка</p>
                    <p>- Концептуальні фото</p>
                </div>
            </v-col>
            <v-col cols="8" style="padding: 0 0 0 7%">
                <v-card>
                    <v-container fluid>
                        <br>
                        <h2> Останні роботи </h2>
                        <v-row>
                            <v-col cols="5" style="margin: 5%; text-align: center; position: relative">
                                <v-img src="@/assets/images/fortepiano.jpg"></v-img>
                                <i>"Му...", 2019</i>
                            </v-col>
                            <v-col cols="5" style="margin: 1%; text-align: center">
                                <v-img src="@/assets/images/girl.jpg"></v-img>
                                <p>Художня фотопостановка. Дерево: ясен, товщина: 5 см.</p>

                            </v-col>
                            <v-col cols="4" style="margin: 2%; text-align: center">
                                <v-img src="@/assets/images/golovaZHouseNaGolovi.jpg"></v-img>
                                <i>«Journey through the body», 2019</i>
                            </v-col>
                            <v-col cols="3" style="margin: 2%; text-align: center">
                                <v-img src="@/assets/images/metal.jpg"></v-img>
                                <p>Абстракція. 2019</p>

                            </v-col>
                            <v-col cols="3" style="margin: 2%; text-align: center">
                                <v-img src="@/assets/images/berlozka.jpg"></v-img>
                                <p>Marocco. Художня фотопостановка. (Серпень, 2017)</p>

                            </v-col>
                            <v-col cols="8" style="margin: 4%; text-align: center">
                                <v-img src="@/assets/images/lviv.jpg"></v-img>
                                <i>Полотно, акрил</i>

                            </v-col>
                            <v-col cols="5" style="margin: 4%; text-align: center">
                                <v-img src="@/assets/images/skull.jpg"></v-img>
                                <i>Полотно, акрил, папір, колаж</i>
                            </v-col>
                            <v-col cols="5" style="margin: 4%; text-align: center">
                                <v-img src="@/assets/images/choven.jpg"></v-img>
                                <i>Диптих, змішана техніка, акрил, олія </i>
                            </v-col>
                            <v-col cols="11" style="margin: 4%; text-align: center">
                                <v-img src="@/assets/images/ARTELECT_Nonexistent landscape_2_40х50_2019-1200x1200.jpg"></v-img>
                                <p>Архівний папір. Пігментний друк. (Липень 2019)</p>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
        <v-footer clipped class="cst-footer darken-3" dark>
            <v-spacer></v-spacer>
            <span>Made with ❤ in 2019</span>
        </v-footer>
    </div>
</template>
<script>
    import MenuIcon from 'vue-material-design-icons/Star.vue';
    import NavbarProfile from "./NavbarProfile";


    export default {
        name: "Profile",
        components: {
            MenuIcon,
            NavbarProfile
        }
    }
</script>

<style scoped>
    #profile {
        background-color: white;
        height: 100%;
        width: 20%;
    }

    #back {
        background-image: url("../assets/main-background.png");
        background-size: cover;
        background-attachment: fixed;
    }

    .cst-footer {
        background-image: url("../assets/YQ3DWT.jpg");
        background-size: cover;
        background-attachment: fixed;
        height: 50px;
    }
    i {
        text-align: center;
    }

    h3, h2 {
        text-align: center
    }
    h4, p{
        margin-left: 10%;
        margin-bottom: 0;
    }
</style>