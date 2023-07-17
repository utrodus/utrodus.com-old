<template>
  <div class="welcome">
    <g-image src="https://res.cloudinary.com/dvhxdwwld/image/upload/v1658891397/utrodus_w8ad5s.webp"
      alt="profile picture" />
    <div>
      <h1 class="welcome-text">
         Hi 👋 I'm Utrodus <strong>Said Al Baqi </strong>
      </h1>
      <h1 class="welcome-flip">
        
        <span class="welcome-flip-word"> Flutter Developer </span> <span style="color:white;"></span>
        <!-- <span class="welcome-flip-word">
          <textra :data="words" :timer="2" :infinite="true" filter="bottom-top" />
        </span> -->
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
        
        
        </span>
      </h1>
      <p class="welcome-intro">
        I Offer services for developing mobile applications  with a passion for products that are beautiful and easy to use. If
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
          <g-link to="https://drive.google.com/uc?export=download&id=1Jh6jWzEFOGR5PFBhW7iHwcUk9wYr-fF-"
            aria-label="Download Resume" class="download-file">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-download">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span class="label">
              MY RESUME

            </span>
          </g-link>
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
  font-family: "Karla", serif;
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
      width: 30%;
      height: 30%;
    }

    @media (min-width: 801px) {
      margin-right: 2.5rem;
      width: 17rem;
    }
  }

  &-text {
    width: 100%;
    letter-spacing: 1px;
    text-align: center;
    font-size: 1.4em;
    margin: 0.8rem 0 0.5rem;

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
        background: linear-gradient(180deg, rgba(101, 86, 110, 1) 0%, rgba(76, 57, 88, 1) 100%);
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

        background-color: var(--cta-bg-color);
        background-clip: padding-box;
        border: 3px solid hsla(0, 0%, 100%, .3);
        border-radius: 15px;
        font-family: 'Karla';
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
        font-family: 'Karla';
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
