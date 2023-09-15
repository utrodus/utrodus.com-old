<template>
  <g-link :to="project.path">
    <div class="project-card content-box">
      <div class="project-card__content">

        <g-image alt="Cover image" v-if="project.cover_image" class="project-card__image" :src="project.cover_image" />

        <h5 class="project-card__title" v-html="project.title" />
        <p class="project-card__desc" v-html="project.description"></p>
        <!-- <div class="url-preview">
        <g-link :to="project.github_url" class="url">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-github">
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
            </path>
          </svg>
        </g-link>
        <g-link :to="project.website_url" class="url">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-external-link">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </g-link>
        <g-link :to="project.website_url" class="url">
          <svg width="24" height="24" viewBox="0 0 128 128">
            <path
              d="M97.905 67.885c.174 18.8 16.494 25.057 16.674 25.137-.138.44-2.607 8.916-8.597 17.669-5.178 7.568-10.553 15.108-19.018 15.266-8.318.152-10.993-4.934-20.504-4.934-9.508 0-12.479 4.776-20.354 5.086-8.172.31-14.395-8.185-19.616-15.724C15.822 94.961 7.669 66.8 18.616 47.791c5.438-9.44 15.158-15.417 25.707-15.571 8.024-.153 15.598 5.398 20.503 5.398 4.902 0 14.106-6.676 23.782-5.696 4.051.169 15.421 1.636 22.722 12.324-.587.365-13.566 7.921-13.425 23.639M82.272 21.719c4.338-5.251 7.258-12.563 6.462-19.836-6.254.251-13.816 4.167-18.301 9.416-4.02 4.647-7.54 12.087-6.591 19.216 6.971.54 14.091-3.542 18.43-8.796">
            </path>
          </svg>

        </g-link>
      </div> -->

      </div>
    </div>
  </g-link>
</template>

<script>
export default {
  props: ["project"],
};
</script>

<style lang="scss">
.project-card {
  margin-bottom: var(--space);
  position: relative;
  box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: auto;
  width: auto;

  @media screen and (max-width: 800px) {
    margin-bottom: calc(var(--space) / 2);
  }

  &__image {
    width: 100vw;
  }

  &__title {
    margin-top: 0.5em;
    margin-bottom: .9em;
    color: var(--body-color);
    text-transform: inherit;
  }

  &__desc {
    font-size: 0.85em;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 20px 40px 0 rgba(0, 0, 0, 0.2);
  }

  &__tags {
    z-index: 1;
    position: relative;
  }

  .url-preview {
    display: flex;
    justify-content: end;
    align-items: center;

    .url {
      display: flex;
      align-items: center;
      font-family: 'Roboto', sans-serif;
      font-size: 1em;
      font-weight: bold;
    }
  }


}

.feather {
  margin-right: 0.5rem;
}
</style>
