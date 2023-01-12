<template>
  <div id="Navigation">
    <div id=block v-if="activeBtn" @click="deactivateBtn">
    </div>
    <header v-scroll="handleScroll">
      <button type="button" :class="{btnactive: activeBtn}" @click="activateBtn"></button>
      <a href="./" alt="JF6.ru" id="logo">
      <svg xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="91.2" height="28" viewBox="0 0 91.2 28">
        <defs>
          <clipPath id="a" transform="translate(-159.2 -65.4)">
            <path d="M228.2,91.2v1.5a.7.7,0,0,1-.6.7H226a.7.7,0,0,1-.6-.7V91.2a.7.7,0,0,1,.6-.7h1.6A.7.7,0,0,1,228.2,91.2Zm9.6-12.1H233a3.2,3.2,0,0,0-3.2,3.2V92.7a.7.7,0,0,0,.7.7H232a.7.7,0,0,0,.7-.7V83.2a1.2,1.2,0,0,1,1.2-1.2h3.9a.7.7,0,0,0,.7-.7V79.8A.7.7,0,0,0,237.8,79.1Zm11.9,0h-1.5a.7.7,0,0,0-.7.7v9.5a1.1,1.1,0,0,1-1.1,1.2H244a1.2,1.2,0,0,1-1.2-1.2V79.8a.7.7,0,0,0-.6-.7h-1.6c-.4,0-.6.3-.6.7V90.3a3,3,0,0,0,3,3.1h4.4a3.1,3.1,0,0,0,3-3V79.8A.7.7,0,0,0,249.7,79.1Z" fill="none"/>
          </clipPath>
          <linearGradient id="b" x1="66.2" y1="20.88" x2="91.19" y2="20.88" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#e0b474"/>
            <stop offset="0.01" stop-color="#e1b575"/>
            <stop offset="0.07" stop-color="#eaba7a"/>
            <stop offset="0.17" stop-color="#ecbb7c"/>
            <stop offset="1" stop-color="#e8ad72"/>
          </linearGradient>
          <linearGradient id="c" x1="25.26" y1="5.14" x2="25.26" y2="28.09" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#9f6e3d"/>
            <stop offset="0.01" stop-color="#ba8a56"/>
            <stop offset="0.02" stop-color="#d0a26b"/>
            <stop offset="0.03" stop-color="#deb179"/>
            <stop offset="0.04" stop-color="#e3b67d"/>
            <stop offset="0.15" stop-color="#e2b47b"/>
            <stop offset="0.19" stop-color="#ddae74"/>
            <stop offset="0.21" stop-color="#d4a369"/>
            <stop offset="0.23" stop-color="#c89458"/>
            <stop offset="0.24" stop-color="#c58f53"/>
            <stop offset="0.26" stop-color="#c0894d"/>
            <stop offset="0.3" stop-color="#ba8247"/>
            <stop offset="0.43" stop-color="#b98045"/>
            <stop offset="0.47" stop-color="#e1b175"/>
          </linearGradient>
          <clipPath id="d" transform="translate(-159.2 -65.4)">
            <path d="M177.2,66V88.3a5.1,5.1,0,0,1-5.1,5.1H159.8a.7.7,0,0,1-.6-.7V88.9a.6.6,0,0,1,.6-.6h11.1a1.2,1.2,0,0,0,1.2-1.3V66a.7.7,0,0,1,.7-.6h3.8A.6.6,0,0,1,177.2,66Zm23.2-.6H182.5a.6.6,0,0,0-.6.6v3.8a.7.7,0,0,0,.6.7h17.9a.7.7,0,0,0,.7-.7V66A.7.7,0,0,0,200.4,65.4Zm-4.6,9.8H182.5a.6.6,0,0,0-.6.6v3.8a.7.7,0,0,0,.6.7h13.3a.7.7,0,0,0,.7-.7V75.8A.7.7,0,0,0,195.8,75.2Zm28,5.1v8a5.1,5.1,0,0,1-5.1,5.1H210a5.1,5.1,0,0,1-5.1-5.1V70.5a5.1,5.1,0,0,1,5.1-5.1h10.7a.6.6,0,0,1,.6.6v3.8a.7.7,0,0,1-.6.7h-9.5a1.2,1.2,0,0,0-1.2,1.2v3.5h8.7A5.1,5.1,0,0,1,223.8,80.3Zm-5.1,1.2a1.2,1.2,0,0,0-1.3-1.2h-6.2a1.2,1.2,0,0,0-1.2,1.2V87a1.2,1.2,0,0,0,1.2,1.3h6.2a1.3,1.3,0,0,0,1.3-1.3Z" fill="none"/>
          </clipPath>
          <linearGradient id="e" y1="14" x2="64.6" y2="14" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#39637a"/>
            <stop offset="0.85" stop-color="#538f94"/>
          </linearGradient>
        </defs>
        <g clip-path="url(#a)">
          <rect x="66.2" y="13.8" width="25" height="14.23" fill="url(#b)"/>
        </g>
        <rect x="22.7" width="5.2" height="28" rx="0.7" ry="0.7" fill="url(#c)"/>
        <g clip-path="url(#d)"><rect width="64.6" height="28" fill="url(#e)"/>
        </g>
        </svg>
      </a>
      <nav id = "nav" class="menu" :class="{expand: activeBtn}" @click="deactivateBtn">
        <a href="./#services">Услуги</a>
        <a href="./#advantages">Преимущества</a>
        <a href="./calc">Расчет стоимости</a>
        <a href="./contact">Контакты</a>
      </nav>

      <div id="mcontacts" class="menu contacts" :class="{expand: activeBtn}" @click="deactivateBtn">
        <a href="mailto: JF6-logistics@yandex.ru" alt="E-mail:">
          <div id="mail"></div>
          <p>JF6-logistics@yandex.ru</p>
        </a>
        <a href="https://wa.me/79647587768" alt="Whatsapp:">
          <div id="wa"></div>
        </a>
      </div>
      <div id="bcontacts" class="contacts">
        <a href="tel:79647587768" alt="Phone:">
          <div id="phoneru"></div>
          <p>+7 (964) 758-77-68</p>
        </a>
        <a href="tel:8618565303130" alt="Phone:">
          <div id="phonech"></div>
          <p>+86 185-65-30-31-30</p>
        </a>
      </div>
    </header>
  </div>
