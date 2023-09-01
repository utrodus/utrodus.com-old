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
            I'm Utrodus Said Al Baqi, a Flutter developer living in Blitar, Indonesia. I've been creating the
            mobile app for 4+ years and have become pretty good at it.
          </p>
          <h4><strong>A little more...</strong></h4>
          <p>
            I’m super passionate about design, development, and business. From a technical standpoint, I spend most of my
            time working with Dart and Flutter.
          </p>


          <p>
            Let's Check my professional skills and experience on
            <g-link to="https://drive.google.com/file/d/1Jh6jWzEFOGR5PFBhW7iHwcUk9wYr-fF-/view?usp=drive_link"> <strong>
                My
                Resume</strong>
            </g-link>.
          </p>

        </div>
      </div>

      <hr />


      <p class="services">
        Specializing in Flutter, a versatile and powerful framework for cross-platform
        development, I develop applications
        that seamlessly run on Android, iOS, and the web. This saves you time and effort by providing a unified solution
        for multiple platforms.
      </p>

      <!-- <p class="services">I firmly believe that aesthetics are equally vital as functionality. A visually appealing app
        elevates user
        engagement and satisfaction. Hence, I don't just prioritize well-functioning apps; I also prioritize crafting
        captivating interfaces that users will genuinely enjoy interacting with.</p> -->


      <p class="services">
        One more thing I'd like to say is that I aspire to achieve the distinction of becoming a <strong>
          <a href="https://developers.google.com/community/experts?hl=id">
            Google Developer
            Expert.</a></strong> in the field of Flutter.
      </p>

      <p class="services">Feel free to check out the results of my Flutter projects that I've worked
        on in the <strong> <a href="/portfolio">project section</a>.</strong></p>
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
    margin: 0 0rem 1.5rem;
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

  .services {
    margin: 1rem 0;
    text-align: left;
    font-size: 0.9;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
  }



}
</style>
