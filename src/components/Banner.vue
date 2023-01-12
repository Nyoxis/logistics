 <template>
  <div id="banner">
    <BannerInner/>
    <div id="banner-items">
      <div id="caption">
        <h1>ДОСТАВКА ТОВАРОВ ИЗ&nbsp;КИТАЯ</h1>
        <h2>ГИБКИЕ УСЛОВИЯ &mdash; ПРОСТОЙ ВЫБОР</h2>
      </div>
      <div>
        <a href="./calc" class="btn" id="calc">Рассчитать стоимость</a>
        <a href="#application" class="btn" id="app">Оставить заявку</a>
      </div>
    </div>
  </div>
</template>

<script>
import BannerInner from '../components/BannerInner.vue'
export default {
  name: 'Banner',
  components: {
    BannerInner,
  },
}
</script>

<style scoped>

#banner {
  height: 400px;
  display: flex;
  justify-content: center;
  position: relative;
}

#banner-items {
  width: 60vw;
  margin: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#banner-items>*:last-child {
  display: flex;
  flex-direction: column;
  margin: 20px;
}
#banner-items>*:last-child>* {
  margin: 10px;
}
#calc {
  background: linear-gradient(150deg, rgb(235, 209, 123), rgb(228, 103, 87));
  color: white;
  white-space: nowrap;
}
#calc:hover, #app:focus {
  background: linear-gradient(150deg, rgb(235, 209, 123), rgb(226, 135, 50));
}
#calc:active {
  background: linear-gradient(150deg, rgb(223, 151, 57), rgb(228, 103, 87));
}
#app {
  background: linear-gradient(150deg, rgb(66, 224, 177), rgb(15, 136, 155));
  color: white;
  white-space: nowrap;
}
#app:hover, #app:focus {
  background: linear-gradient(150deg, rgb(66, 224, 177), rgb(27, 175, 168));
}
#app:active {
  background: linear-gradient(150deg, rgb(47, 187, 187), rgb(15, 136, 155));
}

#caption {
  margin-left: -15vw;
  padding: 0 30px;
  background-color: rgba(255,255,255,0);
  

}
h1,h2 {
  color: #ffffff;
  text-align: left;
}
h1 {margin-top: 40px;}

@media screen and (max-width: 1400px) {
  #banner-items {
    width: 80vw;
  }
  #caption {
    align-self: baseline;
    margin-left: 0vw;
  }
  h1,h2 {
    margin-left: 0vw;
    white-space: normal;
  }
}
@media screen and (max-width: 600px) {
  h1,h2 {margin-left: 5vw}

  #banner {
    width: 100vw;
    height: 550px;
  }
  #banner-items {
    width: 100vw;
    flex-direction: column;
    margin: 0;
  }
  #caption {
    width: 100%;
    margin: 0;
    padding: 0;
  }
}
</style>