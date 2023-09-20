<template>
  <Layout>
    <welcome-intro></welcome-intro>
    <div class="content">
      <!-- <div class="posts">
				<featured-post></featured-post>
			</div> -->
      <div class="projects">
        <featured-project></featured-project>
      </div>
      <services></services>
      <testimonials></testimonials>
      <!-- <div class="experience-education">
        <experience></experience>
        <educations></educations>
      </div> -->
    </div>
    <contact-info />
  </Layout>
</template>

<script>
// import FeaturedPost from "~/components/FeaturedPost.vue";
import FeaturedProject from "../components/FeaturedProject.vue";
import WelcomeIntro from "../components/WelcomeIntro.vue";
import Services from "../components/Services.vue";
import ContactInfo from "../components/ContactInfo.vue";
import Testimonials from "../components/Testimonials.vue";
export default {
  metaInfo: {
    title: "Flutter Developer",
    description: "Hello 👋 I'm Utrodus Said a Freelance Flutter Developer from Indonesia",
  },

  components: {
    // FeaturedPost,
    FeaturedProject,
    WelcomeIntro,
    ContactInfo, Services,
    Testimonials,
  },
};
</script>

<style lang="scss" scoped>
.posts {
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 2rem 0;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
}

.experience-education {
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
}

.projects {
  margin: 3rem 0;
}

a {
  text-decoration: none;
  padding: 0 0.5rem;
}

h2 {
  margin-bottom: 1rem;
}

hr {
  width: 25%;
  margin: 0;
}
</style>
