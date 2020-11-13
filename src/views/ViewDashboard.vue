<template>
    <div class="app-container">
        <transition name="fade" mode="out-in" appear>
            <Header />
        </transition>
        <transition name="fade" mode="out-in" appear>
            <Sidebar />
        </transition>
        <div class="app-main__outer">
            <div class="app-main__inner">
                Coming soon. Please click on any of the other available links.			
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import Sidebar from "../components/Sidebar";

    export default {
        name: 'app',
        components: {
            Header,
            Sidebar,
        },
        methods: {
        },
         async created() {
            //var token = await process.env.NODE_ENV === "development" ? this.$root.user.access_token:this.$root.access_token;           
        }
    }
</script>