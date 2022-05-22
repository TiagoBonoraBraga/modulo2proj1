
const botao = document.querySelector("#botao");
const h3 = document.querySelector("#situacao"); 
const img = document.querySelector("#foto")

botao.addEventListener("click", () =>{
  if(botao.value == 'primeiro'){
    situacao.innerText = 'Peco Alerta';
    foto.src="./assets/img/pecoalerta.png";
    botao.value = 'segundo';
  }else if(botao.value == 'segundo'){
    situacao.innerText = 'Peco Sono';
    foto.src="./assets/img/pecosono.png";
    botao.value = 'terceiro';
  }else{
    situacao.innerText = 'Peco Azedo';
    foto.src="./assets/img/pecobravo.png";
    botao.value = 'primeiro';
  }
});





   