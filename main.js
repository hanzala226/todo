



function add(){

let input=document.getElementById("inp")

let tex = document.querySelector(".text")
if (input.value=="") {
    alert("Add Task In Input")
    
} else {
    let newele=document.createElement("ul");
    newele.innerHTML='<i class="fa-solid fa-check"></i>'+input.value +'<span><i class="fa-solid fa-trash-can"></i></span>'
    tex.appendChild(newele);
    input.value= "";
    newele.querySelector("span").addEventListener("click" , remove)
    function remove(){
        newele.remove()
    }
}}