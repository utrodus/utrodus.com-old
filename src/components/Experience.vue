<template>
  <div class="experience">
    <h2 class="header-title">Work Experience</h2>

    <experience-item
      v-for="item in items"
      :key="item.id"
      :item="item"
    ></experience-item>
  </div>
</template>

<script>
import ExperienceItem from "~/components/ExperienceItem.vue";
export default {
  data() {
    return {
      items: [
        {
          id: 0,
          company: "Freelance",
          date: "2021-To Now",
          jobTitle: "Flutter Developer",
        },
        {
          id: 1,
          company: "CV Ediide Infografika",
          date: "2019-2021",
          jobTitle: "Flutter Developer & UI Designer",
        },
        {
          id: 2,
          company: "Eezywork",
          date: "2017-2019",
          jobTitle: "Wordpress Designer",
        },
      ],
    };
  },
  components: {
    ExperienceItem,
  },
};
</script>



<style lang="scss" scoped>
.experience{
  width: 100%;
}
</style>

