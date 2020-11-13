<template>
    <div class="app-header header-shadow">
        <div class="app-header__content">
			<div class="app-header-left">
                <div class="header-logo"><router-link to= "/ViewDashboard"></router-link></div>
            </div>
            <div class="app-header-right">
                <SearchBox/>
            </div>            
        </div>
        <div class="app-header__mobile-menu">
            <div>
                <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" v-bind:class="{ 'is-active' : isOpen }" @click="toggleMobile('closed-sidebar-open')">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
        <div class="app-header__menu">
            <span>
                <button class="btn-icon btn-icon-only" variant="primary" size="sm" v-bind:class="{ 'active' : isOpenMobileMenu }" @click="toggleMobile2('header-menu-open')">
                    <div class="btn-icon-wrapper">
                    </div>
                </button>
            </span>
        </div>
    </div>
</template>

<script>

    import SearchBox from './Header/SearchBox';
    export default {
        name: "Header",
        components: {
            SearchBox,
        },

        data() {
            return {
                isOpen: false,
                isOpenMobileMenu: true,
            }
        },
        props: {


        },
        methods: {
            toggleMobile(className) {
                const el = document.body;
                this.isOpen = !this.isOpen;

                if (this.isOpen) {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },

            toggleMobile2(className) {
                const el = document.body;
                this.isOpenMobileMenu = !this.isOpenMobileMenu;

                if (this.isOpenMobileMenu) {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        }
    };
</script>
