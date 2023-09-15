<template>
	<div class="nav-wrapper">
		<div class="nav-header">
			<div class="nav-header__logo">
				<g-link to="/">
					<img src="../assets/logo.png" alt="Logo Utrodus" class="logo" />
				</g-link>
			</div>
			<div class="nav-header__links">
				<g-link to="/about">About</g-link>
				<g-link to="/portfolio">Projects</g-link>

				<!-- <g-link to="/blog">Blog</g-link> -->
				<!-- <g-link to="/resources">Resources</g-link> -->
				<g-link to="/contact">Contact</g-link>
				<g-link class="resume" to="https://medium.com/@utrodus" target="_blank">

					Blog
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
						style="transform: ;msFilter:;">
						<path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
						<path
							d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z">
						</path>
					</svg>
				</g-link>
				<g-link class="resume"
					to="https://drive.google.com/file/d/1Jh6jWzEFOGR5PFBhW7iHwcUk9wYr-fF-/view?usp=drive_link"
					target="_blank" style="margin-right: 0;">

					Resume
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
						style="transform: ;msFilter:;">
						<path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
						<path
							d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z">
						</path>
					</svg>
				</g-link>

				<!-- <g-link to="/search" aria-label="Search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-search search-icon"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </g-link> -->
			</div>
			<div>
				<ToggleTheme />
			</div>
		</div>
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
.nav-wrapper {
	margin: 0 auto;
	position: fixed;
	z-index: 9999;
	height: 10%;
	display: flex;
	justify-content: center;
	top: 0;
	left: 0;
	right: 0;
	bottom: 16px;
	background: var(--nav-bg-color);
	transition: all 0.3s ease-out 0s;
	backdrop-filter: blur(12px);
	border-bottom: 1px solid rgba(255, 255, 255, 0.067);

	@media screen and (max-width: 834px) {
		display: none;
	}

	.nav-header {
		margin: 0 auto;
		max-width: 1200px;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-content: center;
		align-items: center;
		justify-content: space-around;
		position: relative;

		@media (min-width: 801px) and (max-width:1200px) {
			padding: 2.5% 0;
		}

		&__logo {
			// flex-basis: 50%;

			img.logo {
				margin-top: 0.5rem;
				width: 2.5rem;
			}

			a {
				margin: 0;
			}

			// @media screen and (max-width: 1200px) {
			// 	flex-basis: 40%;
			// }
		}

		.active--exact {
			background: linear-gradient(45deg, #ff7070 10%, #f13dd4 50%, #933fff 90%);
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
			font-weight: bold;
		}

		&__links {
			display: flex;
			align-content: center;
			justify-content: center;
			align-items: center;
			padding: 5px;

			a svg {
				@media screen and (max-width: 1200px) {
					display: none;
				}

				fill: var(--title-color);
			}


		}
	}
}


p {
	color: var(--link-color);
	width: 100%;
}

a {
	text-decoration: none;
	margin-right: 2rem;
	padding: 0;
	color: var(--body-color);
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
	font-size: 0.9em;

	// .search-icon{
	// 	margin-right: 0;
	// 	display: flex;
	// 	align-self: center;
	// }
	@media screen and (max-width: 800px) {
		margin-right: 0.7rem;
	}
}
</style>
