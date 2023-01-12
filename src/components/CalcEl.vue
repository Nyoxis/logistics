<template>
  <div id="calcel" class="round2">
    <div v-if="!last" id="calcel2" class="round2">
      <h4>
        Партия #{{id+1}}
        <button class="bluebtn" @click="eventRemove">×</button>
      </h4>

      <CalcIn :tariff="tariff" :values="values" @values="updateVal"/>
    </div>
    <div v-if="last" id="add">
      <button class="btn" @click="eventAdd">Добавить партию<br><span>+</span></button>
    </div>
  </div>
</template>

<script>
import CalcIn from '../components/CalcIn.vue'
export default {
  name: 'CalcEl',
  props: ['values', 'id', 'tariff', 'last'],
  components: {
    CalcIn
  },
  methods: {
    eventRemove: function(){
      this.$emit('remove');
    },
    eventAdd: function(){
      this.$emit('add');
    },
    updateVal: function(values){
      this.$emit('values', values);
    }
  }
}
</script>

<style scoped>

#calcel {
  margin: 10px;

}
#calcel2 {
  width: 270px;
  padding: 10px;
  box-shadow: 4px 4px 8px rgba(0,0,0,0.02);
}

.bluebtn {
  font-size: 20px;
  font-family: monospace;

  background-color: rgba(255,255,255,0.5);
  color: #17495C;
  border-style: none;
  border-radius: 2px;
  transition: 0.2s ease-out;
}
.bluebtn:hover{background-color: rgba(255,255,255,0.8)}
.bluebtn:active{background-color: rgba(0,0,0,0.1)}
.bluebtn:focus {
  outline: none;
  background-color: rgba(255,255,255,0.8)
}
#add {
  width: 290px;
  height: 277px;
  margin: 10px;
  display: flex;
  align-items: center;
  box-shadow: 4px 4px 8px rgba(0,0,0,0.02);
}
#add button {
  background-color: rgba(0,0,0,0.3);
  font-size: 1.2rem;
  width: 290px;
  height: 100%;
  flex-shrink: 0;
}
#add button:hover, #add button:focus{
  background-color: rgba(0,0,0,0.25);
}
#add button:active {
  background-color: rgba(63, 63, 63, 0.5);
}
#add span {
  line-height: 0.5;
  font-size: 5rem;
}
h4 {
  text-align: end;
  margin: 0 0 10px 0;
}

@media screen and (max-width: 750px) {
  #add {
    width: auto;
    height: auto;
  }
  #add button{
    left: -100%;
  }
}
</style>