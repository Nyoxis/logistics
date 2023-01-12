<template>
    <main>
      <div id="advantages"></div>
      <h3>ПРЕИМУЩЕСТВА</h3>
      <ContentCard 
          v-for="card in advantagesCards" 
          :key="card.id"
          :card="card"
      ></ContentCard>
    </main>
</template>

<script>
import ContentCard from '../components/ContentCard.vue'
export default {
  name: 'HomeContent',
  components: {
    ContentCard
  },
  data(){
    return{
      advantagesCards: [
        { id: 4, imgf: require('../assets/a2.png'), imgb: require('../assets/a2b.png'),
          bstyle: 'background: linear-gradient(90deg, rgb(228, 213, 214), rgb(221, 211, 202))',
          caption: 'Работа без посредников',
          text: '<p>Наша компания базируется в Китае, благодаря этому мы можем  оперативно и с должным опытом отсеивать недобросовестных поставщиков и выходить на лучшего партнера по бизнесу.</p><p>Отправляем груз с минимальным количеством посредников, что позволяет предоставлять низкие цены и быстрые сроки доставки.</p>', },
        { id: 5, imgf: require('../assets/a1.png'),
          bstyle: 'background: linear-gradient(90deg, rgb(228, 224, 208), rgb(203, 220, 202))',
          caption: 'Офис  и склад в Китае',
          text: 'Мы работаем в городе Гуанчжоу уже более&nbsp;5&nbsp;лет. Все сотрудники хорошо понимают менталитет и особенности ведения бизнеса в Китае. Благодаря этому мы не только качественно и быстро проводим переговоры, а также помогаем достичь взаимопонимание и сплочение партнеров. Предоставляем нашим клентам бесплатное консолидирование груза на наших складах.', },
        { id: 6, imgf: require('../assets/a3.png'),
          bstyle: 'background: linear-gradient(90deg, rgb(200, 203, 203), rgb(212, 231, 227))',
          caption: 'Быстрые сроки',
          text: 'Минимальное количество посредников позволяет доставлять груз в быстрые сроки, а в большинстве случаев раньше обещанного времени. Мы работаем без выходных, что позволяет нам оперативно решать любые вопросы.', },
        { id: 7, imgf: require('../assets/a4.png'), imgb: require('../assets/a4b.png'),
          bstyle: 'background: linear-gradient(90deg, rgb(210, 232, 206), rgb(212, 231, 227))',
          caption: 'Оплата поставщику день в день\nВалютный перевод',
          text: 'Помогаем нашим клиентам решить все денежные вопросы максимально быстро и удобно. Находим самый выгодный курс обмена валют. Работаем только с проверенными компаниями.', }
      ]
    }
  },

}
</script>

<style scoped>

@media screen and (max-width: 600px) {
main{
  width:100vw;
}
}
</style>