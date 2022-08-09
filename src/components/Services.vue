<template>
  <div>
    <h2 class="header-title">What services do I offer ?</h2>
    <div class="services">
      <div class="service-item">
        <g-image src="https://res.cloudinary.com/dvhxdwwld/image/upload/v1658891397/tool-iso-premium_kf3czs.png"
          alt="mobile-app-dev" />
        <h4> Mobile App Development</h4>
        <p>Do you want to create or develop a mobile application? I will help make it happen with Dart & Flutter.</p>
      </div>
      <div class="service-item">
        <g-image src="https://res.cloudinary.com/dvhxdwwld/image/upload/v1658891398/convert-ui_lhaxmn.png"
          alt="mobile-app-dev" />
        <h4>Convert UI Design Into Flutter</h4>
        <p>I will convert any Adobe XD or Figma mobile app design, UI, or mockup into bug-free Flutter code following
          the most recent Design Patterns.</p>
      </div>
      <div class="service-item">
        <g-image src="https://res.cloudinary.com/dvhxdwwld/image/upload/v1658891397/pwa_wf6u4d.png"
          alt="mobile-app-dev" />
        <h4>Progressive Web App development</h4>
        <p>Are you looking to develop A web app that can be installed on the home screen ? You
          landed at the right place! </p>
      </div>

    </div>
  </div>

</template>


<script>
import ProjectCard from "~/components/ProjectCard.vue";
export default {
  components: {
    ProjectCard,
  },
};
</script>

<style lang="scss" scoped>
.header-title {
  margin: 0 auto 1.5rem;
}

.services {
  margin-top: 1rem;
  margin-bottom: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(279px, 1fr));
  grid-column-gap: 1.1rem;
  grid-row-gap: 1.6rem;

  .service-item {
    padding: 32px;
    color: var(--title-color);
    border: var(--border-service-item);
    background: hsla(0, 0%, 100%, .05);
    border-radius: 12px;

    img {
      background: rgb(80, 77, 85);
      background: linear-gradient(180deg, rgba(80, 77, 85, 1) 0%, rgba(43, 40, 49, 1) 100%);
      width: 48px;
      height: 48px;
      border-radius: 15px;
      padding: 5px;
    }

    h4 {
      margin-bottom: 10px;
      color: var(--title-color);
      font-weight: bold;
      font-size: 0.9em;
    }

    p {
      color: var(--service-desc-color);
      font-size: 0.85em;
      margin-bottom: 0;
      line-height: 22px;
    }

  }

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
