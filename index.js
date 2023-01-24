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
		parra.setAttribute('id','textcel');
		parra.innerHTML = $txtuser.value.replaceAll('u','usuru').replaceAll('e','enter').replaceAll('i','isis').replaceAll('o','ober').replaceAll('a','ai');
		
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
	p.innerHTML = txtcopy.innerHTML.replaceAll('usuru','u').replaceAll('enter','e').replaceAll('isis','i').replaceAll('ober','o').replaceAll('ai','a');
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