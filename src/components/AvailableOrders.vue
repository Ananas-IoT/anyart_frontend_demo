`
<template>
    <v-container fluid class="cst-background mx-auto text-center" style="padding: 0">
        <NavbarProfile></NavbarProfile>
        <v-row style="padding: 5px 20px">
            <v-col cols="3"></v-col>
            <v-col cols="6" style="padding: 5px">
                <v-card dark class=" mx-auto">
                    <v-list-item-content>
                        <v-list-item-title class="headline text-uppercase">Замовлення, що чекають на свого виконавця
                        </v-list-item-title>
                        <v-text-field label="Знайти замовлення" prepend-icon="find_in_page" class="black--text"
                                      style="padding: 0 400px 0 20px"/>
                    </v-list-item-content>
                </v-card>
            </v-col>
            <v-col cols="3"></v-col>
        </v-row>
        <v-row style="padding: 5px 20px">
            <v-col cols="1.5"></v-col>
            <v-col cols="3" style="padding: 5px">
                <v-card dark min-width="200" max-width="450" class="mx-auto">
                    <v-list-item style="padding: 8px">
                        <v-avatar size="60">
                            <v-img src="@/assets/a9ea29bdf43084e3b8d8ca5155e207c9.jpg"></v-img>
                        </v-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Картина на пусту стіну</v-list-item-title>
                            <v-list-item-subtitle>від Максима Мурашіна</v-list-item-subtitle>
                            <v-list-item-subtitle>2 години тому</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-img src="@/assets/mint-green-bedroom-1555343630.jpg"></v-img>
                    <v-card-text>
                        Хочу картину для спальні виконану в імпресіоністичному стилі.
                        Зображення на вибір художника.
                        Бажано у сірих тонах. Висота та довжина: 70 сантиметрів.
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="rgb(255, 162, 100)">ДЕТАЛЬНІШЕ</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon v-on:click="confirm">
                            <PlusBox></PlusBox>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>turned_in</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>email</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="3" style="padding: 5px">
                <v-card dark min-width="200" max-width="450" class="mx-auto">
                    <v-list-item style="padding: 8px">
                        <v-avatar size="60">
                            <v-img src="@/assets/photo_2019-10-05_13-01-30.jpg"></v-img>
                        </v-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Глиняний глечик з візерунками</v-list-item-title>
                            <v-list-item-subtitle>від Вікторії Фолюш</v-list-item-subtitle>
                            <v-list-item-subtitle>вчора</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-img src="@/assets/DSC_0042.jpg"></v-img>
                    <v-card-text>
                        Чорний глечик із глини розміром 0.5 літра та висотою 25-30 сантиметрів(приклад на фото).
                        Потрібно прикрасити
                        його білими візерунками в українському стилі.
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="rgb(255, 162, 100)">ДЕТАЛЬНІШЕ</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon v-on:click="confirm">
                            <PlusBox></PlusBox>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>turned_in</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>email</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="3" style="padding: 5px">
                <v-card dark min-width="200" max-width="450" class="mx-auto">
                    <v-list-item style="padding: 8px">
                        <v-avatar size="60">
                            <v-img src="@/assets/17b3777e91437cfeef386a42b17e3e7a.jpg"></v-img>
                        </v-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Геометрична статуя пантери</v-list-item-title>
                            <v-list-item-subtitle>від Степана Станько</v-list-item-subtitle>
                            <v-list-item-subtitle>вчора</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-img src="@/assets/photo_2019-12-09_17-36-30.jpg"></v-img>
                    <v-card-text>
                        Потрібні фігури у вигляді чорної та білої пантер, що виконані у стилі оригамі і виглядають
                        максимально природньо. Колір матовий, розміри виробу - 60х30х10.
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="rgb(255, 162, 100)">ДЕТАЛЬНІШЕ</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon v-on:click="confirm">
                            <PlusBox></PlusBox>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>turned_in</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>email</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="1.5"></v-col>
        </v-row>
        <v-row style="padding: 5px 20px">
            <v-col cols="1.5"></v-col>
            <v-col cols="3" style="padding: 5px">
                <v-card dark min-width="200" max-width="450" class="mx-auto">
                    <v-list-item style="padding: 8px">
                        <v-avatar size="60">
                            <v-img src="@/assets/screen-4.jpg"></v-img>
                        </v-avatar>
                        <v-list-item-content>
                            <v-list-item-title>В'язані шкарпетки</v-list-item-title>
                            <v-list-item-subtitle>від Олени Коришко</v-list-item-subtitle>
                            <v-list-item-subtitle>два дні тому</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-img src="@/assets/photo_2019-12-09_17-43-14.jpg"></v-img>
                    <v-card-text>
                        Шукаю людину, що зможе зробити мені партію кастомних шкарпеток! Подібного плану як на фото,
                        тільки має бути інший колір та напис і додаткові лінії.
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="rgb(255, 162, 100)">ДЕТАЛЬНІШЕ</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon v-on:click="confirm">
                            <PlusBox></PlusBox>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>turned_in</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>email</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="3" style="padding: 5px">
                <v-card dark min-width="200" max-width="450" class="mx-auto">
                    <v-list-item style="padding: 8px">
                        <v-avatar size="60">
                            <v-img src="@/assets/5439e20cfe7713314fabbd7a9544408a.jpg"></v-img>
                        </v-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Скляна фігура</v-list-item-title>
                            <v-list-item-subtitle>від Марії Судолько</v-list-item-subtitle>
                            <v-list-item-subtitle>три дні тому</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-img src="@/assets/photo_2019-12-09_17-26-10.jpg"></v-img>
                    <v-card-text>
                        Красива скляна фігура у вигляді морської хвилі висотою 40 см, термінове замовлення.
                        Кольори мають бути інші, повідомлю перед початком виконання роботи.
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="rgb(255, 162, 100)">ДЕТАЛЬНІШЕ</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon v-on:click="confirm">
                            <PlusBox></PlusBox>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>turned_in</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>email</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="3" style="padding: 5px">
                <v-card dark min-width="200" max-width="450" class="mx-auto">
                    <v-list-item style="padding: 8px">
                        <v-avatar size="60">
                            <v-img src="@/assets/Toni-Kelly-top-img.jpg"></v-img>
                        </v-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Екосумка</v-list-item-title>
                            <v-list-item-subtitle>від Анастасії Бугак</v-list-item-subtitle>
                            <v-list-item-subtitle>п'ять днів тому</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-img src="@/assets/photo_2019-12-09_18-00-09.jpg"></v-img>
                    <v-card-text>
                        Терміново!
                        Шукаю людину, що зможе пошити подібну екосумку для подарунку подружці. Розмір повинен бути трохи
                        більшим.
                        Про дизайн поговорю із виконамцем особисто.
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="rgb(255, 162, 100)">ДЕТАЛЬНІШЕ</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon v-on:click="confirm">
                            <PlusBox></PlusBox>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>turned_in</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>email</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="1.5"></v-col>
        </v-row>
        <v-row style="padding: 5px 20px">
            <v-col cols="1.5"></v-col>
            <v-col cols="3" style="padding: 5px">
                <v-card dark min-width="200" max-width="450" class="mx-auto">
                    <v-list-item style="padding: 8px">
                        <v-avatar size="60">
                            <v-img src="@/assets/photo_2019-11-19_00-15-50.jpg"></v-img>
                        </v-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Светр з малюнком</v-list-item-title>
                            <v-list-item-subtitle>від Євгена Буфана</v-list-item-subtitle>
                            <v-list-item-subtitle>тиждень тому</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-img src="@/assets/photo_2019-12-09_18-11-51.jpg"></v-img>
                    <v-card-text>
                        Шукаю людину, що зможе пошити мені светр для дитини, приблизного фасону проте із іншим дизайном.
                        Деталі повідомлю при обговоренні замовлення.
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="rgb(255, 162, 100)">ДЕТАЛЬНІШЕ</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon v-on:click="confirm">
                            <PlusBox></PlusBox>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>turned_in</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>email</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="3" style="padding: 5px">
                <v-card dark min-width="200" max-width="450" class="mx-auto">
                    <v-list-item style="padding: 8px">
                        <v-avatar size="60">
                            <v-img src="@/assets/HJbSogG.jpg"></v-img>
                        </v-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Дизайн стін</v-list-item-title>
                            <v-list-item-subtitle>від Олени Іванцюх</v-list-item-subtitle>
                            <v-list-item-subtitle>тиждень тому</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-img src="@/assets/empty-wall.jpg"></v-img>
                    <v-card-text>
                        Шукаю вмілого маляра, що зможе розмалювати стіни на замовлення! Приблизна ідея малюнків вже є, а
                        фарби куплю після узгодження замовлення з художником.
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="rgb(255, 162, 100)">ДЕТАЛЬНІШЕ</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon  v-on:click="confirm">
                            <PlusBox></PlusBox>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>turned_in</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>email</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="3" style="padding: 5px">
                <v-card dark min-width="200" max-width="450" class="mx-auto">
                    <v-list-item style="padding: 8px">
                        <v-avatar size="60">
                            <v-img src="@/assets/rggrgr.jpg"></v-img>
                        </v-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Карнавальна маска</v-list-item-title>
                            <v-list-item-subtitle>від Ірини Бібяк</v-list-item-subtitle>
                            <v-list-item-subtitle>тиждень тому</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-img src="@/assets/venetsianskaya-maska-s-peryami-chernyi-velvet-1.jpg"></v-img>
                    <v-card-text>
                        Потрібно зробити карнавальну маску, схожу на цю. Хочу щоб пір'я були срібного кольору, а
                        сама маска була золотою та прикрашена подібним камінням.
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="rgb(255, 162, 100)">ДЕТАЛЬНІШЕ</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon>turned_in</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>email</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="1.5"></v-col>
        </v-row>
        <v-btn absolute fixed dark bottom right class="order-bottom gradient-background" style="height: 50px;">
            ЗРОБИТИ ЗАМОВЛЕННЯ
        </v-btn>
        <br/>
        <v-row>
            <v-col cols="4"></v-col>
            <v-col cols="4">
                <span class="page-box">1</span>
                <span class="page-box">2</span>
                <span class="page-box">3</span>
                <span class="page-box">4</span>
                <span class="page-box">5</span>
                <span class="page-box">...</span>
                <span class="page-box" style="padding: 10px 11px">28</span>

            </v-col>
            <v-col cols="4"></v-col>
        </v-row>
        <br/>
        <v-footer clipped class="cst-footer darken-3" dark>
            <v-spacer></v-spacer>
            <span>Made with ❤ in 2019</span>
        </v-footer>
    </v-container>
</template>

<script>
    import NavbarProfile from "./NavbarProfile";
    import PlusBox from 'vue-material-design-icons/PlusBox.vue';

    export default {
        name: "available-orders",
        components: {
            NavbarProfile,
            PlusBox
        },
        methods:{
            confirm: function () {
               return this.$confirm(" ","Ви впевнені, що хочете взяти замовлення?").then(() => {
                  return this.$alert(" ", "Замовлення успішно прийняте", "success");
               });
            }
        },
    }
</script>

<style scoped>
    .cst-footer {
        background-image: url("../assets/YQ3DWT.jpg");
        background-size: cover;
        background-attachment: fixed;
        height: 50px;
    }

    .cst-background {
        background-image: url("../assets/main-background.png");
        background-size: cover;
        background-attachment: fixed;
    }

    .order-bottom {
        margin-right: 0;
        margin-bottom: 40px;
        font-size: 20px;
        box-shadow: 0 0 10px #515151;
    }

    .gradient-background {
        color: #313131;
        background: rgb(255, 162, 100);
        background: linear-gradient(90deg, rgba(255, 162, 100, 1) 0%, rgba(255, 225, 127, 1) 100%);
    }

    .page-box {
        color: white;
        background-color: #313131;
        padding: 10px 15px;
        margin: 5px;
    }

</style>