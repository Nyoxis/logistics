<template>
  <div id="calcin">
    <div>
      <label for="category">Категория груза</label>
      <select
        id="category"
        :value="category"
        @input="category=$event.target.value, calculate()">

        <option value="default">Хозяйственные товары и канцелярия</option>
        <option value="default">Автозапчасти</option>
        <option value="default">Электроника</option>
        <option value="default">Мебель</option>
        <option value="clothes">Одежда</option>
        <option value="voluminous">Сумки</option>
        <option value="voluminous">Аксессуары</option>
      </select>
    </div>
    <div v-if="'volume' === volumeType" class="volume">
      <div>
        <label for="volume">Объем груза, м3</label>
        <input
          type="number"
          name="Volume"
          id="volume"
          autocomplete="off"
          :value="volume"
          @input="
            volume=format($event.target.value,3),
            dimensions.fill(Math.pow(volume,1/3).toFixed(3)),
            cylpar.fill(Math.pow(volume*4/Math.PI,1/3).toFixed(3)),
            calculate()">
      </div>
      <button @click="volumeType='dimensions'"><small>габариты</small></button>
    </div>
    <div v-if="'dimensions' === volumeType" class="volume">
      <div>
        <label for="width">Ширина, м</label>
        <input
          type="number"
          name="Width"
          id="width"
          autocomplete="off"
          :value="dimensions[0]"
          @input="
            dimensions[0]=format($event.target.value,3),
            volume=(dimensions[0]*dimensions[1]*dimensions[2]).toFixed(3),
            cylpar.fill(Math.pow(volume*4/Math.PI,1/3).toFixed(3)),
            calculate()">
      </div>
      <div>
        <label for="depth">Глубина, м</label>
        <input
          type="number"
          name="Depth"
          id="depth"
          autocomplete="off"
          :value="dimensions[1]"
          @input="
            dimensions[1]=format($event.target.value,3),
            volume=(dimensions[0]*dimensions[1]*dimensions[2]).toFixed(3),
            cylpar.fill(Math.pow(volume*4/Math.PI,1/3).toFixed(3)),
            calculate()">
      </div>
      <div>
        <label for="height">Высота, м</label>
        <input
          type="number"
          name="Height"
          id="height"
          autocomplete="off"
          :value="dimensions[2]"
          @input="
            dimensions[2]=format($event.target.value,3),
            volume=(dimensions[0]*dimensions[1]*dimensions[2]).toFixed(3),
            cylpar.fill(Math.pow(volume*4/Math.PI,1/3).toFixed(3)),
            calculate()">
      </div>
      <button @click="volumeType='cylinder'"><small>цилиндр</small></button>
    </div>
    <div v-if="'cylinder' === volumeType" class="volume">
      <div>
        <label for="diameter">Диаметр, м</label>
        <input
          type="number"
          name="Diameter"
          id="diameter"
          autocomplete="off"
          :value="cylpar[0]"
          @input="
            cylpar[0]=format($event.target.value,3),
            volume=(cylpar[0]*cylpar[0]*cylpar[1]*Math.PI*0.25).toFixed(3),
            dimensions.fill(Math.pow(volume,1/3).toFixed(3)),
            calculate()">
      </div>
      <div>
        <label for="cheight">Высота, м</label>
        <input
          type="number"
          name="Height"
          id="cheight"
          autocomplete="off"
          :value="cylpar[1]"
          @input="
            cylpar[1]=format($event.target.value,3),
            volume=(cylpar[0]*cylpar[0]*cylpar[1]*Math.PI*0.25).toFixed(3),
            dimensions.fill(Math.pow(volume,1/3).toFixed(3)),
            calculate()">
      </div>
      <button @click="volumeType='volume'"><small>объем</small></button>
    </div>
    <div class="wghqnt">
      <div>
        <label for="weight">Вес груза, кг</label>
        <input
          type="number"
          name="Weight"
          id="weight"
          autocomplete="off"
          :value="weight"
          @input="weight=format($event.target.value,3), calculate()">
      </div>
      <div>
        <label for="quantity">Количество</label>
        <input type="number" name="Quantity" id="quantity" autocomplete="off" :value="quantity" @input="quantity=format($event.target.value,0), calculate()">
      </div>
    </div>
    <div id="intres">
      <ul>
        <li>Плотность груза:</li>
        <li>Ставка доставки:</li>
        <li>Доставка 1 посылки:</li>
      </ul>
      <ul>
        <li>{{density}}</li>
        <li>{{rate}}</li>
        <li>{{apiece}}<small> USD</small></li>
      </ul>
    </div>
    <h2>{{result}}<span> USD</span></h2>
  </div>
