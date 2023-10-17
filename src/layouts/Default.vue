<template>
	<div id="app">
		<Navbar />
		<transition name="fade" appear>
			<main class="main" id="page-wrap">
				<slot />
			</main>
		</transition>
		<Footer />
		<NavbarBottom />
	</div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import NavbarBottom from "~/components/NavbarBottom.vue";
import Footer from "~/components/Footer.vue";

export default {
	components: {
		Navbar,
		NavbarBottom,
		Footer,
	},
};
</script>

<style lang="scss">
#app {
	background: var(--app-bg-color);
}

@font-face {
	font-family: Roboto;
	src: url(../assets/fonts/Roboto-Regular.ttf);
	font-weight: normal;
	font-display: swap;
}


@font-face {
	font-family: Roboto;
	src: url(../assets/fonts/Roboto-Medium.ttf);
	font-weight: 500;
	font-display: swap;
}

@font-face {
	font-family: Roboto;
	src: url(../assets/fonts/Roboto-Bold.ttf);
	font-weight: 700;
	font-display: swap;
}

@font-face {
	font-family: Roboto;
	src: url(../assets/fonts/Roboto-Black.ttf);
	font-weight: 900;
	font-display: swap;
}

::-webkit-scrollbar {
	width: 12px;
	background-color: #eff1f5;
}

::-webkit-scrollbar-track {
	border-radius: 3px;
	background-color: transparent;
}

::-webkit-scrollbar-thumb {
	border-radius: 5px;
	background-color: #515769;
	border: 2px solid #eff1f5;
}



.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: var(--header-height);
	padding: 0 calc(var(--space) / 2);
	top: 0;
	z-index: 10;

	&__left,
	&__right {
		display: flex;
		align-items: center;
	}

	@media screen and (min-width: 1300px) {
		//Make header sticky for large screens
		position: sticky;
		width: 100%;
	}
}

.main {
	margin: 0 auto;
	// padding: 2.5% 19% 1% 19%;
	max-width: 1200px;


	@media screen and (max-width: 800px) {
		margin: 0;
		padding: 6.5% 5%;
	}

	@media (min-width: 801px) and (max-width: 1200px) {
		padding: 6.5% 5rem 2% 5rem;
	}

	@media (min-width: 1201px) {
		padding: 6.5% 4rem 2% 4rem;
	}


}

.fade-enter-active {
	transition: opacity 0.5s;
}

.fade-enter {
	opacity: 0;
}
</style>
