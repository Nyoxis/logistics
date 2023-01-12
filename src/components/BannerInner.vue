<template>
  <div id="banner-inner">
    <div id="background">
      <div class="pat" id="pat1"></div>
      <div class="col" id="col1"></div>
      <div class="pat" id="pat2"></div>
      <div class="col" id="col2"></div>
      <div class="pat" id="pat3"></div>
      <div class="col" id="col3"></div>
    </div>
    <BannerGlobe/>
    <div id="shape"></div>
  </div>
</template>

<script>
import BannerGlobe from '../components/BannerGlobe'
export default {
  name: 'BannerInner',
  components: {
    BannerGlobe
  }
}
</script>

<style scoped>
#banner-inner {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: calc(100% + 90px + 20px + 100px);
  top: -90px;
  z-index: -1;
}

#background, #background * {
  position: absolute;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
}

#background { background-color: #00c3ff}
.pat {
 background-image: url(../assets/pat1.png);
}
#pat1 { animation: shift1 12s linear infinite normal; }
@keyframes shift1 {
  from { background-position-x: 0; }
  to { background-position-x: 423px; }
}
#pat2 { animation: shift2 12s linear infinite normal; opacity: 0.6; background-position-x: 34px;}
@keyframes shift2 {
  from { background-position-x: 34px; }
  to { background-position-x: 457px; }
}
#pat3 { animation: shift3 12s linear infinite normal; opacity: 0.3; background-position-x: -28px;}
@keyframes shift3 {
  from { background-position-x: -28px; }
  to { background-position-x: 395px; }
}
#col1 { background-image: linear-gradient(90deg, rgba(79, 27, 25, 0.452), rgba(255, 0, 0, 0.445), rgba(223, 140, 47, 0.452), rgba(79, 27, 25, 0.452))}
#col2 { background-image: linear-gradient(90deg, rgba(255, 179, 0, 0.6), rgba(180, 116, 21, 0.6), rgba(204, 122, 84, 0.6), rgba(255, 179, 0, 0.6))}
#col3 { background-image: linear-gradient(90deg, rgba(95, 140, 192, 0.918), rgba(40, 192, 192, 0.623), rgba(255, 228, 109, 0.753))}
#col1, #col2 { animation: shiftcol 6s linear infinite normal;}
@keyframes shiftcol {
  from { background-position-x: 100vw; }
  to { background-position-x: 0; }
}

#shape {
  position: absolute;
  width: 100%;
  height: 100%;
    background-position: bottom right 
                        ,bottom right
                        ,bottom left;
    background-image: linear-gradient(135deg, transparent 70px, #ffffff 71px)
                     ,linear-gradient(90deg, #ffffff, #ffffff)
                     ,linear-gradient(135deg, transparent 70px, #ffffff 71px);
    background-size: 100px 200px
                    ,calc(100% - 100px) 100px
                    ,100px 100px;
    background-repeat: no-repeat;
}

@media screen and (max-width: 1200px) {
  #pat1 { animation: shift1; }
  #pat2 { animation: shift2; }
  #pat3 { animation: shift3; }

  #col1 { background-image: linear-gradient(120deg, rgba(79, 27, 25, 0.452), rgba(255, 0, 0, 0.445), rgba(223, 140, 47, 0.452), rgba(79, 27, 25, 0.452))}
  #col2 { background-image: linear-gradient(120deg, rgba(255, 179, 0, 0.6), rgba(180, 116, 21, 0.6), rgba(204, 122, 84, 0.6), rgba(255, 179, 0, 0.6))}
  #col3 { background-image: linear-gradient(120deg, rgba(95, 140, 192, 0.918), rgba(40, 192, 192, 0.623), rgba(255, 228, 109, 0.753))}
  #col1, #col2 { animation: shiftcol;}

  #banner-inner {
    height: calc(100% + 90px + 20px);
  }
  #shape {
    display: none;
  }
}

@media screen and (max-width: 600px) {
}
</style>