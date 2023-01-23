const $txtuser = document.querySelector('#msj');
const $btnencriptar = document.querySelector('#encriptar');
const $btndesencriptar = document.querySelector('#desencriptar');
const $rect = document.querySelector('.rectangulo');


	

function encriptado(){
	if($txtuser.value != ''){
		console.log($txtuser.value)
		$rect.innerHTML = '';
		$rect.style.padding = '20px';
		let parra = document.createElement('p');
		parra.classList.add('txtcel');
		parra.innerHTML = $txtuser.value.replaceAll('u','usuru').replaceAll('e','enter').replaceAll('i','isis').replaceAll('o','ober').replaceAll('a','ai');
		let boton = document.createElement('button');
		boton.innerHTML = 'Copiar';
		boton.classList.add('btn','btnrespon');
		$rect.appendChild(parra);
		$rect.appendChild(boton);
	}else{
		alert('Ingrese un texto')
	}
}



$btnencriptar.onclick = encriptado