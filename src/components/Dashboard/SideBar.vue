<template>
    <section class="sidebar">
        <!-- <v-toolbar elevation="0" class="bg-white">
            <v-app-bar-nav-icon @click="drawer = !drawer" v-if="!drawer"></v-app-bar-nav-icon>
        </v-toolbar> -->
        <v-navigation-drawer elevation="0" expand-on-hover rail color="primary">
            <v-list class="mt-16" density="compact" nav>
                <router-link :to="{name:'dashboard'}" class="link">
                    <v-list-item title="Dashboard" class="mb-4" prepend-icon="mdi-view-dashboard-outline" value="dashboard"></v-list-item>
                </router-link>
                 <router-link :to="{name:'dashboard-product'}" class="link">
                     <v-list-item title="Products" class="mb-4" prepend-icon="mdi-basket" value="products"></v-list-item>
                 </router-link>
                <v-list-item title="Categories" class="mb-4" prepend-icon="mdi-shape" value="categories"></v-list-item>
                <v-list-item title="Orders" class="mb-4" prepend-icon="mdi-cart" value="Orders"></v-list-item>
                <v-list-item title="Shop" class="mb-4" prepend-icon="mdi-store" value="Shop"></v-list-item>
                
            </v-list>


            

        </v-navigation-drawer>
    </section>
</template>
<script>
import Sidebar from '../../composables/Dashboard/Sidebar';

export default {
    setup() {
        const { drawer } = Sidebar()

        return { drawer }
    },
}
</script>
<style scoped>
.v-list .v-list-item .v-list-item-title {
    font-size: 40px;
}

.link{
    text-decoration: none;
    text-transform: none;
    color: #fff;
}
</style>