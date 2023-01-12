<template>
    <main>
      <div id="services"></div>
      <h3>УСЛУГИ</h3>
      <ContentCard
        v-for="card in servicesCards" 
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
      servicesCards: [
        { id: 0, imgf: require('../assets/s3.png'),
          bstyle: 'background: linear-gradient(90deg, rgb(200, 220, 218), rgb(223, 224, 200))',
          caption: 'Грузоперевозки из Китая в Россию и Казахстан',
          text: '<ol><li>Доставка сборных грузов</li><li>Инспекция при погрузке</li><li>Транспортно-экспедиторские услуги, в том числе по Китаю</li></ol>', },
        { id: 1, imgf: require('../assets/s1.png'),
          bstyle: 'background: linear-gradient(90deg, rgb(216, 225, 220), rgb(210, 230, 230))',
          caption: 'Поиск поставщиков\nВыкуп товара с платформ Алиаба, Таобао, 1688',
          text: '<ul><li>По конкретному запросу найдём подходящего поставщика</br><small>бланк можно скачать <a href="./Форма поиска поставщика.xlsx">здесь</a></small></li><li>Проведём переговоры онлайн или офлайн</li><li>Поможем утвердить образцы</li><li>Поможем в заключении договоров</li><li>Выкупим товар</li><li>Проведем тщательную проверку товара</li><li>Доставим все в целости и сохранности</li></ul>', },
        { id: 2, imgf: require('../assets/s2.png'),
          bstyle: 'background: linear-gradient(90deg, rgb(213, 200, 200), rgb(210, 227, 220))',
          caption: 'Организация бизнес поездки в Китай\nПредставитель в Китае',
          text: '<ul><li>Поможем в поиске оптимальной гостиницы</li><li>Встретим Вас в аэропорту или организуем трансфер</li><li>Подготовим идеальный маршрут на всю поездку</li><li>Сопроводим как на выставки, так и на рынки</li><li>Примем участие в переговорах, поможем добиться лучших результатов</li></ul>', },
        { id: 3, imgf: require('../assets/s4.png'),
          bstyle: 'background: linear-gradient(90deg, rgb(228, 215, 208), rgb(210, 213, 228))',
          caption: 'Инспекция товара\nАудит поставщика',
          text: '<p>При проверке поставщика мы изучаем документы компании. Смотрим рейтинг на оптовом сайте&nbsp;1688, изучаем отзывы и процент возврата. При проверке фабрики обязательно смотрим оборудование, производственную и складскую площадь, производственные мощности и сырье.</p><p>Инспекция товара проходит строго по образцам, который утвердили ранее или по конкретным требованиям. Все документируем и предоставляем отчет в виде наглядной таблицы, фото и видео.</p>', },
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