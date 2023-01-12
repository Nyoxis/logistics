<template>
  <main class="round4">
    <Tariffs @updateTariff="updateTariff"/>
    <h3>ОСОБЕННОСТИ РАСЧЕТА</h3>
    <p>
      Рассчитывается цена доставки до Москвы, доставка из Москвы по России и СНГ рассчитывается отдельно.
    </p>
    <p>
      Данный калькулятор может просчитать примерную стоимость логистики на каждую партию товара по отдельности, а так же суммарную стоимость отправки сборного груза.
      На конечную стоимость доставки влияет множество факторов. Вы можете предоставить нам дополнительную информацию необходимую для точного расчета стоимости в заявке ниже или обратиться напрямую.
      Нажмите кнопку «прикрепить к заявке», добавьте контактную информацию и мы бесплатно Вас проконсультируем и раскажем о всех важных тонкостях.   
    </p>
  </main>
</template>

<script>
import Tariffs from '../components/Tariffs.vue'

export default {
  name: 'TariffsContent',
  components: {
    Tariffs
  },
  methods: {
    updateTariff: function (value) {
      this.$emit('updateTariff', value);
    }
  }
}
</script>

<style scoped>

#tariffs {
  position: relative;
  top: -90px;
}
main {
  display: block;
}
p {
  text-align: start;
  margin: 10px 40px;
}
@media screen and (max-width: 600px) {
  p {
    margin: 10px 20px;
  }
}
</style>