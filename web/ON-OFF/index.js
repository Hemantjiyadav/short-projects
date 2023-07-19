const button = document.querySelector("button");
const img = document.querySelector("img");
// img.src = "onlight.png";
// button.innerText = "OFF";
const back = document.querySelector("body");
// back.style.backgroundColor = "white";

button.addEventListener("click",() => {
    if(button.innerText==='ON'){
    img.src = "./onlight.png";
    button.innerText = "OFF";
    back.style.backgroundColor = "white";
    }
    else{
        img.src = "./offlight.png";
        button.innerText = "ON";
        back.style.backgroundColor = "black";
    }
})