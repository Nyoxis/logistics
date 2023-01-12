<template>
  <Layout>

    <Banner id="banner"/>
    <Tariffs id="tariffs" home="true"/>
    <Shape id="shape1"/>
    <CardsServices id="cardsservices"/>
    <Shape id="shape2"/>
    <CardsAdvantages id="cardsadvantages"/>
    <Shape class="invshape" id="shape3"/>
    <Application id="application"/>
  </Layout>
</template>


<script>
import Layout from './Layout.vue'

import Banner from './components/Banner.vue'
import Tariffs from './components/Tariffs'
import CardsServices from './components/CardsServices.vue'
import Shape from './components/Shape.vue'
import CardsAdvantages from './components/CardsAdvantages.vue'
import Application from './components/Application.vue'

export default {
  name: 'App',
  components: {
    Layout,
    Banner,
    Tariffs,
    CardsServices,
    Shape,
    CardsAdvantages,
    Application
  }
}
</script>

<style>
#banner {grid-area: banner;}
#tariffs {grid-area: tariffs;}
#shape1 {grid-area: shape1;}
#cardsservices {grid-area: cardsservices;}
#shape2 {grid-area: shape2;}
#cardsadvantages {grid-area: cardsadvantages;}
#shape3 {grid-area: shape3;}
#application{grid-area: application;}

#content {
  display: grid;
  grid-template-areas:
    "banner banner banner"
    ". tariffs ."
    "shape1 shape1 shape1"
    ". cardsservices ."
    "shape2 shape2 shape2"
    ". cardsadvantages ."
    "shape3 shape3 shape3"
    ". application .";
  grid-template-columns: 1fr 1400px 1fr;

  grid-row-gap: 20px;
}
@media screen and (max-width: 1500px) {
  #content {
    grid-template-columns: 1fr 16fr 1fr;
  }
}

@media screen and (max-width: 1200px) {
  #content {
    grid-template-columns: 0 auto 0;
  }
}
</style>