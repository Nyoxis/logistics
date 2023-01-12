<template>
  <div class="application round3">
    <form v-if="sent === false" action="https://formspree.io/mrglyebv" method="POST">
      <h4>Оставить заявку</h4>
      <div class="form">
        <div>
          <label>Как к вам обращаться?</label>
          <input type="text" name="name" required>
          <label>Номер телефона</label>
          <input type="tel" name="phone" pattern="+7 ([0-9]{3}) [0-9]{3}-[0-9]{2}-[0-9]{2}" v-model="phone" :required="phonerequired">
          <label>Эл.почта</label>
          <input type="text" name="_replyto" v-model="mail" :required="mailrequired">
        </div>
        <div>
          <label>Комментарий</label>
          <textarea name="Comment" rows="5" cols="21" v-model="comment"></textarea>
        </div>
      </div>
      <div class="form">
        <label id="consent">
          Нажимая на кнопку "Отправить", вы даете<br/>
          <a href="./Согласие на обработку персональных данных.pdf">согласие на обработку своих персональных данных</a>.
        </label>
        <input class="btn" type="submit" value="Отправить">
      </div>    
    </form>
    <div v-else>
      <h4>Спасибо!</h4>
      <p>Заявка была успешна отправлена</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Application',
  data(){ return {
    comment: '',
    mail: '',
    phone: '',
    sent: false
  }},
  computed: {
    mailrequired: function() {
      if(this.phone) return false
      else return true
    },
    phonerequired: function() {
      if(this.mail) return false
      else return true
    }
  },
  methods: { 
    attachData: function(Data) {
      this.comment=this.comment.split("\n____________")
      if( this.comment.length>1 )this.comment.pop()
      this.comment += '\n' + Data
    }
  }
}
</script>

<style scoped>
.application {
  flex-basis: 0;
  background: linear-gradient(150deg, rgb(171, 233, 214), rgb(154, 200, 207));
  margin: 40px auto;
  padding: 10px;
  transition: background-color 0.2s ease-out;
}
h3 {
  margin: 10px;
}

.form {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}


@media screen and (max-width: 1200px) {

}
@media screen and (max-width: 600px) {
  .application {
    width: 100%;
    padding: 10px 0;
  }
}
</style>