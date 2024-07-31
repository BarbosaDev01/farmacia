function mostrar(){
var preco = document.getElementById('preco').value;
var nome = document.getElementById('nome').value;


var final = parseInt(preco*2); 

document.getElementById(`resultado`).innerHTML = `Promoção de ${nome}  <br> Leve 2 por ${final}! `;

}