<template>
  <Layout>
    <div class="about">
      <h1 class="welcome-text">
        About Me <span>(A bit 👦🏻 about myself)</span>
      </h1>
      <div class="about-content">
        <g-image src="https://res.cloudinary.com/dvhxdwwld/image/upload/v1658891397/utrodus_w8ad5s.webp"
          alt="utrodus-pic" />
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
            <g-link to="https://drive.google.com/file/d/1Jh6jWzEFOGR5PFBhW7iHwcUk9wYr-fF-/view?usp=drive_link"> <strong> My
                Resume</strong>
            </g-link>.
          </p>
        </div>
      </div>

      <hr />


      <p class="services">
       I am a passionate and skilled Flutter developer, dedicated to creating stunning and user-friendly mobile applications. My goal is to deliver exceptional experiences to users by crafting beautiful products.
      </p>

      <p class="services">
        Specializing in Flutter, a versatile and powerful framework for cross-platform development, I develop applications that seamlessly run on Android, iOS, and the web. This saves you time and effort by providing a unified solution for multiple platforms.
      </p>

      <p>
        I believe that aesthetics are just as important as functionality. A visually appealing app enhances user engagement and satisfaction. That's why I focus on designing captivating interfaces that users will love to interact with.
      </p>

      <p>
        To see examples of my work, please explore my web portfolio. It showcases my previous projects and demonstrates my commitment to delivering high-quality mobile applications.
      </p>

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
        font-size: 1em;
      }
    }
  }


  @media only screen and (max-width: 900px) {
    width: 100%;
  }



}
</style>
