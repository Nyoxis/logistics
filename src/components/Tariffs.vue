<template>
<div>
	<h3>ТАРИФЫ</h3>
	<table>
	<thead>
	<tr>
		<th></th>
		<th>Срок доставки</th>
        <th>Минимальная Стоимость</th>
	</tr>
	</thead>
	<tbody>
	<tr id="avia">
		<th>Авиадоставка</th>
		<td>Чаще используется для отправки<br>срочных маленьких посылок</td>
		<td>от 2.5 USD/кг</td>
		<td>5-8 дней</td>
		<div class="btn unavailable">Временно недоступно</div>
    <!--
		<button v-if="!home" class="btn" value="avia" @click="updateTariff("avia")">Выбрать</button>
		<a v-else class="btn" value="avia" href="./calc?tariff=avia">Рассчитать стоимость</a>
		-->
	</tr>
	<tr id="auto">
		<th>Автоперевозки</th>
		<td>Выгодные цены,<br>гибкий график отправок</td>
		<td>от 0.8 USD/кг</td>
		<td>18-25 дней</td>
    <a v-if="!home" href="#tariff" class="btn" @click="updateTariff('auto')">Выбрать</a>
		<a v-else class="btn" value="auto" href="./calc?tariff=auto">Рассчитать стоимость</a>
	</tr>
	<tr id="train">
		<th>Ж/Д перевозки</th>
		<td>Идеальное отношение<br>цены и сроков достаки</td>
		<td>от 1.3 USD/кг</td>
		<td>10-15 дней</td>
    <a v-if="!home" href="#tariff" class="btn" @click="updateTariff('train')">Выбрать</a>
		<a v-else class="btn" href="./calc?tariff=train">Рассчитать стоимость</a>
	</tr>
	</tbody>
</table>
</div>
</template>

<script>
export default {
	name: 'Tariffs',
	props:
		['home'],
  methods: {
    updateTariff: function (value) {
      this.$emit('updateTariff', value);
    }
  }
}
</script>

<style>
/* Force table to not be like tables anymore */
table, thead, th, td, tr { 
	display: block; 
	color: white;
}
tbody {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
	/* Hide table headers (but not display: none;, for accessibility) */
thead tr { 
	position: absolute;
	top: -9999px;
	left: -9999px;
}
th {
  width: 190px;
}
tr {
  background: linear-gradient(150deg, #e3ebea, #eeeeee);
  background-origin: border-box;
	background-size: cover;
	min-width: 200px;
  box-shadow: 1px 1px 4px rgba(0,0,0,0.05);
  border-radius: 3px;
  padding: 10px;
  margin: 5px;
}
#avia{
	background-image: url('../assets/tar1.png');
}
#auto{
	background-image: url('../assets/tar2.png');
}
#train{
	background-image: url('../assets/tar3.png');
}
td { 
	/* Behave  like a "row" */
	border: none;
	border-top: 1px solid #bfcedd; 
	position: relative;
	padding-top: 20px; 
}
td:nth-of-type(1) {
	border-top: none; 
	font-size: 0.75rem;
	padding-top: 0; 
}
td:before { 
	/* Now like a table header */
	position: absolute;
    text-align: center;
	/* Top/left values mimic padding */
	top: 6px;
	left: 6px;
	width: 190px;
	padding-right: 10px;

	font-size: 0.75rem;
}
	
/*Label the data*/
td:nth-of-type(2):before { content: "Стоимость"; }
td:nth-of-type(3):before { content: "Сроки доставки"; }
.unavailable, .unavailable:hover, .unavailable:focus{
	background-color: darkgray;
}

@media screen and (max-width: 700px) {
  table {
    overflow: scroll;
    width: 100vw;
  }
  tbody {
	justify-content: start;
    flex-wrap: nowrap;
  }
  tr {

	margin: 10px;
  }
}
</style>