<template>
    <div style="padding: 0">
        <v-container fluid style="padding: 0; margin: 0">
            <v-row class="images-box" style="padding: 0; margin: 0">
                <v-col v-touch="top" cols="4" style="padding: 0">
                    <v-img alt="image"
                           src="https://i.pinimg.com/originals/c2/58/b9/c258b9e36ce904484ec145251f5ed792.jpg"></v-img>
                </v-col>
                <v-col v-touch="top" cols="4" style="padding: 0">
                    <v-img alt="image" src="/10b45425c209218d122b916c505fe1f9.jpg"></v-img>
                </v-col>
                <v-col v-touch="top" cols="4" style="padding: 0">
                    <v-img alt="image"
                           src="https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20SeventyFour,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1513101520/y2jycss8btwpwuskhilm.jpg"></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-card class="main-title mx-auto white--text" flat>
                    <v-card-title>
                        <h1 class="display-1 mx-auto">UUJIKOL@KJBH</h1>
                    </v-card-title>
                </v-card>
            </v-row>`
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
        position: absolute;
        z-index: 1;
    }

    .main-title {
        font-size: 30px;
        position: relative;
        z-index: 3;
        background-color: rgba(0.5, 0.5, 0.5, 0.5);
        margin-top: 600px;
    }
</style>