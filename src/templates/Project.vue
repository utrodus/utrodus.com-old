<template>
  <Layout>
    <div class="project-title">
      <h2 class="project-title__text">
        {{ $page.project.title }}
      </h2>

      <div class="short-desc">
        <div class="short-desc_item">
          <h3 class="short-desc_item_title">ROLE</h3>

          <p class="short-desc_item_content" v-for="role in $page.project.role" :key="role">
            {{ role }}
          </p>
        </div>
        <div class="short-desc_item">
          <h3 class="short-desc_item_title">CLIENT</h3>

          <p class="short-desc_item_content">{{ $page.project.client }}</p>
        </div>
        <div class="short-desc_item">
          <h3 class="short-desc_item_title">Platform</h3>

          <p class="short-desc_item_content">{{ $page.project.platform }}</p>
        </div>
        <div class="short-desc_item">
          <h3 class="short-desc_item_title">Backend</h3>

          <p class="short-desc_item_content">{{ $page.project.backend }}</p>
        </div>

        <div class="short-desc_item">
          <h3 class="short-desc_item_title">YEAR</h3>

          <p class="short-desc_item_content">{{ $page.project.year }}</p>
        </div>

        <div class="short-desc_item">
          <h3 class="short-desc_item_title">URL</h3>

          <p class="short-desc_item_content">
            <g-link :to="$page.project.website_url" class="url"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" class="feather feather-link">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>

                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              Preview
            </g-link>
          </p>
        </div>
        <!-- <g-link :to="$page.project.github_url">
    
              <svg
    
                xmlns="http://www.w3.org/2000/svg"
    
                width="32"
    
                height="32"
    
                viewBox="0 0 24 24"
    
                fill="none"
    
                stroke="currentColor"
    
                stroke-width="2"
    
                stroke-linecap="round"
    
                stroke-linejoin="round"
    
                class="feather feather-github"
    
              >
    
                <path
    
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
    
                ></path></svg
    
            ></g-link> -->
      </div>
    </div>

    <div class="project content-box">
      <g-image alt="Cover image" v-if="$page.project.cover_image" :src="$page.project.cover_image" />
      <div class="project__header"></div>

      <div class="project__content" v-html="$page.project.content" />
    </div>

    <Author class="project-author" />
  </Layout>
</template>

<script>
import Author from "~/components/Author.vue";

export default {
  components: {
    Author,
  },
  metaInfo() {
    return {
      title: this.$page.project.title,
      meta: [
        {
          name: "description",
          content: this.$page.project.description,
        },
      ],
    };
  },
};
</script>

<page-query>
query Project ($id: ID!) {
  project: project (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    description
    content
    github_url
    website_url
    cover_image (width: 860, blur: 10)
    role
    client
    platform
    backend
    year
  }
}
</page-query>

<style lang="scss" scoped>
.project-title {
  padding: calc(var(--space) / 6) 0 calc(var(--space) / 6);
  text-align: center;
  max-width: 1024px;
  margin: 0 auto 1rem auto;

  .short-desc {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;

    @media screen and (max-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }

    &_item {
      padding: 1rem;

      &_title {
        margin: 0 0 0.5em 0;
        font-size: 1.1em;
      }

      &_content {
        margin-bottom: 0;
        font-size: .85em;

        .url {
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Karla", sans-serif;
          font-size: 1em;
          color: #65f4ad;

          svg {
            margin-right: .5rem;
          }
        }
      }
    }
  }
}

.project {
  width: 100%;
  margin: 0 auto 3.5rem auto;
  max-width: 1024px;

  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * 1);
    margin-bottom: calc(var(--space) * 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }

  }

  &.content-box {
    img {
      width: 100%;
      margin-bottom: 1.5rem;
    }
  }

  &__content {
    h1 {
      margin-top: 2em;
    }

    h2:first-child {
      margin-top: 0;
    }

    p {
      color: var(--body-color);

      img {
        margin-top: 1.5em;
      }
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.project-author {
  margin-top: calc(var(--space) / 2);
}
</style>
