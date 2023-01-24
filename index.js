const $txtuser = document.querySelector('#msj');
const $btnencriptar = document.querySelector('#encriptar');
const $btndesencriptar = document.querySelector('#desencriptar');
const $rect = document.querySelector('.rectangulo');
const $btncopiar = document.querySelector('#copiar');
	
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`


function encriptado(){
	if($txtuser.value != ''){

		$rect.innerHTML = '';
		$rect.style.padding = '20px';

		let parra = document.createElement('p');
		parra.classList.add('txtcel');
		parra.setAttribute('id','textcel');
		parra.innerHTML = $txtuser.value.replaceAll('e','enter').replaceAll('i','imes').replaceAll('a','ai').replaceAll('o','ober').replaceAll('u','ufat');
		
		$btncopiar.classList.replace('hidden','static');
		$btncopiar.classList.add('btn','btnrespon');
		$rect.appendChild(parra);
		$rect.appendChild($btncopiar);
		$txtuser.value = '';
		

		
	}else{
		alert('Ingrese un texto')
	}
}

function desencriptar(){

	let p = document.createElement('p');
	p.innerHTML = txtcopy.innerHTML.replaceAll('enter','e').replaceAll('imes','i').replaceAll('ai','a').replaceAll('ober','o').replaceAll('ufat','u');
	p.classList.add('txtcel');
	p.setAttribute('id','textcel');

	$btncopiar.classList.replace('hidden','static');
	$btncopiar.classList.add('btn','btnrespon');
	
	$rect.innerHTML = '';
	$rect.appendChild(p);
	$rect.appendChild($btncopiar);
	$txtuser.value = '';
}
var txtcopy;
function copiar(){
	 txtcopy = document.querySelector('#textcel');
	// txtcopy.select();
	navigator.clipboard.writeText(txtcopy.innerHTML);
	outFunc();
}
//msj para btn copiar
function outFunc() {
  $btncopiar.innerHTML = "Copiando...!!!";
  setTimeout(()=>{
  	$btncopiar.innerHTML = "Copiar";
  },1000)

}


$btncopiar.onclick = copiar;
$btndesencriptar.onclick = desencriptar;
$btnencriptar.onclick = encriptado