alert("teste");
//DECLARANDO VARIÁVEIS
//var texto="L415 + L8172 + 30 HAT C71 + 20 TCT Cr";
//var texto=$(".texto").html();
var und;//ARRAY PÓS SPLIT
var qUnds;//CONTAGEM
var loco = /^L/;//STRING LOCOMOTIVA
var locoNum = /d+/;
//var vagoes;//STRING VAGÕES
$("#linha-23A").on("focusout", {text: "linha-23A" } , getInfo);
$("#linha-22A").on("focusout", {text: "linha-22A" } , getInfo);

//agora posso multiplicar o comando para várias linhas
function getInfo(texto) {



var linha = texto.data.text;
  $("."+linha).html(" ");
  //limpo a linha
var command = $("#"+linha).html();
  //alert(command);
  var t = command.split(" + ");
  qUnds = t.length;
  //alert(qUnds);
  //NESSE EXEMPLO SEPAREI EM DOIS AGORA IDENTIFICAR LOCOMOTIVA E VAGÕES
  $('.saida').html(t[0] +" + "+ t[1]);
  for (var i=0;i<qUnds; i++) {
    //alert(t[i]);
    //aqui irei usar RegExp
    var L = loco.exec(t[i]);
    if(L) {

      //adiciono o desenho da locomotiva ou locomotivas
      $("."+linha).append("<img src='./assets/img/loco.png' width='50px' height='50px' />" + t[i]);
      alert(t[i]);
    } else if (!L) {
      var v = t[i].toString();
      alert(v);
      var r = v.split(" ");
      alert(r[0] +"/"+r[1]+"/"+r[2]);
      $("."+linha).append("<img src='./assets/img/v"+r[1]+".png' width='50px' height='50px' />" + r[0]);
      alert(v+": não é uma locomotiva!");
    }
  }

}//getInfo();
//getInfo(texto);

/*

frutas.forEach(function (item, indice, array) {
  console.log(item, indice);
});
// Maçã 0
// Banana 1

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
*/
