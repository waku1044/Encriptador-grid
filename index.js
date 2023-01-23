const $txtuser = document.querySelector('#msj');
const $btnencriptar = document.querySelector('#encriptar');
const $btndesencriptar = document.querySelector('#desencriptar');
const $rect = document.querySelector('.rectangulo');
const $btncopiar = document.querySelector('#copiar');
	

function encriptado(){
	if($txtuser.value != ''){

		$rect.innerHTML = '';
		$rect.style.padding = '20px';

		let parra = document.createElement('p');
		parra.classList.add('txtcel');
		parra.innerHTML = $txtuser.value.replaceAll('u','usuru').replaceAll('e','enter').replaceAll('i','isis').replaceAll('o','ober').replaceAll('a','ai');
		
		$btncopiar.classList.replace('hidden','static');
		console.log($btncopiar)
		$btncopiar.classList.add('btn','btnrespon');
		$rect.appendChild(parra);
		$rect.appendChild($btncopiar)
		$txtuser.value = '';
		$btncopiar.onclick = copiar;
		
	}else{
		alert('Ingrese un texto')
	}
}

function desencriptar(){
	// let valor = document.querySelector($txtuser).value;
	console.log($txtuser.innerHTML)
}

function copiar(){
	alert('copiado correctamente')
	let textCopy = document.querySelector('.txtcel');
	
	// textCopy.select();
	// textCopy.setSelectionRange(0,99999);
	navigator.clipboard.writeText(textCopy.value);
	console.log(textCopy.value)
}

$btndesencriptar.onclick = desencriptar;
$btnencriptar.onclick = encriptado