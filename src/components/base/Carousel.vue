<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="5000"
      controls
      indicators
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        v-for="(slide, index) in slides"
        :key="index"
        :caption="slide.titulo"
        :text="slide.texto"
        :img-src="slide.imagem"
      ></b-carousel-slide>
      </b-carousel>
  </div>
</template>

<script>
  export default {
    props: {
        slides: {
            type: Array,
            default: () => [],
        },
    },  
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style>
.carousel.slide {
    height: 100%;
}

.carousel-item img {
 height: 480px;
}

.sr-only{
    display: none;
}

.carousel ol li {
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 3px;
    margin-right: 3px;
    margin-left: 3px;
    text-indent: -999px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;
}
</style>