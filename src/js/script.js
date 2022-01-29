// "use strict";

// document.querySelector("#alerted").onclick = function() {

document.addEventListener('DOMContentLoaded', () => {
 
	// Кнопка по которой происходит клик
	let callBackButton = document.getElementById('callback-button');
	
	// Модальное окно, которое необходимо открыть
	let modal1 = document.getElementById('modal-1');
	
	// Кнопка "закрыть" внутри модального окна
	let closeButton = modal1.getElementsByClassName('modal__close-button')[0];
	
	// Тег body для запрета прокрутки
	let tagBody = document.getElementsByTagName('body');
	
	callBackButton.onclick = function (e) {
		e.preventDefault();
		modal1.classList.add('modal_active');
		tagBody.classList.add('hidden');
	};
	
	closeButton.onclick = function (e) {
		e.preventDefault();
		modal1.classList.remove('modal_active');
		tagBody.classList.remove('hidden');
	};
	
	modal1.onmousedown = function (e) {
		let target = e.target;
		let modalContent = modal1.getElementsByClassName('modal__content')[0];
		if (e.target.closest('.' + modalContent.className) === null) {
		this.classList.remove('modal_active');
		tagBody.classList.remove('hidden');
		}
	};
	
	// Вызов модального окна несколькими кнопками на странице
	let buttonOpenModal1 = document.getElementsByClassName('get-modal_1');
	
	for (let button of buttonOpenModal1) {
		button.onclick = function (e) {
		e.preventDefault();
		modal1.classList.add('modal_active');
		tagBody.classList.add('hidden');
		};
	}
	   
});


// 	function alerted(){
// 		var checkbox = document.getElementById('scalesMusic');
// 		if (checkbox.checked != false){
// 			var audio = new Audio(); // Создаём новый элемент Audio
// 				audio.src = 'mp3/bells.mp3';
// 				// audio.src = 'mp3/MindPrep.mp3'; 
// 				audio.autoplay = true; 
// 				audio.loop = true; 
// 				// audio.volume = 100; //.volume="0"
// 		} 
// 	}

// }



let fontArr = [
	'Helvetica',
	'Georgia',
	'Times New Roman',
	'Garamond',
	'Arial',
	'Verdana',
	'Sans-serif',
	'Monospace',
	'Courier New',
	'Lucida Console',
	'Monaco',
	'Cursive Brush Script MT',
	'Lucida Handwriting',
	'Fantasy Copperplate',
	'Papyrus',
	'Helvetica'
];

var arr = [
	'А где реальность ?',
	'А что в результате?',
	'Бороться !',
	'Быть быстрее света',
	'Во мне много энергии',
	'Где мы ?',
	'Где я сейчас ?',
	'Думай',
	'Запоминай',
	'Зачем ей это ?',
	'Зачем ему это ?',
	'Зачем мне это ?',
	'Кто это ?',
	'Кто Я ???',
	'Мне легко',
	'Мне не страшно',
	'Моя цель ?!',
	'Наблюдай',
	'Надо определиться',
	'Надо сконцентрироваться',
	'Найти себя',
	'Не останавливаться',
	'Оглянись',
	'Осознать себя !',
	'Попробовать взлететь',
	'С кем я разговариваю ?',
	'Спокойствие',
	'Увидеть свои руки',
	'Услышать себя',
	'Успокоиться !',
	'Чего я хочу ?',
	'Что я делаю ?!?',
	'Энергия во мне',
	'Это галлюцинации ?!?',
	'Это не реальность',
	'Это сновидение !!!',
	'Это сон !',
	'Я буду это помнить !',
	'Я самый быстрый !',
	'Я свободен',
	'Я человек !!!',
];

let cont = document.getElementById('cont');
let music = document.getElementById('music');
let ticker = '';
let i = 0;
let lenArr = arr.length;
let bgImg = 'url(img/img0.jpg)';
let bgCol = 'red';//'url(img/img0One.jpg)';
let inputFontSize = 98 ;
let inputFontName = fontArr[0];
let audio = new Audio(); // Создаём новый элемент Audio

const bodyPage = document.querySelector('body');
const radioBtn = document.querySelectorAll('.radio');
bodyPage.style.backgroundColor =  '#E080';

radioBtn.forEach(item => {
	item.addEventListener ('click', () => {
		bgImg = `url(img/${item.value}.jpg)`; 
		bgCol = `url(img/${item.value}One.jpg)`;
		// bodyPage.style.cssText = 'body:after { content: ""; position: fixed; top: 0; bottom: 0; left: 0; right: 0; background: rgba(255, 255, 255, 0.1); pointer-events: none; }';
		// document.body.style.backgroundImage = "url('img_tree.png')";
			// bodyPage.style.backgroundColor = 'red';
	}) ;
}) ;

// let inputFontSize = document.querySelector('#tentacles') ; //not work
const fontSize = document.getElementById('tentacles');
	fontSize.addEventListener ('click', () => {
	inputFontSize = fontSize.valueAsNumber;
}) ;


const fontName = document.getElementById('Font');
for (let i = 1; i < fontArr.length; i++) {
	let opt = fontArr[i];
	fontName.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
}

fontName.addEventListener ('click', () => {
	// console.dir(fontName);
	inputFontName = fontName.value;
	// console.log(inputFontName); 
}) ;






