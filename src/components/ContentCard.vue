<template>
  <div id="contentcard" :class="{reversed: card.id % 2}">
    <div class="image" :style="card.bstyle" v-scroll="visible">
      <div class="pattern" v-scroll="parallax">
        <img :src="card.imgb">
      </div>
      <img :src="card.imgf" class="foreground">
    </div>
    <div class="text">
      <h5>{{ card.caption }}</h5>
      <p v-html="card.text"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentCard',
  props: ['card'],
  methods: {
    parallax (evt, el){
      el.setAttribute("style", "background-position-y: "+window.scrollY*0.4+"px;")
    },
    visible (evt, el){
      let rect = el.getBoundingClientRect()
      if (rect.bottom < window.innerHeight){
        el.classList.add('visible')
      }
    },
  }
}
</script>

<style scoped>

#contentcard {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 100px 0;
}

.reversed { flex-direction: row-reverse; }
h5 {
  margin-top:20px;
  margin-bottom: 2.5rem;
}
h5, p {
  text-align: left;
  max-width: 600px;
  white-space: pre-wrap;
}
p>* {
  margin-bottom: 1em;
}

.image {
  flex-shrink: 0;
  max-height: 280px;
  width: 520px;
  border-radius: 3px;
  margin: 0 40px;
}
.text {
  margin: 40px 40px;
  flex-shrink: 3;
}
.pattern {
  background-image: url('../assets/bg2.png');
  width: 100%;
  height: 280px;
  overflow: hidden;
}

img {
  object-fit: contain;
  max-width: 100%;

  transform: translateX(35px) scale(1.1);
  opacity: 0;
  
  transition: transform 1s ease-out, opacity 1s ease-out;
}
.reversed img {
  transform: translateX(-35px) scale(1.1);
}
.visible img {
  transform: translateX(0) scale(1.1);
  opacity: 1;
}

.foreground {
  position: relative;
  top: -300px;
}
@media screen and (max-width: 1200px) {
  #contentcard {
    margin: 5vw 0;
  }
  .text {
    margin: 2vw;
  }
  .image {
    height: 18vw;
    width: 30vw;
    margin: 2vw;
  }
  .pattern {
    height: 18vw;
  }
  .foreground {
    top: -18vw;
  }
}
@media screen and (max-width: 600px) {
  #contentcard {
    flex-direction: column;
    height: auto;
    margin: 40px 0;
  }
  h5, p {
    max-width: 100%;
    text-align: left;
    margin: 0 10px;
  }
  h5 {
    margin-bottom: 1rem;
    text-align: center;
  }
  .image {
    width: 100vw;
    height: 40vw;
    border-radius: 0;
  }
  img {
    width: 70vw;
  }
  .pattern {
    height: 40vw;
  }
  .foreground {
  position: relative;
  top: -42vw;
}
}
</style>