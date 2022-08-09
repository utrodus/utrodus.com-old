<template>
  <Layout>

    <h1 class="welcome-text">My Projects</h1>

    <div class="projects">
      <ProjectCard v-for="edge in $page.projects.edges" :key="edge.node.id" :project="edge.node" />
      <Pager :info="$page.projects.pageInfo" />
    </div>
  </Layout>
</template>

<page-query>
query($page: Int) {
  projects: allProject(filter: { published: { eq: true }}, perPage: 6, page: $page) @paginate {
     pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        cover_image 
        github_url
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
</page-query>

<script>
import ProjectCard from "~/components/ProjectCard.vue";
import { Pager } from "gridsome";

export default {
  components: {
    ProjectCard,
    Pager,
  },
  metaInfo: {
    title: "Portfolio",
  },
};
</script>

<style lang="scss" scoped>
.welcome-text {
  text-align: center;
  margin: 1.5rem 0;
}

.projects {
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-gap: 1.25rem;
  padding: 1rem 0 5rem 0;

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

a {
  text-decoration: none;
}
</style>