function beginTraining(v) {

	//удаляем лишнее
	// const delBut = document.querySelector('#del');
	// delBut.addEventListener('click', (event) =>{
		const delBut2 = document.querySelectorAll('.remove');
			delBut2.forEach (item => {
			item.remove();
		});
	// });
	
	setTimeout('endTraining()', 450000);//450000

	// document.getElementsByClassName('mystyle')[0].style= "margin: 50px";

	cont.style.top = '45%';
	ticker = setInterval('writeText()', v);

	// music.innerHTML = '<embed src="music.swf?2" FlashVars="url=mp3/MindPrep.mp3" WIDTH="1" HEIGHT="1"/>';
	// music.innerHTML = `<audio src="mp3/bells.mp3" autoplay="autoplay"></audio>`;	

	let checkbox = document.getElementById('scalesMusic');
	if (checkbox.checked != false) {
		// listen('mp3/k1.mp3', true);
		listen('mp3/MindPrep.mp3', true);
	}

	
	document.documentElement.requestFullscreen();
	bodyPage.style.backgroundPosition = "center";
	// document.body.style.backgroundColor = "url('img/gradOne.jpg')";
	bodyPage.style.backgroundImage = bgImg;  //"url('img/Grad.jpg')";
	bodyPage.style.backgroundColor  = bgCol;
	console.log(bgImg,"-",bgCol);
	bodyPage.style.backgroundImage.filter  = "brightness(30%)";
	
	// document.addEventListener('click', getEventType, false);     // 'keypress' // 'resize'
	document.addEventListener('dblclick', (event) =>{
		event.target.remove();
		endTraining();
	 });
	document.addEventListener('keypress', (event) =>{
		event.target.remove();
		endTraining();
	 });

	// function removeEvent (event) =>{
	// 	event.target.remove();
	// endTraining();
}

function writeText() {
	// audio.pause();
	// audio.currentTime = 0;
 
	cont.innerHTML = '';
	cont.style.fontFamily = inputFontName;//'Helvetica';
	cont.style.fontStyle = "italic";
	cont.style.fontSize = `${inputFontSize}px`; //.valueAsNumber
	cont.innerHTML = arr[i];
	i++;

	if (i >= lenArr) {
		i = 0;
	}
}

function createWindow(link, w, h) { //opens new window
	// const delElements = document.querySelectorAll('.remove', (event) =>{
	// 	event.target.remove();
	// 	console.log("2", event.target);
	// });

	var win = "width=" + w + ",height=" + h + ",menubar=no,location=no,resizable=yes,scrollbars=yes";
	var newWin = window.open(link, "newWin", win);
	newWin.focus();
}


function endTraining() {
	ticker = clearInterval(ticker);
	
	audio.pause();
	audio.currentTime = 0;
	
// alert('Приятных сновидений!');

	//var wind = window.open("ToRead.txt", "_blank", "width=200,height=150,toolbar=no");
	// document.body.style.backgroundColor = "green";
	// document.body.style.backgroundImage = "";

	cont.innerHTML = '';
	cont.style.top = '70';
	cont.style.textAlign = 'center';
	cont.style.fontFamily = 'Arial';
	cont.style.fontSize = '18px';

	for (i = 0; i < lenArr; i++)
		cont.innerHTML += arr[i] + '<br/>';

	cont.innerHTML += '<br/><input type="button" value="Слушать Установки" onclick="listen(\'mp3/ToListen.mp3\', 3);" />';
	// cont.innerHTML += '<br/><input type="button" value="Слушать Установки" onclick="listenAffirmation;" />';

	cont.innerHTML += '<br/><input type="button" value="Главное меню" onclick="window.location.reload();" />';

	cont.innerHTML += `
	<div id="ModalOpen" class="Window">
		<div>
			<a href="#close" title="Закрыть" class="close">X</a>
			<p>Приятных сновидений !</p>
			<p>Все получится !</p>
		</div>
	</div>
	`;

	document.location.href = "#ModalOpen";
	setTimeout(function() {document.location.href = "#close";}, 2000);

}

function soundStart(melody, loop) {
	// let audio = new Audio(); // Создаём новый элемент Audio
		audio.src = melody; // Указываем путь к звуку ""
		audio.autoplay = true; // Автоматически запускаем
		audio.loop = loop;
		audio.volume = 0.2; //0.0-1.0
		// console.dir(audio);
}

function listen(src, repeat) {
	if (repeat !== true){
		for (var i = 1; i <= repeat; i++) {
			soundStart(src, false);
		}
	} else {
		soundStart(src, true);
	}
}

function listenAffirmation () { // !!!!!!!!!! not work
	var audioFile = new Array("s1.mp3","s2.mp3","s3.mp3");
	var audio = new Array;

    for (i=0; i<audioFile.length; i++) {
      audio[i]= new Audio("mp3/"+audioFile[i]);
      audio[i].load();
    }

    function rotatePrime() {
            audio[0].play();
            audio[0].onended=setTimeout(function(){audio[1].play();}, 2000);
            audio[1].onended=setTimeout(function(){audio[2].play();}, 2000);
	}

// function listen(obj, fisoundClickle) {
	// if (music.innerHTML == '') {
	// 	obj.value = 'Остановить прослушивание';
	// 	// music.innerHTML = '<embed src="music.swf?2" FlashVars="url=' + fileAffirmation + '" WIDTH="1" HEIGHT="1"/>';
	// 	music.innerHTML = `<embed src="${fileAffirmation}" hidden = “true” autostart = “true” loop = “-5”`;
	// 	// hidden = “true” autostart = “true” loop = “true”
	// } else {
	// 	obj.value = 'Прослушать установки';
	// 	music.innerHTML = '';
	// }
}