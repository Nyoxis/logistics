<template>
  <Layout>
    <ContactInfo id="contactinfo"/>
    <ContactBanner id="contactbanner"/>
    <ContactContent id="contactcontent"/>
    <Shape class="invshape" id="shape2"/>
    <Application id="application" ref="application"/>
  </Layout>
</template>


<script>
import Layout from '../Layout.vue'

import Application from '../components/Application.vue'
import ContactInfo from '../components/ContactInfo.vue'
import ContactBanner from '../components/ContactBanner.vue'
import ContactContent from '../components/ContactContent.vue'
import Shape from '../components/Shape.vue'

export default {
  name: 'App',
  components: {
    Layout,
    ContactInfo,
    ContactBanner,
    ContactContent,
    Shape,
    Application
  }
}
</script>

<style>
body {
  background: white;
}
#pattern {
  display: none;
}
#contactinfo{grid-area: info}
#contactbanner{grid-area: banner}
#contactcontent{grid-area: contacts}
#shape2{grid-area: shape}
#application{grid-area: application}

#content {

  display: grid;
  grid-template-areas:
    ". info ."
    "banner banner banner"
    ". contacts ."
    "shape shape shape"
    ". application .";
  grid-template-columns: 1fr 1400px 1fr;

  grid-row-gap: 20px;
}

@media screen and (max-width: 1500px) {
  #content {
    grid-template-columns: 1fr 16fr 1fr;
  }
}
@media screen and (max-width: 600px) {
  #content {
    grid-template-columns: 0 auto 0;
  }
  .card>* {
    margin: 10px 20px;
  }
}
</style>