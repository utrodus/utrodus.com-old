<template>
  <div class="author">
    <g-image src="https://res.cloudinary.com/dvhxdwwld/image/upload/v1658891397/profile1_qfxael.webp" alt="profile-pic"
      class="author__image" />

    <div class="author-info">
      <p class="author-info__intro">
        Want to build a Beautiful and cost-efficiently Mobile App? <br> I will help you make it happen. Let's talk.
      </p>

      <!-- <div class="author-info__links">
        <g-link to="https://twitter.com/leighrd_" aria-label="Twitter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-twitter"
          >
            <path
              d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
            ></path>
          </svg>
        </g-link>
        <g-link to="https://github.com/leighayanid" aria-label="Github">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
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
      </div> -->
      <!-- <slot></slot> -->
    </div>
    <button class="mail-me">
      <a href="mailto:contact.utrodus@gmail.com"> Hire Me</a>
    </button>
  </div>
</template>

<script>
import KoFiButton from "./KoFiButton.vue";
export default {
  components: {
    KoFiButton,
  },
};
</script>
<style lang="scss">
.author {
  padding: calc(var(--space) / 2) 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    max-width: 100%;
  }

  &__image {
    border-radius: 50%;
    width: 4.5rem;
    height: 4.5rem;
    margin-bottom: 1rem;
  }

  button.mail-me {
    margin-top: 1rem;
    margin-right: 10px;
    transition: background-color .2s;

    background-color: var(--cta-bg-color);
    background-clip: padding-box;
    border: 3px solid hsla(0, 0%, 100%, .3);
    border-radius: 15px;
    font-family: 'Roboto', sans-serif;
    padding: 0.5em 2em;
    font-size: 0.85em;
    font-weight: bold;

    cursor: pointer;

    a {
      color: var(--cta-color);
    }
  }

  &-info {

    &__name {
      font-size: 1rem;
      margin-bottom: 0;
      color: var(--title-color);
    }

    &__intro {
      opacity: 0.8;
      font-size: 1rem;
      margin-bottom: 0;
    }

    &__links {
      font-size: 0.75em;

      a {
        margin-right: 0.75em;
      }
    }
  }
}
</style>
