<template>
    <div>
        <footer class=" footer-section py-5">
            <div class="container">
                <div class="row ">
                    <div class="col-12 d-flex justify-content-center border_bottom">
                        <ul class="footer_nav d-flex flex-wrap align-items-center">
                            <li class="footer_nav_item">
                                <router-link class="footer_nav_link" to="/about">About</router-link>
                            </li>
                            <li class="footer_nav_item">
                                <router-link class="footer_nav_link" to="/contact">Contact</router-link>
                            </li>
                            <li class="footer_nav_item">
                                <router-link class="footer_nav_link" to="/privacy">Privacy</router-link>
                            </li>
                            <li class="footer_nav_item">
                                <router-link class="footer_nav_link" to="/terms">Terms</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 mt-5">
                        <div class="footer-bottom">
                            <div class="footer-logo">
                                <div class="footer-log-area d-flex align-items-center">
                                    <img src="@/assets/images/logo.svg" alt="">
                                    <p class="copyright-text">Copyright 2021 Better Merchant.
                                        All Rights Reserved.</p>
                                </div>
                            </div>
                            <div class="footer-brand-logo">
                                <img src="@/assets/images/footer-inc-grey.svg" alt="" height="25" class="">
                                <img src="@/assets/images/pci.svg" alt="" height="25" class="">
                                <img src="@/assets/images/eta.svg" alt="" height="25" class="">
                                <img src="@/assets/images/round.svg" alt="" height="25" class="">
                            </div>
                            <div class="footer-social-logo">
                                <a href="footer-social-logo-item" class="">
                                    <img src="@/assets/images/fb-logo.svg" alt="">
                                </a>
                                <a href="footer-social-logo-item" class="">
                                    <img src="@/assets/images/insta-logo.svg" alt="">
                                </a>
                                <a href="footer-social-logo-item" class="">
                                    <img src="@/assets/images/twitter-logo.svg" alt="">
                                </a>
                                <a href="footer-social-logo-item" class="">
                                    <img src="@/assets/images/linkedin-logo.svg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: "FooterSection"
}
</script>

<style scoped>
.footer-logo img {
    width: 150px;
}
</style>