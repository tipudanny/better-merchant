<template>
    <div>
        <nav class="navbar navbar-expand-xl navbar-light header-bg " id="header">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                    <img class="logo-size" src="@/assets/images/logo.svg" alt="">
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav header-nav-item custom_nav ">
                        <li class="nav-item custom_nav_item">
                            <router-link to="/accept-payments" class="nav-link active" > ACCEPT PAYMENTS</router-link>
                            <ul class="sub_menu">
                                <li><router-link to="/accept-payments/credit-debit-cards">Credit Cards</router-link></li>
                                <li><router-link to="/accept-payments/online">Online</router-link></li>
                                <li><router-link to="/accept-payments/mobile">Mobile</router-link></li>
                                <li><router-link to="/accept-payments/retail">Retail</router-link></li>
                                <li><router-link to="/accept-payments/moto">Moto</router-link></li>
                                <li><router-link to="/accept-payments/ach">ACH</router-link></li>
                                <li><router-link to="/accept-payments/echeck">ECHECK</router-link></li>
                                <li><router-link to="/accept-payments/cryptocurrency">Cryptocurrency</router-link></li>
                            </ul>
                        </li>
                        <li class="nav-item custom_nav_item">
                            <router-link to="#" class="nav-link">FUNDING</router-link>
                        </li>
                        <li class="nav-item custom_nav_item">
                            <router-link to="/merchant-services" class="nav-link">INDUSTRIES</router-link>
                        </li>
                        <li class="nav-item custom_nav_item">
                            <router-link class="nav-link" to="#">ISO & AGENT</router-link>
                        </li>
                        <li class="nav-item custom_nav_item">
                            <router-link class="nav-link apply_btn" to="#"> Apply</router-link>
                        </li>
                    </ul>
                    <div class="ms-auto">
                        <div id="phone " class="d-flex justify-content-end">
                            <a href="tel:+1-800-988-2215">
                                <img src="@/assets/images/phone.svg" alt="phone-number" class="phone-img">
                                <span class="d-none d-lg-inline phone-text">1-800-988-2215</span>
                            </a>
                        </div>
                        <div id="availability" class="started d-flex align-items-center justify-content-end flex-wrap">
                            <div class="prop">
                                <span class="head-orange">Wait: </span>
                                <span id="waiting" class="value">0 minutes</span>
                            </div>
                            <div class="prop">
                                <span class="head-orange">Online: </span>
                                <span id="agents" class="value"> 14agents</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>

export default {
    name: "Navbar",
    data() {
        return {

        }
    },
    mounted() {
        let navbar = document.getElementById('header');
        window.addEventListener('scroll', function(){
            let position = this.scrollY
            if(position >= 5){
                navbar.classList.add("active-nav")
            }else{
                navbar.classList.remove("active-nav")
            }

        })
    },
    methods: {

    }
}
</script>

<style scoped>
</style>