<template>
  <div class="carousel">
    <div class="carousel__slide fade">
      <img
        srcset="
          ../assets/imgs/slide1.png       1920w,
          ../assets/imgs/slide1-1144w.png 1144w,
          ../assets/imgs/slide1-600w.png   600w
        "
        sizes="100vw"
        class="carousel__img"
        src="../assets/imgs/slide1.png"
        alt="Mktplace - Notebooks"
      />
    </div>
    <div class="carousel__slide fade">
      <img
        srcset="
          ../assets/imgs/slide2.png       1920w,
          ../assets/imgs/slide2-1144w.png 1144w,
          ../assets/imgs/slide2-600w.png   600w
        "
        sizes="100vw"
        class="carousel__img"
        src="../assets/imgs/slide2.png"
        alt="Mktplace - Smartphones"
      />
    </div>

    <div class="carousel__nav-bubbles">
      <div class="carousel__nav-bubble" @click="goToSlide(1)"></div>
      <div class="carousel__nav-bubble" @click="goToSlide(2)"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mktplace-carousel",
  data: () => ({
    index: 1,
  }),
  mounted() {
    this.displaySlide(this.index);
  },
  methods: {
    goToSlide(n) {
      this.displaySlide((this.index = n));
    },

    displaySlide(n) {
      let slides = document.getElementsByClassName("carousel__slide");
      let controls = document.getElementsByClassName("carousel__nav-bubble");

      if (n > slides.length) this.index = 1;
      if (n < 1) this.index = slides.length;

      for (let i = 0; i < controls.length; i++) {
        slides[i].style.display = "none";
      }

      for (let i = 0; i < controls.length; i++) {
        controls[i].className = controls[i].className.replace(" active", "");
      }
      slides[this.index - 1].style.display = "block";
      controls[this.index - 1].className += " active";
    },
  },
};
</script>

<style lang="scss">
.carousel {
  width: 100%;
  max-width: 100%;
  position: relative;

  &__slide {
    display: none;
  }

  &__nav-bubbles {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__nav-bubble {
    cursor: pointer;
    height: 0.5rem;
    width: 0.5rem;
    margin: 0 1rem;
    color: #909090;
    background-color: #fff;
    border-radius: 100%;
    border: 3px solid #fff;
    box-shadow: 0px 0px 0px 1.5px currentColor;
    box-sizing: initial;
    transition: all 0.4s ease;

    &:hover {
      box-shadow: 0px 0px 0px 1.5px #8e36b7;
    }
  }

  &__nav-bubble.active {
    color: #8e36b7;
    background-color: #8e36b7;
    transition: all 0.6s ease;
  }

  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 2s;
    animation-name: fade;
    animation-duration: 2s;
  }

  .fade:not(.show) {
    opacity: 1;
  }

  @-webkit-keyframes fade {
    from {
      opacity: 0.1;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade {
    from {
      opacity: 0.1;
    }
    to {
      opacity: 1;
    }
  }
}
</style>
