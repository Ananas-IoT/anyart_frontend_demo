<template>
    <v-container fluid class="cst-background" style="padding: 0; margin: 0">
        <NavbarProfile></NavbarProfile>
        <v-row class="images-box" style="padding: 0; margin: 0">
            <v-col v-touch="top" cols="4" style="padding: 0">
                <v-img alt="image"
                       src="@/assets/vitrag.jpg"></v-img>
            </v-col>
            <v-col v-touch="top" cols="4" style="padding: 0">
                <v-img alt="image" src="@/assets/gonchar.jpg"></v-img>
            </v-col>
            <v-col v-touch="top" cols="4" style="padding: 0">
                <v-img alt="image"
                       src="@/assets/portnoy.jpg"></v-img>
            </v-col>
        </v-row>
        <v-container class="article-background white--text">
            <v-row>
                <v-card class="main-title mx-auto white--text" flat style="background-color: rgba(0, 0, 0, 0.5)">
                    <v-card-title class="mx-auto">
                        <h1 class="display-1 text-uppercase mx-auto pa-0">Розкрий свою креативність</h1>
                    </v-card-title>
                </v-card>
            </v-row>
            <v-container>
                <v-row>
                    <v-col cols="3.5"></v-col>
                    <v-col cols="5">
                        <h1 class="headline text-uppercase" style="text-align: center">Any<strong>Art</strong></h1>
                        <br/>
                        <v-divider class="just-a-line"></v-divider>
                        <br/>
                        <p style="text-align: center; font-size: 20px">Це арт-фралінс платформа для митців та людей, що
                            шукають виконавців для унікального замовлення.
                            AnyArt допоможе знайти митцям замовлення для власного самовираження та росту,
                            а замовникам - майстрів, що виконають товар із персоналізованим дизайном.
                        </p>
                    </v-col>
                    <v-col cols="3.5"></v-col>
                </v-row>
                <v-row style="padding: 0 20px">
                    <v-col cols="3">
                        <h1 class="text-uppercase" style="text-align: center; font-size: 20px"> Замовляй річ із персональним стилем</h1>
                        <v-row>
                            <v-col cols="4"></v-col>
                            <v-col cols="4"><v-icon class="mx-auto" size="60" style="color: white;">web</v-icon></v-col>
                            <v-col cols="4"></v-col>
                        </v-row>

                        <p class="text-uppercase" style="text-align: center; padding-top: 24px"> Користувач залишає оголошення із своїм унікальним замовленням, вибираючи стиль,
                            розмір та матеріал товару, який потрібно виготовити.</p>
                    </v-col>
                    <v-col cols="3">
                        <h1 class="text-uppercase" style="text-align: center; font-size: 20px"> Чекай на свого митця </h1>
                        <br/>
                        <v-row style="padding-top: 5px">
                            <v-col cols="4"></v-col>
                            <v-col cols="4"><v-icon class="mx-auto" size="60" style="color: white;">access_time</v-icon></v-col>
                            <v-col cols="4"></v-col>
                        </v-row>
                        <br/>
                        <br/>
                        <p class="text-uppercase" style="text-align: center;">Митець знаходить замовлення,
                            що цікавить його, та повідомляє клієнта, про готовність до виконання замовлення.</p>
                    </v-col>
                    <v-col cols="3">
                        <h1 class="text-uppercase" style="text-align: center; font-size: 20px"> Домовся про ціну </h1>
                        <br/>
                        <v-row style="padding-top: 5px">
                            <v-col cols="4"></v-col>
                            <v-col cols="4"><v-icon class="mx-auto" size="60" style="color: white;">add_comment</v-icon></v-col>
                            <v-col cols="4"></v-col>
                        </v-row>
                        <br/>
                        <p class="text-uppercase" style="text-align: center;">
                            Клієнт та майстер обговорюють ціну та умови робити, а наша платформа стає гарантом якості
                            товару, його своєчасного виконання та оплати.
                        </p>
                    </v-col>
                    <v-col cols="3">
                        <h1 class="text-uppercase" style="text-align: center; font-size: 20px"> Насолоджуйся власним стилем </h1>
                        <v-row>
                            <v-col cols="4"></v-col>
                            <v-col cols="4"><v-icon class="mx-auto" size="60" style="color: white;">done_all</v-icon></v-col>
                            <v-col cols="4"></v-col>
                        </v-row>
                        <br/>
                        <p class="text-uppercase" style="text-align: center; padding-top: 22px">
                            Митець виконує свою роботу до зазначеного терміну та отримує гроші, а
                            користувач - свій унікальний продукт.
                        </p>
                    </v-col>
                </v-row>
                <div class="about-project-box mx-auto text-center">
                </div>
                <h1 class="center-title mx-auto">ПРО НАС</h1>
                <h3 class="center-title mx-auto">Ми раді бачити вас на нашому сайті! Зроби свій стиль унікальним разом з
                    нами</h3>
                <v-row>

                    <v-col cols="4" style="text-align: center">
                        <v-avatar style="margin: 0 auto" size="300">
                            <v-img src="@/assets/team/піжама_ги.jpg" alt="picture"/>
                        </v-avatar>
                        <h3>Вікторія Фолюш</h3>
                    </v-col>

                    <v-col cols="4" style="text-align: center">
                        <v-avatar size="300">
                            <v-img src="@/assets/team/anyaphoto.jpg" alt="picture"/>
                        </v-avatar>
                        <h3>Анна Манько</h3>
                    </v-col>

                    <v-col cols="4" style="text-align: center">
                        <v-avatar size="300">
                            <v-img src="@/assets/team/nastya_photo.jpg" alt="picture"/>
                        </v-avatar>
                        <h3>Анастасія Юреня</h3>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6" style="text-align: center">
                        <v-avatar size="300">
                            <v-img src="@/assets/team/danyaphoto.jpg" alt="picture"/>
                        </v-avatar>
                        <h3>Даниїл Логвінов</h3>

                    </v-col>
                    <v-col cols="6" style="text-align: center">
                        <v-avatar size="300">
                            <v-img src="@/assets/team/taras_photo.jpg" alt="picture"/>
                        </v-avatar>
                        <h3>Тарас Кулян</h3>
                    </v-col>
                </v-row>
            </v-container>
        </v-container>
        <v-footer clipped class="cst-footer darken-3" dark>

            <v-spacer></v-spacer>
            <span>Made with ❤ in 2019</span>
        </v-footer>
    </v-container>
</template>


<script>
    import NavbarProfile from "./NavbarProfile";
    export default {
        name: "Home",
        components: {NavbarProfile}
    }
</script>

<style scoped>
    .just-a-line {
        width: 100%;
        height: 5px;
        background-color: white;
    }

    .about-project-box {
        display: inline-block;
        width: 50%;
    }

    .cst-footer {
        background-image: url("../assets/YQ3DWT.jpg");
        background-size: cover;
        background-attachment: fixed;
        height: 50px;
    }

    .images-box {
        position: relative;
        z-index: 1;
    }

    .main-title {
        font-size: 30px;
        position: absolute;
        z-index: 3;
        background-color: rgba(239, 235, 233, 0.5);
        top: 500px;
        right: 50px;
        left: 50px;
        text-align: center;
    }

    .center-title {
        text-align: center;
    }

    .cst-background {
        background-image: url("../assets/main-background.png");
        background-size: cover;
        background-attachment: fixed;
    }

    .article-background {
        background-image: url("../assets/article-background.jpg");
        background-size: cover;
        margin-bottom: 20px;
    }

</style>