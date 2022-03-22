var commandsicon = document.querySelectorAll('.commands');
console.log(commandsicon)

for (let index = 0; index < commandsicon.length; index++) {
   
    

commandsicon[index].addEventListener("mouseover",changeicon);

function changeicon(event){
   event.target.style.transform = "scale(2)";
}

commandsicon[index].addEventListener("mouseleave",rechangeicon);

function rechangeicon(event){
    event.target.style.transform= "scale(1)";
}

}