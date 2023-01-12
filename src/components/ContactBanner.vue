<template>
  <div id="contactbanner">
    <div v-scroll="offset">
      <div>
        <a href="https://www.flickr.com/photos/kevinamcgill/6343573781/">
          "Guangzhou skyline"
        </a><br/>
        by <a href="https://www.flickr.com/people/42479008@N02">Kevin McGill</a><br/>
        is licensed under CC BY-SA 2.0
      </div>
      <div>
        <a href="https://web.archive.org/web/20161024162544/http://www.panoramio.com/photo/84271700">
          "Moskva-City / Moscow, Russia"
        </a><br/>
        by Sergey Ashmarin<br/>
        is licensed under CC BY-SA 3.0
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  methods: {
    offset (evt, el){
      if (30 < window.scrollY){
        el.classList.add('offsetted')
      } else {
        el.classList.remove('offsetted')
      }
    }
  }
}

</script>

<style scoped>
#contactbanner {
  overflow: hidden;
}
#contactbanner>* {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background: url(../assets/cities.jpg);
  background-repeat: no-repeat;
  background-size: 200vw;
  width: 200vw;
  transition: transform 0.1s;
  height: 11vw;

}
#contactbanner>*>*{
  background: rgba(0,0,0,0.05);
}
#contactbanner>*>*:nth-child(1){
  transform: translateX(58vw);
}
#contactbanner>*>*:nth-child(2){
  transform: translateX(calc(-116px + 118vw));
}
#contactbanner>* *{
  color: rgba(255,255,255,0.6);
  font-size: 0.6rem;
}
.offsetted {
  transform: translateX(-50%);
}
@media screen and (max-width: 600px) {
  #contactbanner>* {
    background-size: 400vw;
    height: 22vw;
    background-position-x: 50%;
  }

}
</style>