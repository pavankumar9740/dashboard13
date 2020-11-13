<template>
    <div class="app-container">
        <transition name="fade" mode="out-in" appear>
            <Header />
        </transition>
        <div class="app-main__outer">
            <div class="app-main__inner">
                <router-link v-if="!IsUserSignedIn" to="/ViewDashboard">SignIn</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../components/Header";

    export default {
        name: 'app',
        components: {
            Header            
        },
        methods: {
        },
        computed:{
            IsUserSignedIn: function(){
                return  process.env.NODE_ENV ==="development"? this.$root.user: this.$root.access_token!=null
            }
        },
        created: function(){
            if(this.IsUserSignedIn)
                this.$router.push("ViewDashboard");
        }
    }
</script>