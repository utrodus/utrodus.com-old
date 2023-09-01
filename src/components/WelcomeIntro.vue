<template>
  <div class="welcome">
    <g-image src="https://res.cloudinary.com/dvhxdwwld/image/upload/v1658891397/utrodus_w8ad5s.webp"
      alt="profile picture" />
    <div>
      <h1 class="welcome-text">
        Hi <span class="wave"> 👋 </span> I'm Utrodus <strong>Said.</strong>
      </h1>
      <h1 class="welcome-flip">

        <span class="welcome-flip-word"> Flutter Developer </span>
        <!-- <span class="welcome-flip-word">
          <textra :data="words" :timer="2" :infinite="true" filter="bottom-top" />
        </span> -->
        (
        <svg viewBox="0 0 128 128" width="21" height="21">
          <path fill="#00c4b3" d="M35.2 34.9l-8.3-8.3v59.7l.1 2.8c0 1.3.2 2.8.7 4.3l65.6 23.1 16.3-7.2-74.4-74.4z">
          </path>
          <path d="M27.7 93.4zm81.9 15.9l-16.3 7.2-65.4-23.1c1.3 4.8 4 10.1 7 13.2l21.3 21.2 47.6.1 5.8-18.6z"
            fill="#22d3c5"></path>
          <path fill="#0075c9"
            d="M1.7 65.1C-.4 67.3.7 72 4 75.5l14.7 14.8 9.2 3.3c-.3-1.5-.7-3-.7-4.3l-.1-2.8-.2-59.8m82.7 82.6l7.2-16.4-23-65.6c-1.5-.3-3-.6-4.3-.7l-2.9-.1-59.6.1">
          </path>
          <path d="M93.6 27.3c.2 0 .2 0 0 0 .2 0 .2 0 0 0zm16 82l17.7-5.8V54.8l-20.4-20.5c-3-3-8.3-5.8-13.2-7l23.1 65.6"
            fill="#00a8e1"></path>
          <path fill="#00c4b3"
            d="M90.5 18.2L75.7 3.5c-3.4-3.4-8-4.4-10.4-2.3L26.9 26.6h59.5l2.9.1c1.3 0 2.8.2 4.3.7l-3.1-9.2z"></path>
        </svg>
        +
        <span>
          <svg viewBox="0 0 128 128" width="21" height="21">
            <g fill="#3FB6D3">
              <path d="M12.3 64.2L76.3 0h39.4L32.1 83.6zM76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"></path>
            </g>
            <path fill="#27AACD" d="M81.6 93.9l-20-20-19.4 19.6 19.4 19.6z"></path>
            <path fill="#19599A" d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z"></path>
            <linearGradient id="flutter-original-a" gradientUnits="userSpaceOnUse" x1="59.365" y1="116.36" x2="86.825"
              y2="99.399">
              <stop offset="0" stop-color="#1b4e94"></stop>
              <stop offset=".63" stop-color="#1a5497"></stop>
              <stop offset="1" stop-color="#195a9b"></stop>
            </linearGradient>
            <path fill="url(#flutter-original-a)" d="M61.6 113.1l30.8-8.4-10.8-10.8z"></path>
          </svg>
          )

        </span>
      </h1>
      <p class="welcome-intro">
        I Offer services for developing mobile applications with a passion for products that are beautiful and easy to
        use. If
        you're looking to hire me, feel free to
        <strong>
          <a href="mailto:contact.utrodus@gmail.com"> Email Me</a></strong>
      </p>
      <p></p>

      <div class="welcome-cta">
        <div class="hire-me">
          <button class="mail-me">
            <a href="mailto:contact.utrodus@gmail.com">Hire Me</a>
          </button>

        </div>

        <g-link to="https://www.linkedin.com/in/utrodus-said/" aria-label="Linkedin" class="icon-socmed">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-linkedin">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </g-link>


        <g-link to="https://github.com/utrodus" aria-label="Github" class="icon-socmed">

          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-github">
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
            </path>
          </svg>
        </g-link>
      </div>


    </div>
  </div>
</template>

<script>
import Textra from "~/components/Textra.vue";
export default {
  data() {
    return {
      words: ["Flutter Freelancer 🎯", "Flutter Developer 🦸🏻‍♂️"],
    };
  },
  components: {
    Textra,
  },
};
</script>

