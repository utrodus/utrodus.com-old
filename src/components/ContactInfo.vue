<template>
  <div>
    <div class="contact">
      <div class="sns">
        <Author />
      </div>
      <div>
        <h1 class="welcome-text">Get in touch — let’s work together.</h1>
        <p>
          Email:
          <a href="mailto:contact.utrodus@gmail.com">
            contact.utrodus@gmail.com</a
          >
        </p>
        <p>
          Phone:
          <a
            href="https://api.whatsapp.com/send?phone=628165416082&text=Hi!%20Utrodus%20%F0%9F%96%90%EF%B8%8F"
          >
            +62 816 5416 082
          </a>
        </p>
        <p class="note">
          *Note: I regularly get back to all inquiries I receive in 24 hours.
        </p>
      </div>
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
	padding-top: 5rem;
	display: flex;
align-items: center;
	@media screen and (max-width: 800px) {
		width: 100%;
		margin: 3rem 0 0 0;
		padding: 0;
		flex-direction: column-reverse;
	}
  .note{
        font-size: .85em;
    font-family: 'Fira Sans';

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
