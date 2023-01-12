<template>
  <div id="calculator">
		<CalcRes
      :elValues="calcEls.slice(0,-1)"
      :tariff="tariff"
      @updateTariff="updateTariff"
      :cost="cost"
      @cost="cost=$event"
      @attach="attachData"/>
		<div id="calccont">
      <transition-group name="fade" tag="div" id="calcels">      
        <CalcEl
          v-for="(item, index) in calcEls"
          :key="item.id"
          :calcelId="index"
          :last="calcEls.length-1===index"
          @remove="removeEl(index)"
          @add="addel" :tariff="tariff"
          :values="item.values"
          :id="index"
          @values="item.values=$event"
          :style="backgroundColor(index, calcEls.length-1)"
          class="fade-item"/>

      </transition-group>

    </div>
	</div>
</template>

<script>
import CalcEl from '../components/CalcEl.vue'
import CalcRes from '../components/CalcRes.vue'
export default {
	name: 'Calculator',
	components: {
		CalcEl,
		CalcRes
  },
  props: ['tariff'],
  data() { return {
    calcEls: [{id:-1}],
    cost: ''
  }},
  mounted: function(){
    this.addel()

    let queryString = window.location.search
    let urlParams = new URLSearchParams(queryString)
    if(urlParams.get('tariff'))
      this.$emit('updateTariff', urlParams.get('tariff'))
  },
  methods: {
    updateTariff: function (tariff) {
      this.$emit('updateTariff', tariff);
    },
    addel: function() {
      if(this.calcEls.length<2){
        this.calcEls.splice(this.calcEls.length-1,0,{id: 0, values: {}})
      } else {
        this.calcEls.splice(this.calcEls.length-1,0,{id: this.calcEls[this.calcEls.length-2].id+1, values: {}})
      }
        
    },
    removeEl: function(index) {
      if(this.calcEls.length<3){
        this.addel();
      }
      this.calcEls.splice(index,1);

    },
    attachData: function(){
      let attachText = '____________\nТариф: ' + this.tariff;
      attachText+='\nСтоимость груза: ' + this.cost
      for(let [index, item] of this.calcEls.slice(0,-1).entries()){
        attachText+='\nПартия #' + (index+1) + '\nРезультат: ' +item.values.apiece + ' x' + item.values.quantity + '\n'        
        attachText+='Категория: ' + item.values.category + '\n'
        attachText+='Объем: ' + item.values.volume + '\n'
        attachText+='Вес: ' + item.values.weight
      }
      
      this.$emit('attachData', attachText)
    },
    backgroundColor: function(index, length){
      if(index===length)return {margin: 0}
      let h = (420-360*Math.pow(index/length,1.2))%360
      
      let s = (80-60*Math.pow(index/length,0.3))
      let l = (75-15*Math.pow(index/length,4))
      let h2 = (h+360-1000/s)%360;
      return {
        background: 'linear-gradient(150deg,hsl( '+ h +', '+ s +'%, '+ l +'%),hsl( '+ h2 +', '+ s +'%, '+ l +'%))',
        'z-index': 1
      }
    }
  }
}
</script>

<style scoped>
#calculator {
  display: flex;
  align-items: flex-start;
}

#calccont {
  display: flex;

}
#calcels {
	display: flex;
  flex: 0 auto;
	align-items: center;
  align-content: flex-start;
	flex-wrap: wrap;
}

.fade-item {
  transition: transform 0.1s ease-in-out, opacity 0.05s ;
  display: inline-block;
  margin-right: 10px;
}
.fade-enter {
  opacity: 0;
  transform: translateX(30px);
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active, .fade-enter-active {
  position: absolute;
}

@media screen and (max-width: 1000px) {
  #calculator {
    flex-direction: column-reverse;
  }
  #calcels {
    justify-content: center;
  }
  #calcres {
    align-self: center;
  }
}

@media screen and (max-width: 750px) {
  #calculator {
    align-items: center;
  }
  #calcels{
    flex-direction: column;
    margin: 0; 
  }
  .fade-enter {
    transform: translateY(30px);
  }

}
</style>