<style lang="scss" scoped>
.welcome {
  font-family: "Karla", sans-serif;
  display: flex;
  margin: 2rem 0 0 0;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }

  img {
    border-radius: 50%;
    width: 50%;
    height: 50%;
    margin: 0 auto 2rem auto;
    box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, 0.1);

    @media (min-width: 500px) and (max-width: 800px) {
      width: 25%;
      height: 25%;
    }

    @media (min-width: 801px) {
      margin-right: 2.5rem;
      width: 16rem;
    }
  }

  &-text {
    width: 100%;
    letter-spacing: 1px;
    text-align: center;
    font-size: 1.4em;
    margin: 0.8rem 0 0.5rem;

    .wave {
      animation-name: wave-animation;
      /* Refers to the name of your @keyframes element below */
      animation-duration: 2.5s;
      /* Change to speed up or slow down */
      animation-iteration-count: infinite;
      /* Never stop waving :) */
      transform-origin: 70% 70%;
      /* Pivot around the bottom-left palm */
      display: inline-block;
    }

    @keyframes wave-animation {
      0% {
        transform: rotate(0.0deg)
      }

      10% {
        transform: rotate(14.0deg)
      }

      /* The following five values can be played with to make the waving more or less extreme */
      20% {
        transform: rotate(-8.0deg)
      }

      30% {
        transform: rotate(14.0deg)
      }

      40% {
        transform: rotate(-4.0deg)
      }

      50% {
        transform: rotate(10.0deg)
      }

      60% {
        transform: rotate(0.0deg)
      }

      /* Reset for the last half to pause */
      100% {
        transform: rotate(0.0deg)
      }
    }

    @media (min-width: 801px) {
      text-align: left;
    }

    @media (min-width: 801px) and (max-width: 1000px) {
      font-size: 1.3em;
    }
  }

  &-flip {
    text-align: center;

    @media (min-width: 801px) {
      text-align: left;
    }

    @media screen and (max-width: 375px) {
      font-size: 1.2em;
    }

    @media screen and (min-width: 376px) and (max-width: 800px) {
      font-size: 1.5em;
    }

    @media (min-width: 801px) and (max-width: 1000px) {
      font-size: 1em;
    }

    &-word {
      background: linear-gradient(45deg, #ff7070 10%, #f13dd4 50%, #933fff 90%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

  }

  &-intro {
    font-size: 0.9em;
    margin-top: 1.5rem;
    text-align: center;

    @media (min-width: 801px) {
      text-align: left;
    }

    @media (min-width: 801px) and (max-width: 1000px) {
      font-size: 0.8em;
    }

    @media (min-width: 1200px) {
      max-width: 70%;
    }
  }

  &-cta {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    @media (min-width: 801px) {
      justify-content: start;
    }

    .feather {
      color: var(--link-color);
      font-size: 1rem;
      margin: 0.5rem 1rem;
    }

    a {
      display: flex;
      align-items: center;

      &.icon-socmed {
        background: var(--cta-icon-socmed-bg-color);
        border-radius: 15px;
        margin-left: 1rem;
        padding: 0.4rem 0;

        .feather {
          color: white;
          font-size: 1rem;
          margin: 0.5rem 1rem;
        }
      }
    }

    .hire-me {
      display: flex;
      flex-direction: column;
      align-items: center;

      button.mail-me {
        transition: background-color .2s;

        background: var(--cta-bg-color);
        background-clip: padding-box;
        border: 3px solid hsla(0, 0%, 100%, .3);
        border-radius: 15px;
        font-family: "Karla", sans-serif;
        padding: 1rem 2.5em;
        font-size: 0.85em;
        font-weight: bold;

        cursor: pointer;

        a {
          color: var(--cta-color);
        }


      }

      .download-file {
        min-width: 44px;
        min-height: 44px;
        font-family: "Karla", sans-serif;
        font-weight: 400;
        font-size: 0.7em;
        display: flex;
        align-items: center;
        margin-top: 0.5rem;

        &:hover {
          transform: translateY(2px);
        }

        .label {
          margin-left: 1rem;
        }

        svg {
          margin-right: 1rem;
          margin: 0;
        }

      }
    }

  }

}
</style>
