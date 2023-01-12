<template>
  <div class="card">
    <div class="info">
      <h5>По вопросам закупа</h5>
      <p>Ольга</p>
      <p><a href="tel:8615322317055" alt="Phone:">+86 153-22-31-70-55</a> (Китай) - WeChat</p>
      <p><a href="tel:79086681418" alt="Phone:">+7 (908) 668-14-18</a> (Россия) - <a href="https://wa.me/79086681418">WhatsApp</a></p>
    </div>
    <div class="info">
      <h5>По вопросам логистики</h5>
      <p>Александр</p>
      <p><a href="tel:8618565303130" alt="Phone:">+86 185-65-30-31-30</a> (Китай) - WeChat</p>
      <p><a href="tel:79647587768" alt="Phone:">+7 (964) 758-77-68</a> (Россия) - <a href="https://wa.me/79647587768">WhatsApp</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactContent'
}
</script>

<style scoped>
.card {
  display: flex;
  flex-wrap: wrap;
}
.card>* {
  margin: 10px 20px;
}
a {
  color: #395561;
  text-decoration-line: underline;
  font-weight: normal;
}
</style>