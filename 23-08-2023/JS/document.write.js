document.write("<h1>Hola desde js</h1>")

let add = document.getElementById("addInfo");

add.addEventListener("click",function(){
    alert("<p>soy el parrafo que se agrego desde el document.write</p>")
})