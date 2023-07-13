/*JS Document*/

/*Objetivo: criar interatividade no site*/
/*Declaração das variáveis*/
var j_botao;
var j_botoes;
var n;

/*Entrada de dados*/
j_botoes=document.querySelectorAll('.botao')

for(n=0;n<j_botoes.length;n++){
    j_botao=j_botoes[n]


j_botao.addEventListener('click',clicar)
}

/*Saída de dados*/

function clicar(){
   this.style.background='gray';
}
