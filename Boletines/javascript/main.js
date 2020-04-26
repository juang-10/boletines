
//DOM
//querySelector solo nos devuelve un elemento, asi que si tratamos de seleccionar
//todos los links unicamente nos devolverá el primero
/*
let links = document.querySelectorAll("a"); // let se utiliza para declarar una variable.
el resultado despues del igual se almacena en la variable

links.forEach(function(link){
  console.log(link);
})
*/
/*
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
  td.addEventListener("click",function(){
    console.log(this);
  })
});
*/

//Obtener los elementosde la clase .close
let links = document.querySelectorAll(".close");
//Recorrerlos
links.forEach(function(link){
  //Agregar un evento click  a cada uno de ellos
  link.addEventListener("click",function(ev){
    ev.preventDefault();
    let content = document.querySelector('.content');
    //Quitarle las clases de animacion que ya tiene
    content.classList.remove("fadeInDown");
    content.classList.remove("animated");
    //Agregar clase para animar su salida fadeOutUp
    content.classList.add("fadeOutUp");
    content.classList.add("animated");

    setTimeout(function(){
       location.href = "/";
    },600);
    //setInterval
    return false;
  });
});
