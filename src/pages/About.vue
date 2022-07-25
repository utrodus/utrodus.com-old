<template>
  <Layout>
    <div class="about">
      <h1 class="welcome-text">
        About Me <span>(A bit 👦🏻 about myself)</span>
      </h1>
      <div class="about-content">
        <g-image src="~/assets/images/utrodus.png" alt="utrodus-pic" />
        <div class="paragraf">
          <p>
            Hello, my name is Utrodus Said Al Baqi, Flutter Developer from
            Indonesia.

          </p>
          <p>
            I like to learn on my initiative and formulate what I want to
            master (learning objective, resources for learning, and evaluating
            results).
          </p>
          <p>
            Becoming a
            <strong> Google Developer Expert.</strong>
            is the career I aspire to.
          </p>
          <p>
            A more detailed view of my professional abilities and experience
            <br />
            is available on
            <g-link to="https://drive.google.com/file/d/13bVeMUYhrYGSwN4OWAM2apLwunNI5faa/view?usp=sharing"> <strong> My
                Resume</strong>
            </g-link>.
          </p>
        </div>
      </div>

      <hr />
      <div class="toolbar-sub">
        <h1>What services do I offer ?</h1>
      </div>
      <p class="services">
        👨🏼‍💻 Mobile App Development, 🎨 UI Design, 🚀 Rapid Prototyping, 👨🏻‍🏫
        Private Coding Course
      </p>

      <div class="toolbar-sub">
        <h2></h2>
      </div>
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
  padding-top: 1rem;

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
    display: flex;
    align-items: center;

    @media screen and (max-width: 1100px) {
      flex-direction: column;
      margin-top: 0;
    }

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
        font-size: 1.1em;
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

  p.services {
    font-size: 1.2em;
  }
}
</style>
