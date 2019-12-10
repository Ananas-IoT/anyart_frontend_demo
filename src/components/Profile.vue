<template>
    <div id="back">
        <v-row>
            <v-col cols="3" style="padding: 0">
                <div id="profile" style="position: fixed; margin: 0 5% 0 5%">
                    <br>
                    <h3>Марія De Black</h3>
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
                    <br>
                    <p>- Малюнки та Ілюстрації</p>
                    <p>- Поліграфічний дизайн</p>
                    <p>- Векторна графіка</p>
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
                                <i>July, 2019</i>
                            </v-col>
                            <v-col cols="5" style="margin: 1%; text-align: center">
                                <v-img src="@/assets/images/girl.jpg"></v-img>
                                <i>July, 2019</i>

                            </v-col>
                            <v-col cols="4" style="margin: 2%; text-align: center">
                                <v-img src="@/assets/images/golovaZHouseNaGolovi.jpg"></v-img>
                                <i>July, 2019</i>
                            </v-col>
                            <v-col cols="3" style="margin: 2%; text-align: center">
                                <v-img src="@/assets/images/metal.jpg"></v-img>
                                <i>July, 2018</i>

                            </v-col>
                            <v-col cols="3" style="margin: 2%; text-align: center">
                                <v-img src="@/assets/images/berlozka.jpg"></v-img>
                                <i>Marocco July, 2018</i>

                            </v-col>
                            <v-col cols="8" style="margin: 4%; text-align: center">
                                <v-img src="@/assets/images/lviv.jpg"></v-img>
                                <i>July, 2018</i>

                            </v-col>
                            <v-col cols="4" style="margin: 4%; text-align: center">
                                <v-img src="https://avatars.mds.yandex.net/get-pdb/1531580/4ab4eefd-cbfd-486c-bad8-e088ff1805ab/s1200"></v-img>
                                <i>July, 2018</i>

                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>

    </div>
</template>
<script>
    import MenuIcon from 'vue-material-design-icons/Star.vue';

    export default {
        name: "Profile",
        components: {
            MenuIcon,
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
        background-image: url("../assets/canva-photo-editor (1).png");
        background-size: cover;
        background-attachment: fixed;
        /*background-color: rgb(255, 255, 251);*/
        /*background-color: black;*/
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