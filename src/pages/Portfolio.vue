<template>
  <Layout>

    <h1 class="welcome-text">My Projects</h1>

    <div class="projects">
      <ProjectCard v-for="edge in $page.projects.edges" :key="edge.node.id" :project="edge.node" />
    </div>
    <Pager :info="$page.projects.pageInfo" class="pager-container" linkClass="pager-container__link" />
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
        description
        cover_image 
        github_url
        website_url
        android_url
        apple_url
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
  padding: 1rem 0 2rem 0;

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

.pager-container {
  width: 100%;
  margin: 1rem auto 3rem;
  text-align: center;
  display: inline-block;
  font-size: 0.9rem;
  color: black;

  &__link {
    text-align: center;
    padding: 0.6rem 1.2rem;
    color: var(--title-color);
    text-decoration: none;

    &:hover {
      color: var(--title-color);
      border: var(--border-service-item);
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
    }
  }
}

.active {
  color: #fff;
  border: var(--border-service-item);
  background: rgb(214, 97, 173);
  background: linear-gradient(126deg, rgba(214, 97, 173, 1) 0%, rgba(95, 16, 129, 1) 100%);
  border-radius: 12px;
}
</style>
