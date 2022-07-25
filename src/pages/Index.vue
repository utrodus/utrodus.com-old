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
import FeaturedPost from "~/components/FeaturedPost.vue";
import FeaturedProject from "../components/FeaturedProject.vue";
import WelcomeIntro from "../components/WelcomeIntro.vue";
import Experience from "../components/Experience.vue";
import ContactInfo from "../components/ContactInfo.vue";
import Educations from "../components/Educations.vue";
import Testimonials from "../components/Testimonials.vue";
export default {
  metaInfo: {
    title: "Utrodus Said",
  },

  components: {
    FeaturedPost,
    FeaturedProject,
    WelcomeIntro,
    ContactInfo,
    Experience,
    Educations,
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
