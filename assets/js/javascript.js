// function agregarFruta(){
// 	var fruta = document.getElementById('fruta').value;
// 	document.getElementById('frutaAgregada').innerHTML = fruta;
// }

function agregarFruta(){
  var nuevaFruta = document.getElementById("fruta").value;
  if(nuevaFruta.length > 0){
    if(find_li(nuevaFruta)){
      var li = document.createElement('li');
               li.id = nuevaFruta;
               li.innerHTML = nuevaFruta;
               document.getElementById("frutaAgregada").appendChild(li);
      }
    }
    return false;
  }

function find_li(contenido){
  var frutita = document.getElementById("frutaAgregada").getElementsByTagName("li");
  for (var i = 0; i < frutita.length; i++){
    if(frutita[i].innerHTML == contenido)
     return false;
  }
  return true;
}
