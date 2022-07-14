<template>
  <div class="experience-item">
    <p class="company">
      <strong> {{ item.company }}</strong>
    </p>
    <div class="row">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-clock"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
      <p class="date">{{ item.date }}</p>
      <p class="separator">|</p>
      <p class="job-title">{{ item.jobTitle }}</p>
    </div>
    <p></p>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="scss" scoped>

  .experience-item{
    margin: 1rem 0;
    .row{
      display: flex;      
      align-items: center;
    }
    p{
      margin-bottom: 0;
     
      &.date, &.separator, &.job-title{
        font-size: .8em !important;
      }
    }
    .separator{
      margin: 0 .3rem;
    }
   
}
</style>