</template>
  
<script>
export default {
  name: 'Navigation',
  data() {
    return {
      activeBtn: false
    }
  },
  methods: {
    handleScroll: function (evt, el) {
      if (window.scrollY > 30) {
        el.setAttribute('class', 'opaque')
      } else {
        el.removeAttribute('class'); 
      }
    },
    activateBtn: function() {
      if(this.activeBtn){
        this.deactivateBtn()
      } else {
        this.activeBtn = true
        document.body.setAttribute('style','height: 100vh; overflow-y: hidden')
      }
    },
    deactivateBtn: function(){
      this.activeBtn = false
      document.body.removeAttribute('style')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
#Navigation {
  z-index: 99;
}
#logo { grid-area: logo;}
nav { grid-area: nav; }
#bcontacts { grid-area: bcontacts; }
#mcontacts { grid-area: mcontacts; }
header {
  position: fixed;
  width: 100%;
  padding: 20px 0 20px 0;
  display: grid;
  grid-template-areas:
    ". logo . nav . mcontacts bcontacts ."
    ". . . . . . . .";
  grid-template-columns: minmax(10px ,8fr) auto 4fr auto 4fr auto auto minmax(0 ,3fr);

  transition: padding 0.1s ease-out, background 0.5s ease;
  background-color: rgba(255, 255, 255, 0.8);

  z-index: 99;
}
.opaque {
  padding:0;
  background-color: white;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.08);
}

header>* { display: flex; }

a {
  white-space: nowrap;
  margin: auto;
  text-align: center;
  text-decoration: none;
  font-family: 'Russo One', sans-serif;
  font-weight: 400;
  color: #3e5964;
}
a:hover { color: #197A80; }
a:active { color: #203647; }

nav a{ padding: 0 0.75em;}

.contacts p { 
  font-size: 0.75rem;
  display: inline; 
}
.contacts>* { margin: 5px; }

#logo{
  margin-top: 10px;
  margin-bottom: 4px;
}

button {
  background: url('../assets/menubtn.png');
  width: 35px;
  height: 41px;

  background-size: 100%;
  background-position-y: 4px;
  border-style: none;
  grid-area: menubtn;
  display:none;
  transition: background-position-y 0.1s ;
}
.btnactive{
  background-position-y: 35px;
}
button:focus {outline:0;}

#mail{ background: url('../assets/email.png'); }
#phonech{ background: url('../assets/phonech.png'); }
#phoneru{ background: url('../assets/phoneru.png'); }
#wa{ background: url('../assets/wa.png'); }
#mail, #phonech, #phoneru, #wa {
  display: inline-block;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  transform: translateY(30%);
  background-size: 100%;
}

#block {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.2);
  position: fixed;
}
@media screen and (max-width: 1200px) {
  a{ font-size: 1.75vw; }
  .contacts p { display: none; }
}

@media screen and (max-width: 600px) {
  a { font-size: 1rem; }
  button { display: block; }
  header {
    grid-template-areas:
      "menubtn . logo . bcontacts"
      "nav nav nav nav mcontacts";
    grid-template-columns: auto 1fr auto 1fr auto;
  
    padding: 0;
    background-color: white;

    box-shadow: 0 0 0 1px rgba(0,0,0,0.08);
    transition: padding;
  }
  
  #logo{
    padding: 0px;
  }
  header>button {
    margin-right: 40px;
  }
  .menu { 
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;

    background-color: #FCFCFA;

    transition: max-height 0.25s ease-out;
    max-height: 0;
  }
  .expand { max-height: 188px; }

  .menu a {
    padding: 14px;
    margin: 0;
    border-bottom-style: solid;
    border-width: thin;
    border-color: #F7F7F3;
  }
  .menu a:hover { background-color: #F7F7F3; }
  .menu a:active { background-color: #F0F0F0; }
  .contacts a {
    padding: 5px;
    margin: 0
  }
  #mail, #phonech, #phoneru, #wa {
    width: 30px;
    height: 30px;
    transform: translateY(0);
  }
}
</style>