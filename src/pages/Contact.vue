<template>
  <Layout>
    <div class="about">
      <h2 class="welcome-text">
        🚀 Get in touch — let’s work together.
      </h2>
      <div class="about-content">
        <div class="paragraf">
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
          <p>
            Telegram:
            <a href="https://t.me/said_albaqi" target="_blank">
              @said_albaqi</a>
          </p>


        </div>
      </div>
      <hr />

      <div class="toolbar-sub">
        <h2>📜 Terms </h2>
      </div>


      <ol>
        <li class="term"><strong> Contact Information:</strong> Please use the provided contact methods or website
          chat.</li>
        <li class="term"><strong>Project Details:</strong> Include a clear project description with deadlines and
          potential budgets.</li>
        <li class="term"><strong>Confidentiality: </strong>I will maintain the confidentiality of the information you
          provide and am open
          to signing a
          non-disclosure agreement if needed.</li>
        <li class="term"><strong>Collaboration: </strong>I'm open to discussions and collaboration but require a written
          agreement before
          commencing a
          project.</li>
        <li class="term"><strong>Payment: </strong>Payment details will be discussed during our conversation and must
          align with our
          agreement.</li>
        <li class="term"><strong>Acceptance: </strong>I reserve the right to decline projects for any reason and can
          terminate
          collaboration in case of
          violations or non-compliance with our agreed terms.</li>
      </ol>
      <p>I appreciate your interest, and I look forward to a potential collaboration. 😊</p>




    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About",
  },
};
</script>

<style lang="scss" scoped>
.about {
  width: 95%;
  margin: 0 auto;
  padding-bottom: 3rem;

  h1 {
    span {
      font-weight: 400;
      font-size: 0.65em;
    }

    @media screen and (max-width:425px) {
      text-align: center;
      font-size: 1.3em;
    }

    @media (min-width: 426px) and (max-width:1100px) {
      text-align: center;
      font-size: 1.5em;
    }

  }

  h3 {
    margin: 1rem 0;
  }

  hr {
    margin: 2rem 0 1.5rem;
    background-color: #424242;
    height: 2px;
    border: none;
  }

  .about-content {
    margin-top: 2rem;



    img {
      border-radius: 12px;
      width: 12rem;
      margin: 1rem auto 2rem;
      box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, 0.1);


      @media screen and (min-width: 1100px) {
        margin-right: 2rem;
      }
    }

    .paragraf {
      display: flex;
      flex-direction: column;

      p {
        margin-bottom: 0.5rem;
        text-align: justify;
        font-size: 1em;
      }
    }
  }

  // .tech-stack {
  //   display: flex;
  //   margin-top: 1.3rem;

  //   @media screen and (max-width: 800px) {
  //     display: grid;
  //     grid-template-columns: 1fr 1fr 1fr;
  //     grid-template-rows: 1fr 1fr 1fr;
  //     margin-top: 1.3rem;
  //   }

  //   @media screen and (max-width: 1000px) {
  //     display: grid;
  //     grid-template-columns: 1fr 1fr 1fr 1fr;
  //     grid-template-rows: 1fr 1fr 1fr;
  //     margin-top: 1.3rem;
  //   }


  // }

  @media only screen and (max-width: 900px) {
    width: 100%;
  }

  li.term {
    font-size: 0.95em;
  }
}
</style>
