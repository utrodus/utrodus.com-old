<template>
  <div>
    <h2 class="header-title">Featured Works</h2>
    <div class="projects">
      <ProjectCard v-for="project in $static.allProject.edges" :key="project.node.id" :project="project.node" />
    </div>
    <g-link to="/portfolio" class="view-all"> View all projects </g-link>
  </div>
</template>

<static-query>
query {
  allProject(filter: { published: { eq: true }}, limit: 3) {
    edges {
      node {
        id
        title
        cover_image 
        github_url
        android_url
        apple_url
        website_url
        path
        role
        client
        platform
        backend
        year
      }
    }
  }
}
</static-query>

<script>
import ProjectCard from "~/components/ProjectCard.vue";
export default {
  components: {
    ProjectCard,
  },
};
</script>

<style lang="scss" scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-gap: 1.25rem;

  .view-all {
    font-size: 0.8rem;
    display: inline-block;
    margin-top: 1.5rem;
    font-weight: 600;
  }

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
