const chicken =document.getElementById("chicken")
const flame =document.getElementById("flame")

document.addEventListener("keydown",function (event){
    jump()
});

function jump (){
    if (chicken.classList !=="jump"){
        chicken.classList.add("jump")
    }
setTimeout(function (){
    chicken.classList.remove("jump")
},800)
}

let isAlive = setInterval(function (){
    let chickenTop=parseInt(window.getComputedStyle(chicken).getPropertyValue("top"))
    let flameLeft=parseInt(window.getComputedStyle(flame).getPropertyValue("left"))
    if (flameLeft < 30 && flameLeft >0 && chickenTop >= 125) {
        alert("GAME OVER!")
    }
})