</template>

<script>
import format from '../components/format.js'
import TariffsTable from '../assets/TariffsTable.json'

export default {
  name: 'CalcIn',
  props: ['values', 'tariff'],
  data(){ return{    
    category: 'default',
    volume: '',
    dimensions: ['','',''],
    cylpar: ['',''],
    volumeType: 'volume',
    weight: '',
    quantity: 1,
    density: 'Max',
    rate: 0,
    apiece: 0,
    result: 0
    }
  },
  mixins: [format],
  methods: {

    calculate: function(){

      let Tar=TariffsTable[this.tariff][this.category];

      this.density = (this.weight/this.volume).toFixed(0);
      if(isNaN(this.density)){
        this.density = Infinity;
      }
      for(let id in Tar.Prices){
        if(Tar.Prices[id][0]<=this.density){
          if(this.weight){
            this.apiece = parseFloat((this.weight*Tar.Prices[id][1]).toFixed(2))
          }else{
            this.apiece = 0;
          }
         
          this.rate = Tar.Prices[id][1] + ' USD/кг';
          this.updateValue();

          if(Tar.Prices[0][0]<=this.density){
           this.density='Max'
          }
          return;
        }
      }
      this.apiece = parseFloat((this.volume*Tar.PricePerVol).toFixed(2))
      
      this.rate = Tar.PricePerVol + ' USD/м3';
      this.density = 'Min';
      
      this.updateValue();
    },
    updateValue: function() {
      this.result = (this.apiece*this.quantity).toFixed(2);
      this.$emit('values', 
        {category: this.category,
         volume: this.volume,
         weight: this.weight,
         quantity: this.quantity,
         apiece: this.apiece,
         result: this.result}
      );
    }
  },
  mounted: function(){
    if(this.values){
      if(this.values.category )
        this.category = this.values.category;
      if(this.values.volume )
        this.volume = this.values.volume;
      if(this.values.weight )
        this.weight = this.values.weight;
      if(this.values.quantity )
        this.quantity = this.values.quantity;
    }
    this.calculate()
  },
  watch: {
    tariff: function(){
      this.calculate()
    }
  }
}
</script>

<style scoped>
label {
  white-space: nowrap;
}
#calcin {
  overflow: hidden;
}
#calcin>div{
  margin: 0 5px;
}
input{
  width: calc(100% - 4px);
}
select{
  width: calc(100% - 8px);
  margin: 4px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
}

input[type=number] {
    -moz-appearance:textfield; 
}

.volume, .wghqnt{
  display: flex;
  align-items: flex-end;
}
.volume>*, .wghqnt>*{
  flex-grow: 1;
  margin: 4px;
}
.volume>*:last-child {
  flex-grow: 0;
}
.wghqnt>*:last-child {
  width: 30%;
}

#intres {
  text-align: left;
}

button {
  font-size: 1em;
  background-color: rgba(255,255,255,0.5);
  color: #17495C;
  border-style: none;
  border-radius: 2px;
  transition: 0.2s ease-out;
}
button:hover{background-color: rgba(255,255,255,0.8)}
button:active{background-color: rgba(0,0,0,0.1)}
button:focus{outline:0; background-color: rgba(255,255,255,0.8)}

ul {
  display: inline-block;
  font-size: 0.7rem;
  list-style-type: none;
  margin: 5px;
  padding: 0;
  text-align: left;
}
h2 {
  font-family: 'Russo One', sans-serif;
  font-weight: 400;
  font-size: 1.7em;
  font-style: normal;
  margin: 0 10px;
  text-align: right;
  border-top-style: solid;
  border-width: 1px;
}


</style>