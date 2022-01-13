let botao= document.getElementById ("btn");

botao.addEventListener("click",clicar);

function clicar(){
let prompt1= prompt ("Escolha as alternativas A, B OU C");

if((prompt1==="B")||(prompt1==="b")){
alert ("Parabéns! Você acertou a questão");
window.location.href= "mirror_almondegas2.html";


}
else if((prompt1==="A")||(prompt1==="a")||(prompt1==="c")||(prompt1==="C")){
alert ("Você foi mal! Tente de novo.");
window.location.href= "pg_derrota.html";

}
else{
    alert ("Escolha as alternativas A, B OU C");
}
}

