<template>
  <div>
    <b-container>
      <div class="inicio-carousel-cards">
        <b-row>
          <b-col cols="8">
            <Carousel :slides="slides" />
          </b-col>
          <b-col class="inicio-cards" cols="4">
            <CardOverlay/>
            <CardOverlay/>
          </b-col>
        </b-row>
      </div>
      <div class="cards-noticias">
        <b-row>
          <b-col cols="8">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </b-col>
          <b-col cols="4">
            <MenuLateral/>
          </b-col>
        </b-row>
      </div>  
    </b-container>
  </div>
</template>

<script>
import Carousel from "../base/Carousel.vue"
import CardOverlay from "../base/CardOverlay.vue"
import Card from "../base/Card.vue"
import MenuLateral from "../base/MenuLateral.vue"
import Footer from "../base/Footer"

export default {
  components: {
    Carousel, 
    CardOverlay, 
    Card, 
    MenuLateral, 
    Footer,
  },
  // directives: {

  // },

  data() {
    return {
      slides: [
        {
          titulo: "first slide",
          texto: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
          imagem: "https://picsum.photos/1024/480/?image=52"
        },
        {
          titulo: "slide 2",
          texto: "Nutella? Hmm",
          imagem: "https://picsum.photos/1024/480/?image=52"
        }, 
        {
          titulo: "slide 3",
          texto: "Nutella? Hmm",
          imagem: "https://picsum.photos/1024/480/?image=52"
        },
         {
          titulo: "slide 4",
          texto: "Nutella? Hmm",
          imagem: "https://picsum.photos/1024/480/?image=52"
        },
         {
          titulo: "slide 5",
          texto: "Nutella? Hmm",
          imagem: "https://picsum.photos/1024/480/?image=52"
        }
      ]
    }
  },

  methods: {

  },

  created() {

  },

  computed: {

  },
}
</script>

<style lang="scss">

.inicio-carousel-cards {
  margin-top: 40px;
  margin-bottom: 20px;
}

.cards-noticias {
  margin-bottom: 30px;
}
</style>