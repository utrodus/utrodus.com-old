<template>
    <div class="nav-bottom">


        <g-link to="/" class="nav_bottom_item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="navbar__icon">
                <path
                    d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z">
                </path>
            </svg>
            Home
        </g-link>
        <g-link to="/about" class="nav_bottom_item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="navbar__icon">
                <path
                    d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z">
                </path>
            </svg>
            About
        </g-link>
        <g-link to="/projects" class="nav_bottom_item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="navbar__icon">
                <path
                    d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-4 2v11H8V8h8zm-1-4v2H9V4h6zM4 8h2v11H4V8zm14 11V8h2l.001 11H18z">
                </path>
            </svg>
            Projects
        </g-link>

        <!-- <g-link to="/blog">Blog</g-link> -->
        <!-- <g-link to="/resources">Resources</g-link> -->
        <g-link to="/contact" class="nav_bottom_item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="navbar__icon">
                <path
                    d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z">
                </path>
                <path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path>
            </svg>
            Contact
        </g-link>
        <!-- 
        <g-link class="nav_bottom_item" to="https://medium.com/@utrodus" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="navbar__icon">
                <path
                    d="M19.903 8.586a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 0 0-.051-.259c-.01-.032-.019-.063-.033-.093zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z">
                </path>
                <path d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"></path>
            </svg>
            Blog

        </g-link> -->
        <ToggleTheme />




    </div>
</template>

<script>
import ToggleTheme from "~/components/ToggleTheme.vue";
export default {
    components: {
        ToggleTheme,
    },
    props: {
        showDetails: false,
        type: Boolean,
    },
};
</script>

<style lang="scss" scoped>
.nav-bottom {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    transition: all 0.3s ease-out 0s;
    backdrop-filter: blur(50px);
    border-top: 1px solid rgba(255, 255, 255, 0.067);
    background: var(--nav-bg-color);
    z-index: 9999;

    @media screen and (min-width: 834px) {
        display: none;
    }

    .active--exact {
        background: linear-gradient(45deg, #ff7070 10%, #f13dd4 50%, #933fff 90%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: bold;

        svg.navbar__icon {
            fill: rgb(255, 80, 255) !important;
        }
    }

    .nav_bottom_item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem 0;
        padding-bottom: calc(.5rem + env(safe-area-inset-bottom));
        font-size: 10px;

        svg.navbar__icon {
            fill: var(--title-color);
        }

    }

}
</style>
