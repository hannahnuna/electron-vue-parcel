<template>
    <div id="app">
        <v-app>
            <v-content>
                <v-container fluid>
                    <router-view></router-view>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
@import url(vuetify/dist/vuetify.min.css);
</style>
