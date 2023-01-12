<template>
  <footer>
    <div id="footerinfo">
    <div id="description">
      <h5>
        JF6.ru — товарно-транспортная компания
      </h5>
      <p>
        Доставляем грузы и налаживаем поставки из Китая&nbsp;с&nbsp;2015&nbsp;года.  Индивидуальный подход к клиентам,  трепетное обращение с грузом, проверенные партнеры.
      </p>
    </div>
    <ContactInfo/>
    </div>
    <p id="legal">© Оформление сайта, Монхоев С.В., 2021</p>
  </footer>
</template>

<script>
import ContactInfo from '../components/ContactInfo.vue'
export default {
  name: 'Footer',
  components: {
    ContactInfo
  }
}
</script>

<style scoped>
footer {

  grid-area: footer;
  background-color: white;
}
>>> p {
  font-size: 0.9rem;
}
>>> h5 {
  font-size: 1.1rem;
}
>>> p, >>> h5, >>> a {
  color: #7c949c;
}
#legal {
  text-align: center;
  margin: 0 20px 20px 20px;
}
#footerinfo{
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
}
#description {
  max-width: 400px;
}
.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card>*, #description {
  margin: 10px 20px;
}
</style>