<template>
  <Layout>
    <Calculator id="calculator" :tariff="tariff" @updateTariff="tariff = $event" @attachData="attachData"/>
    <Shape id="shape1"/>
    <TariffsContent id="tariffscontent" @updateTariff="tariff = $event"/>
    <Shape class="invshape" id="shape2"/>
    <Application id="application" ref="application"/>
  </Layout>
</template>


<script>
import Layout from '../Layout.vue'

import Calculator from '../components/Calculator.vue'
import Shape from '../components/Shape.vue'
import Application from '../components/Application.vue'
import TariffsContent from '../components/TariffsContent.vue'

export default {
  name: 'App',
  components: {
    Layout,
    Calculator,
    Shape,
    TariffsContent,
    Application
  },
  data(){ return{
    tariff: 'auto'
  }},
  methods: {
    attachData: function(Data) {
      this.$refs.application.attachData(Data)
    }
  }
}
</script>

<style>
#calculator{grid-area: calc}
#shape1{grid-area: shape1}
#tariffscontent{grid-area: tariffs}
#shape2{grid-area: shape2}
#application{grid-area: application}

#content {
  display: grid;
  grid-template-areas:
    ". calc calc calc ."
    "shape1 shape1 shape1 shape1 shape1"
    ". . tariffs . ."
    "shape2 shape2 shape2 shape2 shape2"
    ". . application . .";
  grid-template-columns: 1fr 2fr 1400px 2fr 1fr;

  grid-row-gap: 20px;
}
@media screen and (max-width: 1500px) {
  #content {
    grid-template-columns: 0 1fr 16fr 1fr 0;
  }
}
@media screen and (max-width: 1200px) {
  #content {
    grid-template-columns: 0 0 auto 0 0;
  }
}
</style>