<template>
  <div class="welcome">
    <g-image src="~/assets/images/profile.webp" alt="welcome-pic" />
    <div>
      <h1 class="welcome-text">
        Hi my name is <strong>Utrodus</strong><br />

        I'm a
        <strong>
          <textra
            :data="words"
            :timer="2"
            :infinite="true"
            filter="bottom-top" /></strong
        ><br />
        Based in Blitar City, Indonesia.
        <!-- Experience <strong></strong> things for the <strong>web</strong> -->
      </h1>
      <p class="welcome-intro">
        I have <strong> 3 years</strong> of working experience in
        <strong>Mobile App Development.</strong> I Offer to Develop Beautiful
        Mobile Apps <strong>fast and cost-efficient</strong> with Dart & Flutter
        SDK. If you're looking to hire a Flutter Developer Remotely, feel free
        to email me at
        <strong>
          <a href="mailto:contact.utrodus@gmail.com">
            contact.utrodus@gmail.com</a
          ></strong
        >
      </p>
      <div class="welcome-cta">
        <button class="mail-me">
          <a href="mailto:contact.utrodus@gmail.com"> Hire Me</a>
        </button>
        <g-link
          to="https://www.linkedin.com/in/utrodus-said/"
          aria-label="Linkedin"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-linkedin"
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            ></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </g-link>
        <g-link to="https://github.com/utrodus" aria-label="Github">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-github"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>
        </g-link>
      </div>

      <g-link
        to="https://drive.google.com/file/d/135kURYsVPbmp4kbR50s0puBsTdd_y352/view?usp=sharing"
        aria-label="Download Curiculum Vitae"
        class="download-cv"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-download"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Download CV
      </g-link>
    </div>
  </div>
</template>

<script>
import Textra from "~/components/Textra.vue";
export default {
  data() {
    return {
      words: ["Flutter Freelancer", "Flutter Developer", "Flutter Enthusiast"],
    };
  },
  components: {
    Textra,
  },
};
</script>

<style lang="scss" scoped>
.welcome {
	font-family: "Merriweather", serif;
	display: flex;
	margin: 2rem 0;

	@media screen and (max-width: 800px) {
		flex-direction: column;
	}

	img {
		border-radius: 50%;
		width: 20%;
		height: 20%;
		margin-right: 2rem;
		box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, 0.1);

		@media screen and (max-width: 800px) {
			width: 30%;
			height: 30%;
			margin: 1rem auto;
		}
	}

	&-text {
		width: 100%;
		line-height: 1.5;
		letter-spacing: 1px;

		@media screen and (max-width: 800px) {
			text-align: center;
		}
	}

	&-intro {
		margin-top: 2rem;
		width: 85%;

		@media screen and (max-width: 800px) {
			width: 100%;
		}
	}

  &-cta{
    display: flex;
    align-items: center;
    .feather {
     color: var(--title-color);
    font-size: 1rem;
    margin: 0.5rem 1rem;
}
a{
      display: flex;
    align-items: center;
}
   button.mail-me{
         margin-right: 0.9rem;
    font-family: 'Fira Sans';
    padding: 0.75rem 2em;
    font-size: 0.85em;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    background: var(--cta-bg-color);
    border: 1px solid var(--cta-bg-color);
    border-radius: 3px;
    cursor: pointer;
    a{
    color: var(--cta-color);
    }
    &:hover{
        background: var(--cta-bg-color);
    border: 1px solid var(--cta-bg-color);
    
    }
   }
  }

.download-cv{
 font-family: 'Fira Sans';
    font-weight: 400;
    font-size: 0.7em;
    display: flex;
    align-items: center;
    margin-top: 0.75rem;
        padding: 0 0.5em;
}
}
</style>
