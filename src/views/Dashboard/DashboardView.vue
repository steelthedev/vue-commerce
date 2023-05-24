<template>
    <SideBar />
</template>
<script>
import SideBar from '../../components/Dashboard/SideBar.vue'


export default {
    components: {
        SideBar
    },
    beforeRouteEnter(to, from, next) {
        to.meta.hideNavbar = true;
        next();
    },
    beforeRouteLeave(to, from) {
        if (to.meta.hideNavbar) {
            delete to.meta.hideNavbar;
        }
    },
    setup() {

    },
}
</script>