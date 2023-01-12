<template>
  <div id="bannerimage" v-show="isload">
    <img src="../assets/globe.png" id="globe" @load="loaded">
    <img src="../assets/plane.png" id="plane">
  </div>
</template>

<script>
export default {
  name: 'BannerGlobe',
  data(){ return {
    isload: false
  }},
  methods: {
    loaded() {
      this.isload = true
    }
  }
}

</script>

<style scoped>
#bannerimage, #plane{
  position: absolute;
}
#bannerimage {
  left: calc(50% - 200px); top: 200px;

  animation: rise 3s ease-out 0s 1 normal both; 
}
@keyframes rise {
  from { transform: translateY(100%) rotate(-90deg); }
  to { transform: translateY(0) rotate(0deg)}
}
#globe{
  width: 600px; height: 600px;
}
#plane{
  width: 60px; height: 60px;
  left: 190px; top: 160px;

  animation: flight 8s ease-out 0s 1 normal both; 
 }
@keyframes flight {
  from { transform: translate(-30px , 60px); }
  to { transform: translate(30px, -60px); }
}

@media screen and (max-width: 600px) {
  #bannerimage {
    animation: rise 1s ease-out 0s 1 normal both; 
  }
  @keyframes rise {
    from { transform: translateX(40%) rotate(-50deg); opacity: 0;}
    to { transform: translateX(30%) rotate(-70deg); opacity: 1;}
  }

  #plane {
    animation: flight;
  }
}
</style>