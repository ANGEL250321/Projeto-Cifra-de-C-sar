var cifra = document.querySelector('#cifra');
var base = document.querySelector('#base');
var crip = document.querySelector('#criptografar');
var descrip = document.querySelector('#descriptografar');
var button = document.querySelector('#confirm');
var  inserir = document.querySelector('#inserir');
var resultado = document.querySelector('resultado');

cifra.addEventListener("click", function (){
    inserir.innerHTML = `<label for="inserir">Adicione o passo:</label>
    <input type="number" id="inserir">`
})

base.addEventListener("click", function (){
    inserir.innerHTML = ``
})
  



