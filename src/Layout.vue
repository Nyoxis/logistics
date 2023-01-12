<template>
  <div id="layout">
    <Navigation />
    <div id="content">
      <slot/>
    </div>
    <Footer id="footer"/>
  </div>
</template>

<script>
import Vue from 'vue'

import Navigation from './components/Navigation.vue'

import Footer from './components/Footer.vue'

export default {
  name: 'Layout',
  components: {
    Navigation,
    Footer
  }
}

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

</script>

<style>
body {
  margin: 0;
  overflow-x: hidden;
}

#content {grid-area: content;}
#footer {grid-area: footer;}
#layout {
  font-family: Calibri, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #19495c;
  text-align: center;

  display: grid;
  grid-template-areas:
    "."
    "content"
    "footer";
  grid-template-rows: 90px auto auto;
}

label { font-size: 0.75em; }
p,td,span {
  font-family: 'Fira Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
}
p>p{
  margin-bottom: 1em;
}
h1,h2 {
  white-space: nowrap;
  color: #395561;
}
h1 {
  font-family: 'Russo One', sans-serif;
  font-weight: 400;
  font-size: 3rem;}
h2 {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  font-size: 2rem;}
th,h3,h4,h5 {
  font-family: 'Roboto Condensed', sans-serif;
  line-height: 1.7;
  font-weight: 400;
  color: #395561;
}

h3 {
  margin-left: 6rem;
  margin-bottom: 0rem;
  font-size: 2rem;
  text-align: left;
}
a {
  color: #dd6d05;
  font-weight: bolder;
  text-decoration: none;
}
a:hover { color: #e08d21; }
a:active { color: #e37e50; }

input,
select,
textarea
{
  display: block;
  background-color: white;
  resize: none;
  border-style: none;
  border-radius: 2px;
}
th,h4 {
  font-size: 1.1rem;
  margin: 0.5em;
}
h5,p {
  font-size: 1.05rem;
  text-align: left;
  margin: 0;
}
h5 {
  font-size: 1.5rem;
}
.btn {
  background-color: #f58d5e;
  border-radius: 3px;
  color: white;
  display: block;
  margin: auto;
  padding: 10px;
  border-style:none;
  transition: background-color 0.2s ease-out;
  
  font-weight: bolder;
}
.btn:hover{background-color: #E5AB61; color: white}
.btn:active{background-color: #E35150; color: white}
.btn:focus{outline:0; background-color: #E5AB61; color: white}

.round1, .round2, .round3 {
  border-radius: 3px;
}
.round4 {
  border-radius: 3px;
}

@media screen and (max-width: 1400px) {
  .round1, .round4 {
    border-radius: 0;
  }
}
@media screen and (max-width: 600px) {
  h3{
    text-align: center;
    margin-left: 0;
  }
  .round3 {
    border-radius: 0;
  }
  #layout{
  grid-template-rows: 40px auto auto;
  }
}
</style>
