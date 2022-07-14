<template>
  <div class="education">
    <h2 class="header-title">Education</h2>

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
          company: "Dicoding Indonesia",
          date: "2020-",
          jobTitle: "Coding Course",
        },
        {
          id: 1,
          company: "Nahdlatul Ulama University Of Blitar",
          date: "2018-2023",
          jobTitle: "Bachelor of Computer Science",
        },
        {
          id: 2,
          company: "Vocational High School State 1 Blitar",
          date: "2014-2017",
          jobTitle: "Infokom, degree: Computer and Network Engineering",
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
.education{
  width: 100%;
  	@media screen and (max-width: 1200px) {
		margin-top:1.5rem;
	}
}
</style>

