 
 
 //=============/=============/ BURGER /=============/=============

	вызов бургера q-burger
	scss свойства бургера q-burger-scss

	<button class="_btn-reset _burger" aria-label="Открыть меню" aria-expanded="false"  data-burger>
		<span class="_burger__inner">
			<span class="_burger__line"></span>
			<span class="_burger__line"></span>
			<span class="_burger__line"></span>
			<span class="_burger__line"></span>
		</span>
</button>



//=============/=============/ SPOILER /=============/=============

вызов споилера q-spoiler

_spoiler - это блок с кнопкой и вложенным в него выпадающим списком
_spoiler__btn - сама кнопка
_spoiler__droplist - выпадающий блок при нажатии на кнопку

	<div class="_spoiler">
		<button class="_btn-reset _spoiler__btn">Пункт</button>
			<ul class="_list-reset _spoiler__droplist">
				<li>Подпункт</li>
			</ul>
	</div>


