<template>
  <div id="calcres" class="round2">
    <div id="calcblocks">
      <div>
        <label for="tariff">Тариф</label>
        <select
          id="tariff"
          class="field"
          :value="tariff"
          @focus="onfocus($event.target)"
          @input="updateTariff($event.target.value)">
          <option value="auto">Автоперевозки</option>
          <option value="train">Ж/Д Перевозки</option>
        </select>
        <ul>
          <li
            v-for="(el, index) in elValues"
            :key="el.id"
            :style="color(index, elValues.length)">

            <h4>Партия #{{ index+1 }}</h4>
            <h2>{{ el.values.result }}<span> USD</span></h2>
          </li>
        </ul>
      </div>
      <div>
        <p>
          <input
            type="checkbox"
            name="insurance"
            value="insurance"
            v-model="isInsurance">
          Страховка
        </p>
        <label for="cost">Стоимость груза, USD</label>
        <input
          type="number"
          name="Cost"
          autocomplete="off"
          id="cost"
          class="field"
          :value="cost"
          @input="$emit('cost',format($event.target.value,0))"
          :disabled="!isInsurance">
        <h5>+ {{ insurance }}<span> USD</span></h5>
      </div>
    </div>
    <h1>{{ totalResult }}<span> USD</span></h1>
    <a href="#application"
       class="btn"
       @click="$emit('attach')">
        Прикрепить к заявке
    </a>
  </div>
</template>

<script>
import format from '../components/format.js'
import TariffsTable from '../assets/TariffsTable.json'
export default {
  name: 'CalcRes',
  props: ['tariff', 'elValues', 'cost'],
  data(){ return {
    isInsurance: true
  }},
  computed: {
    totalResult: function(){
      return (
        parseFloat(this.insurance)
        +parseFloat(
          this.elValues.reduce(
            (a, b) => parseFloat(a) + parseFloat(b.values.result)
            , 0
          ).toFixed(2)
        )
      ).toFixed(2)
    },
    insurance: function(){
      if(this.isInsurance){
        return parseFloat((this.cost*TariffsTable.insrate).toFixed(2))
      } else {
        this.$emit('cost','')
        return 0
      }
    }
  },
  mixins: [format],
  methods: {
    onfocus: function (el) {
      let rect = el.getBoundingClientRect()
      setTimeout(window.scrollTo,1,window.scrollX,window.scrollY+rect.y-120)
    },
    updateTariff: function (value) {
      this.$emit('updateTariff', value);
    },
    color: function (index, length) {
      let h = (410-360*Math.pow(index/length,1.2))%360
      let s = (100-60*Math.pow(index/length,0.5))
      let l = 30
      return {
        color: 'hsl( '+ h +', '+ s +'%, '+ l +'%)'
      }
    }
  }
}
</script>

<style scoped>
#calcres {
  overflow: hidden;
  box-shadow: 4px 4px 8px rgba(0,0,0,0.02);
  flex-shrink: 0;
  width: 220px;
  background: linear-gradient(150deg, #e3ebea, #eeeeee);
  padding: 10px;
  margin: 10px;
}

#calcblocks {
  display: flex;
  flex-direction: column;
}

#calcblocks>* {
  flex: auto; 
}

label {
  text-align: left;
}
.field {
  margin: auto;
  width: 150px;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
ul {
  list-style-type: none;
  padding: 0;
}
p {
  margin: 0 0 0 40px;
  text-align: left;
}
p>* { display: inline-block; }
h1,h2,h3,h5 {
  font-family: 'Russo One', sans-serif;
  font-weight: 400;
  font-style: normal;
}
h4 {
  text-align: left;
  margin: 0 10px;
  color: inherit;
}
h5 {
  text-align: right;
  margin: 0 10px;
}
h2 {
  font-size: 1.5em;
  text-align: left;
  margin: 0 20px;
  color: inherit;
}
h1 {
  font-size: 2em;
  text-align: right;
  margin: 0 20px;
  border-top-style: solid;
  border-width: 1px;
}

@media screen and (max-width: 1000px) {
  #calcres {
    width: 400px;
  }
  #calcblocks {
    flex-direction: row;
  }
  #calcblocks>*:last-child {
  align-self: flex-end;
  }   
}
@media screen and (max-width: 600px) {
  #calcres {
    width: 270px;
  }
  #calcblocks {
    flex-direction: column;
  }
  #calcblocks>*:last-child {
  align-self: auto;
  }  
  p {
    margin: 0 0 0 80px;
  }
}
</style>