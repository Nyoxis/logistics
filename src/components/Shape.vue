<template>
  <div class="shapecontain">
    <div id="shape"></div>
  </div>
</template>

<script>
export default {
  name: 'Shape'
}
</script>

<style scoped>
.shapecontain {
  height: 0;
  z-index: -1;
}
#shape {
  position: relative;
  top: -100px;
  width: 100vw;
  height: 200px;
    background-position: bottom right 
                        ,bottom right
                        ,bottom left;
    background-image: linear-gradient(135deg, transparent 70px, rgb(0, 0, 0, 0.1) 73px, #ffffff 73px)
                     ,linear-gradient(0deg, #ffffff 97px,  rgb(0, 0, 0, 0.1) 97px, transparent 100px )
                     ,linear-gradient(135deg, transparent 70px, rgb(0, 0, 0, 0.1) 73px, #ffffff 73px);
    background-size: 100px 200px
                    ,calc(100% - 100px) 100px
                    ,100px 100px;
    background-repeat: no-repeat;
}
.invshape #shape {
      background-image: linear-gradient(135deg, transparent 71px, rgb(0, 0, 0, 0.1) 71px, #ffffff 74px)
                     ,linear-gradient(0deg, #ffffff 97px,  rgb(0, 0, 0, 0.1) 100px, transparent 100px )
                     ,linear-gradient(135deg, transparent 71px, rgb(0, 0, 0, 0.1) 71px, #ffffff 74px);
}
@media screen and (max-width: 1200px) {
  #shape {
    background-position: bottom right;
    background-image: linear-gradient(0deg, #ffffff 97px,  rgb(0, 0, 0, 0.1) 97px, transparent 100px );
    background-size: 100vw 200px;
  }
  .invshape  #shape {
    background-image: linear-gradient(0deg, #ffffff 97px,  rgb(0, 0, 0, 0.1) 100px, transparent 100px );
  }
}
@media screen and (max-width: 600px) {
  #shape {
    display: none;
  }
}
</style>