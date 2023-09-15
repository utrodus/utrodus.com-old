<template>
  <div>
    <div class="contact">

      <div class="contanct-info">
        <h2 class="welcome-text">Get in touch — let’s work together.</h2>
        <div class="contact-content">
          <p>
            Email:
            <a href="mailto:contact.utrodus@gmail.com" class="email">
              contact.utrodus@gmail.com</a>
          </p>
          <p>
            WhatsApp:
            <a href="https://api.whatsapp.com/send?phone=628165416082&text=Hi!%20Utrodus%20%F0%9F%96%90%EF%B8%8F"
              target="_blank">
              +62 816 5416 082
            </a>
          </p>
        </div>

        <p class="note">
          *Note: I regularly get back to all inquiries I receive in 24 hours.
        </p>
      </div>
      <!-- <div class="sns">
        <Author />
      </div> -->
    </div>

    <div class="sns"></div>
  </div>
</template>

<script>
import Author from "~/components/Author.vue";
export default {
  components: {
    Author,
  },
};
</script>

<style lang="scss" scoped>
.contact {
  padding: 1rem 0;
  align-items: center;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0;
    flex-direction: column-reverse;
  }

  .note {
    font-size: .85em;
    font-family: 'Roboto', sans-serif;

  }

  &-info {
    padding-top: 1rem;
  }

  &-content {



    @media screen and (min-width: 801px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .email {
      margin-right: 1rem;
    }
  }
}

.sns {
  width: 50%;

  @media screen and (max-width: 800px) {
    margin-top: 3rem;
    width: 100%;
  }
}

p {
  margin: 0;
}
</style>
