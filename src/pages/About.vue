<template>
  <Layout>
    <div class="about">
      <h1 class="welcome-text">
        👦🏻 About Me <span>(A bit about myself)</span>
      </h1>
      <div class="about-content">
        <g-image src="https://res.cloudinary.com/dkdp2ml37/image/upload/v1695812088/me/utrodus-real_lgksfi.jpg"
          alt="utrodus-pic" />
        <div class="paragraf">
          <p>
            I am Utrodus Said Al Baqi, a skilled Flutter developer based in Blitar, Indonesia, with over 4 years of
            experience in app development. Throughout my career, I have worked on <strong><a href="/projects">various
                projects </a></strong> that have honed my
            skills.

          </p>
          <p>
            Over the years, I have successfully delivered a series of customized applications for Android, iOS, and the
            web, leveraging the full potential of Flutter's capabilities.
          </p>
          <p>
            In addition to my current accomplishments, I have ambitious goals and aim to become a <strong><a
                href="https://developers.google.com/community/experts?hl=id">
                Google Developer
                Expert</a></strong>.
            This aspiration drives my passion for continuous learning and innovation.
          </p>

          <p>I'm not just a regular developer; I'm also someone who approaches each project with dedication and
            creativity, ensuring that the result not only meets but exceeds expectations.</p>
          <p>
            For more details about my professional skills and experience, please refer to <g-link
              to="https://drive.google.com/file/d/1Jh6jWzEFOGR5PFBhW7iHwcUk9wYr-fF-/view?usp=drive_link"> <strong>
                My
                Resume 📜</strong>
            </g-link>.
          </p>


        </div>
      </div>

      <hr />




      <!-- <p class="services">I firmly believe that aesthetics are equally vital as functionality. A visually appealing app
        elevates user
        engagement and satisfaction. Hence, I don't just prioritize well-functioning apps; I also prioritize crafting
        captivating interfaces that users will genuinely enjoy interacting with.</p> -->




      <div>
        <h4>🛠️ Skills & Tools</h4>
        <p>
          <img src="https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white"
            alt="Dart" />
          <img src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white"
            alt="Flutter" />
          <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
            alt="JavaScript" />
          <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
            alt="Python" />
          <img src="https://img.shields.io/badge/Firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black"
            alt="Firebase" />
          <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white"
            alt="SQLite" />
          <img
            src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"
            alt="Visual Studio Code" />
          <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
          <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"
            alt="Postman" />
          <img src="https://img.shields.io/badge/adobe_xd-470137?style=for-the-badge&logo=adobe-xd&logoColor=white"
            alt="Adobe XD" />
          <img src="https://img.shields.io/badge/figma-000000?style=for-the-badge&logo=figma&logoColor=white"
            alt="Figma" />
          <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"
            alt="Netlify" />
          <img src="https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white"
            alt="Notion" />
          <img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white"
            alt="Markdown" />
          <img
            src="https://img.shields.io/badge/Google%20Drive-4285F4?style=for-the-badge&logo=googledrive&logoColor=white"
            alt="Google Drive" />
          <img
            src="https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white"
            alt="GitHub Actions" />
          <img src="https://img.shields.io/badge/App_Store-0D96F6?style=for-the-badge&logo=app-store&logoColor=white"
            alt="Appstore" />
          <img src="https://img.shields.io/badge/Google_Play-414141?style=for-the-badge&logo=google-play&logoColor=white"
            alt="Playstore" />
        </p>
      </div>


      <div>
        <h4>🖥️ &nbsp; Workspace Setup</h4>
        <p>
          <img src="https://img.shields.io/badge/Macbook%20Air%20M1-20232A?style=for-the-badge&logo=apple&logoColor=white"
            alt="Macbook Air M1" />
        </p>
        <p>
          <img src="https://img.shields.io/badge/Custom_PC-Computer-blue" alt="Custom PC" /> <br />
          <img src="https://img.shields.io/badge/Intel-Core_i3_10th-0071C5?style=for-the-badge&logo=intel&logoColor=white"
            alt="Intel Core i3 10th Gen" />
          <img src="https://img.shields.io/badge/AMD-Radeon_RX_570-ED1C24?style=for-the-badge&logo=amd&logoColor=white"
            alt="AMD Radeon RX 570" />
        </p>
        <p> <img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white"
            alt="Android" />
          <img src="https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white" alt="iOS" />
        </p>

        <div>

        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About",
    description: "A bit about Utrodus Said Al Baqi"
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

  h4 {
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
      width: 16rem;
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
