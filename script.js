let color=document.querySelector("#color");
let heading=document.querySelector("#heading");
color.addEventListener("change",function(e){
    let value=e.target.value;
    heading.style.color=value;
});