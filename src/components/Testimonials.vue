<template>

  <section class="testimonials">
    <h2 class="header-title">Testimonials</h2>

    <hooper :settings="hooperSettings">
      <slide v-for="(slide, i) in slidesData" :index="i">
        <div class="testimonials-box">
          <p class="testimonials-box-content">
            {{ slide.content }}
          </p>

          <div class="testimonials-box-client">
            <g-image :src="slide.img" alt="robait usman" class="testimonials-box-client-img" />
            <div class="testimonials-box-client-profile">
              <p class="testimonials-box-client-profile-name"> <strong> {{ slide.name }}</strong></p>
              <p class="testimonials-box-client-profile-name">{{ slide.jobTitle }}</p>
            </div>
          </div>

        </div>
      </slide>


    </hooper>



  </section>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
  data() {
    return {
      hooperSettings: {
        centerMode: true,
        infiniteScroll: true,
        autoPlay: true,
        playSpeed: 5000,
        wheelControl: false,
        // itemsToShow: 1.25,
        breakpoints: {
          600: {
            itemsToShow: 2
          },
          800: {
            itemsToShow: 2
          },
          1000: {
            itemsToShow: 3,
            pagination: 'fraction'
          }
        }
      },
      slidesData: [
        {
          id: 0,
          img: 'https://res.cloudinary.com/dvhxdwwld/image/upload/v1658494453/robait_y01wus.png',
          name: 'Robait Usman',
          jobTitle: 'Director of CV Ediide Infografika',
          content: 'Utrodus assisted us in completing numerous mobile app projects and was proficient in translating our instructions. He was competent in providing a solution to the issues with our corporate project.',
        },
        {
          id: 1,
          img: 'https://res.cloudinary.com/dvhxdwwld/image/upload/v1658494586/fison_xzf1j8.png',
          name: 'Fison Fahmi',
          jobTitle: 'Bumi Glagah Arum',
          content: 'Utrodus was able to offer a solution for the application we wanted to build, and it worked efficiently also quickly. Our apps are reliable and attractively made. Bumi Glagah Arum tourism is now even more helpful by having apps.',
        },
        {
          id: 2,
          img: 'https://res.cloudinary.com/dvhxdwwld/image/upload/v1658495302/chubil_lh8qe6.png',
          name: 'Chubil Maal',
          jobTitle: 'CEO Nusantaramart.id',
          content: "Utrodus was excellent, the job was completed on schedule and within the allotted spending limit. Going to need Utrodus's help in the future.",
        },
        {
          id: 3,
          img: 'https://res.cloudinary.com/dvhxdwwld/image/upload/v1658505210/jalu_veda_nmjjwp.png',
          name: 'Jalu Veda',
          jobTitle: 'Smart Soil Selector Team',
          content: 'A mobile app project called "smart soil selector" has been successfully finished on time thanks to Utrodus. I suggest you get in touch with Utrodus to discuss your project.',
        },
      ],
    }
  },
  components: {
    Hooper,
    Slide
  },


};
</script>

<style lang="scss" scoped>
.testimonials {
  padding: 2.5rem 0 0;

  .header-title {
    text-align: center;
    margin: 0 auto 1.5rem auto;

  }

  .hooper {
    min-height: 20rem;
    margin: 2rem 0;

    .hooper-list {
      .hooper-track {
        align-items: center;

        .hooper-slide {}
      }
    }
  }


  &-box {
    margin: 0 0.5rem;
    font-weight: 300;
    padding: 2rem;
    color: #000;
    border: 1px solid #ffbf9b;
    background-color: #fff;
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    -ms-border-radius: 12px;
    border-radius: 12px;

    &-content {
      text-align: justify;
      font-size: 0.95em;
    }

    &-client {
      display: flex;
      align-items: center;

      &-img {
        width: 30%;
      }

      &-profile {
        display: flex;
        flex-direction: column;

        &-name {
          margin: 0 0 0 0.5rem;
        }
      }
    }
  }
}
</style>
